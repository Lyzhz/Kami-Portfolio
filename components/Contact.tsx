import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import type { Translations } from "@/lib/content";
import { BEHANCE_URL, CV_FILE, EMAIL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact({ t }: { t: Translations }) {
  const outline =
    "group inline-flex items-center gap-[10px] border border-[#6a645c] text-[#f5f2ec] px-[26px] py-[15px] rounded-full text-[14px] tracking-[0.04em] transition-all duration-300 hover:border-[#c6a988] hover:bg-[#332f2b] hover:-translate-y-[2px]";

  return (
    <section
      id="contact"
      className="border-t border-[#e2dccf] bg-[#2b2825] text-[#f0ece3] py-[clamp(72px,14vh,150px)] px-[clamp(24px,6vw,88px)]"
    >
      <Reveal className="max-w-[1320px] mx-auto">
        <p className="text-[12px] tracking-[0.2em] uppercase text-[#c6a988] mb-[28px]">
          {t.contactLabel}
        </p>
        <h2 className="font-serif font-medium text-[clamp(38px,6vw,86px)] leading-[1.02] tracking-[-0.01em] max-w-[16ch]">
          {t.contactHeading}
        </h2>
        <p className="max-w-[540px] text-[clamp(15px,1.3vw,18px)] leading-[1.65] text-[#c3bcae] font-light mt-[28px]">
          {t.contactBody}
        </p>
        <div className="flex flex-wrap gap-[14px] mt-[clamp(40px,6vh,56px)]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-[10px] bg-[#f5f2ec] text-[#2b2825] px-[26px] py-[15px] rounded-full text-[14px] tracking-[0.04em] transition-all duration-300 hover:bg-[#9a7b5f] hover:text-[#f5f2ec] hover:-translate-y-[2px]"
          >
            <MessageCircle size={17} strokeWidth={1.75} />
            WhatsApp
            <span className="opacity-70">+55 11 99018-2960</span>
          </a>
          <a href={`mailto:${EMAIL}`} className={outline}>
            <Mail size={17} strokeWidth={1.75} />
            E-mail
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener" className={outline}>
            LinkedIn
            <ArrowUpRight
              size={17}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </a>
          <a href={BEHANCE_URL} target="_blank" rel="noopener" className={outline}>
            Behance
            <ArrowUpRight
              size={17}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </a>
          <a
            href={CV_FILE}
            download
            className="group inline-flex items-center gap-[10px] bg-[#9a7b5f] text-[#f5f2ec] px-[26px] py-[15px] rounded-full text-[14px] tracking-[0.04em] transition-all duration-300 hover:bg-[#b18f6e] hover:-translate-y-[2px]"
          >
            <Download
              size={17}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-y-[2px]"
            />
            {t.cvLabel}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
