const projectAreas = [
  "Cultural heritage documentation",
  "Indigenous language resources",
  "Artificial intelligence",
  "Digital cultural heritage",
  "Community engagement",
  "Research and innovation",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#17251d]">
      <section className="bg-[#173f2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44b]">
            About CIS-ETHN
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Cultural knowledge, indigenous language and digital innovation.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d7e2da]">
            CIS-ETHN is an AI-powered Cultural Information System supporting
            the documentation, preservation and dissemination of cultural
            heritage and indigenous language resources associated with the
            Embu and Tharaka Nithi communities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
              The Project
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
              Building a digital foundation for cultural preservation.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#59655d]">
            <p>
              The project brings together cultural research, community
              participation, indigenous language documentation and emerging
              digital technologies.
            </p>

            <p>
              Its outputs include structured language resources, cultural
              documentation and research into artificial intelligence
              approaches that can support access to indigenous knowledge.
            </p>

            <p>
              CIS-ETHN provides a digital platform through which these
              research outputs can be organized and eventually made accessible
              to researchers, communities, educators, learners and other
              authorized users.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
            Core Areas
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
            What CIS-ETHN brings together
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectAreas.map((area, index) => (
              <div
                key={area}
                className="rounded-2xl border border-[#ded7c9] bg-[#faf8f3] p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173f2a] font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#173f2a]">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e1d3]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a25b28]">
            Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#173f2a]">
            Preserving knowledge while enabling responsible innovation.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#5b665e]">
            The platform is intended to provide a foundation for future
            cultural archives, indigenous language technologies, research
            resources and digital heritage experiences.
          </p>
        </div>
      </section>
    </main>
  );
}