import { ArrowUpRight } from "lucide-react";
import type { Service, Translations } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services({
  t,
  services,
}: {
  t: Translations;
  services: Service[];
}) {
  return (
    <section
      id="services"
      className="border-t border-[#e2dccf] py-[clamp(64px,11vh,120px)] px-[clamp(24px,6vw,88px)]"
    >
      <Reveal className="max-w-[1320px] mx-auto">
        <p className="text-[12px] tracking-[0.2em] uppercase text-[#9a7b5f] mb-[clamp(36px,6vh,60px)]">
          {t.servicesLabel}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-px bg-[#e2dccf] border border-[#e2dccf]">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-[#f5f2ec] px-[clamp(24px,2.4vw,36px)] py-[clamp(28px,3vw,44px)] min-h-[230px] flex flex-col cursor-pointer transition-colors duration-300 hover:bg-[#faf8f3]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif italic text-[26px] text-[#9a7b5f] transition-transform duration-300 group-hover:-translate-y-[2px]">
                  {s.num}
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  className="text-[#9a7b5f] opacity-0 -translate-x-[4px] translate-y-[4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
              <h3 className="font-serif font-medium text-[clamp(22px,1.9vw,27px)] mt-auto mb-[12px] leading-[1.15] transition-colors duration-300 group-hover:text-[#9a7b5f]">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#6c655b] font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
