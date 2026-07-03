import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import type { Translations } from "@/lib/content";
import { BEHANCE_URL, CV_FILE, EMAIL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact({ t }: { t: Translations }) {
  const outline =
    "group inline-flex items-center gap-[10px] border border-[#705e5a] text-[#fbf1ef] px-[26px] py-[15px] rounded-full text-[14px] tracking-[0.04em] transition-all duration-300 hover:border-[#efb6b2] hover:bg-[#362b28] hover:-translate-y-[2px]";

  return (
    <section
      id="contact"
      className="border-t border-[#ecdcd8] bg-[#2a2320] text-[#f7eae7] py-[clamp(72px,14vh,150px)] px-[clamp(24px,6vw,88px)]"
    >
      <Reveal className="max-w-[1320px] mx-auto">
        <p className="text-[12px] tracking-[0.2em] uppercase text-[#efb6b2] mb-[28px]">
          {t.contactLabel}
        </p>
        <h2 className="font-serif font-medium text-[clamp(38px,6vw,86px)] leading-[1.02] tracking-[-0.01em] max-w-[16ch]">
          {t.contactHeading}
        </h2>
        <p className="max-w-[540px] text-[clamp(15px,1.3vw,18px)] leading-[1.65] text-[#d6c3bf] font-light mt-[28px]">
          {t.contactBody}
        </p>
        <div className="flex flex-wrap gap-[14px] mt-[clamp(40px,6vh,56px)]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-[10px] bg-[#fbf1ef] text-[#2a2320] px-[26px] py-[15px] rounded-full text-[14px] tracking-[0.04em] transition-all duration-300 hover:bg-[#ea5554] hover:text-[#fbf1ef] hover:-translate-y-[2px]"
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
            className="group inline-flex items-center gap-[10px] bg-[#ea5554] text-[#fbf1ef] px-[26px] py-[15px] rounded-full text-[14px] tracking-[0.04em] transition-all duration-300 hover:bg-[#f0726a] hover:-translate-y-[2px]"
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
