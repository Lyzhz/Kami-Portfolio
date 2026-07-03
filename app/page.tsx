"use client";

import { useEffect, useState } from "react";
import { getContent, type Lang } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  // Always open the page at the top, ignoring the browser's scroll restoration.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // On first load: use saved choice, else detect browser language.
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    setLang(saved ?? (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en"));
  }, []);

  // Persist choice and keep <html lang> in sync.
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const c = getContent(lang);
  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const isPT = lang === "pt";

  return (
    <div className="min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-[12px] focus:left-[12px] focus:z-[80] focus:bg-[#2a2320] focus:text-[#fbf1ef] focus:px-[16px] focus:py-[8px] focus:rounded-full focus:text-[13px]"
      >
        {isPT ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <ScrollProgress />
      <Header nav={c.nav} lang={lang} toggleLang={toggleLang} />
      <main id="main">
        <a id="top" />
        <Hero t={c.t} />
        <About t={c.t} tags={c.tags} />
        <Services t={c.t} services={c.services} />
        <Work t={c.t} projects={c.projects} />
        <Experience t={c.t} experience={c.experience} />
        <Contact t={c.t} />
      </main>
      <Footer t={c.t} />
      <BackToTop label={isPT ? "Voltar ao topo" : "Back to top"} />
    </div>
  );
}
