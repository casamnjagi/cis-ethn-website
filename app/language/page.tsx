const languageResources = [
  {
    number: "01",
    title: "Kiembu Dictionary",
    description:
      "Explore the project's documented Kiembu lexical resources, including validated words, meanings and related language information.",
    href: "/language/dictionary",
  },
  {
    number: "02",
    title: "Kiembu Translator",
    description:
      "A lightweight translation interface designed around the project's Kiembu-English language resources.",
    href: "/language/translator",
  },
  {
    number: "03",
    title: "Kiembu Proverbs",
    description:
      "Explore documented Kiembu proverbs together with their English translations and contextual meanings.",
    href: "/language/proverbs",
  },
  {
    number: "04",
    title: "Kiembu Keyboard",
    description:
      "Practice typing Kiembu using the kiembu Keyboard.",
    href: "/language/KiembuKeyboard",
  },
];

const languageStatistics = [
  {
    number: "1,687",
    title: "Validated lexical entries",
  },
  {
    number: "152",
    title: "Translated and contextualized proverbs",
  },
  {
    number: "9,969",
    title: "Kiembu-English sentence pairs",
  },
  {
    number: "16",
    title: "Cultural knowledge domains",
  },
];

export default function LanguagePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#173f2a] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-[#d7a44b]/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <a
            href="/"
            className="text-sm font-semibold text-[#d7a44b] hover:underline"
          >
            ← CIS-ETHN Home
          </a>

          <div className="mt-12 max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
              Indigenous Language Resources
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Kiembu Language Centre
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
              A digital language resource for documenting, preserving,
              exploring and supporting the continued use of Kiembu through
              structured lexical, proverb and sentence resources.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/language/dictionary"
                className="rounded-full bg-[#d7a44b] px-7 py-3.5 font-semibold text-[#173f2a] transition hover:bg-[#e5bc68]"
              >
                Explore Dictionary
              </a>

              <a
                href="/language/translator"
                className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Open Translator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
                Language Preservation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a]">
                Preserving language through structured digital resources
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-[#59655d]">
              <p>
                The CIS-ETHN project developed indigenous language resources
                intended to support documentation, preservation, accessibility
                and future digital applications.
              </p>

              <p>
                The language component includes lexical resources, proverbs and
                sentence pairs that can support language learning, research,
                translation and future artificial intelligence applications.
              </p>

              <p>
                The website provides a public-facing interface through which
                appropriate language resources can be explored while
                maintaining responsible approaches to cultural knowledge and
                data governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATISTICS
      ========================================================= */}
      <section className="bg-[#e8e1d3]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {languageStatistics.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl bg-white p-7 text-center shadow-sm"
              >
                <div className="text-4xl font-bold text-[#173f2a]">
                  {stat.number}
                </div>

                <div className="mt-3 text-sm font-semibold leading-6 text-[#69746d]">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LANGUAGE RESOURCES
      ========================================================= */}
      <section className="bg-[#f7f4ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              Explore the Resources
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a] sm:text-5xl">
              Kiembu language tools and resources
            </h2>

            <p className="mt-5 leading-8 text-[#5d685f]">
              The Language Centre brings together the project's major
              indigenous language resources in one accessible digital
              environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {languageResources.map((resource) => (
              <article
                key={resource.number}
                className="group rounded-3xl border border-[#ded7c9] bg-white p-8 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#a25b28]">
                    {resource.number}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#d7a44b] transition group-hover:scale-150" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#173f2a]">
                  {resource.title}
                </h3>

                <p className="mt-4 leading-7 text-[#667169]">
                  {resource.description}
                </p>

                <a
                  href={resource.href}
                  className="mt-7 inline-block rounded-full border border-[#a25b28] px-5 py-2.5 text-sm font-semibold text-[#a25b28] transition hover:bg-[#a25b28] hover:text-white"
                >
                  Explore resource →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LANGUAGE + CULTURE
      ========================================================= */}
      <section className="bg-[#173f2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
                Language and Culture
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Language carries cultural knowledge.
              </h2>

              <p className="mt-6 leading-8 text-[#cbd8cf]">
                Indigenous language resources are closely connected to oral
                traditions, cultural practices, environmental knowledge,
                social relationships and community identity.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Oral traditions and narratives",
                "Cultural expressions and metaphors",
                "Proverbs and contextual meanings",
                "Traditional knowledge terminology",
                "Community practices and social life",
                "Intergenerational knowledge transmission",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-xl border border-white/15 bg-white/5 p-5"
                >
                  <span className="mr-4 text-[#d7a44b]">◆</span>

                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBLE DIGITAL LANGUAGE TECHNOLOGY
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
            Responsible AI and Language Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
            Building technology around documented language resources.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#5d685f]">
            The structured language resources provide a foundation for future
            applications including language learning tools, translation,
            searchable language databases, cultural information systems and
            artificial intelligence research.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Language Preservation",
              "Digital Documentation",
              "Language Learning",
              "Translation",
              "Research",
              "Responsible AI",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#f7f4ed] px-5 py-2.5 text-sm font-semibold text-[#173f2a]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION
      ========================================================= */}
      <section className="bg-[#a25b28] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-24">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Explore the Kiembu language resources.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#f7e4d2]">
            Explore lexical resources, translation tools, proverbs and
            sentence resources developed through the CIS-ETHN project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/language/dictionary"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#173f2a] transition hover:bg-[#f2eee5]"
            >
              Open Dictionary
            </a>

            <a
              href="/heritage"
              className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Cultural Heritage
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}