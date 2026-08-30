"use client";

import { useMemo, useState } from "react";

import {
  type KiembuDictionaryEntry,
} from "../../data/kiembuData";

import { kiembuDocumentDictionary } from "../../data/kiembuDocumentDictionary";

/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:"“”‘’()[\]{}]/g, "")
    .replace(/\s+/g, " ");
}

/* =========================================================
   COMBINE AND CLEAN DICTIONARY
========================================================= */

/*
 * The public dictionary uses the project's
 * kiembuDocumentDictionary as its main lexical resource.
 *
 * Exact duplicate Kiembu-English pairs are removed.
 */

const dictionaryEntries: KiembuDictionaryEntry[] = Array.from(
  new Map(
    kiembuDocumentDictionary.map((entry) => [
      `${normalizeText(entry.kiembu)}|||${normalizeText(
        entry.english
      )}`,
      entry,
    ])
  ).values()
);

/* =========================================================
   GROUP ENTRIES
========================================================= */

/*
 * Some Kiembu words may have more than one English meaning.
 *
 * Some English words may also have more than one Kiembu
 * equivalent.
 *
 * These helper functions allow the dictionary page to
 * display all available meanings without deleting valid
 * variants.
 */

function getEnglishMeanings(
  kiembu: string
): string[] {
  return Array.from(
    new Set(
      dictionaryEntries
        .filter(
          (entry) =>
            normalizeText(entry.kiembu) ===
            normalizeText(kiembu)
        )
        .map((entry) => entry.english.trim())
        .filter(Boolean)
    )
  );
}

function getKiembuEquivalents(
  english: string
): string[] {
  return Array.from(
    new Set(
      dictionaryEntries
        .filter(
          (entry) =>
            normalizeText(entry.english) ===
            normalizeText(english)
        )
        .map((entry) => entry.kiembu.trim())
        .filter(Boolean)
    )
  );
}

/* =========================================================
   DICTIONARY PAGE
========================================================= */

export default function DictionaryPage() {
  const [search, setSearch] = useState("");

  /* =======================================================
     FILTER DICTIONARY
  ======================================================= */

  const filteredEntries = useMemo(() => {
    const query = normalizeText(search);

    if (!query) {
      return dictionaryEntries;
    }

    return dictionaryEntries.filter(
      (entry) =>
        normalizeText(entry.kiembu).includes(query) ||
        normalizeText(entry.english).includes(query)
    );
  }, [search]);

  /* =======================================================
     UNIQUE WORD COUNTS
  ======================================================= */

  const uniqueKiembuWords = useMemo(() => {
    return new Set(
      dictionaryEntries.map((entry) =>
        normalizeText(entry.kiembu)
      )
    ).size;
  }, []);

  const uniqueEnglishWords = useMemo(() => {
    return new Set(
      dictionaryEntries.map((entry) =>
        normalizeText(entry.english)
      )
    ).size;
  }, []);

  /* =======================================================
     CLEAR SEARCH
  ======================================================= */

  function clearSearch() {
    setSearch("");
  }

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">

      {/* =====================================================
          HERO
      ===================================================== */}

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
              Language Resource
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Kiembu Dictionary
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
              Search and explore the documented Kiembu lexical
              resource developed through the CIS-ETHN project.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          DICTIONARY STATISTICS
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

          <div className="grid gap-5 md:grid-cols-3">

            {/* TOTAL RECORDS */}

            <div className="rounded-3xl bg-[#173f2a] p-7 text-white">

              <div className="text-4xl font-bold">
                {dictionaryEntries.length.toLocaleString()}
              </div>

              <div className="mt-2 text-sm text-[#d6e2d9]">
                Dictionary records
              </div>

            </div>

            {/* KIEMBU WORDS */}

            <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-7">

              <div className="text-4xl font-bold text-[#173f2a]">
                {uniqueKiembuWords.toLocaleString()}
              </div>

              <div className="mt-2 text-sm text-[#68736b]">
                Unique Kiembu terms
              </div>

            </div>

            {/* ENGLISH TERMS */}

            <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-7">

              <div className="text-4xl font-bold text-[#a25b28]">
                {uniqueEnglishWords.toLocaleString()}
              </div>

              <div className="mt-2 text-sm text-[#68736b]">
                Unique English meanings
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">

          <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-6 lg:p-8">

            <label
              htmlFor="dictionary-search"
              className="mb-2 block text-sm font-semibold text-[#173f2a]"
            >
              Search the dictionary
            </label>

            <div className="flex flex-col gap-4 md:flex-row">

              <div className="flex-1">

                <input
                  id="dictionary-search"
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search Kiembu or English..."
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 text-[#17251d] outline-none transition focus:border-[#a25b28] focus:ring-2 focus:ring-[#a25b28]/20"
                />

              </div>

              {search && (

                <button
                  type="button"
                  onClick={clearSearch}
                  className="rounded-xl border border-[#a25b28] px-6 py-4 font-semibold text-[#a25b28] transition hover:bg-[#a25b28] hover:text-white"
                >
                  Clear Search
                </button>

              )}

            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

              <p className="text-sm text-[#68736b]">

                Showing{" "}

                <strong className="text-[#173f2a]">
                  {filteredEntries.length.toLocaleString()}
                </strong>{" "}

                result
                {filteredEntries.length === 1
                  ? ""
                  : "s"}

              </p>

              {search && (

                <p className="text-sm text-[#68736b]">

                  Search:
                  <strong className="ml-1 text-[#173f2a]">
                    "{search}"
                  </strong>

                </p>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="bg-[#f7f4ed]">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">

          {filteredEntries.length > 0 ? (

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredEntries.map(
                (entry, index) => {

                  const englishMeanings =
                    getEnglishMeanings(
                      entry.kiembu
                    );

                  const kiembuEquivalents =
                    getKiembuEquivalents(
                      entry.english
                    );

                  return (

                    <article
                      key={`${entry.kiembu}-${entry.english}-${index}`}
                      className="rounded-3xl border border-[#ded7c9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >

                      {/* RESOURCE LABEL */}

                      <div className="flex items-start justify-between gap-4">

                        <span className="rounded-full bg-[#e8e1d3] px-3 py-1 text-xs font-semibold text-[#173f2a]">
                          Lexical Entry
                        </span>

                      </div>

                      {/* KIEMBU */}

                      <h2 className="mt-7 break-words text-3xl font-bold text-[#173f2a]">
                        {entry.kiembu}
                      </h2>

                      {/* ENGLISH */}

                      <div className="mt-3">

                        <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#7a847d]">
                          English
                        </div>

                        <div className="mt-2 text-lg font-semibold text-[#a25b28]">
                          {entry.english}
                        </div>

                      </div>

                      {/* ADDITIONAL MEANINGS */}

                      {englishMeanings.length > 1 && (

                        <div className="mt-5 border-t border-[#eee8dc] pt-5">

                          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#7a847d]">
                            Other documented meanings
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">

                            {englishMeanings
                              .filter(
                                (meaning) =>
                                  normalizeText(
                                    meaning
                                  ) !==
                                  normalizeText(
                                    entry.english
                                  )
                              )
                              .map(
                                (meaning) => (

                                  <span
                                    key={meaning}
                                    className="rounded-full bg-[#f7f4ed] px-3 py-1.5 text-sm text-[#56635b]"
                                  >
                                    {meaning}
                                  </span>

                                )
                              )}

                          </div>

                        </div>

                      )}

                      {/* OTHER KIEMBU EQUIVALENTS */}

                      {kiembuEquivalents.length > 1 && (

                        <div className="mt-5 border-t border-[#eee8dc] pt-5">

                          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#7a847d]">
                            Other Kiembu equivalents
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">

                            {kiembuEquivalents
                              .filter(
                                (word) =>
                                  normalizeText(
                                    word
                                  ) !==
                                  normalizeText(
                                    entry.kiembu
                                  )
                              )
                              .map(
                                (word) => (

                                  <span
                                    key={word}
                                    className="rounded-full bg-[#f7f4ed] px-3 py-1.5 text-sm text-[#56635b]"
                                  >
                                    {word}
                                  </span>

                                )
                              )}

                          </div>

                        </div>

                      )}

                    </article>

                  );

                }
              )}

            </div>

          ) : (

            /* =================================================
               NO RESULTS
            ================================================= */

            <div className="rounded-3xl border border-[#ded7c9] bg-white px-6 py-16 text-center">

              <div className="text-5xl">
                ⌕
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#173f2a]">
                No dictionary entries found
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#68736b]">
                No documented Kiembu or English entry matched
                your search. Try another word or clear the search
                field and browse the complete lexical resource.
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="mt-6 rounded-full bg-[#173f2a] px-6 py-3 font-semibold text-white transition hover:bg-[#24563b]"
              >
                View All Entries
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          DATA NOTICE
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
            Research Data
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#173f2a]">
            Documented Kiembu lexical resource
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#5d685f]">
            This dictionary presents documented Kiembu-English
            lexical entries supplied through the CIS-ETHN language
            research resources. The website displays the records
            contained in the project's local lexical dataset and
            does not generate or invent translations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <div className="rounded-full bg-[#f7f4ed] px-6 py-3 text-sm font-semibold text-[#173f2a]">
              {dictionaryEntries.length.toLocaleString()} dictionary records
            </div>

            <div className="rounded-full bg-[#f7f4ed] px-6 py-3 text-sm font-semibold text-[#173f2a]">
              Kiembu ↔ English
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <section className="bg-[#173f2a]">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-10 lg:px-10">

          <a
            href="/language"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#173f2a]"
          >
            ← Language Centre
          </a>

          <a
            href="/language/translator"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Kiembu Translator →
          </a>

        </div>

      </section>

    </main>
  );
}

