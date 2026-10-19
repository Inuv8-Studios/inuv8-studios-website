export type DocArea = "arctoolkits" | "override";
export type DocAudience = "Everyone" | "Designers" | "Developers" | "Technical artists";

export interface DocSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  code?: string;
  note?: string;
  warning?: string;
  files?: string[];
}

export interface DocPage {
  slug: string;
  title: string;
  summary: string;
  category: string;
  audience: DocAudience;
  sections: DocSection[];
  related?: string[];
}

export interface ApiEntry {
  id: string;
  file: string;
  path: string;
  group: string;
  symbols: string[];
  methods: string[];
  methodDocs: Record<string, string>;
  fields: {name: string; type: string}[];
  description: string;
  generated: boolean;
}

export interface DocCollection {
  id: DocArea;
  name: string;
  shortName: string;
  kicker: string;
  intro: string;
  audience: string;
  source: string;
  pages: DocPage[];
}
