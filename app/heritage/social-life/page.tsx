export default function SocialLifePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-200">
            CIS-ETHN Cultural Heritage Knowledge Base
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Social Life and Naming Systems
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Documentation of family structures, kinship systems, naming
            practices, social relationships, and community values among the
            Embu and Mbeere communities.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-green-900">
            About this Domain
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Social life within the Embu and Mbeere communities is traditionally
            organized around the family, extended kinship networks, clans, and
            community institutions. These social structures provide the
            foundation for child upbringing, cultural education, inheritance,
            social support, conflict resolution, and the transmission of
            indigenous knowledge.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Naming systems form an important part of this social organization.
            Names connect individuals to family history, ancestry, significant
            events, social relationships, and cultural identity. Together,
            family structures, kinship terminology, and naming practices
            demonstrate how cultural knowledge is transmitted between
            generations.
          </p>
        </div>
      </section>

      {/* Research Question 1 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Research Question 01
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Family Structures and Kinship
          </h2>

          <p className="mt-4 text-lg italic leading-8 text-gray-600">
            How are families structured in Embu/Mbeere community, and what
            kinship terms are commonly used?
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-green-900">
              Family and Extended Kinship
            </h3>

            <p className="mt-3 leading-8 text-gray-700">
              The Embu and Mbeere communities traditionally organize society
              around the family, clan, and extended kinship networks. The family
              is regarded as the foundation of social life and plays a central
              role in the upbringing of children, transmission of cultural
              values, inheritance, and social support.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Family relationships extend beyond the nuclear family to include
              grandparents, uncles, aunts, cousins, and other relatives who
              collectively participate in community life. The extended family
              system provides social security, guidance, labour support, and
              collective responsibility.
            </p>
          </div>

          {/* Household Roles */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-green-900">
              Traditional Household Roles
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              Traditionally, households were headed by the father, who served
              as the primary provider, protector, and representative of the
              family in community affairs. Mothers were responsible for
              childcare, food production, household management, and the
              transmission of cultural knowledge to children.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Important family decisions, however, often involved consultation
              with elders and members of the extended family. This reflected
              the collective nature of social organization and the importance
              attached to communal decision-making.
            </p>
          </div>

          {/* Children and Grandparents */}
          <div>
            <h3 className="text-xl font-bold text-green-900">
              Children, Grandparents and Cultural Transmission
            </h3>

            <p className="mt-3 leading-8 text-gray-700">
              Children were traditionally regarded as members of the wider
              family and clan rather than solely as the responsibility of their
              biological parents. Grandparents played a particularly important
              role in educating younger generations.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Cultural knowledge was transmitted through stories, proverbs
              (<strong>nthimo</strong>), riddles (<strong>ndaĩ</strong>),
              songs, practical instruction, and participation in community
              activities. In this way, family life served as one of the
              principal institutions for preserving cultural memory.
            </p>
          </div>

          {/* Clan Structure */}
          <div>
            <h3 className="text-xl font-bold text-green-900">
              Clan Organization
            </h3>

            <p className="mt-3 leading-8 text-gray-700">
              Clans formed another important level of social organization.
              Members of the same clan shared common ancestry and often
              supported one another during ceremonies, conflicts, marriages,
              and communal activities.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Clan relationships strengthened social cohesion and reinforced
              collective identity. They also provided an important framework
              through which individuals understood their place within the wider
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Kinship Terms */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Indigenous Terminology
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Common Kinship Terms
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-gray-600">
              The following terms illustrate the role of language in expressing
              family relationships and social organization within the Embu and
              Mbeere communities.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Vava", "Father"],
              ["Maitu", "Mother"],
              ["Mwana", "Child"],
              ["Mwarĩ wa baba", "Father's child (sibling)"],
              ["Mwarĩ wa maitu", "Mother's child (sibling)"],
              ["Cucu", "Grandparent"],
              ["Mwari", "Daughter"],
              ["Mwanake", "Son"],
              ["Mũthoni", "In-law or relationship established through marriage"],
              ["Athoni", "Families related through marriage"],
              ["Mũrũmũ wa nyina", "Maternal uncle"],
              ["Mũrũmũ wa baba", "Paternal uncle"],
            ].map(([term, meaning]) => (
              <div
                key={term}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="text-xl font-bold text-green-800">
                  {term}
                </div>

                <div className="mt-2 text-gray-600">
                  {meaning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elders */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border-l-4 border-green-700 bg-green-50 p-8">
          <h3 className="text-2xl font-bold text-green-900">
            The Role of Elders
          </h3>

          <p className="mt-4 leading-8 text-gray-700">
            Respect for elders is a key feature of family life. Younger family
            members are expected to show obedience, courtesy, and respect
            toward older relatives. Elders provide guidance, settle disputes,
            preserve cultural knowledge, and act as custodians of family
            traditions.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            The family system therefore serves not only biological and economic
            functions but also preserves cultural identity, social values, and
            community stability.
          </p>
        </div>
      </section>

      {/* Research Question 2 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Research Question 02
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Naming Systems and Cultural Meaning
          </h2>

          <p className="mt-4 text-lg italic leading-8 text-gray-600">
            How are children named, and what meanings or events influence name
            selection?
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-green-900">
              Naming as Cultural Heritage
            </h3>

            <p className="mt-3 leading-8 text-gray-700">
              Among the Embu and Mbeere communities, naming is an important
              cultural practice that reflects ancestry, family continuity,
              social relationships, and significant events surrounding a
              child's birth.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Names are not chosen randomly. They may carry historical,
              cultural, spiritual, or social meaning and often provide a
              connection between an individual and previous generations.
            </p>
          </div>

          {/* Naming Patterns */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-green-900">
              Traditional Naming Patterns
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              Traditionally, children are named according to established
              kinship patterns. One of the most common practices is naming
              children after grandparents and other respected relatives. This
              system preserves family lineage and strengthens connections
              between generations.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "The first son may be named after the paternal grandfather.",
                "The first daughter may be named after the paternal grandmother.",
                "Subsequent children may be named after maternal grandparents and other close relatives.",
                "Names may also honour respected elders or deceased family members.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg bg-gray-50 p-4"
                >
                  <span className="mt-1 text-green-700">●</span>
                  <p className="leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Influencing Factors */}
          <div>
            <h3 className="text-xl font-bold text-green-900">
              Factors Influencing Name Selection
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Time of Birth",
                  text: "The season, time of day, or particular circumstances under which a child was born may influence the chosen name.",
                },
                {
                  title: "Environmental Conditions",
                  text: "Names may reflect drought, abundant rainfall, harvest periods, or other natural events occurring around the time of birth.",
                },
                {
                  title: "Family Circumstances",
                  text: "Migration, prosperity, challenges, reconciliation, or significant achievements may inspire a child's name.",
                },
                {
                  title: "Religious Beliefs",
                  text: "With the spread of Christianity, many families combine traditional names with Christian names while retaining connections to Embu or Mbeere heritage.",
                },
                {
                  title: "Birth Order",
                  text: "Names may reflect a child's position within the family or acknowledge previous children and family relationships.",
                },
              ].map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-green-800">
                    {factor.title}
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    {factor.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Naming Ceremonies */}
          <div className="rounded-2xl bg-green-900 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Naming Ceremonies and the Role of Elders
            </h3>

            <p className="mt-4 leading-8 text-green-50">
              Naming ceremonies traditionally involve family members,
              grandparents, and elders who provide guidance on appropriate
              names and their meanings. Elders often explain the significance
              of names and the responsibilities associated with carrying them.
            </p>
          </div>
        </div>
      </section>

      {/* Functions of Names */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Cultural Significance
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Functions of Names
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Preserving family lineage.",
              "Honouring ancestors and relatives.",
              "Recording historical events and experiences.",
              "Expressing hopes and blessings for the child.",
              "Strengthening kinship bonds.",
              "Maintaining cultural identity.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl font-bold text-green-700">
                  0{index + 1}
                </div>

                <p className="mt-3 leading-7 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-gray-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-green-900">
            Documentation Summary
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Social organization and naming practices demonstrate the close
            relationship between language, family, ancestry, and cultural
            identity among the Embu and Mbeere communities. Family and clan
            structures provide mechanisms for social support and cultural
            education, while kinship terminology expresses relationships that
            organize community life.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Naming practices further demonstrate how cultural memory is carried
            by individuals across generations. Through names, families preserve
            lineage, remember relatives, record experiences, express hopes, and
            maintain connections with their cultural heritage.
          </p>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-sm leading-6 text-gray-500">
              <strong>Documentation note:</strong> The information presented in
              this domain forms part of the CIS-ETHN documentation of indigenous
              knowledge and cultural heritage of the Embu and Mbeere
              communities. Terminology is retained as documented in the
              knowledge collection materials.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}