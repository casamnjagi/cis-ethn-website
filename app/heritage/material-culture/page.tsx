import Link from "next/link";

export default function MaterialCulturePage() {
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
              Material Culture
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Documentation of traditional artefacts, indigenous technologies,
              craftsmanship and material expressions associated with everyday
              life, agriculture, ceremonies, music, defence and cultural
              identity among the Embu and Mbeere communities.
            </p>
          </div>
        </div>
      </section>

      {/* DOMAIN OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Domain Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Artefacts as expressions of indigenous knowledge
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The Embu and Mbeere communities possess a rich material culture
                consisting of artefacts that were historically used in daily
                life, agriculture, food preparation, hunting, warfare,
                ceremonies and social activities.
              </p>

              <p>
                These artefacts demonstrate indigenous knowledge,
                craftsmanship and artistic skills passed down through
                generations. Their production required detailed knowledge of
                locally available materials, environmental conditions,
                specialised techniques and appropriate cultural uses.
              </p>

              <p>
                Traditional material culture therefore represents more than
                physical objects. Artefacts provide evidence of technological
                knowledge, social organization, economic activity, artistic
                expression and cultural values within Embu and Mbeere
                communities.
              </p>
            </div>
          </div>

          {/* QUICK CATEGORIES */}
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-lg font-bold text-slate-900">
              Documented artefact categories
            </h3>

            <div className="mt-6 grid gap-4">
              {[
                ["Gourds", "kĩthembe / kĩnya / mũngũ"],
                ["Baskets", "ciondo / kĩondo / kῑondo"],
                ["Earthen pots", "nyũngũ"],
                ["Stools", "gĩtĩ / itĩ"],
                ["Agricultural tools", "ũma / mũro"],
                ["Musical instruments", "ngũtha / coro / ciĩgamba"],
                ["Defence equipment", "ĩtumũ / ũta / mĩgwĩ / ngo"],
                ["Traditional houses", "nyomba"],
              ].map(([title, term]) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-emerald-700">{term}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ARTEFACTS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              01 • Traditional Artefacts
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Objects embedded in everyday community life
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The documented artefacts demonstrate how locally available
              materials were transformed through indigenous technologies into
              objects serving practical, social, ceremonial and cultural
              purposes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* GOURDS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                KĨTHEMBE / KĨNYA / MŨNGŨ
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Gourds
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Gourds (kĩthembe / kĩnya / mũngũ) were important household
                containers used for storing milk (ĩria), honey (ũũkĩ), water
                (maaĩ) and traditional beverages.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                The preparation process involved carefully selecting gourds,
                drying them, cleaning them and, where appropriate, decorating
                them before use. This required knowledge of preservation
                techniques described as kũhinga na kũhithia.
              </p>
            </article>

            {/* BASKETS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                CIONDO / KĨONDO / KῙONDO
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Baskets
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Baskets (ciondo / kĩondo / kῑondo) were widely produced using
                fibres obtained from local plants. Production involved
                collecting, drying, splitting and weaving plant materials into
                different shapes and sizes.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Different baskets served different purposes, including carrying
                farm produce from the mũgũnda, storing grain in granaries
                (gĩtũ / ĩkũmbĩ) and transporting household items.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Basket weaving required skill, creativity and experience and
                  was frequently transmitted within the family (mũciĩ).
                </p>
              </div>
            </article>

            {/* POTTERY */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                NYŨNGŨ
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Earthen pots
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Earthen pots (nyũngũ) were produced using clay obtained from
                riverbanks and suitable soils (mũnyũ / yũmba).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Pottery involved collecting clay, kneading it, moulding vessels
                by hand, drying them and firing them in specially prepared
                fires. Pottery was mainly practiced by women (mũtumia /
                mwongia).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                The resulting vessels were used for cooking, storing water and
                brewing traditional beverages.
              </p>
            </article>

            {/* WOOD CARVING */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                GĨTĨ / ITĨ
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Stools and walking sticks
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Traditional stools (gĩtĩ / itĩ) and walking sticks were carved
                from selected tree species (mũtĩ).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Wood carving required knowledge of suitable timber, carving
                techniques, shaping, smoothing and decoration. Skilled
                craftsmen produced objects that combined functional use with
                aesthetic qualities.
              </p>
            </article>

            {/* AGRICULTURAL TOOLS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                ŨMA / MŨRO
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Agricultural tools
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Agricultural tools such as hoes (ũma), digging sticks (mũro)
                and harvesting implements were essential to both Embu and
                Mbeere livelihoods.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Earlier tools were made from wood, while later technologies
                incorporated iron produced by local blacksmiths (mũturi /
                atũri).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Blacksmithing required specialized knowledge of metalworking,
                forging, shaping, sharpening and tool maintenance.
              </p>
            </article>

            {/* HOUSES */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                NYOMBA
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Traditional houses
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Traditional houses (nyomba) themselves represented important
                forms of material culture and architectural knowledge.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Construction involved communal labour and locally available
                materials including timber, poles, grass (kĩtima / nyaki), mud
                (mũthetu), reeds and fibres.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                House construction demonstrated architectural knowledge adapted
                to local environmental conditions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MUSICAL INSTRUMENTS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            02 • Musical Instruments
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Material culture in musical expression
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Traditional musical instruments formed an important component of
            material culture. Their production required combinations of
            woodworking, carving, leather preparation, animal-hide processing
            and sound tuning.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Ngũtha", "Drum"],
            ["Ngotho", "Traditional instrument"],
            ["Coro", "Horn instrument"],
            ["Ciĩgamba", "Traditional instrument"],
            ["Mūtūrirū", "Traditional instrument"],
            ["Wandĩndĩ", "Traditional instrument"],
            ["Nduramu", "Traditional instrument"],
            ["Tamburini", "Traditional instrument"],
          ].map(([name, type]) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xl font-bold text-slate-900">{name}</p>
              <p className="mt-2 text-sm text-emerald-700">{type}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Indigenous instrument-making skills
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            Instrument manufacture involved woodworking, leather preparation,
            carving, stretching animal hides and tuning instruments to achieve
            desired sounds. Animal skin (ruo / ngothi) was particularly
            important in the construction of some instruments.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            These techniques were transmitted through apprenticeship, including
            processes described as kũthoma na kũthondeka, through which younger
            members learned by observing and participating in production.
          </p>
        </div>
      </section>

      {/* HUNTING AND DEFENCE */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              03 • Hunting and Defence Equipment
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Tools associated with protection and community defence
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Hunting and defence equipment formed another component of
              traditional material culture. Production required knowledge of
              several specialized technologies including metalworking,
              woodworking and leatherworking.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Spears", "ĩtumũ"],
              ["Bows", "ũta"],
              ["Arrows", "mĩgwĩ"],
              ["Shields", "ngo"],
              ["Warriors", "njamba cia ita"],
            ].map(([title, term]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
              >
                <p className="text-xl font-bold">{title}</p>
                <p className="mt-2 text-sm text-emerald-300">{term}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <p className="leading-8 text-slate-300">
              Spears (ĩtumũ), bows (ũta), arrows (mĩgwĩ), shields (ngo) and
              related equipment required knowledge of construction,
              maintenance and appropriate use. These artefacts were also
              associated with bravery, protection and the responsibilities of
              warriors (njamba cia ita).
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTION SKILLS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            04 • Indigenous Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Skills involved in artefact production
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            The production of traditional artefacts depended on specialized
            knowledge that was developed through practice and transmitted
            through families and community-based learning.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Weaving",
              text: "Collecting, drying, preparing and weaving plant fibres into baskets and other useful objects.",
            },
            {
              title: "Pottery",
              text: "Selecting clay, kneading, moulding, drying and firing earthen vessels.",
            },
            {
              title: "Blacksmithing",
              text: "Forging, shaping, sharpening and maintaining iron agricultural tools and other objects.",
            },
            {
              title: "Wood carving",
              text: "Selecting suitable timber and transforming it through carving, shaping, smoothing and decoration.",
            },
            {
              title: "Leatherworking",
              text: "Preparing and using animal hides and leather in artefacts and musical instruments.",
            },
            {
              title: "Construction",
              text: "Building traditional houses using locally available materials and environmentally adapted techniques.",
            },
            {
              title: "Instrument making",
              text: "Combining wood, leather and other materials to create and tune traditional musical instruments.",
            },
            {
              title: "Gourd preparation",
              text: "Selecting, drying, cleaning, preserving and decorating gourds for household use.",
            },
            {
              title: "Apprenticeship",
              text: "Transmitting specialized knowledge through observation, participation and practical learning.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CULTURAL MEANINGS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              05 • Cultural Meaning
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Artefacts beyond their practical functions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Traditional artefacts carried meanings that extended beyond
              their practical functions. Objects could communicate identity,
              social status, age, gender roles, spiritual beliefs and cultural
              values.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* BASKETS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-emerald-700">
                CIONDO / KĨONDO
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Women’s skill and household contribution
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Baskets symbolized women’s industriousness, skill and
                contribution to household welfare. A well-made basket
                demonstrated craftsmanship and could be associated with the
                responsible womanhood ideal (mũtumia).
              </p>
            </article>

            {/* POTS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-emerald-700">NYŨNGŨ</p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Hospitality and nourishment
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Earthen pots represented hospitality, nourishment and domestic
                responsibility. Their role in cooking and storage connected
                them closely to family life (mũciĩ) and community wellbeing.
              </p>
            </article>

            {/* STOOLS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-emerald-700">
                GĨTĨ / ITĨ
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Authority and seniority
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Traditional stools and walking sticks could signify authority,
                seniority and wisdom. Elders (athuri) frequently used such
                objects during meetings (matĩĩri), dispute resolution and
                ceremonial gatherings.
              </p>
            </article>

            {/* INSTRUMENTS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-emerald-700">
                NGŨTHA / CORO / CIĨGAMBA
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Ceremonial communication
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Musical instruments carried ceremonial significance and were
                used to communicate messages, accompany rituals (ĩrua, ũviki)
                and strengthen social unity during communal events and rwĩmbo
                performances.
              </p>
            </article>

            {/* WEAPONS */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-emerald-700">
                ĨTUMŨ / NGO
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Bravery and protection
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Spears (ĩtumũ) and shields (ngo) symbolized bravery, protection
                and the responsibility of defending the community. Warriors
                (njamba cia ita) who possessed and used such artefacts could
                earn respect and recognition.
              </p>
            </article>

            {/* MEMORY */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-emerald-700">
                NGANO YA MŨGONGO
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Artefacts as cultural memory
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Artefacts served as repositories of history and cultural
                memory. Through objects, community members could remember
                ancestral practices, social values, traditional technologies
                and collective identity.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SACRED ARTEFACTS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              06 • Sacred Artefacts
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Objects associated with ritual and spiritual practice
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                Some artefacts held sacred significance because of their
                association with rituals, prayers, ancestral practices
                (ngomi) or traditional ceremonies.
              </p>

              <p>
                Ritual objects used during circumcision (ĩrua), communal
                prayers to Ngai, rainmaking activities and ancestral
                observances were treated with particular respect.
              </p>

              <p>
                Access to some objects was restricted to authorized individuals
                such as elders (athuri) or ritual leaders (mũndũ mũgo).
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Associated cultural settings
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["ĩrua", "Circumcision and initiation"],
                ["Ngai", "Communal prayer and spiritual observance"],
                ["ngomi", "Ancestral practices"],
                ["mbura", "Rainmaking activities"],
                ["kĩthama", "Sacred or culturally significant space"],
                ["irĩ", "Ritual or sacred setting"],
                ["gĩtitũ", "Culturally significant space"],
              ].map(([term, meaning]) => (
                <div
                  key={term}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-5"
                >
                  <p className="font-bold">{term}</p>
                  <p className="mt-1 text-sm text-slate-300">{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TABOOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              07 • Cultural Restrictions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Sacred restrictions and taboos
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Certain artefacts were subject to cultural restrictions and
              taboos (mũgiro). Sacred ritual objects were not to be touched,
              moved or used by unauthorized persons.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              According to the documented cultural understanding, violating
              such restrictions could result in social disapproval, misfortune
              or spiritual consequences associated with ngoma or ancestral
              displeasure.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Some ceremonial objects could only be used during designated
              rituals and were kept in secure or sacred locations such as
              kĩthama, irĩ or gĩtitũ when not in use.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Restricted access",
                text: "Certain sacred objects could only be handled by authorized elders or ritual specialists.",
              },
              {
                title: "Designated use",
                text: "Some ceremonial artefacts were reserved for particular rituals and occasions.",
              },
              {
                title: "Cultural consequences",
                text: "Violation of restrictions was traditionally associated with social or spiritual consequences.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
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

      {/* KNOWLEDGE TRANSMISSION */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                08 • Knowledge Transmission
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Craft knowledge passed through practice
              </h2>

              <p className="mt-5 leading-8 text-emerald-50/80">
                Material culture depended on specialized knowledge that was
                transmitted through apprenticeship, observation and
                participation within families and communities.
              </p>

              <p className="mt-5 leading-8 text-emerald-50/80">
                Younger generations learned how to identify suitable materials,
                prepare them, construct artefacts, maintain tools and
                understand the appropriate cultural contexts in which objects
                were used.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Observation", "Learning by watching skilled practitioners."],
                ["Participation", "Developing skills through practical involvement."],
                ["Apprenticeship", "Structured learning from experienced artisans."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-emerald-800 bg-emerald-900/50 p-6"
                >
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL SIGNIFICANCE SUMMARY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Cultural Significance
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            What material culture preserves
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Indigenous technology",
              text: "Traditional artefacts demonstrate locally developed technologies for transforming natural materials into useful objects.",
            },
            {
              title: "Craftsmanship",
              text: "Objects reflect specialized skills in weaving, pottery, carving, blacksmithing, leatherworking and construction.",
            },
            {
              title: "Social identity",
              text: "Artefacts could communicate age, gender roles, status, authority and community membership.",
            },
            {
              title: "Spiritual values",
              text: "Some objects were connected to rituals, ancestors (ngomi), prayers and relationships with Ngai.",
            },
            {
              title: "Economic life",
              text: "Baskets, tools, containers and other artefacts supported agricultural production and household activities.",
            },
            {
              title: "Cultural memory",
              text: "Material objects preserve knowledge about ancestral practices, technologies and collective identity.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
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
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Documentation Summary
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Material culture as a record of indigenous knowledge
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The documented material culture of the Embu and Mbeere
              communities demonstrates a sophisticated relationship between
              people, locally available resources, technology, social
              organization and cultural values.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Gourds, baskets, earthen pots, stools, agricultural tools,
              musical instruments, hunting and defence equipment and
              traditional houses each fulfilled practical functions while also
              carrying social, cultural or spiritual meanings.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              The production and use of these objects depended on knowledge
              transmitted through families, apprenticeship, observation and
              participation. Material culture therefore provides an important
              pathway for documenting indigenous technologies and understanding
              how cultural knowledge has been maintained across generations.
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
                Explore additional dimensions of documented Embu and Mbeere
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

