"use client";

import { Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("theme", next ? "light" : "dark");
  };
  return (
    <button className="icon-button" onClick={toggle} aria-label="Toggle color theme" title="Change color theme">
      <Sun size={17} />
    </button>
  );
}
