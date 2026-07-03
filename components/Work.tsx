import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project, Translations } from "@/lib/content";
import { BEHANCE_URL } from "@/lib/content";
import Reveal from "./Reveal";

export default function Work({
  t,
  projects,
}: {
  t: Translations;
  projects: Project[];
}) {
  return (
    <section
      id="work"
      className="border-t border-[#ecdcd8] py-[clamp(64px,11vh,120px)] px-[clamp(24px,6vw,88px)]"
    >
      <Reveal className="max-w-[1320px] mx-auto">
        <div className="flex items-baseline justify-between flex-wrap gap-[16px] mb-[clamp(40px,6vh,64px)]">
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#ea5554] mb-[18px]">
              {t.workLabel}
            </p>
            <h2 className="font-serif font-medium text-[clamp(30px,3.4vw,46px)] leading-[1.1] tracking-[-0.01em]">
              {t.workHeading}
            </h2>
          </div>
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-[6px] text-[12px] tracking-[0.12em] uppercase text-[#6c655b] border-b border-[#decbc6] pb-[3px] transition-colors hover:text-[#ea5554] hover:border-[#ea5554]"
          >
            {t.workBehance}
            <ArrowUpRight
              size={14}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(20px,2.5vw,40px)]">
          {projects.map((p) => (
            <a key={p.url} href={p.url} target="_blank" rel="noopener" className="group block">
              <div className="relative overflow-hidden bg-[#efe0dc] aspect-[4/3] border border-[#ecdcd8]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#2a2320]/0 transition-colors duration-500 group-hover:bg-[#2a2320]/20">
                  <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#fbf1ef] text-[#2a2320] opacity-0 translate-y-[10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-[16px] mt-[18px]">
                <h3 className="font-serif font-medium text-[clamp(20px,1.7vw,25px)] leading-[1.2] transition-colors group-hover:text-[#ea5554]">
                  {p.title}
                </h3>
                <ArrowUpRight size={18} strokeWidth={1.75} className="shrink-0 text-[#ea5554]" />
              </div>
              <p className="text-[12px] tracking-[0.1em] uppercase text-[#8c857b] mt-[6px]">
                {p.category}
              </p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
