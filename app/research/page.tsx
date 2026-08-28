"use client";

import Link from "next/link";

const objectives = [
  {
    number: "01",
    title: "AI-Powered Cultural Documentation System",
    status: "Achieved — 100%",
    description:
      "Development and deployment of the Artificial Intelligence-Powered Cultural Information System for Embu and Tharaka Nithi (CIS-ETHN), providing a platform for documenting, preserving, managing and disseminating cultural knowledge.",
  },
  {
    number: "02",
    title: "Ethnographic Data Collection",
    status: "Completed",
    description:
      "The project conducted 25 ethnographic interview sessions involving 31 cultural experts, elders, traditional practitioners and community leaders, together with 64 questionnaires.",
  },
  {
    number: "03",
    title: "Indigenous Language Resource Development",
    status: "Completed",
    description:
      "The project developed Kiembu-English linguistic resources, including a validated bilingual corpus, translated and contextualized proverbs, and parallel sentence-pair datasets suitable for language technology development.",
  },
  {
    number: "04",
    title: "Artificial Intelligence Model Development",
    status: "Completed",
    description:
      "The project conducted AI training experiments, fine-tuned a Qwen-based Large Language Model and evaluated indigenous language AI development requirements.",
  },
  {
    number: "05",
    title: "Retrieval-Augmented Generation System",
    status: "Completed",
    description:
      "A Sentence Transformer-based Retrieval-Augmented Generation architecture was developed to support semantic search, cultural knowledge retrieval and contextual question answering.",
  },
  {
    number: "06",
    title: "Sustainability, Community Engagement and Education",
    status: "Achieved",
    description:
      "The project established a scalable technological foundation while engaging cultural custodians, community members, students, researchers and other stakeholders in cultural preservation and education.",
  },
];

const outputs = [
  {
    value: "31",
    label: "Cultural Experts Consulted",
  },
  {
    value: "25",
    label: "Interview Sessions",
  },
  {
    value: "64",
    label: "Questionnaires",
  },
  {
    value: "16",
    label: "Cultural Domains",
  },
  {
    value: "1,687",
    label: "Kiembu-English Lexical Entries",
  },
  {
    value: "152",
    label: "Kiembu Proverbs Documented",
  },
  {
    value: "9,969",
    label: "Parallel Sentence Pairs",
  },
  {
    value: "4",
    label: "Research Manuscripts",
  },
];

const technologies = [
  "Artificial Intelligence",
  "Natural Language Processing",
  "Sentence Transformers",
  "Retrieval-Augmented Generation",
  "Digital Cultural Archives",
  "Machine Translation",
  "Semantic Search",
  "Indigenous Language Technologies",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.20),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),_transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-green-300 transition hover:text-white"
          >
            ← Back to CIS-ETHN
          </Link>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              NRF Sponsored Research Project
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              AI-Powered Cultural Information System
              <span className="block text-green-300">
                for Embu and Tharaka Nithi
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              CIS-ETHN brings together cultural heritage documentation,
              indigenous language resources, Artificial Intelligence,
              digital preservation and community knowledge to support the
              preservation and dissemination of cultural heritage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/heritage"
                className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
              >
                Explore Cultural Heritage
              </Link>

              <Link
                href="/language"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Kiembu Language
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              About the Project
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Preserving Indigenous Knowledge Through Digital Innovation
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The CIS-ETHN project was developed to support the preservation,
              management and dissemination of indigenous cultural heritage
              and language resources within the Embu and Tharaka Nithi
              communities.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              The project combined ethnographic research, cultural
              documentation, indigenous language resource development,
              Artificial Intelligence and digital archiving to create an
              integrated Cultural Information System.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              The project also established a foundation for future expansion
              of indigenous language technologies, cultural knowledge
              retrieval, digital heritage preservation and immersive
              technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Project Information
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500">Project</p>
                <p className="font-semibold text-slate-900">
                  AI-Powered Cultural Information System for Embu and
                  Tharaka Nithi
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Abbreviation
                </p>
                <p className="font-semibold text-slate-900">
                  CIS-ETHN
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Supporting Institution
                </p>
                <p className="font-semibold text-slate-900">
                  National Research Fund (NRF)
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Date
                </p>
                <p className="font-semibold text-slate-900">
                  June 2026
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Principal Investigator
                </p>
                <p className="font-semibold text-slate-900">
                  Prof. Lucy Kawira Gitonga
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Institution
                </p>
                <p className="font-semibold text-slate-900">
                  Chuka University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OUTPUTS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Project Outputs
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Key Results at a Glance
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The project generated cultural, linguistic, technological,
              research and digital preservation outputs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outputs.map((output) => (
              <div
                key={output.label}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-4xl font-bold text-green-600">
                  {output.value}
                </div>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {output.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Project Objectives
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Six Areas of Project Implementation
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The project report records substantial achievement across its
              planned cultural documentation, language technology,
              Artificial Intelligence, preservation and community engagement
              activities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {objectives.map((objective) => (
              <article
                key={objective.number}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-lg font-bold text-green-700">
                    {objective.number}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {objective.title}
                      </h3>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        {objective.status}
                      </span>
                    </div>

                    <p className="mt-4 leading-7 text-slate-600">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              Technology & Innovation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Where Culture Meets Artificial Intelligence
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              The project explored indigenous language AI development and
              subsequently adopted a Sentence Transformer-based
              Retrieval-Augmented Generation architecture as the production
              approach. The report notes that RAG provided improved factual
              accuracy, cultural context preservation, reduced hallucination,
              faster responses and lower computational requirements under the
              available data constraints.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGE TECHNOLOGY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-3xl bg-green-50 p-8">
              <div className="text-4xl font-bold text-green-700">
                1,687
              </div>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Kiembu-English Lexical Entries
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Validated bilingual linguistic resources developed for
                indigenous language technology and preservation.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-8">
              <div className="text-4xl font-bold text-blue-700">
                9,969
              </div>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Parallel Sentence Pairs
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A bilingual Kiembu-English corpus prepared as a resource for
                machine learning and language technology development.
              </p>
            </div>

            <div className="rounded-3xl bg-amber-50 p-8">
              <div className="text-4xl font-bold text-amber-700">
                152
              </div>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Kiembu Proverbs
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Translated and culturally contextualized Kiembu proverbs
                documented by the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY & ETHICS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Community Engagement
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Community Participation at the Centre
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Community participation remained central to implementation.
              Cultural custodians, elders, traditional leaders, language
              experts and other stakeholders contributed to data collection,
              validation and documentation.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              The project also sought to include men, women, youth
              representatives, cultural custodians, traditional practitioners
              and other community stakeholders so that diverse perspectives
              could be represented.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Ethics & Data Governance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Responsible Cultural Preservation
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The report emphasizes informed consent, confidentiality,
              protection of sensitive information, respect for indigenous
              knowledge systems and culturally responsible use of Artificial
              Intelligence.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Community ownership and stewardship, benefit-sharing,
              culturally sensitive AI development and protection of sensitive
              or sacred cultural information are identified as important
              considerations.
            </p>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Looking Ahead
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            A Foundation for Future Indigenous Language Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The long-term vision of CIS-ETHN is to evolve into a comprehensive
            indigenous knowledge and language technology platform supporting
            cultural preservation, education, research and innovation across
            Kenya and beyond.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                Multilingual Expansion
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Expansion of indigenous language resources and future
                multilingual AI systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                Speech Technologies
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Future exploration of speech recognition, text-to-speech and
                speech-to-text technologies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                VR & AR Heritage
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Development of immersive heritage experiences, 3D models and
                virtual cultural tours.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                National Replication
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Adaptation of the methodologies and architecture for other
                indigenous communities in Kenya and Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-green-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore the CIS-ETHN Resources
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">
            Discover the cultural heritage archive and explore the Kiembu
            language resources developed through the project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/heritage"
              className="rounded-full bg-white px-7 py-3 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Cultural Heritage
            </Link>

            <Link
              href="/language"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Kiembu Translator
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-10 text-center text-sm text-slate-400">
        <p>
          CIS-ETHN — AI-Powered Cultural Information System for Embu and
          Tharaka Nithi
        </p>

        <p className="mt-2">
          National Research Fund (NRF) Sponsored Project
        </p>
      </footer>
    </main>
  );
}