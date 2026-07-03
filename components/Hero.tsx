"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Translations } from "@/lib/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] },
  },
};

function AnimatedWord({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span key={i} variants={letter} className="inline-block" aria-hidden>
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero({ t }: { t: Translations }) {
  const reduce = useReducedMotion();

  return (
    <section className="py-[clamp(56px,12vh,140px)] px-[clamp(24px,6vw,88px)] pb-[clamp(48px,9vh,110px)] max-w-[1320px] mx-auto">
      <motion.p
        className="text-[12px] tracking-[0.28em] uppercase text-[#ea5554] mb-[clamp(24px,5vh,52px)]"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.6 }}
      >
        {t.heroEyebrow}
      </motion.p>

      <motion.h1
        className="font-serif font-medium text-[clamp(58px,13vw,188px)] leading-[0.94] tracking-[-0.01em]"
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        <AnimatedWord text="Camila" />
        <br />
        <AnimatedWord text="Brito" className="italic text-[#ea5554]" />
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-end justify-between gap-[32px] mt-[clamp(32px,6vh,64px)]"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.7, delay: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <p className="max-w-[520px] text-[clamp(17px,1.5vw,21px)] leading-[1.5] text-[#4a453d] font-light">
          {t.heroTagline}
        </p>
        <div className="flex flex-col gap-[16px]">
          <span className="inline-flex items-center gap-[9px] text-[13px] tracking-[0.04em] text-[#4a453d]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#6f9a5f] shadow-[0_0_0_4px_rgba(111,154,95,0.18)]" />
            {t.heroAvailable}
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-[10px] self-start bg-[#2a2320] text-[#fbf1ef] px-[26px] py-[14px] rounded-full text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#ea5554] hover:-translate-y-[2px]"
          >
            {t.heroCta}
            <ArrowRight
              size={17}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-[3px]"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
