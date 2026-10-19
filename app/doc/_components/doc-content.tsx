import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Info, Layers3, Gamepad2, AlertTriangle, Clock3 } from "lucide-react";
import type { DocArea, DocCollection, DocPage, DocSection, ApiEntry } from "../_lib/types";
import { apiEntries, apiHref, areaHref, docsUpdated, docsVersion, getPage } from "../_lib/docs";
import { CopyButton } from "./small-controls";

export function slugify(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

function Inline({ value }: { value: string }) {
  return <>{value.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((piece, i) => piece.startsWith("**") && piece.endsWith("**") ? <strong key={i}>{piece.slice(2,-2)}</strong> : piece.startsWith("`") && piece.endsWith("`") ? <code key={i}>{piece.slice(1,-1)}</code> : <span key={i}>{piece}</span>)}</>;
}

function DocSectionView({ section, collection, number }: { section: DocSection; collection: DocCollection; number: number }) {
  const sourceFiles = apiEntries[collection.id];
  return <section className="docs-article-section" id={slugify(section.title)}>
    <h2><span className="docs-section-number">{String(number).padStart(2,"0")}</span>{section.title}</h2>
    {section.paragraphs?.map((paragraph,index) => <p key={index}><Inline value={paragraph}/></p>)}
    {section.bullets && <ul className="docs-bullets">{section.bullets.map((bullet,index) => <li key={index}><Inline value={bullet}/></li>)}</ul>}
    {section.steps && <ol className="docs-steps">{section.steps.map((step,index) => <li key={index}><span className="docs-step-number">{index+1}</span><span><Inline value={step}/></span></li>)}</ol>}
    {section.code && <div className="docs-code-block"><div className="docs-code-head"><span>C# / CLI example</span><CopyButton text={section.code}/></div><pre><code>{section.code}</code></pre></div>}
    {section.note && <div className="docs-note"><Info size={17} aria-hidden="true"/><p><Inline value={section.note}/></p></div>}
    {section.warning && <div className="docs-warning"><AlertTriangle size={17} aria-hidden="true"/><p><Inline value={section.warning}/></p></div>}
    {!!section.files?.length && <div className="docs-source-list"><span className="docs-source-caption">SOURCE FILES</span>{section.files.map(path => { const found=sourceFiles.find(entry=>entry.path===path);return found ? <Link href={apiHref(collection.id,found.id)} key={path} className="docs-source-chip">↗ {path}</Link> : <span className="docs-source-chip docs-source-unknown" key={path}>{path}</span>; })}</div>}
  </section>;
}

function Related({ collection, slugs }: { collection: DocCollection; slugs?: string[] }) {
  const pages=(slugs ?? []).map(slug=>getPage(collection.id,slug)).filter((page):page is DocPage=>!!page);
  if(!pages.length) return null;
  return <section className="docs-related"><h2>Continue reading</h2><div className="docs-related-grid">{pages.map(page=><Link href={areaHref(collection.id,page.slug)} key={page.slug} className="docs-related-card"><span className="docs-small-kicker">{page.category}</span><strong>{page.title} <span>↗</span></strong><small>{page.summary}</small></Link>)}</div></section>;
}

export function Article({ collection, page }: { collection: DocCollection; page: DocPage }) {
  return <div className="docs-content-grid"><article className="docs-reading-col">
    <div className="docs-breadcrumb"><Link href="/doc">Docs</Link><span>/</span><Link href={areaHref(collection.id)}>{collection.shortName}</Link><span>/</span>{page.title}</div>
    <div className="docs-article-hero"><span className="docs-eyebrow">{page.category} <span> / </span> {page.audience}</span><h1>{page.title}</h1><p>{page.summary}</p><div className="docs-article-meta"><span><Clock3 size={14}/> Reviewed {docsUpdated}</span><span><Code2 size={14}/> Source-backed</span></div></div>
    {page.sections.map((section,index)=><DocSectionView key={`${page.slug}-${index}`} section={section} collection={collection} number={index+1}/>)}
    <div className="docs-article-feedback"><div><strong>Keep this page accurate.</strong><p>If code, asset setup or gameplay behaviour changes, update this guide in the same development milestone.</p></div><CopyButton text={page.title+" — "+areaHref(collection.id,page.slug)} label="Copy page reference"/></div>
    <Related collection={collection} slugs={page.related}/>
    <footer className="docs-document-footer"><span>{collection.shortName} · {docsVersion}</span><Link href="/doc">All documentation ↗</Link></footer>
  </article><aside className="docs-toc"><div className="docs-toc-inner"><div className="docs-toc-heading">ON THIS PAGE</div>{page.sections.map((section,index)=><a key={index} href={`#${slugify(section.title)}`}>{section.title}</a>)}<div className="docs-toc-divider"/><Link href={areaHref(collection.id,"workflow")}>Contribution workflow ↗</Link><Link href={areaHref(collection.id)+"/reference"}>Source API reference ↗</Link></div></aside></div>;
}

export function CollectionHome({ collection, fileCount }: { collection: DocCollection; fileCount: number }) {
  const groups=Array.from(new Set(collection.pages.map(page=>page.category)));
  const start=collection.pages.find(page=>page.slug==="overview");
  const setup=collection.pages.find(page=>page.slug==="setup"||page.slug==="getting-started");
  return <div className="docs-collection-content">
    <div className="docs-breadcrumb"><Link href="/doc">Docs</Link><span>/</span>{collection.shortName}</div>
    <section className="docs-collection-hero"><Image src={collection.id === "arctoolkits" ? "/images/dev-image.jpg" : "/images/background-override.png"} alt={collection.id === "arctoolkits" ? "Unity game development tools" : "Project OVERRIDE key artwork"} fill priority sizes="(max-width: 780px) 100vw, 80vw" className="docs-cover-img"/><div className="docs-collection-shade"/><div className="docs-hero-inside"><span className="docs-eyebrow">{collection.id === "arctoolkits" ? <Layers3 size={15}/> : <Gamepad2 size={15}/>} {collection.kicker} <span>·</span> DOCUMENTATION</span><h1>{collection.name}</h1><p>{collection.intro}</p><div className="docs-hero-actions">{setup && <Link href={areaHref(collection.id,setup.slug)} className="docs-btn-primary">Start onboarding <span>↗</span></Link>}{start && <Link href={areaHref(collection.id,start.slug)} className="docs-btn-quiet">Read overview →</Link>}</div></div></section>
    <div className="docs-stat-grid"><div><strong>{collection.pages.length}</strong><span>ONBOARDING GUIDES</span></div><div><strong>{fileCount}</strong><span>INDEXED C# SCRIPTS</span></div><div><strong>Oct &apos;26</strong><span>REVIEWED SOURCE</span></div></div>
    <div className="docs-heading-row"><div><span className="docs-small-kicker">EXPLORE THE KNOWLEDGE BASE</span><h2>Documentation by system</h2></div><Link href={areaHref(collection.id)+"/reference"}>Browse all {fileCount} scripts ↗</Link></div>
    {groups.map(category=><section className="docs-collection-category" key={category}><h3>{category}</h3><div className="docs-collection-linkgrid">{collection.pages.filter(page=>page.category===category).map(page=><Link key={page.slug} href={areaHref(collection.id,page.slug)} className="docs-collection-guide"><span className="docs-guide-symbol"><ArrowRight size={17}/></span><strong>{page.title}</strong><p>{page.summary}</p><span className="docs-guide-audience">{page.audience}</span></Link>)}</div></section>)}
    <div className="docs-bottom-notice"><strong>Built to evolve with the game.</strong><p>Content is maintained alongside the Unity code. The source index covers scripts, not serialized scenes or prefabs; verify integration details in the working project.</p></div>
  </div>;
}

export function ApiDetail({ area, entry }: { area: DocArea; entry: ApiEntry }) {
  const collectionLabel=area==="arctoolkits"?"ArcToolkit":"Project OVERRIDE";
  return <article className="docs-reading-col docs-api-detail"><div className="docs-breadcrumb"><Link href="/doc">Docs</Link><span>/</span><Link href={areaHref(area)}>{collectionLabel}</Link><span>/</span><Link href={areaHref(area)+"/reference"}>Reference</Link></div>
    <div className="docs-article-hero"><span className="docs-eyebrow"><Code2 size={14}/> SOURCE REFERENCE / {entry.group}</span><h1>{entry.file}</h1><p>{entry.description || "C# source file and declared runtime/editor members from the supplied code snapshot."}</p><div className="docs-article-meta"><span>↗ {entry.path}</span><span>{entry.generated ? "Generated code" : "C# source"}</span></div></div>
    <section className="docs-article-section"><h2><span className="docs-section-number">01</span>Declared types</h2>{entry.symbols.length ? <div className="docs-symbol-list">{entry.symbols.map(symbol=><code key={symbol}>{symbol}</code>)}</div> : <p>No top-level type declarations were extracted for this file.</p>}</section>
    <section className="docs-article-section"><h2><span className="docs-section-number">02</span>Public & protected methods</h2>{entry.generated ? <p>This is an auto-generated Unity Input System wrapper. Modify the input actions asset and regenerate it; do not edit generated C# directly.</p> : entry.methods.length ? <div className="docs-method-grid">{entry.methods.map((method,index)=><div key={`${method}-${index}`}><code>{method}()</code>{entry.methodDocs[method] && <p>{entry.methodDocs[method]}</p>}</div>)}</div> : <p>No methods were detected by the static reference generator. This file may define data structures, editor attributes or serialized assets instead.</p>}</section>
    {!!entry.fields.length && <section className="docs-article-section"><h2><span className="docs-section-number">03</span>Public fields & properties</h2><div className="docs-field-table">{entry.fields.map(field=><div key={field.name}><code>{field.type}</code><strong>{field.name}</strong></div>)}</div><p>Field availability does not guarantee an Inspector control; static, runtime and serialized members differ. Check the component declaration.</p></section>}
    <section className="docs-article-section"><h2><span className="docs-section-number">{entry.fields.length ? "04" : "03"}</span>How to use this entry</h2><p>This page is an index built from the documented Unity C# snapshot. It identifies a source file and callable members but does not replace reading the class implementation, XML comments and serialized Inspector requirements in the repository.</p><div className="docs-note"><span>ⓘ</span><p>Methods are extracted statically and may omit inherited, explicit-interface, multiline or private members. Regenerate after source changes.</p></div></section>
    <div className="docs-article-feedback"><div><strong>Source path</strong><p>{entry.path}</p></div><CopyButton text={entry.path} label="Copy source path"/></div>
    <div className="docs-document-footer"><Link href={areaHref(area)+"/reference"}>← All scripts</Link><span>{docsVersion}</span></div>
  </article>;
}
