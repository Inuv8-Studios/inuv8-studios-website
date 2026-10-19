"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, BookOpen, Code2, Gamepad2, Layers3, Menu, Search, X } from "lucide-react";
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
  const root = `/doc/${collection.id}`;
  const isArc = collection.id === "arctoolkits";
  const CollectionIcon = isArc ? Layers3 : Gamepad2;

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

  return (
    <div className="docs-app docs-collection-layout">
      <div className="docs-subnav">
        <div className="docs-subnav-inner">
          <div className="docs-subnav-trail"><Link href="/doc"><BookOpen size={15}/> Documentation</Link><span>/</span><span>{collection.shortName}</span></div>
          <div className="docs-subnav-links"><Link href={isArc ? "/doc/override" : "/doc/arctoolkits"}>{isArc ? "Project OVERRIDE" : "ArcToolkit"}</Link><Link href="/">Main website <ArrowLeft size={14}/></Link></div>
          <button type="button" className="docs-menu-button" aria-label={menuOpen ? "Close documentation navigation" : "Open documentation navigation"} aria-controls="docs-sidebar" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={18}/> : <Menu size={18}/>} <span>Browse</span></button>
        </div>
      </div>
      {menuOpen && <button className="docs-overlay" type="button" aria-label="Close documentation navigation" onClick={() => setMenuOpen(false)}/>}
      <div className="docs-layout-body">
        <aside className={`docs-sidebar ${menuOpen ? "docs-sidebar-open" : ""}`} id="docs-sidebar" aria-label={`${collection.shortName} documentation menu`}>
          <div className="docs-sidebar-inner">
            <Link className="docs-sidebar-home" href={root}><span className="docs-sidebar-home-icon"><CollectionIcon size={23}/></span><span><strong>{collection.shortName}</strong><small>{isArc ? "FRAMEWORK DOCUMENTATION" : "GAME PRODUCTION HANDBOOK"}</small></span></Link>
            <label className="docs-search-box" htmlFor="docs-search"><Search size={16}/><input id="docs-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search guides and scripts" autoComplete="off"/><kbd>Ctrl K</kbd></label>
            {matches ? <>
              <div className="docs-nav-group-title">GUIDES · {matches.pages.length}</div>
              {!matches.pages.length && <p className="docs-no-results">No matching guides.</p>}
              {matches.pages.map(page => <Link className={`docs-nav-link ${pathname === `${root}/${page.slug}` ? "active" : ""}`} key={page.slug} href={`${root}/${page.slug}`}>{page.title}</Link>)}
              <div className="docs-nav-group-title">SOURCE FILES · {matches.files.length}{matches.files.length === 30 ? "+" : ""}</div>
              {matches.files.map(file => <Link key={file.id} className="docs-nav-link docs-nav-file" href={`${root}/reference/${file.id}`}>{file.file}<span>{file.group}</span></Link>)}
              {!matches.files.length && <p className="docs-no-results">No matching scripts.</p>}
            </> : <>
              <Link className={`docs-nav-link docs-main-index ${pathname === root ? "active" : ""}`} href={root}><BookOpen size={15}/> Collection home</Link>
              {groupedPages.map(([category, pages]) => <div className="docs-nav-group" key={category}><div className="docs-nav-group-title">{category}</div>{pages.map(page => <Link key={page.slug} className={`docs-nav-link ${pathname === `${root}/${page.slug}` ? "active" : ""}`} href={`${root}/${page.slug}`}>{page.title}</Link>)}</div>)}
              <div className="docs-nav-group"><div className="docs-nav-group-title">Code reference</div><Link className={`docs-nav-link ${pathname.includes("/reference") ? "active" : ""}`} href={`${root}/reference`}><Code2 size={15}/> All source files <span className="docs-nav-count">{files.length}</span></Link></div>
            </>}
            <div className="docs-sidebar-bottom">Source snapshot · October 2026<small>Update alongside development.</small></div>
          </div>
        </aside>
        <main className="docs-main" id="main-content">{children}</main>
      </div>
    </div>
  );
}
