// app/data/kiembuData.ts

// ============================================================
// KIEMBU DICTIONARY DATA
// ============================================================

export type KiembuDictionaryEntry = {
  english: string;
  kiembu: string;
};

export type KiembuCorpusEntry = {
  verseId: string;
  english: string;
  kiembu: string;
};

// ============================================================
// KIEMBU DICTIONARY
// ============================================================

export const kiembuDictionary: KiembuDictionaryEntry[] = [
  { english: "one", kiembu: "ĩmwe" },
  { english: "1", kiembu: "ĩmwe" },

  { english: "two", kiembu: "igĩrĩ" },
  { english: "2", kiembu: "igĩrĩ" },

  { english: "three", kiembu: "ithatũ" },
  { english: "3", kiembu: "ithatũ" },

  { english: "four", kiembu: "inya" },
  { english: "4", kiembu: "inya" },

  { english: "ten", kiembu: "ĩkũmi" },
  { english: "10", kiembu: "ĩkũmi" },

  { english: "eleven", kiembu: "ĩkũmi na ĩmwe" },
  { english: "11", kiembu: "ĩkũmi na ĩmwe" },

  { english: "twelve", kiembu: "ĩkũmi na igĩrĩ" },
  { english: "12", kiembu: "ĩkũmi na igĩrĩ" },

  { english: "twenty", kiembu: "mĩrongo ĩri" },
  { english: "20", kiembu: "mĩrongo ĩri" },

  { english: "thirty", kiembu: "mĩrongo ĩthatu" },
  { english: "30", kiembu: "mĩrongo ĩthatu" },

  { english: "forty", kiembu: "mĩrongo ĩna" },
  { english: "40", kiembu: "mĩrongo ĩna" },

  { english: "forty one", kiembu: "mĩrongo ĩna na ĩmwe" },
  { english: "41", kiembu: "mĩrongo ĩna na ĩmwe" },

  { english: "one hundred", kiembu: "ĩgana" },
  { english: "100", kiembu: "ĩgana" },

  { english: "one thousand", kiembu: "ngiri" },
  { english: "1000", kiembu: "ngiri" },

  { english: "ten thousand", kiembu: "ngiri ĩkũmi" },
  { english: "10000", kiembu: "ngiri ĩkũmi" },

  { english: "one hundred thousand", kiembu: "ngiri ĩgana" },
  { english: "100000", kiembu: "ngiri ĩgana" },

  // ----------------------------------------------------------
  // Basic vocabulary
  // ----------------------------------------------------------

  { english: "father", kiembu: "vava" },
  { english: "mother", kiembu: "maitu" },
  { english: "child", kiembu: "mwana" },
  { english: "daughter", kiembu: "mwari" },
  { english: "son", kiembu: "mwanake" },
  { english: "grandparent", kiembu: "cucu" },

  { english: "in-law", kiembu: "mũthoni" },
  { english: "in-laws", kiembu: "athoni" },

  { english: "maternal uncle", kiembu: "mũrũmũ wa nyina" },
  { english: "paternal uncle", kiembu: "mũrũmũ wa baba" },

  { english: "peace", kiembu: "thayu" },
  { english: "unity", kiembu: "ũmwe" },
  { english: "cooperation", kiembu: "gũteithania" },
  { english: "honesty", kiembu: "ũhoro wa ma" },
  { english: "wisdom", kiembu: "ũũgĩ" },
  { english: "patience", kiembu: "kwĩyũmia" },
  { english: "perseverance", kiembu: "gũkirĩrĩria" },
  { english: "generosity", kiembu: "ũtugi" },

  { english: "work", kiembu: "wĩra" },
  { english: "farming", kiembu: "ūrĩmi" },

  { english: "food", kiembu: "iryo" },
  { english: "honey", kiembu: "ũũkĩ" },

  { english: "basket", kiembu: "ciondo" },
  { english: "pot", kiembu: "nyũngũ" },

  { english: "arrow", kiembu: "mũgwĩ" },
  { english: "arrows", kiembu: "mĩgwĩ" },
  { english: "bow", kiembu: "ũta" },

  { english: "house", kiembu: "nyũmba" },
  { english: "home", kiembu: "nyũmba" },

  { english: "water", kiembu: "maaĩ" },
  { english: "river", kiembu: "njũũĩ" },

  { english: "rain", kiembu: "mbura" },
  { english: "drought", kiembu: "njara" },

  { english: "death", kiembu: "gĩkuũ" },
  { english: "marriage", kiembu: "ũthoni" },
  { english: "initiation", kiembu: "ĩrua" },

  { english: "elder", kiembu: "mũthamaki" },
  { english: "elders", kiembu: "athamaki" },

  { english: "song", kiembu: "rwĩmbo" },
  { english: "songs", kiembu: "rwĩmbo" },

  { english: "dance", kiembu: "rwĩmbo" },
];

// ============================================================
// OPTIONAL CORPUS
// ============================================================

export const kiembuCorpus: KiembuCorpusEntry[] = [];