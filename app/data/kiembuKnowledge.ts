// src/data/kiembuKnowledge.ts

export type KiembuKnowledgeCategory =
  | "oral_traditions"
  | "rituals_and_cultural_practices"
  | "religion_beliefs"
  | "material_culture"
  | "foods_preparation_preservation"
  | "indigenous_technology"
  | "emotions_identity_politeness"
  | "traditional_knowledge_medicine"
  | "governance_justice"
  | "heritage_sites"
  | "social_life_naming"
  | "performance_arts"
  | "indigenous_calendar"
  | "environmental_knowledge"
  | "livelihoods";

export type KiembuKnowledgeEntry = {
  id: string;
  category: KiembuKnowledgeCategory;
  title: string;
  content: string;
  keywords: string[];
};

/*
 * Kiembu / Embu / Mbeere Cultural Knowledge Base
 *
 * IMPORTANT:
 * The content below preserves the cultural terminology supplied
 * for this research project.
 *
 * More entries can be added later using the same structure.
 */

export const kiembuKnowledge: KiembuKnowledgeEntry[] = [
  {
    id: "oral-001",
    category: "oral_traditions",
    title: "Traditional Songs and Dances (Rwĩmbo)",
    keywords: [
      "rwimbo",
      "rwĩmbo",
      "songs",
      "dance",
      "dances",
      "mwĩnjĩro",
      "kiraka",
      "kĩraka",
      "kĩgarũ",
      "njaii",
      "gūtema mware",
      "ndaci",
    ],
    content: `
Traditional songs and dances (rwĩmbo) formed another important oral
tradition. In Embu and Mbeere culture, songs and dances were inseparable
and were collectively referred to as rwĩmbo.

Musical performances were accompanied by traditional instruments such as
ngũtha, coro, ciĩgamba, nduramu, ngengere, and mũrũri.

Songs were created to mark particular events and activities. Performers
sang while dancing in groups, circles, or organized formations known as
katika or matĩĩri ma rwĩmbo.

Several traditional song-and-dance forms included:

Mwĩnjĩro – performed by men and women at night with drumming and dancing.

Kĩraka – vigorous drumming, singing, and acrobatic performances by men.

Kĩgarũ – performed mostly by women during harvest seasons.

Njaii – women's and girls' dance performed after harvest, often carrying
social and political messages.

Gūtema Mware – performed during circumcision ceremonies (ĩrua).

Ngongore/Kambera, Mūkuogo, Kĩrĩcimaci, and Ndaci emerged during different
historical periods and reflected changing social and religious influences.
    `.trim(),
  },

  {
    id: "oral-002",
    category: "oral_traditions",
    title: "Functions of Traditional Songs",
    keywords: [
      "songs",
      "rwĩmbo",
      "circumcision",
      "ĩrua",
      "farming",
      "harvest",
      "marriage",
      "ũthoni",
      "political",
      "entertainment",
    ],
    content: `
Traditional songs and dances (rwĩmbo) were performed during major
community events and social activities.

Specific songs were composed for:

• Circumcision ceremonies (mambura / ĩrua)
• Farming group work (kũrima / ĩrĩma)
• Harvest celebrations (kũketha / ĩketha)
• Grain threshing (ĩvūra)
• Marriage negotiations (ũviki)
• Political mobilization
• Entertainment and social gatherings

Different groups performed different dances.

Men and women together performed Mwĩnjĩro.

Mbeere drummers and male performers led Kĩraka performances.

Women performed Kĩgarũ during harvest seasons.

Women and girls performed Njaii after harvest.

Men and women participated in Gūtema Mware during circumcision ceremonies.

Children and youth performed Kĩrĩcimaci/Kĩvunjio during Christmas
celebrations while collecting contributions.

Adults, boys, and girls participated in Mūkuogo dances organized near
churches and schools.

Young men and unmarried women participated in Ndaci dances held in
traditional dance arenas (matĩĩri / ĩtĩĩri) and village social spaces.
    `.trim(),
  },

  {
    id: "emotion-001",
    category: "emotions_identity_politeness",
    title: "Expression of Happiness, Sorrow and Respect",
    keywords: [
      "happiness",
      "sorrow",
      "respect",
      "emotion",
      "joy",
      "grief",
      "elders",
      "greetings",
    ],
    content: `
Happiness is expressed through joyful speech, laughter, singing, dancing,
praise, blessings, and communal celebrations.

During occasions such as harvests, marriages (ũthoni), births, successful
initiation ceremonies (ĩrua), and community gatherings, people openly
express joy through traditional songs and dances.

Happiness is often shared collectively rather than individually,
reflecting the communal nature of Embu and Mbeere society.

Sorrow is expressed through mourning songs, lamentations, prayers,
comforting words, and communal support.

During funerals and periods of loss, family members, friends, and
neighbors gather to console the bereaved and demonstrate solidarity.

Respect is one of the most important values in Embu and Mbeere culture.
Language used when addressing elders, parents, leaders, and visitors is
generally polite, careful, and respectful.

Respect is expressed through proper greetings, humble speech, honorific
titles, attentive listening, courteous responses, blessings, and
expressions of gratitude.
    `.trim(),
  },

  {
    id: "justice-001",
    category: "governance_justice",
    title: "Kiama and Traditional Justice",
    keywords: [
      "kiama",
      "justice",
      "conflict",
      "dispute",
      "elders",
      "athamaki",
      "reconciliation",
      "peace",
      "thayu",
    ],
    content: `
The traditional leadership system of the Embu and Mbeere communities is
organized around elders, clan representatives, family heads, and
respected community members.

Leadership is based primarily on wisdom, experience, integrity, age,
knowledge of customs, and the ability to promote peace and unity.

When disputes arise, parties are encouraged to seek mediation through
elders (Athamaki) and the Kiama rather than allowing conflicts to
escalate.

The Kiama serves as the traditional court and mediation institution.

Elders listen carefully to all parties involved, examine evidence,
consult witnesses, and deliberate collectively before reaching a decision.

Disputes may involve land disagreements, family conflicts, marriage
disputes, inheritance issues, livestock-related disputes, breaches of
community norms, and conflicts between clans or families.

Reconciliation may involve public acknowledgment of wrongdoing, apologies,
compensation where appropriate, forgiveness, community witnessing of the
agreement, and blessings by elders.

The restoration of social harmony is considered more important than simply
determining a winner or loser.

Thayu refers to peace, harmony, and well-being.
    `.trim(),
  },

  {
    id: "ritual-001",
    category: "rituals_and_cultural_practices",
    title: "Marriage (Ũthoni)",
    keywords: [
      "ũthoni",
      "uthoni",
      "marriage",
      "ũviki",
      "rũracio",
      "athoni",
      "families",
      "clans",
      "blessings",
    ],
    content: `
Marriage (ũviki / ũthoni) is regarded as a union between families rather
than only between two individuals.

The process involves courtship, negotiations, payment of bride wealth
(rũracio), blessings, and community approval.

Marriage symbolizes continuity of the family lineage and strengthens
relationships between clans.

The process involves careful consultation between families, elders
(Athamaki), and clan representatives.

Marriage ceremonies may involve prayers (mahoya), songs (rwĩmbo),
blessings (irathimo), feasting, and communal celebration.

Elders may offer blessings wishing the couple fertility (gũciara),
prosperity (ũtonga), peace (thayu), good health (ũgima mwega),
long life (muoyo mũnene), and strong family relationships.

The families become Athoni, a respected relationship that creates lasting
bonds between households.
    `.trim(),
  },

  {
    id: "ritual-002",
    category: "rituals_and_cultural_practices",
    title: "Initiation (Irua)",
    keywords: [
      "irua",
      "ĩrua",
      "initiation",
      "circumcision",
      "adulthood",
      "gūtema mware",
      "bravery",
      "discipline",
    ],
    content: `
Irua is one of the significant transition rites in Embu and Mbeere
culture.

Traditionally, circumcision marks the movement from childhood into
adulthood.

It is both a physical and educational process that prepares young people
for adult responsibilities.

During Irua, initiates receive instruction on:

• Respect for elders
• Community values
• Marriage responsibilities
• Leadership
• Courage and discipline
• Social obligations

Special songs, dances, blessings, and teachings accompany the initiation
process.

Gūtema Mware is associated with initiation ceremonies and encourages
bravery, endurance, and perseverance.

Successful completion of Irua grants an individual new social status and
recognition within the community.
    `.trim(),
  },

  {
    id: "food-001",
    category: "foods_preparation_preservation",
    title: "Gĩtheri and Traditional Foods",
    keywords: [
      "gĩtheri",
      "githeri",
      "food",
      "foods",
      "maize",
      "beans",
      "vegetables",
      "managu",
      "mũthũnga",
      "terere",
      "saga",
      "sweet potatoes",
      "arrowroots",
    ],
    content: `
Gĩtheri is a traditional food prepared from boiled maize mixed with beans,
peas, or other legumes.

Variations may include vegetables and local seasonings depending on
availability.

Traditional vegetables are also important components of the Embu and
Mbeere diet. These include:

• Managu
• Mũthũnga
• Terere
• Saga
• Pumpkin leaves
• Cowpea leaves

These vegetables are harvested from farms or gathered from the wild,
cleaned thoroughly, boiled, and sometimes fried with onions or other
ingredients.

Root crops include sweet potatoes, arrowroots, yams, and cassava.

These crops may be boiled, roasted, or steamed and serve as important
sources of carbohydrates.
    `.trim(),
  },

  {
    id: "food-002",
    category: "foods_preparation_preservation",
    title: "Traditional Food Preservation",
    keywords: [
      "preservation",
      "drying",
      "kũanika",
      "smoking",
      "fermentation",
      "honey",
      "storage",
      "grain",
    ],
    content: `
Traditional food preservation methods include drying (kũanika), smoking,
fermentation, and storage.

Drying was used for foods such as maize, beans, millet, sorghum,
vegetables, and fruits.

After drying, grains were stored in traditional granaries and storage
structures designed to protect them from pests, moisture, and rodents.

Meat may be smoked to extend its shelf life.

Milk and some traditional beverages may be preserved through fermentation.

Honey may be stored in gourds or specially prepared containers where it
can remain usable for long periods.
    `.trim(),
  },

  {
    id: "economy-001",
    category: "livelihoods",
    title: "Traditional Livelihoods and Farming",
    keywords: [
      "farming",
      "ūrĩmi",
      "urimi",
      "livelihood",
      "agriculture",
      "livestock",
      "beekeeping",
      "fishing",
      "hunting",
      "trade",
    ],
    content: `
The traditional economy of the Embu and Mbeere communities is based on
agriculture, livestock keeping, beekeeping, hunting, fishing, trade, and
various crafts.

Farming (ūrĩmi) is the most important traditional livelihood activity.

The fertile highlands of Embu support crops such as maize, beans, bananas,
sweet potatoes, arrowroots, vegetables, coffee, and tea.

In the drier Mbeere region, farmers traditionally grow drought-resistant
crops such as millet, sorghum, cowpeas, green grams, and pigeon peas.

Agricultural activities include land clearing, digging and cultivation,
planting, weeding, harvesting, and storage.

Traditional grain storage structures include gĩtu or mūrūrū.

Livestock keeping includes cattle, goats, sheep, and chickens.

Livestock provide milk, meat, manure, bride wealth, social status, and
economic security.

Beekeeping has long been practiced, especially in Mbeere. Honey (ũũkĩ)
is valued as food and as an ingredient in traditional beverages.

Fishing is practiced mainly in areas near the Tana River and
hydroelectric dams such as Kiambere, Gitaru, and Kindaruma.
    `.trim(),
  },

  {
    id: "material-001",
    category: "material_culture",
    title: "Traditional Baskets and Pottery",
    keywords: [
      "ciondo",
      "kĩondo",
      "basket",
      "baskets",
      "weaving",
      "pottery",
      "nyũngũ",
      "clay",
    ],
    content: `
Baskets (ciondo / kĩondo) were widely made by women using fibres obtained
from local plants.

Basket weaving involved collecting, drying, splitting, and weaving plant
materials into different shapes and sizes.

Different baskets served different purposes, including carrying farm
produce from the mũgũnda, storing grain in granaries, and transporting
household items.

Basket weaving required skill, creativity, and experience, often
transmitted within the family.

The communities also produced earthen pots (nyũngũ) using clay obtained
from riverbanks and suitable soils.

Pottery involved collecting clay, kneading it, moulding vessels by hand,
drying them, and firing them in specially prepared fires.

Pottery was mainly practiced by women and provided containers for cooking,
water storage, and brewing traditional beverages.
    `.trim(),
  },

  {
    id: "technology-001",
    category: "indigenous_technology",
    title: "Traditional Hunting Technology",
    keywords: [
      "gĩteng’ū",
      "gĩtengu",
      "trap",
      "ĩkerenge",
      "ĩvarĩ",
      "bow",
      "ũta",
      "arrows",
      "mĩgwĩ",
      "hunting",
    ],
    content: `
Traditional hunting technology included traps and hunting equipment.

Gĩteng’ū was a traditional metal trap used to catch hyenas.

Ĩkerenge was a bird trap.

Ĩvarĩ was a squirrel trap.

Traditional hunting equipment also included ũta na mĩgwĩ, meaning bow and
arrows.

Although hunting has declined due to conservation laws, knowledge of
traditional hunting methods remains part of cultural heritage.

Traditional crafts included basket weaving, pottery, wood carving,
blacksmithing, and instrument making.
    `.trim(),
  },

  {
    id: "naming-001",
    category: "social_life_naming",
    title: "Traditional Naming Practices",
    keywords: [
      "naming",
      "names",
      "child",
      "mwana",
      "grandparents",
      "family",
      "lineage",
      "birth",
    ],
    content: `
Among the Embu and Mbeere communities, naming is an important cultural
practice reflecting ancestry, family continuity, social relationships,
and significant events surrounding a child's birth.

Children are traditionally named according to established kinship
patterns.

One common practice is naming children after grandparents and other
respected relatives.

The first son may be named after the paternal grandfather.

The first daughter may be named after the paternal grandmother.

Subsequent children may be named after maternal grandparents and other
close relatives.

Names may also honor respected elders or deceased family members.

Events surrounding birth may influence name selection. These include the
time or season of birth, environmental conditions, family circumstances,
migration, prosperity, challenges, reconciliation, or significant
achievements.

Names help preserve family lineage and strengthen connections between
generations.
    `.trim(),
  },

  {
    id: "kinship-001",
    category: "social_life_naming",
    title: "Kinship Terms",
    keywords: [
      "kinship",
      "family",
      "vava",
      "maitu",
      "mwana",
      "cucu",
      "mwari",
      "mwanake",
      "mũthoni",
      "athoni",
    ],
    content: `
Common kinship terms include:

Vava – Father.

Maitu – Mother.

Mwana – Child.

Mwarĩ wa baba – Father's child (sibling).

Mwarĩ wa maitu – Mother's child (sibling).

Cucu – Grandparent.

Mwari – Daughter.

Mwanake – Son.

Mũthoni – In-law or relationship established through marriage.

Athoni – Families related through marriage.

Mũrũmũ wa nyina – Maternal uncle.

Mũrũmũ wa baba – Paternal uncle.

Respect for elders is a key feature of family life. Younger family
members are expected to show obedience, courtesy, and respect toward
older relatives.
    `.trim(),
  },

  {
    id: "environment-001",
    category: "environmental_knowledge",
    title: "Traditional Environmental Knowledge",
    keywords: [
      "environment",
      "seasons",
      "rain",
      "mbura",
      "drought",
      "njara",
      "rivers",
      "njũũĩ",
      "forests",
      "plants",
      "animals",
      "conservation",
    ],
    content: `
Traditional environmental knowledge involves careful observation of
rainfall patterns, river water levels, flowering and fruiting of plants,
migration and behavior of birds, insects, wind patterns, cloud
formations, and livestock and wildlife behavior.

These indicators help people anticipate droughts, rainfall, harvest
periods, and seasonal transitions.

Increased bird activity may signal approaching rainfall.

Flowering of certain trees may indicate the onset of a planting season.

Reduced river flow may warn of drought conditions.

Traditional conservation practices include protecting sacred forests,
conserving water sources, restricting unnecessary tree cutting,
preserving medicinal plants, protecting important wildlife habitats,
and observing rules governing sacred sites.
    `.trim(),
  },

  {
    id: "nature-001",
    category: "environmental_knowledge",
    title: "Kĩrĩnyaga and Important Natural Features",
    keywords: [
      "kĩrĩnyaga",
      "mount kenya",
      "nature",
      "natural features",
      "rivers",
      "springs",
      "forests",
      "hills",
      "caves",
      "makurungu",
      "ngai",
    ],
    content: `
The most significant natural feature identified in the supplied material
is Kĩrĩnyaga (Mount Kenya), which occupies an important place in Embu
cultural and spiritual life.

Traditionally, prayers (mahoya) were often directed toward Kĩrĩnyaga
because it was regarded as the dwelling place of Ngai.

Other important natural features include:

• Rivers (njũũĩ)
• Springs (nthĩĩna cia maaĩ)
• Wetlands
• Forests
• Hills (irĩma)
• Sacred caves (makurungu)

Examples of culturally important caves include:

Ĩkurungu rĩa Cagaca

Ngurunga ya Karĩrĩo

Ĩkurungu rĩa Icongi

Makurungu ma Kamūtuangako
    `.trim(),
  },

  {
    id: "animals-001",
    category: "environmental_knowledge",
    title: "Animals in Cultural Knowledge",
    keywords: [
      "animals",
      "nyamũ",
      "lion",
      "lions",
      "ndũĩ",
      "hyena",
      "mbweha",
      "squirrel",
      "monkey",
      "birds",
      "nyoni",
    ],
    content: `
Important animals include livestock such as cattle (ng’ombe), goats
(mbũri), sheep (ng’ondu), and chickens (nguku).

Wild animals identified in the supplied material include lions (ndũĩ),
hyenas (mbweha), leopards, monkeys (nkima), antelopes, squirrels, and
birds (nyoni).

Animals also feature prominently in metaphorical language.

Lions symbolize courage (ũgima) and strength.

Hyenas may symbolize greed, selfishness, or dishonesty.

Squirrels often represent cleverness and intelligence.

Monkeys may symbolize playfulness or mischief.

Birds may symbolize freedom, wisdom, warning, or foresight.
    `.trim(),
  },

  {
    id: "children-001",
    category: "social_life_naming",
    title: "Children's Language and Play",
    keywords: [
      "children",
      "ciana",
      "play",
      "mĩchezo",
      "games",
      "toys",
      "ng’ano",
      "riddles",
      "ndaĩ",
      "songs",
    ],
    content: `
Children traditionally learn language (rũthiomi), social values,
cultural knowledge, and life skills through play (mĩchezo).

During play, children primarily use Kiembu and Kimbeere, although today
many also incorporate Kiswahili and English.

Traditional play provides an environment where children develop
communication skills, creativity, cooperation, leadership, and
problem-solving abilities.

Children's interactions include storytelling (ng’ano), singing,
riddling (ndaĩ), imitation, role-playing, and group games.

Traditional toys may be made from locally available materials such as
clay, wood, sticks, leaves, fibres, gourds, maize cobs, and banana
stems.

Children may make miniature houses, animals, carts, cooking utensils,
bows, arrows, dolls, and livestock models.
    `.trim(),
  },

  {
    id: "work-001",
    category: "livelihoods",
    title: "Communal Work (Ĩrĩma)",
    keywords: [
      "ĩrĩma",
      "communal work",
      "work",
      "cooperation",
      "planting",
      "harvesting",
      "house construction",
      "community",
    ],
    content: `
One important traditional work institution is ĩrĩma, referring to
communal work groups.

During ĩrĩma, community members work together on activities such as
planting, harvesting, house construction, and community projects.

The host family usually provides food and refreshments for participants.

Communal work strengthens social bonds, encourages mutual support, and
enables households to complete labor-intensive tasks efficiently.

Work was often accompanied by songs (rwĩmbo) that motivated workers,
reduced fatigue, coordinated activities, promoted cooperation, and
celebrated achievement.
    `.trim(),
  },

  {
    id: "life-001",
    category: "rituals_and_cultural_practices",
    title: "Life Cycle and Transition Rites",
    keywords: [
      "life cycle",
      "birth",
      "childhood",
      "initiation",
      "irua",
      "marriage",
      "uthoni",
      "elderhood",
      "death",
      "gĩkuũ",
    ],
    content: `
The major life stages identified in the supplied material include birth,
childhood, initiation (Irua), marriage (Ũthoni), elderhood (Athamaki),
and death (gĩkuũ).

These transitions help individuals move from one social status to another
while strengthening family and community bonds.

Each stage is associated with ceremonies, teachings, responsibilities,
and cultural expressions.

Birth and childhood introduce the child to family traditions, language,
and cultural values.

Irua marks the movement toward adulthood.

Ũthoni establishes relationships between families.

Elderhood is associated with wisdom, leadership, and responsibility.

Death (gĩkuũ) is a major transition affecting both the family and wider
community. Funeral ceremonies provide opportunities for mourning,
remembrance, and support for the bereaved.
    `.trim(),
  },

  {
    id: "politeness-001",
    category: "emotions_identity_politeness",
    title: "Greetings and Respectful Communication",
    keywords: [
      "greetings",
      "respect",
      "politeness",
      "honor",
      "vava",
      "maitu",
      "cucu",
      "mũthamaki",
      "mwarimu",
      "mzee",
    ],
    content: `
Greetings are an essential part of daily interaction and demonstrate
respect and goodwill.

People are expected to greet others before beginning conversations or
conducting business.

Greetings may inquire about personal well-being, family members, health,
work, and daily activities.

Titles of respect include:

Vava – Father; also used respectfully for older men.

Maitu – Mother; also used respectfully for older women.

Cucu – Grandparent; signifies wisdom, age, and respect.

Mzee – Elder or respected senior person.

Mwarimu – Teacher.

Mũthamaki – Elder, leader, or respected authority figure.

Mũrũmĩ – Husband or adult man.

Mũka – Wife or adult woman.

Respectful behavior includes greeting elders first, listening
attentively, avoiding interruption, using respectful language, and
following appropriate advice and guidance.
    `.trim(),
  },

  {
    id: "oral-003",
    category: "oral_traditions",
    title: "Teaching Moral Values Through Oral Literature",
    keywords: [
      "nthimo",
      "ng’ano",
      "moral",
      "values",
      "wisdom",
      "elders",
      "respect",
      "honesty",
      "hard work",
      "cooperation",
    ],
    content: `
Elders (Athamaki) use nthimo and ng’ano to teach children and young
people about moral values.

Values include:

Respect for elders (gũtĩĩa Athamaki).

Honesty (ũhoro wa ma).

Responsibility (wĩra na mĩgambo).

Courage (ũgima).

Generosity (ũtugi).

Cooperation (gũteithania).

Instead of giving direct instructions, elders often use metaphorical
expressions that encourage reflection and discussion.

This method helps learners remember lessons more effectively.

Warnings may address laziness, greed, pride, dishonesty, disrespect, and
recklessness.
    `.trim(),
  },

  {
    id: "metaphor-001",
    category: "oral_traditions",
    title: "Metaphorical and Idiomatic Language",
    keywords: [
      "metaphor",
      "idiom",
      "wĩra mwega",
      "gĩkeno kĩa wĩra",
      "kwĩyũmia",
      "gũkirĩrĩria",
      "ũmwe",
      "ũhoro wa ma",
      "ũũgĩ",
      "kĩrĩra",
    ],
    content: `
Metaphorical and idiomatic expressions are used to communicate ideas
about social behavior and life.

Examples include:

Hard work – wĩra mwega.

Diligence – gĩkeno kĩa wĩra.

Respect for elders – gũtĩĩa Athamaki.

Patience – kwĩyũmia.

Perseverance – gũkirĩrĩria.

Unity – ũmwe.

Cooperation – gũteithania.

Honesty – ũhoro wa ma.

Wisdom – ũũgĩ.

Metaphors related to nature are also widespread.

Rivers (njũũĩ) may symbolize life and continuity.

Trees (mĩtĩ) may symbolize strength and stability.

Drought (njara kana kĩeha) may represent hardship, suffering, or poor
leadership.
    `.trim(),
  },

  {
    id: "religion-001",
    category: "religion_beliefs",
    title: "Ecological Taboos and Environmental Stewardship",
    keywords: [
      "taboo",
      "taboos",
      "mĩgiro",
      "sacred",
      "forest",
      "rivers",
      "conservation",
      "environment",
      "ecological",
    ],
    content: `
Traditional ecological taboos help regulate human interaction with the
environment.

Restrictions may include:

• Cutting trees in sacred forests.
• Polluting rivers and springs.
• Destroying culturally significant sites.
• Hunting certain animals unnecessarily.
• Interfering with ritual sites.
• Disrespecting sacred caves, hills, and forests.

Such taboos are reinforced through ng’ano, nthimo, songs (rwĩmbo), and
teachings from elders (Athamaki).

They serve both spiritual and practical purposes by encouraging
environmental stewardship and sustainable resource use.
    `.trim(),
  },

  {
    id: "funeral-001",
    category: "rituals_and_cultural_practices",
    title: "Traditional Funeral Practices",
    keywords: [
      "funeral",
      "death",
      "gĩkuũ",
      "mourning",
      "sorrow",
      "songs",
      "lamentation",
      "condolences",
      "prayers",
    ],
    content: `
Funerals are important communal events that bring together relatives,
friends, neighbors, and community members to mourn and support the
bereaved family.

Special funeral songs (rwĩmbo rwa kũrĩrĩra) may be performed to express
grief, honor the deceased, comfort family members, and reflect on life
and mortality.

Prayers (mahoya) may be offered for comfort, strength, and peace.

Community members visit the bereaved family to offer practical
assistance, emotional support, food, labor, and companionship.

Funeral gatherings emphasize respect for the deceased and recognition of
their contribution to family and community life.
    `.trim(),
  },
];


/**
 * Additional helper data.
 *
 * These terms can be expanded as more Kiembu material is collected.
 */
export const kiembuSpecialCharacters = [
  "ĩ",
  "Ĩ",
  "ũ",
  "Ũ",
  "ṅ",
  "Ṅ",
  "’",
  "‘",
  "ɔ",
  "Ɔ",
];


/**
 * Common Kiembu character alternatives.
 *
 * The chatbot uses these when searching so that users can type
 * ordinary i/u characters and still retrieve words containing
 * ĩ/ũ.
 */
export const kiembuCharacterAlternatives: Record<string, string[]> = {
  i: ["i", "ĩ"],
  ĩ: ["i", "ĩ"],
  I: ["i", "ĩ"],
  Ĩ: ["i", "ĩ"],

  u: ["u", "ũ"],
  ũ: ["u", "ũ"],
  U: ["u", "ũ"],
  Ũ: ["u", "ũ"],
};


/**
 * Display names for the knowledge categories.
 */
export const kiembuCategoryNames: Record<
  KiembuKnowledgeCategory,
  string
> = {
  oral_traditions: "Oral Traditions",
  rituals_and_cultural_practices: "Rituals & Cultural Practices",
  religion_beliefs: "Religion & Beliefs",
  material_culture: "Material Culture",
  foods_preparation_preservation: "Food, Preparation & Preservation",
  indigenous_technology: "Indigenous Technology",
  emotions_identity_politeness: "Emotions, Identity & Politeness",
  traditional_knowledge_medicine: "Traditional Knowledge & Medicine",
  governance_justice: "Governance & Justice",
  heritage_sites: "Heritage Sites",
  social_life_naming: "Social Life & Naming",
  performance_arts: "Performance Arts",
  indigenous_calendar: "Indigenous Calendar",
  environmental_knowledge: "Environmental Knowledge",
  livelihoods: "Livelihoods",
};