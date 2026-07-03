"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Lang, NavItem } from "@/lib/content";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header({
  nav,
  lang,
  toggleLang,
}: {
  nav: NavItem[];
  lang: Lang;
  toggleLang: () => void;
}) {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(nav.map((n) => n.href.slice(1)));
  const active = "text-[#2a2320] font-medium";
  const dim = "text-[#a79e90]";

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-[18px] px-[clamp(24px,6vw,88px)] bg-[rgba(251,241,239,0.82)] backdrop-blur-[12px] border-b border-[#ecdcd8]">
      <a href="#top" className="flex items-center gap-[11px]">
        <Image
          src="/Logo-icon.png"
          alt="Logo Camila Brito"
          width={36}
          height={36}
          priority
          className="rounded-[8px]"
        />
        <span className="font-brand text-[21px] font-semibold tracking-[0.01em] whitespace-nowrap">
          Camila Brito
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-[clamp(14px,2.4vw,34px)]">
        {nav.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              className={`text-[12px] tracking-[0.14em] uppercase pb-[3px] border-b transition-colors ${
                isActive
                  ? "text-[#2a2320] border-[#ea5554]"
                  : "text-[#6c655b] border-transparent hover:text-[#2a2320]"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-[10px]">
        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          className="flex items-center gap-[6px] border border-[#decbc6] rounded-full px-[12px] py-[6px] cursor-pointer text-[11px] tracking-[0.12em] text-[#2a2320] transition-colors hover:border-[#ea5554]"
        >
          <span className={lang === "pt" ? active : dim}>PT</span>
          <span className="text-[#c9c0b0]">/</span>
          <span className={lang === "en" ? active : dim}>EN</span>
        </button>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex items-center justify-center w-[38px] h-[38px] border border-[#decbc6] rounded-full text-[#2a2320] cursor-pointer transition-colors hover:border-[#ea5554]"
        >
          <Menu size={18} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#fbf1ef] flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between py-[18px] px-[clamp(24px,6vw,88px)] border-b border-[#ecdcd8]">
              <span className="flex items-center gap-[11px]">
                <Image
                  src="/Logo-icon.png"
                  alt="Logo Camila Brito"
                  width={36}
                  height={36}
                  className="rounded-[8px]"
                />
                <span className="font-brand text-[21px] font-semibold tracking-[0.01em] whitespace-nowrap">
                  Camila Brito
                </span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center w-[38px] h-[38px] border border-[#decbc6] rounded-full text-[#2a2320] cursor-pointer"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col justify-center flex-1 px-[clamp(24px,6vw,88px)] gap-[8px]">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-[clamp(32px,9vw,52px)] font-medium leading-[1.1] text-[#2a2320] transition-colors hover:text-[#ea5554]"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
