const culturalDomains = [
  {
    number: "01",
    title: "Oral Traditions",
    description:
      "Documentation of oral knowledge, narratives and traditions that contribute to community memory and intergenerational knowledge transmission.",
  },
  {
    number: "02",
    title: "Rituals and Cultural Practices",
    description:
      "Documentation of cultural ceremonies, practices and traditions that continue to shape community identity.",
  },
  {
    number: "03",
    title: "Material Culture",
    description:
      "Documentation of cultural objects, artefacts and material expressions associated with indigenous knowledge and heritage.",
  },
  {
    number: "04",
    title: "Traditional Medicine",
    description:
      "Documentation of indigenous medicine, healing practices and related traditional knowledge contributed by traditional practitioners.",
  },
  {
    number: "05",
    title: "Spaces and Sites of Heritage",
    description:
      "Identification and documentation of culturally, historically, spiritually and environmentally significant heritage locations.",
  },
  {
    number: "06",
    title: "Performance Arts",
    description:
      "Cultural performance practices and forms of expression represented within the documented cultural knowledge.",
  },
  {
    number: "07",
    title: "Foods",
    description:
      "Documentation of food-related cultural knowledge and practices forming part of community heritage.",
  },
  {
    number: "08",
    title: "Social Life",
    description:
      "Cultural knowledge relating to social relationships, community life and practices.",
  },
  {
    number: "09",
    title: "Emotions",
    description:
      "Documentation of cultural expressions and understandings associated with emotions and social experience.",
  },
  {
    number: "10",
    title: "Governance",
    description:
      "Documentation of indigenous governance systems, traditional leadership structures, customary laws and community institutions.",
  },
  {
    number: "11",
    title: "Indigenous Calendar Systems",
    description:
      "Documentation of indigenous systems of understanding time, seasons and culturally significant periods.",
  },
  {
    number: "12",
    title: "Traditional Economies",
    description:
      "Cultural knowledge relating to traditional economic activities, livelihoods and community-based systems.",
  },
  {
    number: "13",
    title: "Metaphorical Language",
    description:
      "Documentation of indigenous expressions, metaphors and forms of language that carry cultural meaning.",
  },
  {
    number: "14",
    title: "Children's Language and Play",
    description:
      "Documentation of children's language, play and related forms of cultural learning and knowledge transmission.",
  },
  {
    number: "15",
    title: "Environment",
    description:
      "Documentation of ecological knowledge, environmental practices and community relationships with the natural environment.",
  },
  {
    number: "16",
    title: "Transition Rites",
    description:
      "Documentation of cultural knowledge associated with rites of passage and transitions within community life.",
  },
];

const heritageSites = [
  {
    name: "Kĩrĩmĩrĩ Forest and Mau Mau Caves",
    community: "Aembu",
    significance:
      "A sacred forest and historical refuge associated with Mau Mau freedom fighters, traditional beliefs and cultural ceremonies.",
  },
  {
    name: "Mwenendega (Mwene Ndega)",
    community: "Aembu",
    significance:
      "Recognized by community elders as an ancestral origin and settlement area featuring prominently in oral histories and migration narratives.",
  },
  {
    name: "Karue Hill (Kĩrĩma kĩa Karue)",
    community: "Aembu",
    significance:
      "A traditional prayer and meeting site associated with cultural ceremonies, leadership consultations and spiritual observances.",
  },
  {
    name: "Nthenge Njeru Falls",
    community: "Aembu",
    significance:
      "A historic waterfall area associated with local legends, oral traditions and Mau Mau resistance activities.",
  },
];

const participantGroups = [
  {
    number: "11",
    title: "Cultural Custodians",
    text: "Recognized keepers of cultural knowledge and traditions.",
  },
  {
    number: "10",
    title: "Traditional Practitioners",
    text: "Contributors of knowledge relating to medicine, healing, ethnobotany and environmental management.",
  },
  {
    number: "5",
    title: "Elders",
    text: "Contributors of traditional history, oral traditions, cultural values and community memory.",
  },
  {
    number: "5",
    title: "Community Leaders",
    text: "Contributors of perspectives on contemporary cultural practices, institutions and preservation.",
  },
];

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#173f2a] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-[#d7a44b]/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
            Cultural Heritage
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl">
            Documenting the cultural knowledge of Embu, Mbeere and Tharaka
            communities.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6e2d9]">
            CIS-ETHN documents tangible and intangible cultural heritage across
            sixteen thematic domains, creating structured digital resources
            for preservation, research, education and future digital heritage
            applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-5">
              <div className="text-3xl font-bold text-[#d7a44b]">16</div>
              <div className="mt-1 text-sm text-[#d6e2d9]">
                Cultural Domains
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-5">
              <div className="text-3xl font-bold text-[#d7a44b]">31</div>
              <div className="mt-1 text-sm text-[#d6e2d9]">
                Cultural Experts & Custodians
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-5">
              <div className="text-3xl font-bold text-[#d7a44b]">64</div>
              <div className="mt-1 text-sm text-[#d6e2d9]">
                Questionnaires
              </div>
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
                Cultural Documentation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a]">
                A community-informed cultural archive
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-[#59655d]">
              <p>
                The project conducted ethnographic research involving cultural
                experts, elders, traditional practitioners and community
                leaders from the Embu and Tharaka communities.
              </p>

              <p>
                The documentation captured cultural narratives and indigenous
                knowledge relating to oral traditions, rituals and ceremonies,
                indigenous governance systems, traditional medicine, language
                resources, ecological knowledge, heritage sites and other
                cultural practices.
              </p>

              <p>
                The collected materials were digitized, transcribed, organized
                and integrated into structured digital repositories to support
                preservation, retrieval and future artificial intelligence
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          16 CULTURAL DOMAINS
      ========================================================= */}
      <section className="bg-[#f7f4ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              The Cultural Knowledge Corpus
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a] sm:text-5xl">
              Sixteen cultural knowledge domains
            </h2>

            <p className="mt-5 leading-8 text-[#5d685f]">
              The project organized documented indigenous knowledge into
              sixteen thematic cultural domains. Select a domain to explore
              the type of knowledge represented within the CIS-ETHN archive.
            </p>
          </div>

          {/* IMPORTANT:
              The map creates the "domain" variable.
              This fixes the "domain is not defined" error.
          */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {culturalDomains.map((domain) => {
              const slug = domain.title
                .toLowerCase()
                .replace(/'/g, "")
                .replace(/ /g, "-")
                .replace(/&/g, "and");

              return (
                <article
                  key={domain.number}
                  className="group rounded-2xl border border-[#ded7c9] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#a25b28]">
                      {domain.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#d7a44b] transition group-hover:scale-150" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#173f2a]">
                    {domain.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667169]">
                    {domain.description}
                  </p>

                  <a
                    href={`/heritage/${slug}`}
                    className="mt-6 inline-block text-sm font-semibold text-[#a25b28] hover:underline"
                  >
                    Explore domain →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY PARTICIPATION
      ========================================================= */}
      <section className="bg-[#173f2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
                Community Participation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Cultural knowledge was documented with the community.
              </h2>

              <p className="mt-6 leading-8 text-[#cbd8cf]">
                Participants were purposively selected based on their
                knowledge, experience and involvement in cultural heritage
                preservation, indigenous knowledge systems, language use,
                traditional governance, community leadership and cultural
                practices.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {participantGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-7"
                >
                  <div className="text-4xl font-bold text-[#d7a44b]">
                    {group.number}
                  </div>

                  <h3 className="mt-3 text-xl font-bold">{group.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#c4d2c8]">
                    {group.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HERITAGE SITES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              Heritage Sites
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a] sm:text-5xl">
              Places carrying cultural, historical and spiritual meaning
            </h2>

            <p className="mt-5 leading-8 text-[#5d685f]">
              The project identified and documented culturally, historically,
              spiritually and environmentally significant heritage sites
              across the Embu, Mbeere and Tharaka communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {heritageSites.map((site, index) => (
              <article
                key={site.name}
                className="overflow-hidden rounded-3xl border border-[#ded7c9] bg-[#faf8f3]"
              >
                <div className="flex h-24 items-end bg-[#173f2a] p-6">
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#d7a44b]">
                    Heritage Site 0{index + 1}
                  </span>
                </div>

                <div className="p-7">
                  <div className="text-sm font-semibold text-[#a25b28]">
                    {site.community}
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-[#173f2a]">
                    {site.name}
                  </h3>

                  <p className="mt-4 leading-7 text-[#606b63]">
                    {site.significance}
                  </p>

                  <button
                    type="button"
                    className="mt-6 rounded-full border border-[#a25b28] px-5 py-2.5 text-sm font-semibold text-[#a25b28] transition hover:bg-[#a25b28] hover:text-white"
                  >
                    View heritage record
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#ded7c9] bg-[#f7f4ed] p-6">
            <p className="text-sm leading-7 text-[#657068]">
              <strong className="text-[#173f2a]">Note:</strong> The NRF report
              records that heritage-site work focused on identification,
              documentation and preliminary digital archiving. The original
              proposal included immersive VR experiences, but implementation
              placed greater emphasis on the AI-powered cultural information
              system, indigenous language resources and RAG infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL HERITAGE
      ========================================================= */}
      <section className="bg-[#e8e1d3]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
                Digital Heritage
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
                From cultural documentation to a searchable digital
                repository.
              </h2>

              <p className="mt-6 leading-8 text-[#5b665e]">
                The cultural materials form the foundation of the CIS-ETHN
                cultural archive, indigenous knowledge database, language
                resources, AI chatbot knowledge base and future digital
                heritage experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Cultural Interview Archive",
                "Digital Cultural Repository",
                "Indigenous Knowledge Database",
                "Structured Metadata",
                "Cultural Documentation Datasets",
                "AI Knowledge Base",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-5 font-semibold text-[#173f2a] shadow-sm"
                >
                  <span className="mr-3 text-[#a25b28]">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ETHICS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
            Responsible Cultural Heritage
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
            Cultural knowledge requires responsible stewardship.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#5d685f]">
            The project incorporated informed consent, confidentiality and
            data protection, respect for indigenous knowledge systems, ethical
            use of Artificial Intelligence, and community consultation on
            ownership, publication and future use of cultural materials.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Informed Consent",
              "Confidentiality",
              "Indigenous Knowledge",
              "Community Validation",
              "Responsible AI",
              "Data Governance",
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
            Explore the knowledge behind CIS-ETHN.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#f7e4d2]">
            The cultural heritage archive provides a foundation for language
            preservation, education, research and responsible AI innovation.
          </p>

          <div className="mt-8">
            <a
              href="/"
              className="inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-[#173f2a] transition hover:bg-[#f2eee5]"
            >
              Return to CIS-ETHN Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}