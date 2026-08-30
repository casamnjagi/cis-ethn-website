// app/data/kiembuKnowledgeAll.ts
// Unified knowledge source for the CIS-ETHN Kiembu chatbot.

import { kiembuKnowledge } from "./kiembuKnowledge";
import { kiembuDocumentKnowledge } from "./kiembuDocumentKnowledge";

export const kiembuKnowledgeAll = [
  ...kiembuKnowledge,
  ...kiembuDocumentKnowledge,
];

export type KiembuKnowledgeAllEntry = (typeof kiembuKnowledgeAll)[number];
