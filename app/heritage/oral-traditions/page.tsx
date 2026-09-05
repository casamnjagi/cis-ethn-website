import Link from "next/link";

export default function OralTraditionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 opacity-95" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              CIS-ETHN • Cultural Heritage Documentation
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Oral Traditions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Documentation of oral knowledge, narratives, songs, proverbs,
              riddles and performance traditions that contribute to community
              memory, cultural identity and intergenerational knowledge
              transmission among the Embu and Mbeere communities.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Domain Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Oral knowledge as community memory
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The Embu and Mbeere communities possess a rich oral tradition
                that has historically served as a means of education,
                entertainment, socialization and preservation of cultural
                values. Oral forms of knowledge provided important mechanisms
                through which communities communicated history, moral
                principles, social expectations and collective experience.
              </p>

              <p>
                Knowledge was primarily transmitted through spoken word and
                performance. Storytelling, riddles, proverbs, songs, dances,
                myths, legends and other narrative forms enabled knowledge to
                move from one generation to another while remaining embedded
                within everyday social and cultural life.
              </p>

              <p>
                These traditions were therefore not simply forms of
                entertainment. They constituted important systems of
                education, memory, socialization and cultural expression,
                connecting younger generations with the knowledge and
                experiences of elders.
              </p>
            </div>
          </div>

          {/* QUICK FACTS */}
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-lg font-bold text-slate-900">
              Documented forms
            </h3>

            <div className="mt-6 space-y-4">
              {[
                ["01", "Stories", "ng’ano / rũgano"],
                ["02", "Riddles", "ndaĩ / ndaῑ"],
                ["03", "Proverbs", "nthimo"],
                ["04", "Songs & dances", "rwĩmbo"],
                ["05", "Myths & legends", "Oral narratives"],
                ["06", "Ogre stories", "marimūrimū"],
              ].map(([number, title, term]) => (
                <div
                  key={number}
                  className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex gap-4">
                    <span className="text-sm font-bold text-emerald-700">
                      {number}
                    </span>

                    <div>
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{term}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* MAJOR ORAL TRADITIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              01 • Forms of Oral Tradition
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Narrative, intellectual and musical traditions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The documented oral traditions comprise interconnected forms of
              narrative, intellectual, moral and musical expression. Each form
              had particular social functions while contributing collectively
              to the preservation of community knowledge.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* STORYTELLING */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-sm font-semibold text-emerald-700">
                NG’ANO / RŨGANO
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Storytelling
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Storytelling (ng’ano / rũgano) was traditionally used to teach
                morals, discipline, courage, wisdom and appropriate social
                behaviour. Stories frequently featured animals behaving like
                human beings, including squirrels, lions and cockerels.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Many narratives communicated the consequences of individual
                behaviour. Honesty, kindness and intelligence were commonly
                associated with positive outcomes, while undesirable behaviour
                could result in misfortune.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Storytelling was interactive. Listeners participated through
                  responses, questions and discussions, including{" "}
                  <strong className="text-slate-800">
                    kũigua na kũrĩra kwa gĩkeno
                  </strong>{" "}
                  during narration contexts of{" "}
                  <strong className="text-slate-800">kũgana ngano</strong>.
                </p>
              </div>
            </article>

            {/* RIDDLES */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-sm font-semibold text-emerald-700">
                NDAĨ / NDAῑ
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Riddles
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Riddles (ndaĩ) functioned as intellectual exercises that
                developed memory, reasoning, observation and language skills.
                A teller posed a puzzle based on everyday objects, experiences
                or events, requiring the respondent to identify the answer
                quickly.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Failure to answer could result in playful exchanges involving
                symbolic gifts of livestock through expressions such as{" "}
                <strong className="text-slate-800">“cukia mbũri”</strong>.
              </p>
            </article>

            {/* PROVERBS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-sm font-semibold text-emerald-700">
                NTHIMO
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Proverbs
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Proverbs (nthimo) were wise sayings mainly associated with
                elders and respected community members. Through metaphorical
                language, they communicated deeper meanings concerning life,
                leadership, justice, morality and social relationships.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Proverbs enabled speakers to approach complex matters
                indirectly while demonstrating wisdom and experience. They
                were particularly important in{" "}
                <strong className="text-slate-800">athuri a kĩama</strong>{" "}
                (council of elders) discussions and in the settlement of
                disputes (kwĩtikania).
              </p>
            </article>

            {/* SONGS AND DANCES */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-sm font-semibold text-emerald-700">
                RWĨMBO
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Traditional songs and dances
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Traditional songs and dances (rwĩmbo) formed an important part
                of Embu and Mbeere oral tradition. Song and dance were
                inseparable and were collectively understood as rwĩmbo.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Performances were accompanied by traditional instruments
                including{" "}
                <strong className="text-slate-800">
                  ngũtha, coro, ciĩgamba, nduramu, ngengere,
                </strong>{" "}
                and{" "}
                <strong className="text-slate-800">mũrũri</strong>.
                Performers could sing while dancing in groups, circles or
                organized formations known as{" "}
                <strong className="text-slate-800">
                  katika / matĩĩri ma rwĩmbo
                </strong>.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TRADITIONAL PERFORMANCE FORMS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Traditional Performance Forms
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Songs and dances across community life
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Different forms of rwĩmbo were associated with particular
            activities, seasons, ceremonies and social settings. The documented
            forms demonstrate how oral performance was closely connected to
            community life.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <div className="divide-y divide-slate-200">
            {[
              {
                name: "Mwĩnjĩro",
                description:
                  "Performed by men and women at night with drumming and dancing (ũtukũ).",
              },
              {
                name: "Kĩraka",
                description:
                  "A vigorous form involving drumming, singing and acrobatic performances by men, particularly in njamba cia ita contexts.",
              },
              {
                name: "Kĩgarũ",
                description:
                  "Performed mainly by women during harvest seasons (kũketha / ῑketha).",
              },
              {
                name: "Njaii",
                description:
                  "A women’s and girls’ dance performed after harvest, often carrying social and political messages during gĩcagi gatherings.",
              },
              {
                name: "Gūtema Mware",
                description:
                  "Performed during circumcision ceremonies (ĩrua).",
              },
              {
                name: "Ngongore / Kambera",
                description:
                  "Performance forms that emerged during different historical periods and reflected changing social and religious influences.",
              },
              {
                name: "Mūkuogo",
                description:
                  "A traditional performance form associated with changing social and religious contexts.",
              },
              {
                name: "Kĩrĩcimaci",
                description:
                  "A performance tradition reflecting changing community and historical contexts.",
              },
              {
                name: "Ndaci",
                description:
                  "A traditional dance associated with organized social performance and village cultural spaces.",
              },
            ].map((item, index) => (
              <div
                key={item.name}
                className="grid gap-4 p-6 md:grid-cols-[80px_220px_1fr]"
              >
                <span className="font-mono text-sm text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-bold text-slate-900">{item.name}</h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETTINGS AND EVENTS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              02 • Performance Contexts
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              When and where oral traditions were performed
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Oral traditions were embedded within everyday family life,
              community gatherings, agricultural activities, ceremonies,
              dispute settlement and other important social events. Their
              performance therefore depended on both the type of knowledge and
              the occasion.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Family settings",
                terms: "mũciĩ / nyomba",
                text: "Storytelling and riddles were commonly performed within family settings, particularly during evening gatherings.",
              },
              {
                title: "Evening storytelling",
                terms: "ũtukũ",
                text: "Mothers, grandmothers and older siblings could narrate stories or pose riddles while children waited for dinner (irio).",
              },
              {
                title: "Community meetings",
                terms: "matĩĩri",
                text: "Proverbs were used by elders and community leaders during meetings, discussions and decision-making.",
              },
              {
                title: "Council of elders",
                terms: "athuri / athuri a kĩama",
                text: "Elders used proverbs and culturally grounded forms of speech when addressing community matters and disputes.",
              },
              {
                title: "Ceremonial occasions",
                terms: "ĩrua / mambura",
                text: "Songs and dances formed part of important ceremonies including circumcision ceremonies.",
              },
              {
                title: "Agricultural activities",
                terms: "kũrima / ῑrĩma",
                text: "Songs accompanied farming group work, harvest activities and grain threshing.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
              >
                <p className="text-sm font-semibold text-emerald-300">
                  {item.terms}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Cultural and Social Events
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Oral traditions across community activities
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Circumcision ceremonies", "mambura / ῑrua"],
            ["Farming group work", "kũrima / ῑrĩma"],
            ["Harvest celebrations", "kũketha / ῑketha"],
            ["Grain threshing", "ῑvūra"],
            ["Marriage negotiations", "ũviki / ūthoni"],
            ["Political mobilization", "njamba cia ita"],
            ["Entertainment gatherings", "gĩcagi"],
            ["Dance gatherings", "matĩĩri ma ndaci"],
            ["Community meetings", "matĩĩri"],
          ].map(([event, term]) => (
            <div
              key={event}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{event}</p>
              <p className="mt-2 text-sm text-emerald-700">{term}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMERS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Knowledge Bearers
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Who performed and transmitted the knowledge?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Oral knowledge transmission involved different members of the
              community according to age, gender, social position, activity
              and occasion. Elders played a particularly important role in
              maintaining cultural memory, while children and young people
              participated as listeners, learners and performers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Elders",
                term: "athuri",
                text: "Responsible for transmitting wisdom, proverbs, social values and community knowledge.",
              },
              {
                title: "Mothers & grandmothers",
                term: "mũtumia / mwongia / cũcũ",
                text: "Important storytellers within family settings and evening storytelling sessions.",
              },
              {
                title: "Children",
                term: "mwana / kaana",
                text: "Participated in storytelling and riddles and developed knowledge through listening and response.",
              },
              {
                title: "Men, women & youth",
                term: "Community performers",
                text: "Participated in songs, dances and performances associated with ceremonies, harvests and social gatherings.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-emerald-700">
                  {item.term}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFIC PERFORMANCE GROUPS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Performance Groups
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Participation by age and community group
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <div className="divide-y divide-slate-200">
            {[
              [
                "Mwĩnjĩro",
                "Men and women",
                "matĩĩri ma nyĩmbo",
              ],
              [
                "Kĩraka",
                "Mbeere drummers and male performers",
                "ngũtha / nduramu",
              ],
              [
                "Kĩgarũ",
                "Women",
                "mũgũnda contexts",
              ],
              [
                "Njaii",
                "Women and girls",
                "gĩcagi gatherings",
              ],
              [
                "Gūtema Mware",
                "Men and women",
                "ĩrua",
              ],
              [
                "Kĩrĩcimaci / Kĩvunjio",
                "Children and youth",
                "kanitha / church gatherings",
              ],
              [
                "Mūkuogo",
                "Adults, boys and girls",
                "cukuru / kanitha",
              ],
              [
                "Ndaci",
                "Young men and unmarried women",
                "matĩĩri / ῑtĩĩri",
              ],
            ].map(([performance, participants, setting]) => (
              <div
                key={performance}
                className="grid gap-3 p-6 md:grid-cols-[220px_1fr_1fr]"
              >
                <p className="font-bold text-slate-900">{performance}</p>

                <p className="text-slate-600">{participants}</p>

                <p className="text-sm font-medium text-emerald-700">
                  {setting}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE SPACES */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Cultural Spaces
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Places of oral performance and social interaction
              </h2>

              <p className="mt-5 leading-8 text-emerald-50/80">
                Traditional performances took place in designated dance
                grounds known as{" "}
                <strong className="text-white">
                  matĩĩri ma nyĩmbo
                </strong>{" "}
                or{" "}
                <strong className="text-white">
                  ivaro cia ndaci
                </strong>
                . These spaces were found in nearly every village (gĩcagi) and
                served as important centres of social interaction and cultural
                expression.
              </p>

              <p className="mt-5 leading-8 text-emerald-50/80">
                The existence of these spaces demonstrates that oral tradition
                was connected not only to spoken language but also to physical
                places where people gathered, performed, learned and
                participated in community life.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-800 bg-emerald-900/50 p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Documented cultural spaces
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xl font-bold">matĩĩri ma nyĩmbo</p>
                  <p className="mt-1 text-sm text-emerald-100/70">
                    Traditional dance and song grounds.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">ivaro cia ndaci</p>
                  <p className="mt-1 text-sm text-emerald-100/70">
                    Spaces associated with traditional Ndaci performances.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">gĩcagi</p>
                  <p className="mt-1 text-sm text-emerald-100/70">
                    Village and community social spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE TRANSMISSION */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Intergenerational Transmission
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Preserving cultural memory across generations
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              Oral traditions provided a mechanism through which cultural
              knowledge, history, social norms and communal identity were
              continually transmitted from elders (athuri) to younger
              generations.
            </p>

            <p>
              The transmission process was participatory. Children and young
              people learned through listening, responding, observing
              performances and eventually participating in the performance
              themselves. In this way, knowledge was maintained through active
              community practice rather than through written records alone.
            </p>

            <p>
              Entertainment was also an important component of this process.
              Storytelling, songs, riddles and dances created opportunities for
              people to gather, interact and experience cultural knowledge in
              socially meaningful contexts.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURAL SIGNIFICANCE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Cultural Significance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Functions of oral traditions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Education",
                text: "Teaching children and community members about morals, behaviour, wisdom and social expectations.",
              },
              {
                title: "Cultural memory",
                text: "Preserving community history, experiences and knowledge through spoken and performed forms.",
              },
              {
                title: "Socialization",
                text: "Introducing younger generations to community values, relationships and accepted social practices.",
              },
              {
                title: "Entertainment",
                text: "Creating opportunities for enjoyment, participation and collective social interaction.",
              },
              {
                title: "Social cohesion",
                text: "Strengthening relationships and communal unity through shared cultural experiences (mũgongo).",
              },
              {
                title: "Moral instruction",
                text: "Communicating lessons concerning honesty, kindness, courage, discipline, justice and responsibility.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTING SUMMARY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Documentation Summary
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Oral traditions as living cultural knowledge
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            The documentation demonstrates that oral traditions among the Embu
            and Mbeere communities constitute a broad and interconnected body
            of cultural knowledge. Stories, riddles, proverbs, songs and dances
            served educational, social, ceremonial and entertainment purposes.
            Their continued documentation is important for understanding how
            cultural knowledge has historically been created, transmitted and
            maintained within community life.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl font-bold">16</p>
              <p className="mt-1 text-sm text-slate-300">
                CIS-ETHN heritage domains
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl font-bold">Oral</p>
              <p className="mt-1 text-sm text-slate-300">
                Knowledge transmission
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl font-bold">Living</p>
              <p className="mt-1 text-sm text-slate-300">
                Community heritage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED DOMAINS */}
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

