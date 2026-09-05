"use client";

import Link from "next/link";

const environmentalIndicators = [
  "Flowering of specific trees and plants",
  "Emergence of insects and termites",
  "Migration and behaviour of birds",
  "Movement and behaviour of wild animals",
  "Wind direction and intensity",
  "Cloud formations",
  "Changes in river water levels",
  "Appearance of dew and mist",
  "Position of the sun, moon and stars",
];

const agriculturalStages = [
  "Land preparation",
  "Planting",
  "Germination",
  "Flowering",
  "Grain formation",
  "Harvesting",
];

export default function IndigenousCalendarPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-cyan-950 via-blue-900 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            CIS-ETHN • Cultural Heritage Domain 11
          </div>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Indigenous Time and Calendar Systems
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            Documentation of indigenous systems for understanding seasons,
            natural cycles, weather changes, agricultural periods and
            culturally significant stages of time among the Embu and Mbeere
            communities.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="rounded-2xl bg-cyan-50 p-8">
          <h2 className="text-2xl font-bold text-cyan-900">
            Time Through Nature and Community
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Traditionally, Embu and Mbeere communities did not rely solely on
            formal calendars. Indigenous timekeeping was based on environmental
            observations, agricultural activities and natural cycles.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Time was understood through relationships between people, seasons,
            weather patterns, livestock, crops and celestial events.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">
            Seasonal and Agricultural Cycles
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-gray-700">
            <p>
              The year was generally understood according to agricultural
              seasons, especially rainfall, planting, crop growth, harvesting
              and dry periods.
            </p>

            <p>
              Rainfall was particularly important because it determined
              planting and harvesting activities. Crops such as millet,
              sorghum, maize, beans and cowpeas provided practical markers of
              seasonal progression.
            </p>

            <p>
              Communal activities such as <strong>ĩrĩma</strong>, harvesting
              and ceremonial gatherings were closely connected to these
              seasonal cycles.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">
            Daily Time Divisions
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Dawn",
              "Morning",
              "Midday",
              "Afternoon",
              "Evening",
              "Night",
            ].map((period) => (
              <span
                key={period}
                className="rounded-full bg-cyan-50 px-5 py-3 font-medium text-cyan-900"
              >
                {period}
              </span>
            ))}
          </div>

          <p className="mt-6 leading-8 text-gray-700">
            The movement of the sun, moon and stars, the crowing of cocks,
            animal behaviour and daily routines also helped community members
            estimate time and organize activities.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Environmental Indicators
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Environmental observations formed an important foundation for
            indigenous timekeeping and weather forecasting.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {environmentalIndicators.map((indicator) => (
              <div
                key={indicator}
                className="rounded-xl border border-cyan-100 bg-white p-5"
              >
                {indicator}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Agricultural Indicators
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {agriculturalStages.map((stage, index) => (
              <div
                key={stage}
                className="rounded-xl bg-gray-50 p-5"
              >
                <span className="text-sm font-bold text-cyan-700">
                  Stage {index + 1}
                </span>

                <h3 className="mt-2 font-bold">{stage}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6 leading-8 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900">
            Social and Cultural Indicators
          </h2>

          <p>
            Important social events also mark stages of life and community
            time. These include birth and naming ceremonies, circumcision
            (<strong>Irua</strong>), marriage (<strong>Ũthoni</strong>),
            establishment of families, entry into elderhood
            (<strong>Athamaki</strong>) and death and funeral rites.
          </p>

          <p>
            Spiritual and cultural activities also coincide with particular
            environmental or social circumstances. Elders may organize prayers
            during droughts, harvest periods or times of crisis.
          </p>

          <p>
            Oral traditions, songs (<strong>rwĩmbo</strong>), proverbs
            (<strong>nthimo</strong>) and stories (<strong>ng’ano</strong>)
            preserve knowledge about seasonal cycles, weather patterns and life
            transitions.
          </p>
        </section>

        <section className="mt-16 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="text-2xl font-bold">
            An Indigenous Calendar as a Knowledge System
          </h2>

          <p className="mt-4 leading-8 text-gray-300">
            Indigenous timekeeping represents more than a method of measuring
            time. It is a knowledge system connecting environmental observation,
            agriculture, social organization, spirituality and cultural life.
            Through these relationships, communities historically maintained
            practical systems for planning activities and understanding changes
            in their environment.
          </p>
        </section>

        <div className="mt-12">
          <Link
            href="/heritage"
            className="font-semibold text-cyan-700"
          >
            ← Back to Cultural Heritage Domains
          </Link>
        </div>
      </div>
    </main>
  );
}