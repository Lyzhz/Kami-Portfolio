export type Lang = "pt" | "en";

export interface NavItem {
  label: string;
  href: string;
}
export interface Service {
  num: string;
  title: string;
  desc: string;
}
export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  desc: string;
}
export interface Project {
  img: string;
  url: string;
  title: string;
  category: string;
}
export interface Translations {
  heroEyebrow: string;
  heroTagline: string;
  heroAvailable: string;
  heroCta: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutBody: string;
  servicesLabel: string;
  workLabel: string;
  workHeading: string;
  workBehance: string;
  expLabel: string;
  expHeading: string;
  contactLabel: string;
  contactHeading: string;
  contactBody: string;
  cvLabel: string;
  footerNote: string;
}
export interface Content {
  t: Translations;
  nav: NavItem[];
  services: Service[];
  experience: ExperienceItem[];
  projects: Project[];
  tags: string[];
}

export const CV_FILE = "/Camila-Brito-CV.pdf";
// TODO: trocar pelo e-mail real da Camila.
export const EMAIL = "camilaalbrito@gmail.com";
export const BEHANCE_URL = "https://www.behance.net/camilaabrito";
export const WHATSAPP_URL = "https://wa.me/5511990182960";
export const LINKEDIN_URL = "https://www.linkedin.com/in/camila-brito-8618aa18b/";

const projectsBase = [
  {
    img: "/projects/ecletika.png",
    url: "https://www.behance.net/gallery/187341477/ECLETIKA-Brand-Identidy",
    title: "ECLÉTIKA",
    catPt: "Identidade de Marca",
    catEn: "Brand Identity",
  },
  {
    img: "/projects/owl.png",
    url: "https://www.behance.net/gallery/241654377/Manual-de-Identidade-Visual-Agencia-Owl",
    title: "Agência Owl",
    catPt: "Manual de Identidade Visual",
    catEn: "Brand Guidelines",
  },
  {
    img: "/projects/sorveteria.png",
    url: "https://www.behance.net/gallery/211430853/Social-Media-Sorveteria-Churros",
    title: "Sorveteria & Churros",
    catPt: "Social Media",
    catEn: "Social Media",
  },
  {
    img: "/projects/protetics.png",
    url: "https://www.behance.net/gallery/213072995/Flyer-Trifold-Protetics",
    title: "Protetics",
    catPt: "Flyer Trifold · Editorial",
    catEn: "Trifold Flyer · Editorial",
  },
];

export function getContent(lang: Lang): Content {
  const isPT = lang === "pt";

  const projects: Project[] = projectsBase.map((p) => ({
    img: p.img,
    url: p.url,
    title: p.title,
    category: isPT ? p.catPt : p.catEn,
  }));

  const nav: NavItem[] = isPT
    ? [
        { label: "Sobre", href: "#about" },
        { label: "Serviços", href: "#services" },
        { label: "Projetos", href: "#work" },
        { label: "Experiência", href: "#experience" },
        { label: "Contato", href: "#contact" },
      ]
    : [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ];

  const services: Service[] = isPT
    ? [
        { num: "01", title: "Identidade Visual", desc: "Logotipos, sistemas de marca e manuais que dão personalidade e consistência a cada projeto." },
        { num: "02", title: "Social Media", desc: "Design de conteúdo, feeds e campanhas que fortalecem a presença das marcas nas redes." },
        { num: "03", title: "Design Gráfico", desc: "Flyers, banners e materiais impressos com atenção à tipografia, hierarquia e detalhe." },
        { num: "04", title: "Marketing Digital", desc: "Planejamento de campanhas, conteúdo para blog com foco em SEO e análise de resultados." },
      ]
    : [
        { num: "01", title: "Brand Identity", desc: "Logos, brand systems and guidelines that give each project personality and consistency." },
        { num: "02", title: "Social Media", desc: "Content design, feeds and campaigns that strengthen a brand’s presence online." },
        { num: "03", title: "Graphic Design", desc: "Flyers, banners and print pieces with care for typography, hierarchy and detail." },
        { num: "04", title: "Digital Marketing", desc: "Campaign planning, SEO-focused blog content and performance analysis." },
      ];

  const experience: ExperienceItem[] = isPT
    ? [
        { period: "jan 2026 — atual", role: "Assistente de Marketing", org: "BR Work — Planejamento de Obras", desc: "Produção de peças em Adobe Photoshop e gestão de marketing de mídias sociais em tempo integral." },
        { period: "abr 2024 — dez 2025", role: "Estágio · Marketing e Design Gráfico", org: "BR Work — Planejamento de Obras", desc: "Gestão de mídias sociais, criação de conteúdo alinhado à identidade visual, planejamento de campanhas digitais e redação de blogs com foco em SEO e engajamento." },
        { period: "fev 2022 — dez 2025", role: "Bacharelado em Publicidade e Propaganda", org: "Universidade Paulista (UNIP)", desc: "Formação com ênfase em criação, design e comunicação visual." },
      ]
    : [
        { period: "Jan 2026 — Present", role: "Marketing Assistant", org: "BR Work — Construction Planning", desc: "Full-time visual production in Adobe Photoshop and social media marketing management." },
        { period: "Apr 2024 — Dec 2025", role: "Intern · Marketing & Graphic Design", org: "BR Work — Construction Planning", desc: "Social media management, on-brand content creation, digital campaign planning and SEO-focused blog writing for audience engagement." },
        { period: "Feb 2022 — Dec 2025", role: "BA in Advertising", org: "Universidade Paulista (UNIP)", desc: "Degree focused on creative direction, design and visual communication." },
      ];

  const tags: string[] = isPT
    ? ["Identidade Visual", "Social Media", "Design Gráfico", "Publicidade", "Adobe Photoshop"]
    : ["Brand Identity", "Social Media", "Graphic Design", "Advertising", "Adobe Photoshop"];

  const t: Translations = isPT
    ? {
        heroEyebrow: "Designer Gráfica · São Paulo, Brasil",
        heroTagline: "Identidade visual, social media e design gráfico para marcas que querem ser lembradas.",
        heroAvailable: "Disponível para freelance e vagas em agência",
        heroCta: "Vamos conversar",
        aboutLabel: "Sobre",
        aboutHeading: "Design com propósito e cuidado em cada detalhe.",
        aboutBody: "Sou Camila Brito, designer gráfica formada em Publicidade e Propaganda pela Universidade Paulista. Trabalho na intersecção entre marketing e design — criando identidades visuais, conteúdo para redes sociais e materiais que traduzem a essência de cada marca. Gosto de projetos que unem estratégia e estética, sempre com atenção aos detalhes.",
        servicesLabel: "O que eu faço",
        workLabel: "Projetos selecionados",
        workHeading: "Trabalhos recentes",
        workBehance: "Ver tudo no Behance",
        expLabel: "Experiência",
        expHeading: "Trajetória e formação",
        contactLabel: "Contato",
        contactHeading: "Vamos criar algo juntos?",
        contactBody: "Estou aberta a novas oportunidades — freelas de social media, branding e vagas em agência de design. Vamos conversar.",
        cvLabel: "Baixar currículo",
        footerNote: "Feito com cuidado · São Paulo, Brasil",
      }
    : {
        heroEyebrow: "Graphic Designer · São Paulo, Brazil",
        heroTagline: "Brand identity, social media and graphic design for brands that want to be remembered.",
        heroAvailable: "Available for freelance and agency roles",
        heroCta: "Let’s talk",
        aboutLabel: "About",
        aboutHeading: "Design with purpose and care in every detail.",
        aboutBody: "I’m Camila Brito, a graphic designer with a degree in Advertising from Universidade Paulista. I work at the intersection of marketing and design — building visual identities, social media content and materials that translate the essence of each brand. I love projects that pair strategy with aesthetics, always with care for the details.",
        servicesLabel: "What I do",
        workLabel: "Selected projects",
        workHeading: "Recent work",
        workBehance: "See all on Behance",
        expLabel: "Experience",
        expHeading: "Journey & education",
        contactLabel: "Contact",
        contactHeading: "Let’s create something together?",
        contactBody: "I’m open to new opportunities — social media freelance, branding and roles at design agencies. Let’s talk.",
        cvLabel: "Download résumé",
        footerNote: "Made with care · São Paulo, Brazil",
      };

  return { t, nav, services, experience, projects, tags };
}
