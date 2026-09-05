import Link from "next/link";

export default function TraditionalMedicinePage() {
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
              Traditional Medicine
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Documentation of indigenous knowledge systems, traditional
              medicine, medicinal plants, healing practices and the cultural
              knowledge associated with health and well-being among the Embu
              and Mbeere communities.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENTATION NOTE
      ========================================================== */}
      <section className="border-b border-slate-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              !
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Documentation and cultural heritage context
              </h2>

              <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-700">
                This page documents traditional knowledge and community
                understandings as captured through the CIS-ETHN cultural
                heritage documentation process. Descriptions of traditional
                remedies and healing practices are presented as cultural
                knowledge and should not be interpreted as medical advice,
                clinical guidance or a substitute for qualified healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Domain Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Traditional knowledge as a living heritage system
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The Embu and Mbeere communities possess extensive indigenous
                knowledge systems that have been developed and transmitted over
                many generations.
              </p>

              <p>
                This traditional knowledge, described in the documentation as
                ũũgũcoki wa mũgongo / ũũgũcoki wa mũciĩ systems, encompasses
                medicine, agriculture, environmental conservation, weather
                forecasting, livestock management, food preservation, conflict
                resolution, spiritual practices and cultural education.
              </p>

              <p>
                Knowledge has traditionally been transmitted through oral
                teaching, observation, apprenticeship, storytelling
                (ng’ano / rũgano), songs (rwĩmbo), rituals (ĩrua contexts)
                and practical participation in community life.
              </p>
            </div>
          </div>

          {/* KNOWLEDGE AREAS */}
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-lg font-bold text-slate-900">
              Major knowledge areas
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Traditional medicine",
                "Medicinal plants",
                "Agricultural knowledge",
                "Environmental conservation",
                "Weather forecasting",
                "Livestock management",
                "Food preservation",
                "Conflict resolution",
                "Spiritual practices",
                "Cultural education",
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
          QUESTION I
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                I
              </span>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                  Research Question
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  What forms of traditional knowledge or medicine exist in
                  Embu/Mbeere community, and who are their custodians?
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* TRADITIONAL MEDICINE */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold text-emerald-700">
                01 • Traditional Medicine
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Medicinal plants and healing knowledge
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                One of the most important forms of indigenous knowledge is
                traditional medicine. The documented knowledge involves the use
                of medicinal plants (mĩtĩ ya mũgo), herbs, roots (mũri), bark,
                leaves (mathangũ), seeds (mbegũ) and other natural substances
                for purposes of preventing and treating illnesses.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Community members have historically relied on knowledge of
                locally available plants and their perceived healing properties.
                Traditional healers possess specialized knowledge concerning
                the identification, harvesting, preparation and administration
                of medicinal materials.
              </p>
            </article>

            {/* ENVIRONMENT */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                02 • Environmental Knowledge
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Knowledge of the natural environment
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Elders (athuri) and experienced community members possess
                knowledge concerning trees (mũtĩ), shrubs, grasses (kĩtima /
                nyaki), rivers (rũĩ) and forests (mũtitũ / irĩ).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Such knowledge includes identifying plants used for medicine,
                food, building materials, animal fodder and protection of water
                sources (kĩthima).
              </p>
            </article>

            {/* AGRICULTURE */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                03 • Agriculture
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Indigenous agricultural knowledge
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Farmers (alĩmi / mũrĩmi) maintain knowledge relating to seed
                selection, land preparation (kũrima), rainfall prediction
                (mbura), pest control, crop preservation and harvesting
                (kũketha / ῑketha).
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Seasonal changes (mavinda) and environmental indicators guide
                agricultural activities within the mũgũnda.
              </p>
            </article>

            {/* WEATHER */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                04 • Weather Knowledge
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Reading environmental indicators
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Traditional weather forecasting involves observing natural
                indicators including cloud formations (matu), wind patterns
                (rũhuho), animal behaviour, bird migrations (isoni), flowering
                of plants and insect activities (kĩgunyũ / igunyũ).
              </p>
            </article>

            {/* LIVESTOCK */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                05 • Livestock Knowledge
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Animal health and management
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Indigenous livestock knowledge includes disease recognition,
                herbal treatment, breeding practices and grazing management for
                ng’ombe, mbũri and ng’ondu.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                These practices support household livelihoods and form part of
                the wider mũciĩ economy.
              </p>
            </article>

            {/* GOVERNANCE */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-3">
              <p className="text-sm font-semibold text-emerald-700">
                06 • Social and Governance Knowledge
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Customary law and conflict resolution
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                Traditional knowledge also encompasses social governance,
                conflict resolution and customary law. Elders
                (athamaki / athuri a kĩama) preserve traditional procedures
                for settling disputes (kwĩtikania), conducting marriage
                negotiations (ũviki / ũthoni), organizing communal work and
                maintaining social harmony (thayũ).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTODIANS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Knowledge Custodians
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            The people who preserve and transmit traditional knowledge
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Traditional knowledge is distributed among different categories of
            community members. Each group contributes specialized knowledge
            according to experience, social role and area of expertise.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Athamaki",
              subtitle: "Elders",
              text: "Custodians of cultural wisdom, customary law and community history, including ngano ya mũgongo.",
            },
            {
              title: "Mũndũ mũgo",
              subtitle: "Traditional healers and herbalists",
              text: "Custodians of specialized knowledge concerning medicinal plants and traditional healing practices.",
            },
            {
              title: "Spiritual leaders",
              subtitle: "Ritual specialists",
              text: "Custodians of sacred knowledge associated with Ngai, ancestral practices (ngomi) and ritual traditions.",
            },
            {
              title: "Alĩmi / Mũrĩmi",
              subtitle: "Farmers",
              text: "Preserve agricultural knowledge concerning land, crops, seasons, rainfall and mũgũnda practices.",
            },
            {
              title: "Livestock keepers",
              subtitle: "Animal knowledge",
              text: "Maintain knowledge concerning animal health, breeding, grazing and traditional livestock management.",
            },
            {
              title: "Cũcũ / Cũcũ na cũcũ",
              subtitle: "Grandparents and senior family members",
              text: "Transmit knowledge through storytelling, daily interaction, observation and practical instruction.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold text-emerald-700">
                {item.title}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {item.subtitle}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          TRANSMISSION
      ========================================================== */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Knowledge Transmission
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                From generation to generation
              </h2>

              <p className="mt-5 leading-8 text-emerald-50/80">
                Traditional knowledge has historically been transmitted through
                observation, participation, apprenticeship and oral teaching
                rather than written documentation.
              </p>

              <p className="mt-5 leading-8 text-emerald-50/80">
                Storytelling (ng’ano / rũgano), songs (rwĩmbo), rituals and
                everyday participation in community activities provide
                important pathways through which knowledge is learned and
                retained.
              </p>

              <p className="mt-5 leading-8 text-emerald-50/80">
                Elders therefore remain important living repositories of
                community knowledge and cultural heritage.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Observation",
                  text: "Younger generations learn by observing experienced knowledge holders.",
                },
                {
                  title: "Participation",
                  text: "Knowledge is acquired through practical involvement in community activities.",
                },
                {
                  title: "Apprenticeship",
                  text: "Specialized knowledge is developed through guidance from experienced practitioners.",
                },
                {
                  title: "Oral teaching",
                  text: "Knowledge is communicated through spoken instruction, stories, songs and cultural practices.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-800 bg-emerald-900/50 p-6"
                >
                  <h3 className="font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-50/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUESTION II
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
              II
            </span>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Research Question
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                How does the community define traditional medicine, and what
                illnesses or conditions are believed to be treated through it?
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              A holistic understanding of healing
            </h3>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                In the documented Embu and Mbeere understanding, traditional
                medicine is a system of healing knowledge described as
                ũũgũcoki wa kũũra / healing knowledge. It incorporates
                indigenous knowledge, medicinal plants (mĩtĩ ya mũgo), natural
                substances, spiritual practices and inherited expertise.
              </p>

              <p>
                Traditional medicine is understood as knowledge passed down from
                ancestors (ngomi) and refined through generations of practical
                experience.
              </p>

              <p>
                The documentation describes traditional medicine as extending
                beyond herbal treatment alone. It incorporates physical, social,
                environmental and spiritual dimensions of well-being.
              </p>

              <p>
                Healing is understood in relation to balance between the
                individual, family (mũciĩ), community (mũgongo), nature
                (mũtitũ) and Ngai.
              </p>
            </div>
          </div>

          {/* HOLISTIC MODEL */}
          <aside className="rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Cultural Understanding
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Dimensions of well-being
            </h3>

            <div className="mt-8 space-y-3">
              {[
                "Individual",
                "Family (mũciĩ)",
                "Community (mũgongo)",
                "Nature (mũtitũ)",
                "Ngai",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800 p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold">
                    {index + 1}
                  </span>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          MEDICINAL MATERIALS
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Medicinal Materials
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Materials used within traditional healing knowledge
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The documented knowledge identifies a range of plant and natural
              materials used in traditional medicine. These materials are
              associated with specialized knowledge concerning identification,
              harvesting, preparation and use.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Mĩtĩ ya mũgo",
                description: "Medicinal plants and trees.",
              },
              {
                name: "Mũri",
                description: "Roots used within traditional preparations.",
              },
              {
                name: "Mathangũ",
                description: "Leaves used in traditional preparations.",
              },
              {
                name: "Mbegũ",
                description: "Seeds used as part of indigenous medicinal knowledge.",
              },
              {
                name: "Mũnyũ",
                description: "Natural materials associated with traditional preparations.",
              },
              {
                name: "Mũthetu",
                description: "Natural materials and knowledge associated with environmental balance.",
              },
              {
                name: "Ũũkĩ",
                description: "Honey and other locally available natural substances.",
              },
            ].map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PREPARATION METHODS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Traditional Preparation
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Knowledge of preparing medicinal materials
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            The documented practices include several preparation methods.
            Knowledge holders are described as possessing specialized knowledge
            regarding identification, harvesting, preparation, dosage and
            administration.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Boiling",
            "Soaking",
            "Grinding",
            "Pounding",
            "Drying",
            "Mixing",
            "Inhalation",
            "Bathing",
            "Direct application",
          ].map((method) => (
            <div
              key={method}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                ✓
              </div>

              <h3 className="mt-4 font-bold text-slate-900">{method}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CONDITIONS
      ========================================================== */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Documented Conditions
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Conditions traditionally believed to be addressed
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              The documentation records a range of physical, reproductive,
              child-health and other conditions that community members
              traditionally associated with indigenous healing practices.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Stomach disorders and digestive problems (mara-related issues)",
              "Coughs and respiratory illnesses",
              "Fever and common infections",
              "Skin diseases and wounds (kĩronda)",
              "Headaches and body pains",
              "Malaria-like symptoms and fever conditions",
              "Reproductive and maternal health concerns (mũtumia health)",
              "Child health conditions (mwana / kaana care)",
              "Snake bites (njoka)",
              "Insect stings (kĩgunyũ / igunyũ)",
              "Bone injuries and fractures",
              "Infertility and related reproductive challenges",
            ].map((condition) => (
              <div
                key={condition}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-5"
              >
                <p className="leading-7 text-slate-200">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PREVENTIVE KNOWLEDGE
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Preventive Knowledge
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Traditional medicine and prevention
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                The documentation indicates that traditional medicine was also
                used for preventive purposes.
              </p>

              <p>
                Certain herbal preparations were traditionally believed to
                strengthen the body, improve immunity, promote general wellness
                and protect individuals from disease, including beliefs
                associated with ĩvai protection.
              </p>

              <p>
                This preventive understanding forms part of the broader
                community concept of maintaining balance between individuals,
                their families, communities and the natural environment.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Preventive concepts documented
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Strengthening the body",
                "Promoting general wellness",
                "Protecting against disease",
                "Maintaining balance",
                "Respecting medicinal resources",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
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
          SPIRITUAL DIMENSION
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Spiritual and Social Dimensions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Understanding illness within a wider cultural framework
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              In addition to physical ailments, some illnesses are traditionally
              understood to have social or spiritual dimensions. The
              documentation associates some such understandings with ngoma
              (spirits) or ancestral displeasure (ngomi).
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              In these cultural contexts, responses may involve prayers to
              Ngai, blessings (irathimo), cleansing rituals, reconciliation
              processes (kwĩtikania), or consultation with respected elders
              and traditional healers.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Ngai",
                text: "Prayer and spiritual appeal.",
              },
              {
                title: "Irathimo",
                text: "Blessings associated with cultural and spiritual practice.",
              },
              {
                title: "Kwĩtikania",
                text: "Reconciliation and restoration of social harmony.",
              },
              {
                title: "Ngomi",
                text: "Ancestral relationships and cultural beliefs.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          KNOWLEDGE + ENVIRONMENT
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl bg-emerald-950 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Environmental Relationship
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Medicinal knowledge and natural resources
            </h2>

            <p className="mt-5 leading-8 text-emerald-50/80">
              Traditional medicine is closely connected to knowledge of the
              local environment. Identifying medicinal plants requires
              familiarity with trees, shrubs, grasses, forests, rivers and
              other natural resources.
            </p>

            <p className="mt-5 leading-8 text-emerald-50/80">
              This relationship demonstrates how health knowledge intersects
              with environmental stewardship and sustainable use of natural
              resources.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Knowledge Stewardship
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Respect for medicinal resources
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                The effectiveness of traditional medicine within the community
                is closely associated with proper knowledge, respect for
                cultural practices and careful use of medicinal resources.
              </p>

              <p>
                Traditional healers are therefore expected to possess extensive
                experience and understanding of local medicinal plants and their
                applications.
              </p>

              <p>
                The knowledge represents an interconnected system in which
                environmental knowledge, healing practices and cultural
                responsibilities reinforce one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTEMPORARY RELEVANCE
      ========================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Contemporary Relevance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Traditional medicine within contemporary community life
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The documentation indicates that many members of the Embu and
              Mbeere communities continue to value traditional medicine as an
              important component of cultural heritage.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Traditional medicinal knowledge remains connected to indigenous
              identity, cultural continuity and community understandings of
              well-being. The documentation also records the coexistence of
              traditional practices with modern healthcare systems.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Cultural identity",
                text: "Traditional medicine remains part of indigenous cultural identity and heritage.",
              },
              {
                title: "Knowledge continuity",
                text: "Knowledge holders continue to preserve practices transmitted across generations.",
              },
              {
                title: "Contemporary context",
                text: "Traditional knowledge exists alongside contemporary healthcare systems.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
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

      {/* =========================================================
          DOCUMENTATION SUMMARY
      ========================================================== */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Documentation Summary
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Traditional knowledge as a living cultural heritage
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The documented traditional knowledge of the Embu and Mbeere
              communities extends beyond medicine to include agriculture,
              environmental conservation, weather forecasting, livestock
              management, social governance, spiritual practices and cultural
              education.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Traditional medicine represents one component of this wider
              knowledge system. Its custodians include athamaki, traditional
              healers and herbalists (mũndũ mũgo), spiritual leaders, farmers,
              livestock keepers, grandparents and senior family members.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Knowledge transmission through observation, apprenticeship,
              participation and oral teaching demonstrates the importance of
              documenting these systems as part of community heritage and
              intergenerational knowledge transmission.
            </p>
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

