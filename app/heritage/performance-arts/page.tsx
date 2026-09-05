import Link from "next/link";

export default function PerformanceArtsPage() {
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
              Performance Arts
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Documentation of traditional music, dance, poetry, storytelling
              and dramatic forms of cultural expression within the Embu and
              Mbeere communities.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOMAIN OVERVIEW
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Domain Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Performance as a living form of cultural knowledge
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                The Embu and Mbeere communities have a rich tradition of
                performance arts that serves as an important means of education,
                entertainment, cultural expression, socialization and
                preservation of indigenous knowledge.
              </p>

              <p>
                Performance arts combine music, dance, poetry, storytelling,
                drama and instrumental accompaniment. These forms of expression
                are deeply integrated into community life and are closely
                connected to ceremonies, seasons, social relationships and
                stages of life.
              </p>

              <p>
                Traditional performances provide a means through which cultural
                values, historical knowledge, community concerns and social
                teachings are communicated across generations.
              </p>
            </div>
          </div>

          {/* KEY FUNCTIONS */}
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Functions of performance arts
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Cultural education",
                "Entertainment",
                "Cultural expression",
                "Socialization",
                "Historical preservation",
                "Community cohesion",
                "Knowledge transmission",
                "Ceremonial expression",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
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
                  What forms of performance arts (dance, drama, music, poetry)
                  are practiced in Embu/Mbeere community, and who performs
                  them?
                </h2>
              </div>
            </div>
          </div>

          {/* =====================================================
              TRADITIONAL MUSIC AND DANCE
          ====================================================== */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Core Performance Form
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              Traditional music and dance — rwĩmbo
            </h3>

            <p className="mt-5 max-w-5xl leading-8 text-slate-600">
              The most common form of performance art is traditional music and
              dance (rwĩmbo). In Embu and Mbeere culture, singing and dancing
              are inseparable activities and are collectively referred to as
              rwĩmbo.
            </p>

            <p className="mt-5 max-w-5xl leading-8 text-slate-600">
              These performances communicate social values, historical events,
              community concerns and cultural teachings while providing
              entertainment and strengthening social bonds.
            </p>
          </div>

          {/* =====================================================
              DANCE FORMS
          ====================================================== */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Documented traditional dance forms
            </h3>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {/* MWINJIRO */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  01
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Mwĩnjĩro
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Mwĩnjĩro is a popular traditional dance performed by both
                  men and women. It is characterized by rhythmic drumming,
                  singing and coordinated dance movements.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  The dance often takes place during social gatherings and
                  festive occasions and encourages community participation.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Performers
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Men and women
                  </p>
                </div>
              </article>

              {/* KIRAKA */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  02
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Kĩraka
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Kĩraka is traditionally associated with the Mbeere community.
                  It involves energetic drumming, vigorous dancing, singing and
                  acrobatic displays.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Male performers often play a leading role, demonstrating
                  strength, agility and endurance.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Performers
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Primarily men
                  </p>
                </div>
              </article>

              {/* KIGARU */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  03
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Kĩgarũ
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Kĩgarũ is predominantly performed by women, especially during
                  harvest periods.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Its songs celebrate successful harvests, agricultural
                  productivity and communal cooperation.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Performers
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Primarily women
                  </p>
                </div>
              </article>

              {/* NJAII */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  04
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Njaii
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Njaii is commonly performed by women and girls after harvest
                  seasons.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  In addition to entertainment, its songs communicate social
                  messages, political commentary, community concerns and moral
                  teachings.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Performers
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Women and girls
                  </p>
                </div>
              </article>

              {/* GUTEMA MWARE */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  05
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Gūtema Mware
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Gūtema Mware is associated with circumcision ceremonies
                  (Irua) and is performed during initiation periods.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Both men and women may participate, while songs encourage
                  initiates and reinforce cultural teachings regarding
                  adulthood and responsibility.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Context
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Irua and initiation ceremonies
                  </p>
                </div>
              </article>

              {/* MUKUOGO */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  06
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Mūkuogo
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Mūkuogo emerged later and became popular around schools and
                  churches.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Men, women, boys and girls participate, reflecting the
                  interaction between traditional and modern influences.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Performers
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Men, women, boys and girls
                  </p>
                </div>
              </article>

              {/* KIRICIMACI */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  07
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Kĩrĩcimaci (Kĩvunjio)
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Kĩrĩcimaci (Kĩvunjio) became associated with Christmas
                  celebrations.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Groups move from place to place singing, dancing and
                  collecting contributions for community festivities.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Context
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Christmas celebrations and community festivities
                  </p>
                </div>
              </article>

              {/* NDACI */}
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  08
                </span>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  Ndaci
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Ndaci is a social dance traditionally performed by young men
                  and unmarried women.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  It provides opportunities for interaction, courtship,
                  socialization and entertainment within the community.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Performers
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Young men and unmarried women
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* =====================================================
              MUSICAL INSTRUMENTS
          ====================================================== */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-slate-900">
              Traditional musical instruments
            </h3>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Traditional instruments provide rhythm, melody and ceremonial
              significance during performances. Their use forms an important
              component of the documented performance heritage.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                "Ngūtha",
                "Ngotho",
                "Coro",
                "Ciĩgamba",
                "Mūtūrirū",
                "Wandĩndĩ",
                "Nduramu",
                "Tamburini",
              ].map((instrument) => (
                <div
                  key={instrument}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <p className="font-bold text-slate-900">{instrument}</p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              POETRY
          ====================================================== */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Poetry
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Poetic expression and cultural wisdom
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Poetry is another important performance art. Oral poetry appears
                in songs, praise recitations, blessings, proverbs (nthimo) and
                ceremonial speeches.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Elders, traditional leaders and skilled performers use poetic
                language to teach wisdom, preserve history and express cultural
                values.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Storytelling and Drama
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Dramatic storytelling
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Storytelling performances contain important dramatic elements.
                Storytellers use voice variation, gestures, audience
                participation, song and imitation of characters to make
                narratives engaging and memorable.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Through these techniques, oral narratives become participatory
                performances rather than simple spoken accounts.
              </p>
            </article>
          </div>

          {/* =====================================================
              PERFORMERS
          ====================================================== */}
          <div className="mt-14 rounded-3xl bg-emerald-950 p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Community Participation
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Who performs the arts?
            </h3>

            <p className="mt-5 max-w-4xl leading-8 text-emerald-50/80">
              Performance arts are practiced by diverse groups within Embu and
              Mbeere society. Participation may depend on age, gender, social
              role and the nature of the event being celebrated.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Elders",
                "Women",
                "Men",
                "Youth",
                "Children",
                "Initiation groups",
                "Church choirs",
                "Community cultural groups",
              ].map((group) => (
                <div
                  key={group}
                  className="rounded-xl border border-emerald-800 bg-emerald-900/50 p-4 text-sm font-semibold"
                >
                  {group}
                </div>
              ))}
            </div>
          </div>
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
                  How do seasons, ceremonies, or life stages influence the
                  performance, teaching, or style of these arts?
                </h2>
              </div>
            </div>
          </div>

          {/* =====================================================
              SEASONAL INFLUENCE
          ====================================================== */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-700 bg-slate-800 p-7 lg:col-span-2">
              <p className="text-sm font-semibold text-emerald-300">
                01 • Seasonal Influence
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Agricultural seasons and performance
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Agricultural seasons greatly influence traditional performances.
                During planting, weeding, harvesting and threshing periods,
                songs are performed to encourage cooperation, reduce fatigue and
                celebrate communal achievements.
              </p>

              <p className="mt-5 leading-8 text-slate-300">
                The themes of these performances often focus on abundance, hard
                work, gratitude, environmental conditions and community
                prosperity.
              </p>
            </article>

            <aside className="rounded-2xl bg-emerald-950 p-7">
              <h4 className="text-lg font-bold">
                Seasonally associated performances
              </h4>

              <div className="mt-5 space-y-3">
                {[
                  "Kĩgarũ — harvest celebrations",
                  "Njaii — post-harvest celebrations",
                  "Work songs — collective farming activities",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-800 p-4 text-sm text-emerald-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>

          {/* =====================================================
              CEREMONIAL INFLUENCE
          ====================================================== */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold">
              Ceremonies and performance
            </h3>

            <p className="mt-4 max-w-4xl leading-8 text-slate-300">
              Major ceremonies shape the nature of performance arts. Different
              rituals require specific songs, dances and forms of artistic
              expression.
            </p>

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {/* IRUA */}
              <article className="rounded-2xl border border-slate-700 bg-slate-800 p-7">
                <p className="text-sm font-bold text-emerald-300">
                  Irua
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Circumcision ceremonies
                </h4>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  <li>• Special initiation songs are performed.</li>
                  <li>
                    • Performances encourage bravery and discipline.
                  </li>
                  <li>
                    • Elders use songs and poetic expressions to teach
                    responsibilities.
                  </li>
                  <li>
                    • Gūtema Mware is specifically associated with initiation.
                  </li>
                </ul>
              </article>

              {/* UTHONI */}
              <article className="rounded-2xl border border-slate-700 bg-slate-800 p-7">
                <p className="text-sm font-bold text-emerald-300">
                  Uthoni
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Marriage ceremonies
                </h4>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  <li>
                    • Songs celebrate family unity and the joining of clans.
                  </li>
                  <li>
                    • Dances create a festive atmosphere.
                  </li>
                  <li>
                    • Poetic speeches and blessings reinforce social values.
                  </li>
                </ul>
              </article>

              {/* RELIGIOUS */}
              <article className="rounded-2xl border border-slate-700 bg-slate-800 p-7">
                <p className="text-sm font-bold text-emerald-300">
                  Religious and Community Events
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Songs and communal expression
                </h4>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  <li>
                    • Songs express gratitude, petitions, praise and devotion.
                  </li>
                  <li>
                    • Traditional instruments may accompany communal worship.
                  </li>
                  <li>
                    • Performances support community celebrations.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* =====================================================
              LIFE STAGES
          ====================================================== */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold">
              Influence of life stages
            </h3>

            <p className="mt-4 max-w-4xl leading-8 text-slate-300">
              Different age groups perform different artistic forms and learn
              cultural knowledge appropriate to their stage of life.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Children",
                  text: "Learn songs, stories, riddles (ndaĩ) and simple dances through participation in family and community activities.",
                },
                {
                  title: "Youth",
                  text: "Participate in dances such as Ndaci, developing confidence, social skills and preparation for adult roles.",
                },
                {
                  title: "Adults",
                  text: "Perform songs and dances associated with marriage, farming, leadership and community responsibilities.",
                },
                {
                  title: "Elders",
                  text: "Serve as teachers, composers, storytellers, judges and custodians of cultural knowledge.",
                },
              ].map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-7"
                >
                  <h4 className="text-xl font-bold">{group.title}</h4>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {group.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEACHING AND TRANSMISSION
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Knowledge Transmission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              How performance arts are taught
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Traditionally, performance arts are taught through observation,
              participation, imitation and mentorship rather than formal
              instruction.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Children and young people learn by attending ceremonies, joining
              community performances and practicing under the guidance of
              experienced performers and elders.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Observation",
                text: "Young people observe experienced performers during community events.",
              },
              {
                title: "Participation",
                text: "Learners join performances and gradually develop practical skills.",
              },
              {
                title: "Imitation",
                text: "Movements, songs and performance techniques are learned by reproducing established forms.",
              },
              {
                title: "Mentorship",
                text: "Experienced performers and elders guide learners in appropriate cultural practices.",
              },
            ].map((method) => (
              <article
                key={method.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {method.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {method.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CULTURAL FUNCTIONS
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Cultural Significance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Performance arts as instruments of cultural continuity
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Through their connection to seasons, ceremonies and life stages,
              performance arts function as powerful mechanisms for preserving
              Embu and Mbeere history, values, beliefs, language and cultural
              identity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "History",
              "Values",
              "Beliefs",
              "Language",
              "Identity",
              "Social cohesion",
              "Education",
              "Entertainment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENTATION SUMMARY
      ========================================================== */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Documentation Summary
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              A living system of cultural expression
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-emerald-50/80">
              <p>
                The documented performance arts of the Embu and Mbeere
                communities demonstrate a close relationship between artistic
                expression and everyday community life.
              </p>

              <p>
                Music, dance, poetry and storytelling are not isolated forms of
                entertainment. They communicate knowledge, reinforce social
                relationships, mark important events and provide mechanisms for
                transmitting cultural values between generations.
              </p>

              <p>
                Seasonal activities, ceremonies and life stages influence what
                is performed, who participates and what messages are
                communicated. Elders and experienced performers therefore play a
                significant role in maintaining the continuity and authenticity
                of these cultural forms.
              </p>

              <p>
                The continued documentation of performance arts contributes to
                the preservation of indigenous knowledge and provides future
                generations with access to the cultural expressions of the Embu
                and Mbeere communities.
              </p>
            </div>
          </div>
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

