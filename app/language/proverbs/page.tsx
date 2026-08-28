"use client";

import { useMemo, useState } from "react";

import { kiembuProverbs } from "../../data/kiembu-proverbs";

export default function ProverbsPage() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState<"all" | "kiembu" | "english">(
    "all"
  );

  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProverbs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return kiembuProverbs.filter((proverb) => {
      if (!query) {
        return true;
      }

      const kiembuMatch = proverb.kiembu.toLowerCase().includes(query);

      const englishMatch = proverb.english.toLowerCase().includes(query);

      if (language === "kiembu") {
        return kiembuMatch;
      }

      if (language === "english") {
        return englishMatch;
      }

      return kiembuMatch || englishMatch;
    });
  }, [search, language]);

  const visibleProverbs = filteredProverbs.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
      {/* HERO */}

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
              Indigenous Language Heritage
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Kiembu Proverbs
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
              Explore documented Kiembu proverbs and their English
              translations preserved through the CIS-ETHN language resources.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH */}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-6 lg:p-8">
            <div className="grid gap-5 md:grid-cols-[1fr_220px]">
              <div>
                <label
                  htmlFor="proverb-search"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  Search the proverb collection
                </label>

                <input
                  id="proverb-search"
                  type="text"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setVisibleCount(12);
                  }}
                  placeholder="Search Kiembu or English..."
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 outline-none focus:border-[#a25b28] focus:ring-2 focus:ring-[#a25b28]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="proverb-language"
                  className="mb-2 block text-sm font-semibold text-[#173f2a]"
                >
                  Search in
                </label>

                <select
                  id="proverb-language"
                  value={language}
                  onChange={(event) => {
                    setLanguage(
                      event.target.value as "all" | "kiembu" | "english"
                    );

                    setVisibleCount(12);
                  }}
                  className="w-full rounded-xl border border-[#d5cec0] bg-white px-5 py-4 outline-none focus:border-[#a25b28]"
                >
                  <option value="all">Both languages</option>
                  <option value="kiembu">Kiembu</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[#68736b]">
                Showing{" "}
                <strong className="text-[#173f2a]">
                  {visibleProverbs.length}
                </strong>{" "}
                of{" "}
                <strong className="text-[#173f2a]">
                  {filteredProverbs.length}
                </strong>{" "}
                matching proverbs
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setVisibleCount(12);
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

      {/* PROVERBS */}

      <section className="bg-[#f7f4ed]">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-16">
          {visibleProverbs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {visibleProverbs.map((proverb) => (
                <article
                  key={proverb.id}
                  className="group rounded-3xl border border-[#ded7c9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173f2a] text-sm font-bold text-white">
                      {proverb.id}
                    </span>

                    <span className="rounded-full bg-[#e8e1d3] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#795b25]">
                      Proverb
                    </span>
                  </div>

                  <div className="mt-7">
                    <p className="text-xl font-bold leading-8 text-[#173f2a]">
                      {proverb.kiembu}
                    </p>

                    <div className="my-5 h-px bg-[#e8e1d3]" />

                    <p className="text-base leading-8 text-[#5d685f]">
                      {proverb.english}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#ded7c9] bg-white px-6 py-16 text-center">
              <div className="text-5xl">⌕</div>

              <h2 className="mt-5 text-2xl font-bold text-[#173f2a]">
                No proverbs found
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#68736b]">
                Try another Kiembu or English word or phrase.
              </p>
            </div>
          )}

          {/* LOAD MORE */}

          {visibleCount < filteredProverbs.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((current) => current + 12)}
                className="rounded-full bg-[#173f2a] px-8 py-4 font-semibold text-white transition hover:bg-[#24563b]"
              >
                Load more proverbs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RESEARCH CONTEXT */}

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-24">
          <div className="rounded-3xl border border-[#ded7c9] bg-[#faf8f3] p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              Research Resource
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#173f2a]">
              Preserving indigenous knowledge
            </h2>

            <p className="mt-5 leading-8 text-[#5d685f]">
              Proverbs form an important part of cultural and linguistic
              knowledge. The CIS-ETHN project documented and translated
              Kiembu proverbs as part of its indigenous language resource
              development activities.
            </p>

            <p className="mt-5 leading-8 text-[#5d685f]">
              The collection presented here uses the Kiembu and English
              records supplied for the project. The English text is presented
              as the supplied translation and has not been independently
              rewritten by this interface.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-6">
                <div className="text-3xl font-bold text-[#173f2a]">
                  {kiembuProverbs.length}
                </div>

                <p className="mt-2 text-sm text-[#68736b]">
                  Records currently loaded
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-3xl font-bold text-[#173f2a]">
                  Kiembu
                </div>

                <p className="mt-2 text-sm text-[#68736b]">
                  Indigenous language
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <div className="text-3xl font-bold text-[#173f2a]">
                  English
                </div>

                <p className="mt-2 text-sm text-[#68736b]">
                  Translation language
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}

      <section className="bg-[#173f2a]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-10 lg:px-10">
          <a
            href="/language/dictionary"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            ← Dictionary
          </a>

          <a
            href="/language/translator"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#173f2a]"
          >
            Translator
          </a>

          <a
            href="/language"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Language Centre
          </a>
        </div>
      </section>
    </main>
  );
}