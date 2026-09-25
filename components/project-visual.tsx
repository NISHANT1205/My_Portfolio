"use client";

import type { Project } from "@/data/projects";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function ProjectVisual({ project, detail = false }: { project: Project; detail?: boolean }) {
  const reducedMotion = useReducedMotion();
  return (
    <div className={`project-visual visual-${project.visual} ${detail ? "visual-detail" : ""}`} style={{ "--accent": project.accent } as React.CSSProperties} aria-label={`${project.title} interface illustration`} role="img">
      <div className="visual-grid" />
      {project.slug === "connected-ev-mobile-app" && <div className="vbike-shot-wrap"><div className="vbike-shot-glow"/><motion.div className="vbike-device" initial={reducedMotion ? false : { opacity: 0, x: 90, y: 52, rotate: 15, scale: .88 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 7, scale: 1 }} whileHover={reducedMotion ? undefined : { y: -8, rotate: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .95, ease: [0.22, 1, 0.36, 1] }}><Image src="/images/projects/vbike-app-home.jpeg" alt="Electric vehicle app home screen" fill sizes={detail ? "32vw" : "28vw"} priority={detail}/></motion.div><div className="vbike-visual-note"><b>Commerce meets<br/>connected mobility.</b><small>Flutter · IoT · E-commerce</small></div></div>}
      {project.slug === "electronics-manufacturing-website" && <div className="bmt-preview"><motion.div className="bmt-browser" initial={reducedMotion ? false : { opacity: 0, y: 38, scale: .94, rotateX: 7 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }}><div className="bmt-browser-screen"><Image src="/images/projects/bmt-india-tech.png" alt="Electronics manufacturing website homepage" fill sizes={detail ? "80vw" : "55vw"}/></div></motion.div><div className="bmt-label"><span>LIVE WEBSITE</span><b>Electronics manufacturing,<br/>made easy to explore.</b></div></div>}
      {project.slug === "dealer-management-system" && <div className="dms-preview"><motion.div className="dms-screen" initial={reducedMotion ? false : { opacity: 0, x: 65, y: 32, rotateY: -8, scale: .93 }} whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1 }} whileHover={reducedMotion ? undefined : { y: -5, scale: 1.008 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}><Image src="/images/projects/vbike-dms-dashboard.png" alt="Dealer management dashboard" fill sizes={detail ? "85vw" : "58vw"}/></motion.div><div className="dms-caption"><span>DEALER OPERATIONS</span><b>Inventory, orders and<br/>insight in one place.</b><small>React · ERP APIs · Recharts</small></div></div>}
      {project.slug === "game-publishing-platform" && <div className="nisharc-preview"><motion.div className="nisharc-screen" initial={reducedMotion ? false : { opacity: 0, y: 45, scale: .93, rotateZ: -1.5 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }} whileHover={reducedMotion ? undefined : { y: -6, scale: 1.008 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}><Image src="/images/projects/nisharc-studios-home.png" alt="Independent game publishing website homepage" fill sizes={detail ? "85vw" : "58vw"}/></motion.div><div className="nisharc-caption"><span>INDEPENDENT GAME STUDIO</span><b>Small games.<br/>Bright moments.</b><small>Next.js · MongoDB · Cloudinary</small></div></div>}
    </div>
  );
}
