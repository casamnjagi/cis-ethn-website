import Link from "next/link";

export default function RitualsAndCulturalPracticesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              CIS-ETHN • Cultural Heritage Documentation
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Rituals and Cultural Practices
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Documentation of cultural ceremonies, rites, beliefs and
              practices that mark important stages of life, strengthen social
              cohesion and sustain cultural identity among the Embu and Mbeere
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* DOMAIN INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Domain Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Rituals as systems of cultural continuity
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The Embu and Mbeere communities highly value rituals and
                cultural practices because they mark important stages of life,
                strengthen social cohesion (mũgongo), preserve ancestral
                traditions and maintain harmony between the living, ancestors
                (ngomi) and God (Ngai).
              </p>

              <p>
                These practices are deeply embedded within community beliefs
                and social institutions. They provide culturally recognized
                ways of responding to birth, childhood, adulthood, marriage,
                agricultural activities, death and other important transitions
                in community life.
              </p>

              <p>
                Rituals therefore function as more than ceremonial activities.
                They provide mechanisms through which knowledge, responsibilities,
                moral values, relationships and community identity are passed
                from one generation to another.
              </p>
            </div>
          </div>

          {/* KEY BELIEFS */}
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-lg font-bold text-slate-900">
              Core cultural concepts
            </h3>

            <div className="mt-6 space-y-5">
              {[
                ["Ngai", "God and ultimate source of life and protection"],
                ["ngomi", "Ancestors and ancestral connection"],
                ["mũgongo", "Social cohesion and community unity"],
                ["irathimo", "Blessings"],
                ["thayũ", "Peace"],
                ["mũgũnda", "Land and agricultural context"],
              ].map(([term, meaning]) => (
                <div
                  key={term}
                  className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                >
                  <p className="font-bold text-slate-900">{term}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {meaning}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* MAJOR RITUALS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              01 • Major Rituals
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Rituals across the life course and community calendar
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The documented practices cover major stages of individual and
              family life, agricultural activities, community wellbeing and
              relationships with the spiritual world.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* CIRCUMCISION */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">ĨRUA</p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Circumcision and initiation
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Circumcision (ĩrua) is described as an important traditional
                rite of passage from childhood to adulthood. It is understood
                not merely as a physical procedure but as a social and cultural
                institution through which young people (mwanake / mwĩrĩtu) are
                formally introduced to adult responsibilities.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Initiates receive teachings concerning morality, respect,
                marriage (ũviki / ũthoni), leadership and community
                responsibilities. The ceremony is accompanied by songs and
                dances (rwĩmbo), blessings (irathimo) and communal
                celebrations.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Traditionally, completion of ĩrua was associated with
                  maturity, courage, discipline and full membership in
                  community life.
                </p>
              </div>
            </article>

            {/* MARRIAGE */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                ŨVIKI / ŨTHONI
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Marriage
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Marriage (ũviki / ũthoni) is regarded as a union involving
                families rather than only two individuals. The process
                traditionally includes courtship, negotiations, payment of
                bride wealth (rũracio), blessings and community approval.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Marriage symbolizes continuity of family lineage (mũciĩ /
                mũsiĩ wetũ) and strengthens relationships between families and
                clans. It is associated with family stability, honour and
                social recognition.
              </p>
            </article>

            {/* BIRTH AND NAMING */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                MWANA / KAANA
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Birth and naming
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The birth of a child (mwana / kaana) is considered a blessing
                from Ngai and the ancestors (ngomi). Naming practices follow
                established kinship patterns and may involve naming children
                after grandparents and respected relatives.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Naming traditions such as Rietawa and Ngerana carry cultural
                meaning and contribute to the preservation of family memory and
                heritage.
              </p>
            </article>

            {/* RAIN AND THANKSGIVING */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                KŨKETHA / ῙKETHA
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Rain, thanksgiving and harvest practices
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Rituals connected to rainmaking, thanksgiving, harvest and
                protection reflect beliefs concerning the relationship between
                Ngai, nature, fertility, rainfall (mbura), health and
                prosperity.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                During periods of drought, disease or hardship, elders (athuri)
                and spiritual leaders traditionally organized communal prayers
                seeking divine intervention.
              </p>
            </article>

            {/* FUNERAL */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">KĨKUŨ</p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Funeral and ancestral remembrance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Funeral and ancestral remembrance practices occupy an important
                place within community life. Death (kĩkuũ) is understood as a
                transition from the physical world to the spiritual realm.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Funeral ceremonies honour the deceased, provide comfort to the
                bereaved and reaffirm family and community bonds. Respect for
                ancestors (ngomi) is associated with blessings and social
                harmony.
              </p>
            </article>

            {/* AGRICULTURAL RITUALS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                KŨVANDA / MŨGŨNDA
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Agricultural rituals
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Agricultural rituals were performed before planting (kũvanda)
                and after harvesting to express gratitude for fertility and
                abundance (mũgũnda, ῑketha).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                These practices reinforced communal cooperation and respect for
                the land (mũthetu), linking agricultural production with
                cultural values and spiritual beliefs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BELIEF SYSTEM */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Cultural Belief System
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Relationships between the living, ancestors and Ngai
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                The documented ritual practices reflect a worldview in which
                human life, community relationships, ancestral connections and
                divine power are interconnected.
              </p>

              <p>
                Ngai is recognized as the supreme creator and provider, while
                ancestors (ngomi) remain an important part of the community's
                understanding of continuity between generations.
              </p>

              <p>
                Ritual observance is therefore associated with maintaining
                social order, seeking blessings, protecting the community and
                ensuring continuity between generations.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Cultural Relationship
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-lg font-bold">Ngai</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Supreme creator and provider associated with life,
                  protection, rainfall, fertility and prosperity.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-lg font-bold">ngomi</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Ancestors whose remembrance forms part of cultural
                  continuity and community identity.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-lg font-bold">mũgongo</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Social cohesion and unity reinforced through shared ritual
                  participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL LEADERS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              02 • Ritual Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Custodians of ritual knowledge and authority
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Traditional rituals are generally led by people whose authority
              derives from age, wisdom, experience, moral standing and
              knowledge of cultural traditions. Leadership varies according to
              the nature of the ceremony and the social authority required.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                term: "athuri",
                title: "Respected elders",
                text: "Custodians of cultural knowledge who guide ceremonies, offer blessings and ensure customary procedures are followed.",
              },
              {
                term: "athamaki",
                title: "Community elders",
                text: "Senior community figures who provide leadership during major communal ceremonies and cultural proceedings.",
              },
              {
                term: "mũndũ mũgo",
                title: "Spiritual specialist",
                text: "A traditional specialist associated with ritual and spiritual knowledge.",
              },
              {
                term: "athuri a mũciĩ",
                title: "Family elders",
                text: "Senior relatives and clan representatives who guide family-based ceremonies and formal proceedings.",
              },
            ].map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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

      {/* RESPONSIBILITIES OF LEADERS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Ritual Responsibilities
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Roles performed by ritual leaders
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Offering blessings",
              "irathimo",
              "Leaders offer blessings and invoke wellbeing, prosperity and protection."
            ],
            [
              "Guiding ceremonies",
              "Customary procedures",
              "Elders guide participants through established ceremonial processes."
            ],
            [
              "Interpreting traditions",
              "Cultural knowledge",
              "Ritual leaders explain and preserve the meanings attached to cultural practices."
            ],
            [
              "Invoking Ngai",
              "Prayer",
              "Communal prayers seek blessings, fertility, rain, peace and protection."
            ],
            [
              "Representing families",
              "athuri a mũciĩ",
              "Senior relatives make formal declarations and represent family interests."
            ],
            [
              "Transmitting knowledge",
              "Intergenerational learning",
              "Elders pass cultural values, beliefs and responsibilities to younger generations."
            ],
          ].map(([title, term, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm font-semibold text-emerald-700">{term}</p>

              <h3 className="mt-2 text-lg font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PRAYER AND RITUAL LANGUAGE */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                03 • Prayer and Ritual Expressions
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Ritual language, blessings and communal prayer
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Traditional prayers are commonly directed to Ngai, who is
                recognized as the supreme creator and provider. Elders invoke
                Ngai for blessings, fertility, health, rain (mbura), peace
                (thayũ), protection and prosperity.
              </p>

              <p className="mt-5 leading-8 text-slate-300">
                Prayer may be delivered in a solemn and respectful manner and
                can occur within culturally significant spaces. Participants
                may respond communally, creating a shared ceremonial
                experience.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Key ritual themes
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Respect for Ngai",
                  "Respect for elders (athuri) and ancestors (ngomi)",
                  "Unity of the family and clan (mũciĩ)",
                  "Courage and responsibility",
                  "Fertility and prosperity (mũgũnda, mbura)",
                  "Protection from misfortune and disease",
                  "Peace and community wellbeing (thayũ)",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-4"
                  >
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SACRED SPACES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Sacred and Ritual Spaces
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Places associated with ritual activity
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Some ritual activities were associated with culturally significant
            spaces. These locations provided settings in which prayers,
            blessings and other ceremonial activities could take place.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              term: "kĩthama",
              title: "Ritual space",
              text: "A culturally significant space identified in the documentation in connection with ritual activity.",
            },
            {
              term: "irĩ",
              title: "Sacred setting",
              text: "A traditional space associated with ritual and spiritual practice.",
            },
            {
              term: "gĩtitũ",
              title: "Culturally significant space",
              text: "A space identified in the documentation as a setting for ritual activities.",
            },
          ].map((item) => (
            <article
              key={item.term}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold text-emerald-700">
                {item.term}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SONGS AND INSTRUMENTS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              04 • Ceremonial Performance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Songs, chants and musical accompaniment
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Songs (rwĩmbo) form an essential part of many rituals. Different
              ceremonies have songs that communicate teachings, encouragement,
              blessings, warnings and praise. Performance therefore combines
              spoken, musical and communal forms of cultural expression.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Circumcision", "ĩrua", "Songs prepare initiates for adulthood."],
              ["Marriage", "ũviki", "Songs celebrate family unity and marriage."],
              [
                "Harvest",
                "kũketha / ῑketha",
                "Songs express gratitude for abundance."
              ],
              [
                "Funeral",
                "Remembrance",
                "Songs provide comfort and remembrance."
              ],
              [
                "Blessings",
                "irathimo",
                "Ceremonial expressions accompany blessings."
              ],
              [
                "Communal prayer",
                "Ngai",
                "Prayer seeks protection, peace and prosperity."
              ],
            ].map(([title, term, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-emerald-700">
                  {term}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>

          {/* INSTRUMENTS */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Traditional ceremonial instruments
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Musical accompaniment helps establish the ceremonial atmosphere
              and provides rhythm for singing and dancing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "ngũtha",
                "ngotho",
                "coro",
                "ciĩgamba",
                "nduramu",
                "tamburini",
              ].map((instrument) => (
                <span
                  key={instrument}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                >
                  {instrument}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Cultural Values
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            What ritual practices communicate
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Social identity",
              text: "Rituals provide culturally recognized ways of belonging to the community and participating in shared traditions.",
            },
            {
              title: "Continuity",
              text: "Practices connect generations by transmitting cultural knowledge and ancestral traditions.",
            },
            {
              title: "Social cohesion",
              text: "Shared ceremonies strengthen relationships between families, clans and wider community networks.",
            },
            {
              title: "Moral responsibility",
              text: "Ritual teachings communicate expectations concerning discipline, respect, courage and responsibility.",
            },
            {
              title: "Spiritual connection",
              text: "Rituals express relationships between the living, ancestors (ngomi) and Ngai.",
            },
            {
              title: "Community wellbeing",
              text: "Blessings and communal prayers seek protection, peace, health, fertility and prosperity.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200"
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
      </section>

      {/* REPORTING SUMMARY */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Documentation Summary
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Rituals as living expressions of cultural identity
            </h2>

            <p className="mt-6 leading-8 text-emerald-50/80">
              The documented rituals and cultural practices demonstrate the
              close relationship between individual life stages, family
              relationships, community institutions, agriculture and spiritual
              beliefs among the Embu and Mbeere communities.
            </p>

            <p className="mt-5 leading-8 text-emerald-50/80">
              Circumcision (ĩrua), marriage (ũviki / ũthoni), birth and naming,
              agricultural rituals, harvest practices, communal prayers and
              funeral traditions each contribute to the transmission of
              cultural values and community identity. Their performance
              provides opportunities for elders (athuri), families and younger
              generations to participate in and reproduce cultural knowledge.
            </p>

            <p className="mt-5 leading-8 text-emerald-50/80">
              Collectively, these practices reinforce unity (mũgongo), respect
              for elders and ancestors (ngomi), responsibility, social order
              and the community's relationship with Ngai.
            </p>
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

              <p className="mt-2 text-slate-600">
                Explore additional documented dimensions of Embu and Mbeere
                cultural knowledge.
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

