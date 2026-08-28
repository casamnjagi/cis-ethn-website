"use client";

import { useMemo, useState } from "react";

type DictionaryEntry = {
  kiembu: string;
  english: string;
  category: string;
  example: string;
};

const dictionaryEntries: DictionaryEntry[] = [
  {
    kiembu: "Example 01",
    english: "Example meaning",
    category: "Language",
    example:
      "This is a temporary demonstration record. It will be replaced with an approved project lexical entry.",
  },
  {
    kiembu: "Example 02",
    english: "Another example",
    category: "Culture",
    example:
      "This temporary record demonstrates how a dictionary entry will appear.",
  },
  {
    kiembu: "Example 03",
    english: "Sample word",
    category: "Community",
    example:
      "The final website will use validated lexical information from the project dataset.",
  },
];

const categories = [
  "All",
  "Language",
  "Culture",
  "Community",
];

export default function DictionaryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEntries = useMemo(() => {
    const query = search.toLowerCase().trim();

    return dictionaryEntries.filter((entry) => {
      const matchesSearch =
        query === "" ||
        entry.kiembu.toLowerCase().includes(query) ||
        entry.english.toLowerCase().includes(query) ||
        entry.example.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || entry.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

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
              Language Resource
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Kiembu Dictionary
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
              Search and explore the lexical resources developed through the
              CIS-ETHN project.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEARCH
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-6 lg:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_220px]">
              <div>
                <label
                  htmlFor="dictionary-search"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  Search the dictionary
                </label>

                <input
                  id="dictionary-search"
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search Kiembu or English..."
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 text-[#17251d] outline-none transition focus:border-[#a25b28] focus:ring-2 focus:ring-[#a25b28]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="dictionary-category"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  Category
                </label>

                <select
                  id="dictionary-category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 text-[#17251d] outline-none focus:border-[#a25b28]"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[#68736b]">
                Showing{" "}
                <strong className="text-[#173f2a]">
                  {filteredEntries.length}
                </strong>{" "}
                result
                {filteredEntries.length === 1 ? "" : "s"}
              </p>

              {(search || category !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="text-sm font-semibold text-[#a25b28] hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESULTS
      ========================================================= */}
      <section className="bg-[#f7f4ed]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEntries.map((entry) => (
              <article
                key={entry.kiembu}
                className="rounded-3xl border border-[#ded7c9] bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#e8e1d3] px-3 py-1 text-xs font-semibold text-[#173f2a]">
                    {entry.category}
                  </span>
                </div>

                <h2 className="mt-7 text-3xl font-bold text-[#173f2a]">
                  {entry.kiembu}
                </h2>

                <div className="mt-2 text-lg font-semibold text-[#a25b28]">
                  {entry.english}
                </div>

                <div className="mt-6 border-t border-[#eee8dc] pt-5">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#7a847d]">
                    Example / Context
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#657068]">
                    {entry.example}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* =====================================================
              NO RESULTS
          ===================================================== */}
          {filteredEntries.length === 0 && (
            <div className="rounded-3xl border border-[#ded7c9] bg-white px-6 py-16 text-center">
              <div className="text-5xl">⌕</div>

              <h2 className="mt-5 text-2xl font-bold text-[#173f2a]">
                No dictionary entries found
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#68736b]">
                Try another Kiembu or English search term, or clear the
                filters and search again.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          DATA NOTICE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
            Research Data
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#173f2a]">
            Building the validated Kiembu lexical resource
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#5d685f]">
            The project developed a validated lexical resource containing
            documented Kiembu language entries. The public website will use
            approved records from the project dataset rather than invented or
            automatically generated translations.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-[#f7f4ed] px-6 py-3 text-sm font-semibold text-[#173f2a]">
            Project lexical resource: 1,687 validated entries
          </div>
        </div>
      </section>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
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
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Kiembu Translator →
          </a>
        </div>
      </section>
    </main>
  );
}