"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

const filters = ["All", "Apps", "Websites", "Dashboards", "Games"] as const;

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const reduced = useReducedMotion();
  const shown = projects.filter(p => filter === "All" || p.category === filter);
  return <><div className="filters" role="group" aria-label="Filter projects">{filters.map(item => <button aria-pressed={filter === item} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="work-grid"><AnimatePresence mode="popLayout">{shown.map((project, index) => <motion.div layout={!reduced} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} key={project.slug}><ProjectCard project={project} index={index}/></motion.div>)}</AnimatePresence></div></>;
}
