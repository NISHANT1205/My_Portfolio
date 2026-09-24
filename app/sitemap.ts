import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL||"https://nishantsharma.dev";return [{url:base,lastModified:new Date(),priority:1},{url:`${base}/work`,lastModified:new Date(),priority:.8},...projects.map(p=>({url:`${base}/work/${p.slug}`,lastModified:new Date(),priority:.7}))]; }
