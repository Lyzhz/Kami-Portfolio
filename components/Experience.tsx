import type { ExperienceItem, Translations } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience({
  t,
  experience,
}: {
  t: Translations;
  experience: ExperienceItem[];
}) {
  return (
    <section
      id="experience"
      className="border-t border-[#ecdcd8] py-[clamp(64px,11vh,120px)] px-[clamp(24px,6vw,88px)]"
    >
      <Reveal className="max-w-[1320px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(40px,6vw,90px)] items-start">
        <div>
          <p className="text-[12px] tracking-[0.2em] uppercase text-[#ea5554] mb-[24px]">
            {t.expLabel}
          </p>
          <h2 className="font-serif font-medium text-[clamp(30px,3.4vw,46px)] leading-[1.14] tracking-[-0.01em] max-w-[12ch]">
            {t.expHeading}
          </h2>
        </div>
        <div className="border-l border-[#e4d3cf]">
          {experience.map((e) => (
            <div
              key={e.period}
              className="group relative pl-[clamp(26px,3vw,40px)] pb-[clamp(34px,5vh,48px)] cursor-default"
            >
              <span className="absolute left-[-5px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#ea5554] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_0_4px_rgba(234,85,84,0.18)]" />
              <div className="transition-transform duration-300 group-hover:translate-x-[6px]">
                <p className="text-[12px] tracking-[0.1em] uppercase text-[#8c857b] mb-[8px]">
                  {e.period}
                </p>
                <h3 className="font-serif font-semibold text-[clamp(20px,1.6vw,24px)] leading-[1.2] transition-colors duration-300 group-hover:text-[#ea5554]">
                  {e.role}
                </h3>
                <p className="text-[14px] text-[#ea5554] my-[4px] mb-[12px] tracking-[0.02em]">
                  {e.org}
                </p>
                <p className="text-[14px] leading-[1.65] text-[#6c655b] font-light max-w-[52ch]">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
