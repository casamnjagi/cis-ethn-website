// app/utils/kiembuSearch.ts

import { kiembuDictionary } from "../data/kiembuData";

import {
  kiembuKnowledge,
  kiembuCategoryNames,
  type KiembuKnowledgeEntry,
} from "../data/kiembuKnowledge";

// ============================================================
// TYPES
// ============================================================

export type KiembuAnswerResult = {
  answer: string;
  source?: string;
  category?: string;
};

// ============================================================
// NORMALIZE TEXT
// ============================================================

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ============================================================
// REMOVE QUESTION WORDS
// ============================================================

function removeQuestionWords(text: string): string {
  return text
    .replace(/\bwhat is\b/g, "")
    .replace(/\bwhat are\b/g, "")
    .replace(/\bwho is\b/g, "")
    .replace(/\bwho are\b/g, "")
    .replace(/\btell me about\b/g, "")
    .replace(/\bexplain\b/g, "")
    .replace(/\bdefine\b/g, "")
    .replace(/\bmeaning of\b/g, "")
    .replace(/\bmeaning\b/g, "")
    .replace(/\bkiembu\b/g, "")
    .replace(/\bplease\b/g, "")
    .replace(/\bthe\b/g, "")
    .replace(/\ba\b/g, "")
    .replace(/\ban\b/g, "")
    .replace(/\bin\b/g, "")
    .replace(/\bof\b/g, "")
    .replace(/\bis\b/g, "")
    .replace(/\bare\b/g, "")
    .replace(/\bdoes\b/g, "")
    .replace(/\bdo\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ============================================================
// GET WORDS
// ============================================================

function getWords(text: string): string[] {
  return normalizeText(text)
    .split(" ")
    .map((word) => word.trim())
    .filter(Boolean);
}

// ============================================================
// FIND EXACT DICTIONARY MATCH
// ============================================================

function findDictionaryMatch(
  question: string
): { english: string; kiembu: string } | null {
  const normalizedQuestion = normalizeText(question);
  const cleanedQuestion = removeQuestionWords(normalizedQuestion);

  // Exact phrase match first
  const exact = kiembuDictionary.find(
    (entry) =>
      normalizeText(entry.english) === cleanedQuestion ||
      normalizeText(entry.kiembu) === cleanedQuestion
  );

  if (exact) {
    return exact;
  }

  // Look for a single meaningful word
  const words = getWords(cleanedQuestion);

  for (const word of words) {
    const match = kiembuDictionary.find(
      (entry) =>
        normalizeText(entry.english) === word ||
        normalizeText(entry.kiembu) === word
    );

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
  entry: KiembuKnowledgeEntry
): number {
  const normalizedQuestion = normalizeText(question);
  const cleanedQuestion = removeQuestionWords(normalizedQuestion);

  const questionWords = getWords(cleanedQuestion);

  let score = 0;

  // Title
  const title = normalizeText(entry.title);

  if (title === cleanedQuestion) {
    score += 100;
  }

  if (title.includes(cleanedQuestion) && cleanedQuestion.length > 2) {
    score += 60;
  }

  // Keywords
  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalizeText(keyword);

    if (normalizedQuestion.includes(normalizedKeyword)) {
      score += 35;
    }

    if (cleanedQuestion === normalizedKeyword) {
      score += 80;
    }

    for (const word of questionWords) {
      if (
        word.length > 2 &&
        normalizedKeyword.includes(word)
      ) {
        score += 10;
      }
    }
  }

  // Content
  const content = normalizeText(entry.content);

  for (const word of questionWords) {
    if (word.length > 2 && content.includes(word)) {
      score += 2;
    }
  }

  return score;
}

// ============================================================
// FIND BEST KNOWLEDGE ENTRY
// ============================================================

function findBestKnowledgeEntry(
  question: string
): KiembuKnowledgeEntry | null {
  const ranked = kiembuKnowledge
    .map((entry) => ({
      entry,
      score: scoreKnowledgeEntry(question, entry),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    return null;
  }

  return ranked[0].entry;
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
    text.includes("meal") ||
    text.includes("meals")
  );
}

// ============================================================
// SPECIAL HOUSE DETECTION
// ============================================================

function isHouseQuestion(question: string): boolean {
  const text = normalizeText(question);

  return (
    text === "house" ||
    text === "home" ||
    text.includes("traditional house") ||
    text.includes("traditional home") ||
    text.includes("kiembu house") ||
    text.includes("embu house")
  );
}

// ============================================================
// MAIN ANSWER FUNCTION
// ============================================================

export function answerKiembuQuestion(
  question: string
): KiembuAnswerResult {
  const originalQuestion = question.trim();

  if (!originalQuestion) {
    return {
      answer: "Please ask a question about Kiembu language or culture.",
    };
  }

  // ----------------------------------------------------------
  // 1. DICTIONARY
  // ----------------------------------------------------------

  const dictionaryMatch = findDictionaryMatch(originalQuestion);

  if (dictionaryMatch) {
    return {
      answer: `${dictionaryMatch.english} in Kiembu is **${dictionaryMatch.kiembu}**.`,
      source: "Kiembu Dictionary",
      category: "Language",
    };
  }

  // ----------------------------------------------------------
  // 2. FOOD
  // ----------------------------------------------------------

  if (isFoodQuestion(originalQuestion)) {
    const foodEntries = kiembuKnowledge.filter(
      (entry) =>
        entry.category === "foods_preparation_preservation"
    );

    if (foodEntries.length > 0) {
      const answer = foodEntries
        .slice(0, 2)
        .map((entry) => entry.content)
        .join("\n\n");

      return {
        answer,
        source: "Kiembu Cultural Knowledge",
        category: kiembuCategoryNames.foods_preparation_preservation,
      };
    }
  }

  // ----------------------------------------------------------
  // 3. HOUSE / HOME
  // ----------------------------------------------------------

  if (isHouseQuestion(originalQuestion)) {
    const houseEntry = kiembuKnowledge.find((entry) =>
      entry.keywords.some((keyword) => {
        const normalizedKeyword = normalizeText(keyword);

        return (
          normalizedKeyword === "house" ||
          normalizedKeyword === "home" ||
          normalizedKeyword === "house construction"
        );
      })
    );

    if (houseEntry) {
      return {
        answer: houseEntry.content,
        source: "Kiembu Cultural Knowledge",
        category: kiembuCategoryNames[houseEntry.category],
      };
    }

    return {
      answer:
        "The current Kiembu cultural knowledge collection does not yet contain enough dedicated information about traditional Kiembu houses. More research data can be added to the knowledge base.",
      source: "Kiembu Cultural Knowledge",
      category: "Material Culture",
    };
  }

  // ----------------------------------------------------------
  // 4. CULTURAL KNOWLEDGE
  // ----------------------------------------------------------

  const bestEntry = findBestKnowledgeEntry(originalQuestion);

  if (bestEntry) {
    return {
      answer: bestEntry.content,
      source: "Kiembu Cultural Knowledge",
      category: kiembuCategoryNames[bestEntry.category],
    };
  }

  // ----------------------------------------------------------
  // 5. NOT FOUND
  // ----------------------------------------------------------

  return {
    answer:
      "I could not find enough information in the current Kiembu cultural knowledge collection to answer that question accurately. Try using different words or ask about a specific Kiembu cultural topic.",
  };
}