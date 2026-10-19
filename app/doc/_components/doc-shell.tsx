"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ApiEntry, DocCollection, DocPage } from "../_lib/types";

interface DocShellProps {
  collection: DocCollection;
  files: ApiEntry[];
  children: ReactNode;
}

export function DocShell({ collection, files, children }: DocShellProps) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const groupedPages = useMemo(() => {
    const map = new Map<string, DocPage[]>();
    collection.pages.forEach(page => {
      const group = map.get(page.category) ?? [];
      group.push(page);
      map.set(page.category, group);
    });
    return [...map.entries()];
  }, [collection.pages]);

  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return null;
    return {
      pages: collection.pages.filter(p => `${p.title} ${p.summary} ${p.category} ${p.sections.map(s => [s.title, ...(s.paragraphs ?? []), ...(s.bullets ?? [])].join(" ")).join(" ")}`.toLowerCase().includes(term)),
      files: files.filter(f => `${f.file} ${f.path} ${f.description} ${f.symbols.join(" ")} ${f.methods.join(" ")}`.toLowerCase().includes(term)).slice(0, 30),
    };
  }, [query, collection.pages, files]);

  useEffect(() => { setMenuOpen(false); setQuery(""); }, [pathname]);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(true);
        document.getElementById("docs-search")?.focus();
      }
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const root = `/doc/${collection.id}`;

  return (
    <div className="docs-app">
      <header className="docs-topbar">
        <div className="docs-topbar-brand">
          <Link className="docs-brand" href="/" aria-label="Inuv8 Studios home"><span className="docs-brand-mark">IN</span><span>INUV8<span className="docs-brand-muted">STUDIOS</span></span></Link>
          <span className="docs-top-divider" />
          <Link className="docs-top-section" href="/doc">Documentation</Link>
          <span className="docs-top-chevron">/</span>
          <Link className="docs-top-section docs-current-section" href={root}>{collection.shortName}</Link>
        </div>
        <nav className="docs-top-actions" aria-label="Documentation navigation">
          <Link className="docs-switch-link" href={collection.id === "arctoolkits" ? "/doc/override" : "/doc/arctoolkits"}>{collection.id === "arctoolkits" ? "Project OVERRIDE ↗" : "ArcToolkit ↗"}</Link>
          <Link className="docs-switch-link docs-top-external" href="/">Main website ↗</Link>
          <button className="docs-menu-button" type="button" aria-label="Toggle documentation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? "✕" : "☰"}</button>
        </nav>
      </header>
      {menuOpen && <button className="docs-overlay" aria-label="Close menu" type="button" onClick={() => setMenuOpen(false)} />}
      <aside className={`docs-sidebar ${menuOpen ? "docs-sidebar-open" : ""}`}>
        <div className="docs-sidebar-inner">
          <Link className="docs-sidebar-home" href={root}><span className="docs-sidebar-home-icon">{collection.id === "arctoolkits" ? "⌘" : "◈"}</span><span><strong>{collection.shortName}</strong><small>{collection.id === "arctoolkits" ? "FRAMEWORK DOCUMENTATION" : "GAME PRODUCTION HANDBOOK"}</small></span></Link>
          <label className="docs-search-box" htmlFor="docs-search"><span aria-hidden>⌕</span><input id="docs-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search documentation..." autoComplete="off" /><kbd>⌘K</kbd></label>
          {matches ? <>
            <div className="docs-nav-group-title">GUIDES · {matches.pages.length}</div>
            {matches.pages.length === 0 && <p className="docs-no-results">No guides found.</p>}
            {matches.pages.map(page => <Link className={`docs-nav-link ${pathname === `${root}/${page.slug}` ? "active" : ""}`} key={page.slug} href={`${root}/${page.slug}`}>{page.title}</Link>)}
            <div className="docs-nav-group-title">SOURCE FILES · {matches.files.length}{matches.files.length === 30 ? "+" : ""}</div>
            {matches.files.map(file => <Link key={file.id} className="docs-nav-link docs-nav-file" href={`${root}/reference/${file.id}`}>{file.file}<span>{file.group}</span></Link>)}
            {!matches.files.length && <p className="docs-no-results">No matching scripts.</p>}
          </> : <>
            <Link className={`docs-nav-link docs-main-index ${pathname === root ? "active" : ""}`} href={root}>⌂ &nbsp; Collection home</Link>
            {groupedPages.map(([category,pages]) => <div className="docs-nav-group" key={category}><div className="docs-nav-group-title">{category}</div>{pages.map(page => <Link key={page.slug} className={`docs-nav-link ${pathname === `${root}/${page.slug}` ? "active" : ""}`} href={`${root}/${page.slug}`}>{page.title}</Link>)}</div>)}
            <div className="docs-nav-group"><div className="docs-nav-group-title">Code reference</div><Link className={`docs-nav-link ${pathname.includes("/reference") ? "active" : ""}`} href={`${root}/reference`}>All source files <span className="docs-nav-count">{files.length}</span></Link></div>
          </>}
          <div className="docs-sidebar-bottom"><span className="docs-status-indicator"/>Source snapshot · Oct 2026<br/><small>Docs are updated alongside development.</small></div>
        </div>
      </aside>
      <main className="docs-main" id="main-content">{children}</main>
    </div>
  );
}
