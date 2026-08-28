import Link from "next/link";

const projectStats = [
  {
    number: "31",
    label: "Cultural Custodians",
    description:
      "Knowledge holders who participated in the cultural documentation process.",
  },
  {
    number: "25",
    label: "Interview Sessions",
    description:
      "Ethnographic interview sessions conducted during the project.",
  },
  {
    number: "64",
    label: "Questionnaires",
    description:
      "Community questionnaires completed during the research.",
  },
  {
    number: "16",
    label: "Cultural Domains",
    description:
      "Thematic areas of indigenous cultural knowledge documented.",
  },
  {
    number: "1,687",
    label: "Kiembu-English Entries",
    description:
      "Validated lexical entries developed for language resources.",
  },
  {
    number: "152",
    label: "Kiembu Proverbs",
    description:
      "Translated and contextualized proverbs documented by the project.",
  },
  {
    number: "9,969",
    label: "Parallel Sentences",
    description:
      "Kiembu-English sentence pairs developed for language technology.",
  },
  {
    number: "4",
    label: "Research Papers",
    description:
      "Research publications produced from the project.",
  },
];

const heritageAreas = [
  {
    number: "01",
    title: "Indigenous Language",
    text:
      "Documentation and development of Kiembu-English language resources to support preservation, learning and future language technologies.",
  },
  {
    number: "02",
    title: "Oral Traditions",
    text:
      "Documentation of oral knowledge, narratives, traditions and community knowledge shared by cultural custodians.",
  },
  {
    number: "03",
    title: "Traditional Knowledge",
    text:
      "Digital documentation of cultural practices, knowledge systems and community heritage.",
  },
  {
    number: "04",
    title: "Heritage Sites",
    text:
      "Identification and documentation of culturally significant heritage locations within the project communities.",
  },
];

const technologyAreas = [
  {
    title: "Kiembu-English Resources",
    text:
      "Structured lexical entries, proverbs and parallel language resources developed through community-informed research.",
    href: "/language",
  },
  {
    title: "Artificial Intelligence",
    text:
      "Exploration of language and cultural knowledge technologies for indigenous language preservation.",
    href: "/chatbot",
  },
  {
    title: "RAG & Semantic Search",
    text:
      "Retrieval-based approaches for connecting documented cultural knowledge with AI systems.",
    href: "/chatbot",
  },
  {
    title: "Cultural Assistant",
    text:
      "A research direction for making documented cultural knowledge more accessible through digital interaction.",
    href: "/chatbot",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">

      
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#173f2a]">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-[#d7a44b]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[70px] border-[#a25b28]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-32">

          <div className="flex flex-col justify-center">

            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e9d8b6]">
              <span className="h-2 w-2 rounded-full bg-[#d7a44b]" />
              NRF Sponsored Research Project
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Preserving Indigenous Knowledge Through{" "}
              <span className="text-[#d7a44b]">
                Artificial Intelligence
              </span>{" "}
              and Digital Heritage
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#dce8df]">
              An AI-powered Cultural Information System supporting the
              documentation, preservation and dissemination of cultural
              heritage and indigenous language resources among the Embu and
              Tharaka Nithi communities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/heritage"
                className="rounded-full bg-[#d7a44b] px-7 py-3.5 font-semibold text-[#173f2a] transition hover:bg-[#e5bd72]"
              >
                Explore Heritage
              </Link>

              <Link
                href="/chatbot"
                className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Ask Kiembu AI
              </Link>

            </div>

          </div>


          {/* HERO INFORMATION CARD */}
          <div className="flex items-center justify-center">

            <div className="relative w-full max-w-md">

              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">

                <div className="rounded-[1.5rem] bg-[#f7f4ed] p-8">

                  <div className="mb-8 flex items-center justify-between">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a25b28]">
                        CIS-ETHN
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-[#173f2a]">
                        Knowledge & Language
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173f2a] text-white">
                      AI
                    </div>

                  </div>

                  <div className="space-y-3">

                    <div className="rounded-xl bg-[#e8e1d3] p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#6b756e]">
                        Cultural Heritage
                      </div>

                      <div className="mt-1 font-semibold text-[#173f2a]">
                        Document • Preserve • Share
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#173f2a] p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#d7a44b]">
                        Indigenous Language
                      </div>

                      <div className="mt-1 font-semibold">
                        Kiembu-English Resources
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#a25b28] p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#f5d7b9]">
                        Technology
                      </div>

                      <div className="mt-1 font-semibold">
                        AI • RAG • Digital Heritage
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-[#d7a44b] px-5 py-4 shadow-xl sm:block">

                <div className="text-2xl font-bold text-[#173f2a]">
                  16
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#173f2a]/70">
                  Cultural Domains
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT STATISTICS
      ====================================================== */}
      <section className="border-b border-[#ded7c9] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

          <div className="mb-10 max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              Project at a glance
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#173f2a] sm:text-4xl">
              Research translated into measurable outputs
            </h2>

          </div>


          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#ded7c9] bg-[#ded7c9] sm:grid-cols-2 lg:grid-cols-4">

            {projectStats.map((stat) => (

              <div
                key={stat.label}
                className="bg-white p-7 transition hover:bg-[#faf7f0]"
              >

                <div className="text-4xl font-bold tracking-tight text-[#173f2a]">
                  {stat.number}
                </div>

                <div className="mt-2 font-semibold text-[#a25b28]">
                  {stat.label}
                </div>

                <p className="mt-2 text-sm leading-6 text-[#667169]">
                  {stat.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="bg-[#f7f4ed]">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              About CIS-ETHN
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a] sm:text-5xl">
              Connecting cultural knowledge, communities and technology.
            </h2>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[#173f2a] px-6 py-3 font-semibold text-white transition hover:bg-[#102c1e]"
            >
              Learn More About the Project
            </Link>

          </div>


          <div className="space-y-5 text-base leading-8 text-[#505c54]">

            <p>
              CIS-ETHN is an AI-powered Cultural Information System developed
              to support the preservation, management and dissemination of
              indigenous cultural heritage and language resources.
            </p>

            <p>
              The project focuses on cultural knowledge associated with the
              Embu and Tharaka Nithi communities and combines ethnographic
              research, community participation, language-resource development,
              artificial intelligence and digital heritage approaches.
            </p>

            <p>
              The project seeks to transform documented cultural knowledge
              into structured and accessible digital resources while
              supporting responsible approaches to cultural ownership, ethics
              and community participation.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          HERITAGE
      ====================================================== */}
      <section className="bg-[#173f2a] text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
              Cultural Heritage
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Documenting knowledge for present and future generations.
            </h2>

            <p className="mt-6 leading-8 text-[#d5e0d8]">
              The project documents cultural knowledge across multiple
              thematic domains while creating digital resources that can
              support education, research, cultural preservation and future
              innovation.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {heritageAreas.map((area) => (

              <Link
                key={area.title}
                href="/heritage"
                className="rounded-2xl border border-white/15 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
              >

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#d7a44b] font-bold text-[#173f2a]">
                  {area.number}
                </div>

                <h3 className="text-xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-[#c9d6cd]">
                  {area.text}
                </p>

                <div className="mt-5 text-sm font-semibold text-[#d7a44b]">
                  Explore domain →
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LANGUAGE & AI
      ====================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
                Language & AI
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a] sm:text-5xl">
                Building technology around indigenous language and knowledge.
              </h2>

              <p className="mt-6 leading-8 text-[#5b665e]">
                CIS-ETHN combines indigenous language resources with emerging
                artificial intelligence approaches to explore new ways of
                preserving, searching and interacting with cultural knowledge.
              </p>


              <div className="mt-8 rounded-2xl bg-[#f7f4ed] p-6">

                <div className="text-3xl font-bold text-[#173f2a]">
                  9,969
                </div>

                <div className="mt-1 font-semibold text-[#a25b28]">
                  Kiembu-English parallel sentence pairs
                </div>

                <p className="mt-3 text-sm leading-6 text-[#69736c]">
                  A language resource developed to support future indigenous
                  language technology research.
                </p>

              </div>


              <div className="mt-6 flex flex-wrap gap-3">

                <Link
                  href="/language"
                  className="rounded-full bg-[#173f2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#102c1e]"
                >
                  Explore Language Resources
                </Link>

                <Link
                  href="/chatbot"
                  className="rounded-full border border-[#173f2a] px-6 py-3 text-sm font-semibold text-[#173f2a] transition hover:bg-[#f7f4ed]"
                >
                  Open AI Assistant
                </Link>

              </div>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              {technologyAreas.map((area) => (

                <Link
                  key={area.title}
                  href={area.href}
                  className="rounded-2xl border border-[#ded7c9] bg-[#faf8f3] p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mb-6 h-1.5 w-12 rounded-full bg-[#a25b28]" />

                  <h3 className="text-xl font-bold text-[#173f2a]">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#657068]">
                    {area.text}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-[#a25b28]">
                    Explore →
                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KIEMBU AI FEATURE
      ====================================================== */}
      <section className="bg-[#e8e1d3]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">

          <div className="overflow-hidden rounded-[2rem] bg-[#173f2a] shadow-2xl">

            <div className="grid lg:grid-cols-[1fr_0.8fr]">

              <div className="p-8 text-white sm:p-12 lg:p-16">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
                  Kiembu Cultural AI
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Ask questions about Kiembu language and culture.
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-[#d2dfd6]">
                  Explore documented Kiembu language resources, cultural
                  knowledge, traditions, food, ceremonies, songs, dances,
                  family, environment and other research areas through the
                  CIS-ETHN cultural assistant.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    href="/chatbot"
                    className="rounded-full bg-[#d7a44b] px-7 py-3.5 font-semibold text-[#173f2a] transition hover:bg-[#e5bd72]"
                  >
                    Open Kiembu AI
                  </Link>

                  <Link
                    href="/language/translator"
                    className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    Open Translator
                  </Link>

                </div>

              </div>


              <div className="flex items-center justify-center bg-[#102c1e] p-8 sm:p-12">

                <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7a44b] font-bold text-[#173f2a]">
                      AI
                    </div>

                    <div>
                      <div className="font-semibold text-white">
                        Kiembu Cultural AI
                      </div>

                      <div className="text-xs text-[#9fb0a5]">
                        Knowledge Assistant
                      </div>
                    </div>

                  </div>


                  <div className="space-y-3">

                    <div className="rounded-xl bg-white/10 p-4 text-sm text-[#d9e4dc]">
                      What is a traditional Kiembu ceremony?
                    </div>

                    <div className="rounded-xl bg-[#d7a44b] p-4 text-sm font-medium text-[#173f2a]">
                      Ask questions about documented cultural knowledge,
                      language and traditions.
                    </div>

                    <div className="rounded-xl bg-white/10 p-4 text-sm text-[#d9e4dc]">
                      Wĩ mwega?
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESEARCH
      ====================================================== */}
      <section className="bg-[#f7f4ed]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
                Research & Innovation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a] sm:text-5xl">
                From community research to digital innovation.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-[#566158]">
                The project brings together cultural documentation, indigenous
                language research, artificial intelligence, digital heritage
                and community engagement.
              </p>


              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Research Papers",
                  "Policy Brief",
                  "Language Resources",
                  "Digital Cultural Repository",
                  "AI Research",
                  "Heritage Documentation",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-[#d4cbb9] bg-white/70 p-5 font-semibold text-[#173f2a]"
                  >
                    {item}
                  </div>

                ))}

              </div>


              <Link
                href="/research"
                className="mt-8 inline-flex rounded-full bg-[#173f2a] px-6 py-3 font-semibold text-white transition hover:bg-[#102c1e]"
              >
                Explore Research
              </Link>

            </div>


            <div className="rounded-3xl bg-[#173f2a] p-8 text-white shadow-xl">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d7a44b]">
                Research Vision
              </p>

              <p className="mt-6 text-2xl font-semibold leading-9">
                “Preserving indigenous knowledge while creating new pathways
                for education, research and innovation.”
              </p>

              <div className="mt-10 border-t border-white/15 pt-6 text-sm leading-7 text-[#ccd8cf]">
                The platform provides a foundation for future development of
                language technologies, cultural archives and immersive digital
                heritage experiences.
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESPONSIBLE RESEARCH
      ====================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              Responsible Cultural Knowledge
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2a]">
              Technology with community, ethics and cultural responsibility.
            </h2>

            <p className="mt-6 leading-8 text-[#5d685f]">
              The project recognizes the importance of informed participation,
              cultural protocols, confidentiality, indigenous knowledge
              ownership, responsible data governance and ethical approaches to
              artificial intelligence.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-[#f7f4ed] p-7">

              <h3 className="text-xl font-bold text-[#173f2a]">
                Community Participation
              </h3>

              <p className="mt-3 leading-7 text-[#657068]">
                Cultural knowledge documentation is grounded in engagement
                with community members and knowledge holders.
              </p>

            </div>


            <div className="rounded-2xl bg-[#f7f4ed] p-7">

              <h3 className="text-xl font-bold text-[#173f2a]">
                Ethical Research
              </h3>

              <p className="mt-3 leading-7 text-[#657068]">
                Cultural documentation requires appropriate consent,
                confidentiality and respect for community protocols.
              </p>

            </div>


            <div className="rounded-2xl bg-[#f7f4ed] p-7">

              <h3 className="text-xl font-bold text-[#173f2a]">
                Knowledge Governance
              </h3>

              <p className="mt-3 leading-7 text-[#657068]">
                Digital cultural resources require responsible approaches to
                ownership, access, protection and future use.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}
      <section className="bg-[#a25b28]">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-24">

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Explore the cultural knowledge and research behind CIS-ETHN.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#f7e5d5]">
            Discover the communities, language resources, cultural heritage,
            research outputs and technological innovation emerging from the
            project.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/heritage"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#173f2a] transition hover:bg-[#f2eee5]"
            >
              Explore Heritage
            </Link>

            <Link
              href="/language"
              className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Language Resources
            </Link>

            <Link
              href="/chatbot"
              className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Ask Kiembu AI
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

