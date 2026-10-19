"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ApiEntry, DocArea } from "../_lib/types";
import { apiHref, areaHref } from "../_lib/docs";

export function ApiExplorer({ area, files }: { area: DocArea; files: ApiEntry[] }) {
  const [search,setSearch]=useState("");
  const [group,setGroup]=useState("all");
  const groups=useMemo(()=>[...new Set(files.map(file=>file.group))].sort(),[files]);
  const filtered=useMemo(()=>{
    const q=search.trim().toLowerCase();
    return files.filter(file=>(group==="all"||file.group===group)&&(!q||[file.file,file.path,file.description,...file.symbols,...file.methods].join(" ").toLowerCase().includes(q)));
  },[search,group,files]);
  return <div className="docs-api-index docs-reading-col">
    <div className="docs-breadcrumb"><Link href="/doc">Docs</Link><span>/</span><Link href={areaHref(area)}>{area==="arctoolkits"?"ArcToolkit":"Project OVERRIDE"}</Link><span>/</span>Reference</div>
    <div className="docs-article-hero"><span className="docs-eyebrow">SOURCE FILE INDEX</span><h1>C# API reference</h1><p>Explore every C# script in the supplied {area==="arctoolkits"?"ArcToolkit":"ProjectOVERRIDE"} snapshot by file, module, declared type or method name.</p><div className="docs-article-meta"><span>{files.length} scripts indexed</span><span>Snapshot · October 2026</span></div></div>
    <div className="docs-reference-filters"><input type="search" aria-label="Search C# scripts" placeholder="Search file, type or method..." value={search} onChange={e=>setSearch(e.target.value)}/><select aria-label="Filter by module" value={group} onChange={e=>setGroup(e.target.value)}><option value="all">All modules</option>{groups.map(value=><option key={value} value={value}>{value}</option>)}</select></div>
    <div className="docs-results-line">{filtered.length} matching {filtered.length===1?"file":"files"}</div>
    <div className="docs-api-list">{filtered.map(file=><Link className="docs-api-row" key={file.id} href={apiHref(area,file.id)}><span className="docs-api-file-icon">{file.generated ? "⚙" : "C#"}</span><span className="docs-api-name"><strong>{file.file}</strong><small>{file.path}</small><span>{file.description || (file.symbols.length ? file.symbols.join(", ") : "Source declaration and implementation")}</span></span><span className="docs-api-arrow">↗</span></Link>)}</div>
    {filtered.length===0 && <p className="docs-empty-search">No matching scripts. Try a broader term or clear the module filter.</p>}
    <div className="docs-bottom-notice"><strong>Snapshot, not live reflection.</strong><p>These entries are generated from local scripts; they don&apos;t automatically update when the Unity project changes. Run scripts/generate-doc-api.py as part of your documentation update.</p></div>
  </div>;
}
