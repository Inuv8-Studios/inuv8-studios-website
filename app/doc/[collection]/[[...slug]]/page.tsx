import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocShell } from "../../_components/doc-shell";
import { ApiDetail, Article, CollectionHome } from "../../_components/doc-content";
import { ApiExplorer } from "../../_components/api-explorer";
import { apiEntries, collections, getCollection, getPage } from "../../_lib/docs";

type RouteParams = { collection: string; slug?: string[] };

export async function generateMetadata({ params }: {params: Promise<RouteParams>}): Promise<Metadata> {
  const {collection: area,slug=[]} = await params;
  const collection=getCollection(area);
  if(!collection) return { title: "Documentation | Inuv8 Studios", robots: { index: false, follow: false, noarchive: true } };
  const page=slug.length===1 ? getPage(collection.id,slug[0]) : undefined;
  const name=page?.title ?? (slug[0]==="reference" ? "C# API Reference" : collection.name);
  return { title: `${name} | Inuv8 Docs`, description: page?.summary ?? collection.intro, robots: { index: false, follow: false, noarchive: true } };
}

export default async function DocCollectionPage({params}: {params:Promise<RouteParams>}) {
  const { collection: area, slug=[] } = await params;
  const collection=getCollection(area);
  if (!collection) notFound();
  const files=apiEntries[collection.id];
  let content: React.ReactNode;
  if (!slug.length) content=<CollectionHome collection={collection} fileCount={files.length}/>;
  else if (slug.length===1 && slug[0]==="reference") content=<ApiExplorer area={collection.id} files={files}/>;
  else if (slug.length===2 && slug[0]==="reference") {
    const entry=files.find(file=>file.id===slug[1]);
    if(!entry) notFound();
    content=<ApiDetail area={collection.id} entry={entry}/>;
  } else if (slug.length===1) {
    const page=getPage(collection.id,slug[0]);
    if(!page) notFound();
    content=<Article collection={collection} page={page}/>;
  } else notFound();
  return <DocShell collection={collection} files={files}>{content}</DocShell>;
}
