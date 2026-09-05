export default function EmotionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-rose-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-rose-300 font-semibold uppercase tracking-wider mb-3">
            Heritage Domain 09
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Emotions, Identity and Politeness
          </h1>

          <p className="text-lg md:text-xl max-w-4xl text-rose-50">
            Documentation of cultural expressions, emotional communication,
            greetings, titles, politeness practices and social identity within
            Embu and Mbeere communities.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-rose-50 border-l-4 border-rose-700 p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-bold text-rose-900 mb-3">
              Domain Overview
            </h2>

            <p className="leading-8">
              Emotional expression within Embu and Mbeere communities is
              communicated through spoken language, songs (rwĩmbo), proverbs
              (nthimo), storytelling (ng’ano), blessings, prayers, gestures
              and social interaction. Cultural expectations emphasize respect,
              solidarity, self-control and appropriate social conduct.
            </p>
          </div>

          <article className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              1. Cultural Expression of Emotions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-rose-800 mb-3">
                  Happiness
                </h3>

                <p className="leading-8">
                  Happiness is expressed through joyful speech, laughter,
                  singing, dancing, praise, blessings and communal
                  celebrations. Harvests, marriages (ũthoni), births,
                  successful initiation ceremonies (irua) and community
                  gatherings provide contexts for collective expressions of joy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-rose-800 mb-3">
                  Sorrow
                </h3>

                <p className="leading-8">
                  Sorrow is communicated through mourning songs, lamentations,
                  prayers, comforting words and communal support. Funeral
                  gatherings provide opportunities for remembering the deceased
                  and supporting bereaved families.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-rose-800 mb-3">
                  Respect
                </h3>

                <p className="leading-8">
                  Respect is communicated through greetings, humble speech,
                  honorific titles, attentive listening, courteous responses,
                  blessings and expressions of gratitude. Younger people are
                  traditionally expected to communicate carefully with elders,
                  parents, leaders and visitors.
                </p>
              </div>
            </div>
          </article>

          <article className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              2. Emotional Expression Through Oral Literature
            </h2>

            <p className="leading-8 mb-6">
              Proverbs (<strong>nthimo</strong>) and stories
              (<strong>ng’ano</strong>) can communicate emotions indirectly.
              Metaphorical language may convey happiness, disappointment,
              anger, gratitude, wisdom or concern without direct confrontation.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                ["Joy", "Celebration songs and communal performances."],
                ["Courage", "Songs and expressions used during initiation."],
                ["Gratitude", "Harvest songs and thanksgiving expressions."],
                ["Love and Unity", "Marriage songs and family celebrations."],
                ["Sadness", "Funeral songs and mourning expressions."],
                ["Hope", "Expressions used during periods of difficulty."]
              ].map(([title, description]) => (
                <div key={title} className="border rounded-xl p-5">
                  <h3 className="text-xl font-bold text-rose-900 mb-2">
                    {title}
                  </h3>
                  <p className="leading-7">{description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              3. Greetings, Titles and Politeness
            </h2>

            <p className="leading-8 mb-6">
              Greetings are an important part of daily interaction. They
              acknowledge another person's presence and demonstrate goodwill
              and respect. Greetings may include inquiries concerning personal
              well-being, family, health, work and daily activities.
            </p>

            <h3 className="text-2xl font-semibold text-rose-800 mb-5">
              Titles of Respect
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["vava", "Father; also used respectfully for older men."],
                ["Maitu", "Mother; also used respectfully for older women."],
                ["Cucu", "Grandparent; associated with wisdom, age and respect."],
                ["Mzee", "Elder or respected senior person."],
                ["Mwarimu", "Teacher."],
                ["Mũthamaki", "Elder, leader or respected authority figure."],
                ["Mũrũmĩ", "Husband or adult man."],
                ["Mũka", "Wife or adult woman."]
              ].map(([term, meaning]) => (
                <div
                  key={term}
                  className="border rounded-lg p-4"
                >
                  <strong className="text-rose-900">{term}</strong>
                  <p className="mt-2 leading-6">{meaning}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              4. Social Identity and Respect
            </h2>

            <p className="leading-8 mb-6">
              Language communicates social identity through family membership,
              clan affiliation, age group, gender roles, marital status and
              community responsibilities.
            </p>

            <p className="leading-8 mb-6">
              Terms such as <strong>Mũthoni</strong> and
              <strong> Athoni</strong> identify relationships established
              through marriage and demonstrate the importance of extended
              family relationships.
            </p>

            <h3 className="text-2xl font-semibold text-rose-800 mb-4">
              Respect for Elders
            </h3>

            <ul className="list-disc pl-6 space-y-3 leading-7">
              <li>Greeting elders first.</li>
              <li>Listening attentively.</li>
              <li>Avoiding unnecessary interruption.</li>
              <li>Using respectful language.</li>
              <li>Following appropriate advice and guidance.</li>
            </ul>

            <p className="leading-8 mt-8">
              Proverbs (<strong>nthimo</strong>) and indirect speech can also
              be used to communicate criticism, advice and warnings without
              causing unnecessary confrontation.
            </p>
          </article>

          <section className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-rose-900 mb-5">
              Cultural Significance
            </h2>

            <p className="leading-8">
              Emotional language, greetings, titles, blessings and polite
              communication provide important mechanisms for maintaining social
              harmony. They reveal how language is connected to identity,
              relationships, age, status and community values.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}