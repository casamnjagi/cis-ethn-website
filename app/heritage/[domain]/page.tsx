type Domain = {
  slug: string;
  number: string;
  title: string;
  description: string;
};

const domains: Domain[] = [
  {
    slug: "oral-traditions",
    number: "01",
    title: "Oral Traditions",
    description:
      "Documentation of oral knowledge, narratives and traditions within the CIS-ETHN cultural knowledge corpus.",
  },
  {
    slug: "rituals-and-cultural-practices",
    number: "02",
    title: "Rituals and Cultural Practices",
    description:
      "Documentation of cultural rituals, ceremonies and practices.",
  },
  {
    slug: "material-culture",
    number: "03",
    title: "Material Culture",
    description:
      "Documentation of material expressions, cultural objects and artefacts.",
  },
  {
    slug: "traditional-medicine",
    number: "04",
    title: "Traditional Medicine",
    description:
      "Documentation of indigenous medicine and traditional healing knowledge.",
  },
  {
    slug: "spaces-and-sites-of-heritage",
    number: "05",
    title: "Spaces and Sites of Heritage",
    description:
      "Documentation of culturally, historically, spiritually and environmentally significant sites.",
  },
  {
    slug: "performance-arts",
    number: "06",
    title: "Performance Arts",
    description:
      "Documentation of cultural performance practices and forms of expression.",
  },
  {
    slug: "foods",
    number: "07",
    title: "Foods",
    description:
      "Documentation of food-related cultural knowledge and practices.",
  },
  {
    slug: "social-life",
    number: "08",
    title: "Social Life",
    description:
      "Documentation of cultural knowledge relating to social relationships and community life.",
  },
  {
    slug: "emotions",
    number: "09",
    title: "Emotions",
    description:
      "Documentation of cultural expressions and understandings associated with emotions.",
  },
  {
    slug: "governance",
    number: "10",
    title: "Governance",
    description:
      "Documentation of indigenous governance systems, leadership structures, customary laws and institutions.",
  },
  {
    slug: "indigenous-calendar-systems",
    number: "11",
    title: "Indigenous Calendar Systems",
    description:
      "Documentation of indigenous systems for understanding time, seasons and culturally significant periods.",
  },
  {
    slug: "traditional-economies",
    number: "12",
    title: "Traditional Economies",
    description:
      "Documentation of traditional economic activities, livelihoods and community-based systems.",
  },
  {
    slug: "metaphorical-language",
    number: "13",
    title: "Metaphorical Language",
    description:
      "Documentation of indigenous expressions, metaphors and language carrying cultural meaning.",
  },
  {
    slug: "childrens-language-and-play",
    number: "14",
    title: "Children's Language and Play",
    description:
      "Documentation of children's language, play and cultural learning.",
  },
  {
    slug: "environment",
    number: "15",
    title: "Environment",
    description:
      "Documentation of ecological knowledge and community relationships with the natural environment.",
  },
  {
    slug: "transition-rites",
    number: "16",
    title: "Transition Rites",
    description:
      "Documentation of cultural knowledge associated with rites of passage and transitions within community life.",
  },
];

export function generateStaticParams() {
  return domains.map((domain) => ({
    domain: domain.slug,
  }));
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain: slug } = await params;

  const domain = domains.find((item) => item.slug === slug);

  if (!domain) {
    return (
      <main className="min-h-screen bg-[#f7f4ed] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#173f2a]">
          Cultural domain not found
        </h1>

        <a
          href="/heritage"
          className="mt-8 inline-block rounded-full bg-[#173f2a] px-6 py-3 font-semibold text-white"
        >
          Back to Cultural Heritage
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
      {/* Header */}
      <section className="bg-[#173f2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <a
            href="/heritage"
            className="text-sm font-semibold text-[#d7a44b] hover:underline"
          >
            ← Cultural Heritage
          </a>

          <div className="mt-12 max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
              Cultural Domain {domain.number}
            </div>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              {domain.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
              {domain.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              CIS-ETHN Knowledge Repository
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
              Documented knowledge and cultural resources
            </h2>

            <p className="mt-6 leading-8 text-[#5d685f]">
              This section will contain the approved cultural knowledge,
              narratives, records, transcripts, metadata and other materials
              documented under this cultural domain.
            </p>

            <div className="mt-10 rounded-2xl border border-[#ded7c9] bg-white p-7">
              <h3 className="text-xl font-bold text-[#173f2a]">
                Project Content
              </h3>

              <p className="mt-4 leading-7 text-[#657068]">
                The detailed content for this section will be populated from
                the project's documented and validated research materials.
                Content will be presented according to the project's ethical,
                consent and data-governance requirements.
              </p>
            </div>
          </div>

          {/* Information panel */}
          <aside className="rounded-3xl bg-[#e8e1d3] p-8">
            <div className="text-sm font-bold uppercase tracking-[0.15em] text-[#a25b28]">
              Digital Resource
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#173f2a]">
              Cultural Knowledge Record
            </h3>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-white p-5">
                <div className="text-xs uppercase tracking-wider text-[#7a847d]">
                  Domain
                </div>

                <div className="mt-1 font-semibold text-[#173f2a]">
                  {domain.title}
                </div>
              </div>

              <div className="rounded-xl bg-white p-5">
                <div className="text-xs uppercase tracking-wider text-[#7a847d]">
                  Project
                </div>

                <div className="mt-1 font-semibold text-[#173f2a]">
                  CIS-ETHN
                </div>
              </div>

              <div className="rounded-xl bg-white p-5">
                <div className="text-xs uppercase tracking-wider text-[#7a847d]">
                  Resource Type
                </div>

                <div className="mt-1 font-semibold text-[#173f2a]">
                  Digital Cultural Heritage
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Future resources */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="text-3xl font-bold text-[#173f2a]">
            Resources in this domain
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Cultural Records",
              "Research Materials",
              "Digital Knowledge Resources",
            ].map((resource) => (
              <div
                key={resource}
                className="rounded-2xl border border-[#ded7c9] bg-[#faf8f3] p-6"
              >
                <div className="text-lg font-bold text-[#173f2a]">
                  {resource}
                </div>

                <p className="mt-3 text-sm leading-6 text-[#68736b]">
                  Resources will be added from the validated project
                  repository.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-[#173f2a]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <a
              href="/heritage"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#173f2a]"
            >
              ← All Cultural Domains
            </a>

            <a
              href="/language"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white"
            >
              Explore Kiembu Language →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}