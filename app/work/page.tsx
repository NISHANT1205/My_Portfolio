import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { WorkGrid } from "@/components/work-grid";

export const metadata = { title: "Selected Work", description: "Apps, websites, dashboards and games built by Nishant Sharma." };

export default function WorkPage(){return <main><Header inner/><section className="work-page"><div className="container"><Link className="back-link" href="/"><ArrowLeft size={15}/> Home</Link><span className="eyebrow">Selected work / 2026</span><h1>Products, platforms<br/>and <em>experiments.</em></h1><p className="page-intro">A closer look at the mobile, web, business and game products I&apos;ve helped bring to life.</p><WorkGrid/></div></section></main>}
