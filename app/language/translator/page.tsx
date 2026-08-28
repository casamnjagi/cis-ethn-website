"use client";

import { useMemo, useState } from "react";

import {
  kiembuDictionary,
  kiembuCorpus,
  type KiembuDictionaryEntry,
  type KiembuCorpusEntry,
} from "../../data/kiembuData";

type SearchResult =
  | {
      type: "corpus";
      entry: KiembuCorpusEntry;
    }
  | {
      type: "dictionary";
      entry: KiembuDictionaryEntry;
    };

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:"“”‘’()[\]{}]/g, "")
    .replace(/\s+/g, " ");
}

function normalizeWord(text: string) {
  return normalizeText(text);
}

function findExactCorpusMatch(
  text: string,
  sourceLanguage: string
): KiembuCorpusEntry | null {
  const normalizedInput = normalizeText(text);

  if (!normalizedInput) {
    return null;
  }

  const result = kiembuCorpus.find((entry) => {
    if (sourceLanguage === "Kiembu") {
      return normalizeText(entry.kiembu) === normalizedInput;
    }

    return normalizeText(entry.english) === normalizedInput;
  });

  return result ?? null;
}

function findDictionaryMatch(
  text: string,
  sourceLanguage: string
): KiembuDictionaryEntry | null {
  const normalizedInput = normalizeWord(text);

  if (!normalizedInput) {
    return null;
  }

  const result = kiembuDictionary.find((entry) => {
    if (sourceLanguage === "Kiembu") {
      return normalizeWord(entry.kiembu) === normalizedInput;
    }

    return normalizeWord(entry.english) === normalizedInput;
  });

  return result ?? null;
}

function findPartialCorpusMatches(
  text: string,
  sourceLanguage: string
): KiembuCorpusEntry[] {
  const normalizedInput = normalizeText(text);

  if (!normalizedInput) {
    return [];
  }

  return kiembuCorpus
    .filter((entry) => {
      if (sourceLanguage === "Kiembu") {
        return (
          normalizeText(entry.kiembu).includes(normalizedInput) ||
          normalizedInput.includes(normalizeText(entry.kiembu))
        );
      }

      return (
        normalizeText(entry.english).includes(normalizedInput) ||
        normalizedInput.includes(normalizeText(entry.english))
      );
    })
    .slice(0, 10);
}

function findWordTranslations(
  text: string,
  sourceLanguage: string
): Array<{
  source: string;
  translation: string;
}> {
  const words = normalizeText(text)
    .split(" ")
    .filter(Boolean);

  const results: Array<{
    source: string;
    translation: string;
  }> = [];

  for (const word of words) {
    const entry = findDictionaryMatch(word, sourceLanguage);

    if (!entry) {
      results.push({
        source: word,
        translation: "No dictionary match",
      });

      continue;
    }

    results.push({
      source: sourceLanguage === "Kiembu" ? entry.kiembu : entry.english,
      translation: sourceLanguage === "Kiembu" ? entry.english : entry.kiembu,
    });
  }

  return results;
}

export default function TranslatorPage() {
  const [sourceLanguage, setSourceLanguage] = useState("Kiembu");
  const [targetLanguage, setTargetLanguage] = useState("English");

  const [inputText, setInputText] = useState("");

  const [translation, setTranslation] = useState("");

  const [resultType, setResultType] = useState<
    "corpus" | "dictionary" | "word" | "none"
  >("none");

  const [matchedEntry, setMatchedEntry] =
    useState<KiembuCorpusEntry | KiembuDictionaryEntry | null>(null);

  const [partialMatches, setPartialMatches] = useState<KiembuCorpusEntry[]>(
    []
  );

  const [wordResults, setWordResults] = useState<
    Array<{
      source: string;
      translation: string;
    }>
  >([]);

  const [message, setMessage] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  function translateText() {
    const text = inputText.trim();

    setMessage("");
    setTranslation("");
    setMatchedEntry(null);
    setPartialMatches([]);
    setWordResults([]);
    setResultType("none");

    if (!text) {
      setMessage("Please enter a Kiembu word, phrase or sentence.");
      return;
    }

    setIsSearching(true);

    /*
     * ------------------------------------------------------------
     * 1. SEARCH EXACT PARALLEL CORPUS MATCH
     * ------------------------------------------------------------
     */

    const corpusMatch = findExactCorpusMatch(text, sourceLanguage);

    if (corpusMatch) {
      setMatchedEntry(corpusMatch);
      setResultType("corpus");

      if (sourceLanguage === "Kiembu") {
        setTranslation(corpusMatch.english);
      } else {
        setTranslation(corpusMatch.kiembu);
      }

      setIsSearching(false);

      return;
    }

    /*
     * ------------------------------------------------------------
     * 2. SEARCH EXACT DICTIONARY MATCH
     * ------------------------------------------------------------
     */

    const dictionaryMatch = findDictionaryMatch(text, sourceLanguage);

    if (dictionaryMatch) {
      setMatchedEntry(dictionaryMatch);
      setResultType("dictionary");

      if (sourceLanguage === "Kiembu") {
        setTranslation(dictionaryMatch.english);
      } else {
        setTranslation(dictionaryMatch.kiembu);
      }

      setIsSearching(false);

      return;
    }

    /*
     * ------------------------------------------------------------
     * 3. SEARCH PARTIAL CORPUS MATCHES
     * ------------------------------------------------------------
     */

    const corpusMatches = findPartialCorpusMatches(
      text,
      sourceLanguage
    );

    if (corpusMatches.length > 0) {
      setPartialMatches(corpusMatches);
      setResultType("none");

      setMessage(
        "No exact translation was found, but related corpus entries were found."
      );

      setIsSearching(false);

      return;
    }

    /*
     * ------------------------------------------------------------
     * 4. WORD-BY-WORD DICTIONARY FALLBACK
     * ------------------------------------------------------------
     */

    const words = findWordTranslations(text, sourceLanguage);

    const hasDictionaryResult = words.some(
      (word) => word.translation !== "No dictionary match"
    );

    if (hasDictionaryResult) {
      setWordResults(words);
      setResultType("word");

      setMessage(
        "No exact phrase was found. The results below are word-level dictionary matches."
      );

      setIsSearching(false);

      return;
    }

    /*
     * ------------------------------------------------------------
     * 5. NO RESULT
     * ------------------------------------------------------------
     */

    setResultType("none");

    setMessage(
      "No matching entry was found in the current Kiembu language resources."
    );

    setIsSearching(false);
  }

  function swapLanguages() {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);

    setInputText("");
    setTranslation("");
    setMatchedEntry(null);
    setPartialMatches([]);
    setWordResults([]);
    setMessage("");
    setResultType("none");
  }

  function clearTranslator() {
    setInputText("");
    setTranslation("");
    setMatchedEntry(null);
    setPartialMatches([]);
    setWordResults([]);
    setMessage("");
    setResultType("none");
  }

  const resultLabel = useMemo(() => {
    if (resultType === "corpus") {
      return "Parallel Corpus Match";
    }

    if (resultType === "dictionary") {
      return "Dictionary Match";
    }

    if (resultType === "word") {
      return "Word-Level Dictionary Match";
    }

    return "";
  }, [resultType]);

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bg-[#173f2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <a
            href="/language"
            className="text-sm font-semibold text-[#d7a44b] hover:underline"
          >
            ← Kiembu Language Centre
          </a>

          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
              CIS-ETHN Language Technology
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Kiembu Translator
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
              Explore Kiembu and English using the project's documented
              lexical resource and parallel language corpus.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRANSLATOR
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-6 shadow-sm lg:p-10">
            {/* LANGUAGE SELECTORS */}

            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
              <div>
                <label
                  htmlFor="source-language"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  From
                </label>

                <select
                  id="source-language"
                  value={sourceLanguage}
                  onChange={(event) => {
                    setSourceLanguage(event.target.value);

                    setTranslation("");
                    setMessage("");
                    setMatchedEntry(null);
                    setPartialMatches([]);
                    setWordResults([]);
                    setResultType("none");
                  }}
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 outline-none focus:border-[#a25b28]"
                >
                  <option value="Kiembu">Kiembu</option>

                  <option value="English">English</option>
                </select>
              </div>

              <button
                type="button"
                onClick={swapLanguages}
                className="rounded-full border border-[#d5cec0] bg-white px-5 py-3 text-sm font-bold text-[#173f2a] transition hover:bg-[#e8e1d3]"
                title="Swap languages"
              >
                ⇄
              </button>

              <div>
                <label
                  htmlFor="target-language"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  To
                </label>

                <select
                  id="target-language"
                  value={targetLanguage}
                  onChange={(event) => {
                    setTargetLanguage(event.target.value);

                    setTranslation("");
                    setMessage("");
                    setMatchedEntry(null);
                    setPartialMatches([]);
                    setWordResults([]);
                    setResultType("none");
                  }}
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 outline-none focus:border-[#a25b28]"
                >
                  <option value="English">English</option>

                  <option value="Kiembu">Kiembu</option>
                </select>
              </div>
            </div>

            {/* INPUT / OUTPUT */}

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="translation-input"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  Enter {sourceLanguage}
                </label>

                <textarea
                  id="translation-input"
                  value={inputText}
                  onChange={(event) => {
                    setInputText(event.target.value);

                    setTranslation("");
                    setMessage("");
                    setMatchedEntry(null);
                    setPartialMatches([]);
                    setWordResults([]);
                    setResultType("none");
                  }}
                  placeholder={`Enter ${sourceLanguage} word, phrase or sentence...`}
                  rows={9}
                  className="w-full resize-none rounded-2xl border border-[#d5cec0] bg-white px-5 py-4 leading-7 outline-none focus:border-[#a25b28] focus:ring-2 focus:ring-[#a25b28]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#173f2a]">
                  Translation
                </label>

                <div className="min-h-[236px] rounded-2xl border border-[#d5cec0] bg-white px-5 py-5">
                  {translation ? (
                    <>
                      {resultLabel && (
                        <div className="mb-4">
                          <span className="rounded-full bg-[#e8e1d3] px-3 py-1 text-xs font-bold text-[#173f2a]">
                            {resultLabel}
                          </span>
                        </div>
                      )}

                      <p className="text-lg font-semibold leading-8 text-[#173f2a]">
                        {translation}
                      </p>
                    </>
                  ) : (
                    <p className="text-[#9aa29c]">
                      Your translation will appear here.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ACTIONS */}

            <div className="mt-7 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={translateText}
                disabled={isSearching}
                className="rounded-full bg-[#173f2a] px-7 py-3.5 font-semibold text-white transition hover:bg-[#24563b] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSearching ? "Searching..." : "Translate"}
              </button>

              <button
                type="button"
                onClick={clearTranslator}
                className="rounded-full border border-[#a25b28] px-7 py-3.5 font-semibold text-[#a25b28] transition hover:bg-[#a25b28] hover:text-white"
              >
                Clear
              </button>
            </div>

            {/* MESSAGE */}

            {message && (
              <div className="mt-6 rounded-2xl border border-[#e4cfae] bg-[#fff8e8] px-5 py-4 text-sm leading-7 text-[#795b25]">
                {message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CORPUS MATCH INFORMATION
      ========================================================= */}

      {resultType === "corpus" &&
        matchedEntry &&
        "verseId" in matchedEntry && (
          <section className="bg-[#f7f4ed]">
            <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
              <div className="rounded-3xl border border-[#ded7c9] bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a25b28]">
                  Parallel Corpus Source
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#173f2a]">
                  {matchedEntry.verseId}
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7a847d]">
                      Kiembu
                    </div>

                    <p className="mt-3 leading-8 text-[#56635b]">
                      {matchedEntry.kiembu}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7a847d]">
                      English
                    </div>

                    <p className="mt-3 leading-8 text-[#56635b]">
                      {matchedEntry.english}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* =========================================================
          WORD LEVEL RESULTS
      ========================================================= */}

      {resultType === "word" && wordResults.length > 0 && (
        <section className="bg-[#f7f4ed]">
          <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
            <div className="rounded-3xl border border-[#ded7c9] bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a25b28]">
                Dictionary Analysis
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#173f2a]">
                Word-level results
              </h2>

              <div className="mt-7 overflow-hidden rounded-2xl border border-[#e3ddcf]">
                <div className="grid grid-cols-2 bg-[#e8e1d3] px-5 py-4 text-sm font-bold text-[#173f2a]">
                  <div>{sourceLanguage}</div>

                  <div>{targetLanguage}</div>
                </div>

                {wordResults.map((word, index) => (
                  <div
                    key={`${word.source}-${index}`}
                    className="grid grid-cols-2 border-t border-[#eee8dc] px-5 py-4 text-sm"
                  >
                    <div className="font-semibold text-[#173f2a]">
                      {word.source}
                    </div>

                    <div className="text-[#68736b]">
                      {word.translation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          RELATED CORPUS RESULTS
      ========================================================= */}

      {partialMatches.length > 0 && (
        <section className="bg-[#f7f4ed]">
          <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a25b28]">
                Related Corpus Entries
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f2a]">
                Possible related matches
              </h2>
            </div>

            <div className="space-y-5">
              {partialMatches.map((entry) => (
                <article
                  key={entry.verseId}
                  className="rounded-3xl border border-[#ded7c9] bg-white p-7"
                >
                  <div className="text-sm font-bold text-[#a25b28]">
                    {entry.verseId}
                  </div>

                  <div className="mt-5 grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7a847d]">
                        Kiembu
                      </div>

                      <p className="mt-2 leading-7 text-[#56635b]">
                        {entry.kiembu}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7a847d]">
                        English
                      </div>

                      <p className="mt-2 leading-7 text-[#56635b]">
                        {entry.english}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          RESOURCE STATISTICS
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-[#173f2a] p-8 text-white">
              <div className="text-4xl font-bold">
                {kiembuDictionary.length.toLocaleString()}
              </div>

              <div className="mt-3 text-[#d6e2d9]">
                Dictionary records currently loaded
              </div>
            </div>

            <div className="rounded-3xl bg-[#a25b28] p-8 text-white">
              <div className="text-4xl font-bold">
                {kiembuCorpus.length.toLocaleString()}
              </div>

              <div className="mt-3 text-[#f7e4d2]">
                Parallel corpus records currently loaded
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH NOTICE
      ========================================================= */}

      <section className="bg-[#e8e1d3]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <div className="rounded-3xl border border-[#d6cbb9] bg-white p-7">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#a25b28]">
              Research Data Notice
            </p>

            <h2 className="mt-4 text-2xl font-bold text-[#173f2a]">
              About the translation resource
            </h2>

            <p className="mt-4 leading-8 text-[#657068]">
              This translator searches locally stored language resources
              supplied for the CIS-ETHN project. Exact matches are searched
              against the Kiembu-English parallel corpus first, followed by
              the lexical dictionary. Where an exact sentence is unavailable,
              the system may provide related corpus results or word-level
              dictionary matches.
            </p>

            <p className="mt-4 leading-8 text-[#657068]">
              The system does not claim that word-by-word dictionary lookup
              provides a complete grammatical translation of an arbitrary
              sentence. Results should therefore be interpreted according to
              the type of match reported by the interface.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <section className="bg-[#173f2a]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-10 lg:px-10">
          <a
            href="/language/dictionary"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#173f2a]"
          >
            ← Dictionary
          </a>

          <a
            href="/language"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Language Centre
          </a>

          <a
            href="/language/proverbs"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Proverbs →
          </a>
        </div>
      </section>
    </main>
  );
}