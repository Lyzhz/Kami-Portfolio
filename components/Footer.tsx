import type { Translations } from "@/lib/content";

export default function Footer({ t }: { t: Translations }) {
  return (
    <footer className="bg-[#2a2320] text-[#8c857b] py-[24px] px-[clamp(24px,6vw,88px)] border-t border-[#3a302d] flex flex-wrap gap-[12px] justify-between text-[12px] tracking-[0.06em]">
      <span>&copy; 2026 Camila Brito</span>
      <span>{t.footerNote}</span>
    </footer>
  );
}
