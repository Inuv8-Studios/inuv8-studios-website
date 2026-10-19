import type { DocArea } from "./types";

export const areaHref = (area: DocArea, slug?: string): string => `/doc/${area}${slug ? `/${slug}` : ""}`;
export const apiHref = (area: DocArea, id: string): string => `${areaHref(area)}/reference/${id}`;
