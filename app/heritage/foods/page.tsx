export default function FoodsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">
            CIS-ETHN • Cultural Heritage Documentation
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Foods, Preparation and Preservation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Documentation of traditional foods, preparation methods,
            preservation practices, ceremonial foods and the cultural meanings
            associated with food among the Embu and Mbeere communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-gray-600 px-4 py-2 text-sm">
              Embu
            </span>
            <span className="rounded-full border border-gray-600 px-4 py-2 text-sm">
              Mbeere
            </span>
            <span className="rounded-full border border-gray-600 px-4 py-2 text-sm">
              Indigenous Knowledge
            </span>
            <span className="rounded-full border border-gray-600 px-4 py-2 text-sm">
              Food Heritage
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-4xl">
          <p className="text-lg leading-8 text-gray-700">
            Food is an important component of Embu and Mbeere cultural heritage.
            Traditional food systems reflect agricultural knowledge, local
            environmental conditions, livestock keeping, food preparation,
            preservation, hospitality and communal life. Knowledge about what
            to grow, harvest, prepare, preserve and share has historically been
            transmitted across generations through family and community
            participation.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The documentation presented in this domain highlights traditional
            foods and food-related practices while also examining the symbolic
            meanings attached to food during marriage, initiation, harvests and
            other important community occasions.
          </p>
        </div>
      </section>

      {/* RESEARCH QUESTION 1 */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Research Question 01
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              What are the major traditional foods in Embu/Mbeere community,
              and how are they prepared or preserved?
            </h2>
          </div>

          {/* STAPLE FOODS */}
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Staple Foods
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                The Embu and Mbeere communities have traditionally relied on
                agriculture, livestock keeping, gathering and food preservation
                practices that have sustained families for generations.
                Traditional foods provide nourishment while also contributing
                to cultural identity and social cohesion.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="font-bold text-gray-900">
                    <span className="italic">mĩgũnda</span>
                  </h4>
                  <p className="mt-1 leading-7 text-gray-700">
                    A mixture of maize and beans cooked together. The
                    ingredients are cleaned, soaked when necessary and boiled
                    together until soft. It remains an important traditional
                    meal because it is nutritious, affordable and suitable for
                    large families.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    <span className="italic">gĩtheri</span>
                  </h4>
                  <p className="mt-1 leading-7 text-gray-700">
                    Prepared from boiled maize mixed with beans, peas or other
                    legumes. Variations may include vegetables and locally
                    available seasonings.
                  </p>
                </div>
              </div>
            </article>

            {/* VEGETABLES */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Traditional Vegetables
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Traditional vegetables form an important part of the Embu and
                Mbeere diet. They are harvested from farms or gathered from the
                wild and prepared according to household practices.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Managu",
                  "Mũthũnga",
                  "Terere",
                  "Saga",
                  "Pumpkin leaves",
                  "Cowpea leaves",
                ].map((food) => (
                  <span
                    key={food}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                  >
                    {food}
                  </span>
                ))}
              </div>

              <p className="mt-6 leading-7 text-gray-700">
                These vegetables are cleaned thoroughly, boiled and sometimes
                fried with onions or other ingredients. They are valued both
                for their nutritional contribution and their perceived
                medicinal benefits.
              </p>
            </article>

            {/* ROOT CROPS */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Root Crops
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Root crops have traditionally provided important sources of
                carbohydrates and food security.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Sweet potatoes",
                  "Arrowroots",
                  "Yams",
                  "Cassava",
                ].map((food) => (
                  <li
                    key={food}
                    className="flex items-start gap-3 leading-7 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-700" />
                    <span>{food}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 leading-7 text-gray-700">
                These crops are commonly boiled, roasted or steamed depending
                on household preference and availability.
              </p>
            </article>

            {/* GRAINS */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Millet and Sorghum
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Millet and sorghum have historically been important crops,
                particularly in Mbeere where climatic conditions favor
                drought-resistant crops.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                The grains may be cleaned, dried and ground into flour for
                preparation of porridge, traditional beverages and other staple
                foods. Proper drying and storage enable households to preserve
                grain for future use.
              </p>
            </article>
          </div>

          {/* LIVESTOCK PRODUCTS */}
          <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">
              Livestock and Other Food Products
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              Livestock keeping and natural resource use contribute important
              food products to the traditional diet.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-6">
                <h4 className="text-lg font-bold">Milk</h4>
                <p className="mt-2 leading-6 text-gray-700">
                  Consumed fresh, fermented or stored in specially prepared
                  gourds.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h4 className="text-lg font-bold">Meat</h4>
                <p className="mt-2 leading-6 text-gray-700">
                  Particularly important during ceremonies, celebrations and
                  communal feasts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h4 className="text-lg font-bold">Honey</h4>
                <p className="mt-2 leading-6 text-gray-700">
                  Used as food and as an ingredient in traditional beverages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESERVATION */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Indigenous Food Knowledge
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Traditional Food Preservation
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
              Food preservation practices enabled households to extend the
              availability of food beyond harvesting periods and prepare for
              periods of scarcity. These practices demonstrate indigenous
              knowledge of moisture control, fermentation, storage and
              environmental adaptation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* DRYING */}
            <article className="rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Drying</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm italic">
                  Kũanika
                </span>
              </div>

              <p className="mt-4 leading-7 text-gray-700">
                Foods such as maize, beans, millet, sorghum, vegetables and
                fruits are dried under the sun to reduce moisture and prevent
                spoilage.
              </p>
            </article>

            {/* GRAIN STORAGE */}
            <article className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Grain Storage</h3>

              <p className="mt-4 leading-7 text-gray-700">
                After drying, grains are stored in traditional granaries and
                storage structures designed to protect food from pests,
                moisture and rodents.
              </p>
            </article>

            {/* SMOKING */}
            <article className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Smoking</h3>

              <p className="mt-4 leading-7 text-gray-700">
                Meat may be smoked to extend its shelf life, particularly when
                large quantities are available after ceremonies or communal
                slaughtering.
              </p>
            </article>

            {/* FERMENTATION */}
            <article className="rounded-2xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">Fermentation</h3>

              <p className="mt-4 leading-7 text-gray-700">
                Milk and some traditional beverages are preserved through
                fermentation. The process contributes to flavor development
                while extending storage duration.
              </p>
            </article>

            {/* HONEY */}
            <article className="rounded-2xl border border-gray-200 p-7 md:col-span-2">
              <h3 className="text-xl font-bold">Honey Storage</h3>

              <p className="mt-4 leading-7 text-gray-700">
                Honey is carefully stored in gourds or specially prepared
                containers where it can remain usable for extended periods.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RESEARCH QUESTION 2 */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Research Question 02
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Are certain foods associated with ceremonies or symbolic
              meanings?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-700">
              Food in Embu and Mbeere society is not limited to nourishment.
              Particular foods and the practice of sharing meals carry symbolic
              meanings associated with unity, prosperity, fertility,
              hospitality, gratitude and family continuity.
            </p>
          </div>

          <div className="space-y-6">
            {/* MARRIAGE */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Foods Associated with Marriage Ceremonies
                <span className="ml-2 text-lg font-normal italic text-gray-600">
                  (Ũthoni)
                </span>
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                During marriage negotiations and wedding celebrations, food
                plays an important role in bringing families together. Special
                meals are prepared and shared among relatives and guests as a
                symbol of friendship, cooperation and the establishment of
                lasting family bonds.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Unity between families.",
                  "Acceptance of the marriage agreement.",
                  "Mutual respect and cooperation.",
                  "Blessings for the newly married couple.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-gray-50 p-4 text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            {/* CIRCUMCISION */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Foods Associated with Circumcision
                <span className="ml-2 text-lg font-normal italic text-gray-600">
                  (Irua)
                </span>
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                During initiation ceremonies, families prepare special meals
                for initiates, relatives, elders and visitors. Communal meals
                reinforce support for the initiates and their transition into
                adult society.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Transition from childhood to adulthood.",
                  "Courage and endurance.",
                  "Community support for initiates.",
                  "Acceptance into adult society.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-gray-50 p-4 text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            {/* HARVEST */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Harvest Foods
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Harvest celebrations are accompanied by foods made from newly
                harvested crops such as maize, beans, millet, sorghum, sweet
                potatoes and vegetables.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Gratitude to Ngai for abundance.",
                  "Prosperity and food security.",
                  "The rewards of hard work.",
                  "Community cooperation.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-gray-50 p-4 text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            {/* MILK */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Milk and Fermented Milk
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Milk holds significant cultural value because it represents
                life, nourishment, health, prosperity, livestock wealth and
                blessings for families and children.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                Offering milk to visitors traditionally demonstrates
                hospitality and goodwill.
              </p>
            </article>

            {/* HONEY */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Honey
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Honey symbolizes sweetness in life, prosperity, abundance,
                blessings and happiness. It is associated with celebrations,
                special occasions and traditional beverages used during
                communal events.
              </p>
            </article>

            {/* MEAT */}
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Meat During Ceremonies
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Meat is particularly important during marriage celebrations,
                initiation ceremonies, community feasts and religious
                gatherings.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                The slaughtering and sharing of animals symbolize generosity,
                social status, hospitality and communal unity. Sharing meat
                strengthens relationships among participants and reinforces
                collective identity.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMMUNAL EATING */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-gray-900 p-8 text-white md:p-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Cultural Meaning
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Communal Eating and Social Cohesion
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-300">
              Beyond individual foods, the practice of eating together carries
              profound symbolic significance within Embu and Mbeere community
              life. Sharing meals provides an opportunity to strengthen
              relationships and affirm belonging.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Kinship and belonging",
                "Mutual support",
                "Peace and reconciliation",
                "Respect for guests",
                "Community cohesion",
              ].map((value) => (
                <div
                  key={value}
                  className="rounded-xl border border-gray-700 p-5"
                >
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL KNOWLEDGE SUMMARY */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Documentation Summary
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Food as Indigenous Knowledge
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The documented food practices demonstrate that food heritage
              encompasses much more than recipes or individual meals. It
              includes agricultural production, harvesting, preparation,
              preservation, storage, livestock keeping, environmental
              adaptation, hospitality and ceremonial practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Traditional preservation techniques such as{" "}
              <span className="font-semibold italic">Kũanika</span>, grain
              storage, smoking and fermentation illustrate community knowledge
              developed to maintain food availability and reduce waste. At the
              same time, ceremonial foods and communal eating demonstrate the
              social and symbolic dimensions of food within Embu and Mbeere
              cultural life.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Food therefore functions as a repository of cultural memory and
              an important mechanism through which knowledge, values,
              relationships and identity are transmitted across generations.
            </p>
          </div>
        </div>
      </section>

      {/* KIEMBU TERMINOLOGY */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Selected Kiembu Terminology
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            The CIS-ETHN documentation retains selected Kiembu terms as part
            of the cultural and linguistic record. These terms should be
            understood within their cultural context rather than treated only
            as direct word-for-word translations.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <div className="grid grid-cols-2 bg-gray-100 px-6 py-4 font-bold">
              <div>Kiembu term</div>
              <div>Context / meaning</div>
            </div>

            {[
              ["mĩgũnda", "Traditional food preparation / staple food context"],
              ["gĩtheri", "Maize and legumes prepared together"],
              ["Mũthũnga", "Traditional vegetable"],
              ["Kũanika", "Drying food for preservation"],
              ["Ũthoni", "Marriage / marriage-related ceremonies"],
              ["Irua", "Circumcision / initiation ceremony"],
              ["Ngai", "Supreme creator and provider"],
            ].map(([term, meaning]) => (
              <div
                key={term}
                className="grid grid-cols-2 border-t border-gray-200 px-6 py-4"
              >
                <div className="font-semibold italic text-gray-900">
                  {term}
                </div>
                <div className="text-gray-700">{meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH NOTE */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-2xl border border-gray-200 p-7">
            <h2 className="text-xl font-bold text-gray-900">
              CIS-ETHN Documentation Note
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              This domain forms part of the CIS-ETHN digital cultural heritage
              knowledge base documenting indigenous knowledge, cultural
              practices and linguistic expressions of the Embu and Mbeere
              communities. The documentation is presented for cultural
              preservation, research, education and knowledge transmission.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}