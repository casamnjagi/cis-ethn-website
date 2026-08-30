// app/utils/kiembuSearch.ts

import { kiembuDictionary } from "../data/kiembuData";

import { kiembuDocumentDictionary } from "../data/kiembuDocumentDictionary";

import {
  kiembuKnowledgeAll,
  type KiembuKnowledgeAllEntry,
} from "../data/kiembuKnowledgeAll";

// ============================================================
// TYPES
// ============================================================

export type KiembuAnswerResult = {
  answer: string;
  source?: string;
  category?: string;
};

// ============================================================
// NORMALIZE KIEMBU / ENGLISH
// ============================================================

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFC")
    .replace(/ĩ/g, "i")
    .replace(/ũ/g, "u")
    .replace(/ī/g, "i")
    .replace(/ū/g, "u")
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// ============================================================
// TOKENIZE
// ============================================================

function getWords(text: string): string[] {
  return normalizeText(text)
    .split(/[^a-z0-9']+/)
    .filter((word) => word.length >= 2);
}

// ============================================================
// REMOVE COMMON QUESTION WORDS
// ============================================================

function removeQuestionWords(text: string): string {
  const stopWords = new Set([
    "what",
    "what's",
    "is",
    "are",
    "was",
    "were",
    "who",
    "where",
    "when",
    "why",
    "how",
    "which",
    "tell",
    "me",
    "about",
    "explain",
    "define",
    "meaning",
    "means",
    "does",
    "do",
    "the",
    "a",
    "an",
    "of",
    "in",
    "on",
    "to",
    "for",
    "and",
    "please",
    "kiembu",
    "kimbeere",
    "embu",
  ]);

  return getWords(text)
    .filter((word) => !stopWords.has(word))
    .join(" ");
}

// ============================================================
// COMBINED DICTIONARY
// ============================================================

const combinedDictionary = [
  ...kiembuDictionary,
  ...kiembuDocumentDictionary,
];

// ============================================================
// DICTIONARY SEARCH
// ============================================================

function findDictionaryMatch(
  question: string
): { english: string; kiembu: string } | null {
  const normalizedQuestion = normalizeText(question);
  const cleanedQuestion = removeQuestionWords(question);

  // ----------------------------------------------------------
  // Exact English / Kiembu phrase
  // ----------------------------------------------------------

  const exact = combinedDictionary.find((entry) => {
    const english = normalizeText(entry.english);
    const kiembu = normalizeText(entry.kiembu);

    return (
      english === normalizedQuestion ||
      kiembu === normalizedQuestion ||
      english === cleanedQuestion ||
      kiembu === cleanedQuestion
    );
  });

  if (exact) {
    return exact;
  }

  // ----------------------------------------------------------
  // Look for exact phrase inside question
  // ----------------------------------------------------------

  const phraseMatch = combinedDictionary.find((entry) => {
    const english = normalizeText(entry.english);
    const kiembu = normalizeText(entry.kiembu);

    return (
      (english.length > 2 &&
        normalizedQuestion.includes(english)) ||
      (kiembu.length > 2 &&
        normalizedQuestion.includes(kiembu))
    );
  });

  if (phraseMatch) {
    return phraseMatch;
  }

  // ----------------------------------------------------------
  // Single word match
  // ----------------------------------------------------------

  const words = getWords(cleanedQuestion);

  for (const word of words) {
    const match = combinedDictionary.find((entry) => {
      return (
        normalizeText(entry.english) === word ||
        normalizeText(entry.kiembu) === word
      );
    });

    if (match) {
      return match;
    }
  }

  return null;
}

// ============================================================
// SCORE KNOWLEDGE ENTRY
// ============================================================

function scoreKnowledgeEntry(
  question: string,
  entry: KiembuKnowledgeAllEntry
): number {
  const normalizedQuestion = normalizeText(question);
  const cleanedQuestion = removeQuestionWords(question);

  const questionWords = getWords(cleanedQuestion);

  if (questionWords.length === 0) {
    return 0;
  }

  const title = normalizeText(entry.title);
  const content = normalizeText(entry.content);

  const keywords = entry.keywords.map(normalizeText);

  let score = 0;

  // ----------------------------------------------------------
  // EXACT TITLE
  // ----------------------------------------------------------

  if (title === cleanedQuestion) {
    score += 150;
  }

  // ----------------------------------------------------------
  // TITLE PHRASE
  // ----------------------------------------------------------

  if (
    cleanedQuestion.length > 2 &&
    title.includes(cleanedQuestion)
  ) {
    score += 90;
  }

  // ----------------------------------------------------------
  // KEYWORDS
  // ----------------------------------------------------------

  for (const keyword of keywords) {
    if (!keyword) {
      continue;
    }

    if (normalizedQuestion.includes(keyword)) {
      score += 45;
    }

    if (cleanedQuestion === keyword) {
      score += 100;
    }

    for (const word of questionWords) {
      if (word.length < 3) {
        continue;
      }

      if (keyword === word) {
        score += 25;
      } else if (keyword.includes(word)) {
        score += 12;
      }
    }
  }

  // ----------------------------------------------------------
  // CONTENT
  // ----------------------------------------------------------

  let contentMatches = 0;

  for (const word of questionWords) {
    if (word.length < 3) {
      continue;
    }

    if (content.includes(word)) {
      contentMatches++;
      score += 3;
    }
  }

  // Reward entries matching several words
  if (contentMatches >= 2) {
    score += contentMatches * 4;
  }

  // ----------------------------------------------------------
  // CATEGORY
  // ----------------------------------------------------------

  const category = normalizeText(entry.category);

  for (const word of questionWords) {
    if (category.includes(word)) {
      score += 8;
    }
  }

  return score;
}

// ============================================================
// FIND BEST KNOWLEDGE ENTRIES
// ============================================================

function findBestKnowledgeEntries(
  question: string,
  limit = 3
): Array<{
  entry: KiembuKnowledgeAllEntry;
  score: number;
}> {
  return kiembuKnowledgeAll
    .map((entry) => ({
      entry,
      score: scoreKnowledgeEntry(question, entry),
    }))
    .filter((item) => item.score >= 10)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// ============================================================
// SPECIAL FOOD DETECTION
// ============================================================

function isFoodQuestion(question: string): boolean {
  const text = normalizeText(question);

  return (
    text.includes("food") ||
    text.includes("githeri") ||
    text.includes("vegetable") ||
    text.includes("vegetables") ||
    text.includes("eat") ||
    text.includes("cooking") ||
    text.includes("cook") ||
    text.includes("meal") ||
    text.includes("meals") ||
    text.includes("traditional dish") ||
    text.includes("traditional dishes")
  );
}

// ============================================================
// SPECIAL LANGUAGE DETECTION
// ============================================================

function isLanguageQuestion(question: string): boolean {
  const text = normalizeText(question);

  return (
    text.includes("word") ||
    text.includes("translate") ||
    text.includes("translation") ||
    text.includes("meaning") ||
    text.includes("say in kiembu") ||
    text.includes("kiembu word") ||
    text.includes("kimbeere word")
  );
}

// ============================================================
// GET SOURCE SAFELY
// ============================================================

function getEntrySource(
  entry: KiembuKnowledgeAllEntry
): string {
  if (
    "source" in entry &&
    typeof entry.source === "string" &&
    entry.source.trim()
  ) {
    return entry.source;
  }

  return "CIS-ETHN Kiembu Cultural Knowledge Base";
}

// ============================================================
// FORMAT KNOWLEDGE RESPONSE
// ============================================================

function formatKnowledgeResponse(
  results: Array<{
    entry: KiembuKnowledgeAllEntry;
    score: number;
  }>
): KiembuAnswerResult {
  if (results.length === 0) {
    return {
      answer:
        "I could not find enough information in the CIS-ETHN Kiembu knowledge base to answer that question accurately. Try asking about a specific Kiembu word, tradition, ceremony, food, story, song, dance, place, livelihood, artefact, environmental practice or other cultural topic.",
      source: "CIS-ETHN Kiembu Knowledge Base",
    };
  }

  const best = results[0].entry;

  // ----------------------------------------------------------
  // VERY STRONG MATCH
  // ----------------------------------------------------------

  if (results[0].score >= 100) {
    return {
      answer: best.content,
      source: getEntrySource(best),
      category: best.category,
    };
  }

  // ----------------------------------------------------------
  // COMBINE CLOSELY RELATED RESULTS
  // ----------------------------------------------------------

  const selected = results
    .filter((result, index) => {
      if (index === 0) {
        return true;
      }

      return result.score >= results[0].score * 0.55;
    })
    .slice(0, 3);

  const answer = selected
    .map((result) => result.entry.content)
    .join("\n\n");

  return {
    answer,
    source: getEntrySource(best),
    category: best.category,
  };
}

// ============================================================
// MAIN ANSWER FUNCTION
// ============================================================

export function answerKiembuQuestion(
  question: string
): KiembuAnswerResult {
  const originalQuestion = question.trim();

  // ==========================================================
  // EMPTY QUESTION
  // ==========================================================

  if (!originalQuestion) {
    return {
      answer:
        "Please ask a question about Kiembu language or culture.",
    };
  }

  // ==========================================================
  // 1. DICTIONARY
  // ==========================================================

  const dictionaryMatch =
    findDictionaryMatch(originalQuestion);

  if (dictionaryMatch) {
    return {
      answer: `${dictionaryMatch.english} in Kiembu is **${dictionaryMatch.kiembu}**.`,
      source: "CIS-ETHN Kiembu Dictionary",
      category: "Language",
    };
  }

  // ==========================================================
  // 2. KNOWLEDGE SEARCH
  // ==========================================================

  const results = findBestKnowledgeEntries(
    originalQuestion,
    5
  );

  // ==========================================================
  // 3. FOOD QUESTIONS
  // ==========================================================

  if (isFoodQuestion(originalQuestion)) {
    const foodResults = results.filter((result) =>
      normalizeText(result.entry.category).includes("food")
    );

    if (foodResults.length > 0) {
      return formatKnowledgeResponse(foodResults);
    }
  }

  // ==========================================================
  // 4. LANGUAGE QUESTIONS
  // ==========================================================

  if (isLanguageQuestion(originalQuestion)) {
    const languageResults = results.filter((result) => {
      const category = normalizeText(
        result.entry.category
      );

      return (
        category.includes("language") ||
        category.includes("oral") ||
        category.includes("naming")
      );
    });

    if (languageResults.length > 0) {
      return formatKnowledgeResponse(languageResults);
    }
  }

  // ==========================================================
  // 5. GENERAL KNOWLEDGE
  // ==========================================================

  if (results.length > 0) {
    return formatKnowledgeResponse(results);
  }

  // ==========================================================
  // 6. NOT FOUND
  // ==========================================================

  return {
    answer:
      "I could not find enough information in the CIS-ETHN Kiembu knowledge base to answer that question accurately. Try asking about a specific Kiembu word, tradition, ceremony, food, story, song, dance, family practice, place, livelihood, artefact or environmental practice.",
    source: "CIS-ETHN Kiembu Knowledge Base",
  };
}
