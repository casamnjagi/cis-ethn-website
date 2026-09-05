import Link from "next/link";

export default function SpacesAndSitesOfHeritagePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              CIS-ETHN • Cultural Heritage Documentation
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Spaces and Sites of Heritage
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Documentation of culturally, historically, spiritually and
              environmentally significant spaces and sites associated with the
              Embu and Mbeere communities and their indigenous knowledge
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOMAIN INTRODUCTION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Domain Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Cultural landscapes and community memory
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The Embu and Mbeere communities possess numerous cultural and
                heritage sites that hold historical, spiritual, environmental
                and social significance.
              </p>

              <p>
                These sites function as repositories of community memory,
                ancestral connections, traditional practices and indigenous
                knowledge. Many are associated with clan origins, traditional
                governance, religious practices and important historical
                events.
              </p>

              <p>
                The documented heritage landscape includes sacred forests,
                traditional prayer sites, hills, rivers, caves, ancestral
                meeting places and designated ceremonial grounds.
              </p>
            </div>
          </div>

          {/* SITE CATEGORIES */}
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Documented site categories
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Sacred forests",
                "Traditional prayer sites",
                "Mountains and hills",
                "Rivers and water sources",
                "Caves",
                "Indigenous trees",
                "Kiama meeting grounds",
                "Ancestral meeting places",
                "Ceremonial grounds",
              ].map((site) => (
                <div
                  key={site}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {site}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          RESEARCH QUESTION I
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                I
              </span>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                  Research Question
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  What significant cultural or heritage sites exist in
                  Embu/Mbeere community, and what restrictions or taboos guide
                  their use?
                </h2>
              </div>
            </div>
          </div>

          {/* =====================================================
              SITE TYPES
          ====================================================== */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* SACRED FORESTS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold text-emerald-700">
                01 • Sacred Forests
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Sacred forests and spiritual heritage
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Sacred forests occupy a special place in Embu and Mbeere
                cultural heritage. Certain forested areas are documented as
                places where elders traditionally offered prayers and
                sacrifices to Ngai.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                These forests are respected because of their association with
                ancestral spirits, divine blessings and environmental
                conservation. Community beliefs traditionally regard such
                locations as sacred spaces deserving protection.
              </p>
            </article>

            {/* KIRINYAGA */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                02 • Kĩrĩnyaga
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Mount Kenya
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Mount Kenya (Kĩrĩnyaga) holds immense spiritual significance
                among the Embu people.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Traditionally, prayers and religious ceremonies were conducted
                facing the mountain because it was believed to be the dwelling
                place of Ngai.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                The mountain remains an important symbol of identity,
                spirituality and cultural heritage.
              </p>
            </article>

            {/* RIVERS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                03 • Rivers and Water Sources
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Water, life and cultural memory
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Important rivers and water sources are recognized as heritage
                spaces because of their importance to people, livestock and
                agriculture.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Rivers also feature in oral traditions, historical narratives
                and community beliefs concerning life, fertility and
                prosperity.
              </p>
            </article>

            {/* KIAMA */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                04 • Kiama Meeting Grounds
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Traditional governance spaces
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Traditional gathering places associated with kiama served as
                centres of governance, dispute resolution, law-making and
                community decision-making.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Elders met at these locations to deliberate on social matters
                and maintain order within the community.
              </p>
            </article>

            {/* CAVES AND HILLS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                05 • Caves, Hills and Indigenous Trees
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Landscapes of ancestral memory
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Certain caves, hills and large indigenous trees are associated
                with ancestral stories, migration histories and ritual
                activities.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                These locations preserve historical memories and reinforce
                community identity.
              </p>
            </article>

            {/* CEREMONIAL GROUNDS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:col-span-2 lg:col-span-3">
              <p className="text-sm font-semibold text-emerald-700">
                06 • Ceremonial and Gathering Grounds
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Spaces for collective cultural life
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                Designated ceremonial grounds and traditional gathering spaces
                provided venues for community rituals, initiation ceremonies,
                conflict resolution, cultural gatherings and other collective
                activities. Their significance comes from the cultural
                practices and memories associated with their use.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESTRICTIONS AND TABOOS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Cultural Restrictions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Restrictions and taboos associated with heritage spaces
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Traditional restrictions and taboos helped regulate access to
            sacred and culturally significant spaces. These practices were
            intended to protect the spiritual integrity, ecological value and
            cultural significance of heritage locations.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              number: "01",
              title: "Restricted access",
              text: "Unauthorized entry into certain sacred areas was traditionally discouraged.",
            },
            {
              number: "02",
              title: "Protection of vegetation",
              text: "Cutting trees in sacred forests was often prohibited in order to protect culturally significant natural spaces.",
            },
            {
              number: "03",
              title: "Restricted resource use",
              text: "Hunting, grazing or farming in certain sacred locations was restricted.",
            },
            {
              number: "04",
              title: "Authorized ritual access",
              text: "Some ritual sites could only be accessed by authorized elders or designated participants during ceremonies.",
            },
            {
              number: "05",
              title: "Respectful conduct",
              text: "Noise-making, destruction of vegetation and misuse of sacred spaces were strongly discouraged.",
            },
            {
              number: "06",
              title: "Ritual permission",
              text: "Some locations required ritual permission or observance of specific customs before entry.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                {item.number}
              </span>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
          <h3 className="text-xl font-bold text-slate-900">
            Cultural significance of restrictions
          </h3>

          <p className="mt-3 leading-8 text-slate-700">
            These restrictions helped preserve the spiritual integrity,
            ecological value and cultural significance of heritage sites while
            ensuring that future generations could continue to benefit from
            them.
          </p>
        </div>
      </section>

      {/* =========================================================
          RESEARCH QUESTION II
      ========================================================== */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                II
              </span>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                  Research Question
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  What roles do sacred or natural spaces play in community
                  rituals, stories, or identity?
                </h2>
              </div>
            </div>
          </div>

          {/* =====================================================
              ROLE CARDS
          ====================================================== */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Spiritual and Religious Practice",
                text: "Sacred forests, specific trees, hills and rivers have traditionally provided settings where elders gathered to offer prayers seeking rain, fertility, protection, healing, peace and prosperity.",
              },
              {
                number: "02",
                title: "Communication with Ngai and Ancestors",
                text: "Within traditional belief systems, sacred spaces were understood as places facilitating communication with Ngai and the ancestors.",
              },
              {
                number: "03",
                title: "Cultural Education",
                text: "Elders use stories associated with forests, rivers, mountains, caves and landmarks to teach younger generations about history, morality, migration and community values.",
              },
              {
                number: "04",
                title: "Community Identity",
                text: "Heritage sites symbolize the historical origins of clans and families, preserve memories of important events and strengthen people's sense of belonging.",
              },
              {
                number: "05",
                title: "Environmental Conservation",
                text: "Traditional beliefs and taboos protected forests, water sources and wildlife from destruction, contributing to environmental stewardship.",
              },
              {
                number: "06",
                title: "Collective Memory",
                text: "Landscapes preserve narratives about ancestors, migration, heroic deeds, moral lessons and interactions between humans and spiritual forces.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7"
              >
                <span className="text-sm font-bold text-emerald-300">
                  {item.number}
                </span>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RITUALS AND NATURAL SPACES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Ritual Context
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Spaces within community rituals
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                Sacred and natural spaces traditionally provided settings for
                important community rituals and cultural practices.
              </p>

              <p>
                During rites of passage such as initiation, marriage and
                communal ceremonies, natural spaces could serve as ceremonial
                venues.
              </p>

              <p>
                Their use reinforced the connection between cultural practices
                and the environment and reflected the understanding that human
                life is closely linked to nature.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Cultural practices associated with heritage spaces
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Communal prayers",
                "Traditional rituals",
                "Initiation ceremonies",
                "Marriage-related ceremonies",
                "Conflict resolution",
                "Community meetings",
                "Cultural gatherings",
                "Knowledge transmission",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4"
                >
                  <span className="text-emerald-700">◆</span>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ORAL TRADITIONS AND PLACE
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Oral Heritage
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Stories embedded in the landscape
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              In Embu and Mbeere oral traditions, sacred and natural spaces
              feature prominently in myths, legends and historical accounts.
              Stories about rivers, mountains, caves, forests and large
              indigenous trees explain community origins, moral lessons,
              migration histories, heroic deeds and interactions between humans
              and spiritual forces.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              These narratives strengthen the cultural importance of the
              landscape and help maintain collective memory across generations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Origins
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Places preserve narratives concerning community and clan
                origins.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Migration
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Landscapes preserve memories and narratives associated with
                migration histories.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Moral Knowledge
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Stories connected to particular places transmit values, lessons
                and community expectations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENVIRONMENTAL CONSERVATION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Environmental Heritage
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Cultural beliefs and environmental stewardship
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Traditional beliefs and taboos frequently regulated how forests,
              water sources and other natural resources were used.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              As a result, sacred sites could function as reservoirs of
              biodiversity and ecological knowledge while encouraging
              sustainable relationships with the natural environment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Environmental values documented
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Forest protection",
                  text: "Restrictions on cutting trees helped protect sacred forest environments.",
                },
                {
                  title: "Water protection",
                  text: "Cultural significance encouraged respect for rivers and water sources.",
                },
                {
                  title: "Wildlife protection",
                  text: "Restrictions on hunting in certain areas supported conservation.",
                },
                {
                  title: "Sustainable use",
                  text: "Traditional practices encouraged responsible relationships with natural resources.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h4 className="font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IDENTITY
      ========================================================== */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Identity and Belonging
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Heritage sites as markers of community identity
            </h2>

            <p className="mt-5 leading-8 text-emerald-50/80">
              Sacred sites contribute significantly to community identity.
              They symbolize the historical origins of clans and families,
              preserve memories of important events and strengthen people's
              sense of belonging.
            </p>

            <p className="mt-5 leading-8 text-emerald-50/80">
              Many community members view these places as physical reminders of
              their ancestry and cultural roots.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Ancestry",
                text: "Places connect contemporary communities with ancestral histories.",
              },
              {
                title: "Belonging",
                text: "Heritage landscapes reinforce community attachment and identity.",
              },
              {
                title: "Continuity",
                text: "Sites provide physical settings through which cultural knowledge can continue across generations.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-800 bg-emerald-900/50 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-emerald-50/70">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LIVING CULTURAL LANDSCAPES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Documentation Summary
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Heritage spaces as living cultural landscapes
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              Sacred and natural spaces are not merely geographical locations.
              Within the documented Embu and Mbeere cultural knowledge systems,
              they embody spirituality, history, identity, education,
              environmental stewardship and social unity.
            </p>

            <p>
              Their significance emerges from the relationships between people,
              places, ancestors, the environment and Ngai, as well as from the
              stories, rituals and social practices associated with them.
            </p>

            <p>
              Through continued documentation, preservation and culturally
              appropriate use, these spaces can contribute to sustaining
              community heritage and indigenous knowledge across generations.
            </p>
          </div>
        </div>

        {/* SUMMARY GRID */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Spirituality",
            "History",
            "Identity",
            "Education",
            "Environmental stewardship",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <p className="font-bold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          RELATED DOMAINS
      ========================================================== */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Continue Exploring
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Other CIS-ETHN heritage domains
              </h2>

              <p className="mt-2 text-slate-600">
                Explore other dimensions of documented Embu and Mbeere cultural
                knowledge.
              </p>
            </div>

            <Link
              href="/heritage"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View all domains →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

