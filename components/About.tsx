import type { Translations } from "@/lib/content";
import Reveal from "./Reveal";

export default function About({ t, tags }: { t: Translations; tags: string[] }) {
  return (
    <section
      id="about"
      className="border-t border-[#ecdcd8] py-[clamp(64px,11vh,120px)] px-[clamp(24px,6vw,88px)]"
    >
      <Reveal className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(40px,6vw,90px)] items-start">
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#ea5554] mb-[24px]">
              {t.aboutLabel}
            </p>
            <h2 className="font-serif font-medium text-[clamp(30px,3.4vw,46px)] leading-[1.14] tracking-[-0.01em] max-w-[14ch]">
              {t.aboutHeading}
            </h2>
          </div>
          <div>
            <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.75] text-[#4a453d] font-light mb-[28px]">
              {t.aboutBody}
            </p>
            <div className="flex flex-wrap gap-[12px]">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#e4d3cf] rounded-full px-[15px] py-[8px] text-[12px] tracking-[0.06em] text-[#5a544a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
