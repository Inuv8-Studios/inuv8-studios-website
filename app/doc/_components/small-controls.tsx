"use client";
import { useState } from "react";

export function CopyButton({ text, label="Copy" }: { text: string; label?: string }) {
  const [copied,setCopied]=useState(false);
  const copy=async()=>{try{await navigator.clipboard.writeText(text);setCopied(true);window.setTimeout(()=>setCopied(false),1500);}catch{setCopied(false);}};
  return <button type="button" onClick={copy} className="docs-copy-button" aria-label={label}>{copied ? "✓ Copied" : `⧉ ${label}`}</button>;
}
