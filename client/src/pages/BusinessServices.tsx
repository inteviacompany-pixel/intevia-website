import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { FocusedPageLayout, type FocusedLanguage } from "@/components/FocusedPageLayout";

export type BusinessService = { number: string; label: string; title: string[]; description: string; details: string };

export const copy = {
  en: {
    back: "Back to INTEVIA", page: "Business & Product Services", contact: "Start a conversation",
    nav: { services: "Services", method: "How we work", diagnostic: "Diagnostic", rfid: "RFID / IoT" },
    menu: { open: "Open menu", close: "Close menu" },
    heroLabel: "BUSINESS & PRODUCT TRANSFORMATION", heroTitle: ["Make the next", "move matter"], heroText: "From product direction to supplier execution, INTEVIA turns complex business questions into practical workstreams.", heroAction: "Explore our services",
    introLabel: "A CLEARER WAY FORWARD", introTitle: ["One partner from", "question to outcome"], introText: "We bring intelligence, strategy and action together across product, manufacturing, quality and operations—so your team can make progress without losing sight of the business.",
    servicesLabel: "WHAT WE DO", servicesTitle: ["Choose the right", "workstream"], discuss: "Explore this service",
    methodLabel: "HOW WE WORK", methodTitle: ["A practical method", "for moving forward"], methodIntro: "INTEVIA turns fragmented questions into an action sequence that teams can own and continue.",
    diagnosticLabel: "BUSINESS & PRODUCT DIAGNOSTIC", diagnosticTitle: ["Not sure where", "to start?"], diagnosticText: "Let INTEVIA assess your current product, process or business challenge and identify where the biggest opportunities are.", diagnosticAction: "Request a diagnostic", tags: ["PRODUCT", "NPD", "MANUFACTURING", "BUSINESS", "QC / QA"],
    methods: [["01", "RESEARCH", "Understand the market, customer, competition and business."], ["02", "INTELLIGENCE", "Turn information into actionable insight."], ["03", "STRATEGY", "Prioritise what the business should do."], ["04", "EXECUTION", "Develop, implement and measure."], ["05", "IMPROVEMENT", "Learn, optimise and scale."]],
    footer: "Business and product transformation for organisations ready to move with intent."
  },
  th: {
    back: "กลับสู่ INTEVIA", page: "บริการธุรกิจและผลิตภัณฑ์", contact: "เริ่มต้นพูดคุย",
    nav: { services: "บริการ", method: "วิธีการทำงาน", diagnostic: "วิเคราะห์โจทย์", rfid: "RFID / IoT" },
    menu: { open: "เปิดเมนู", close: "ปิดเมนู" },
    heroLabel: "BUSINESS & PRODUCT TRANSFORMATION", heroTitle: ["ทำให้ก้าวต่อไป", "สร้างความหมาย"], heroText: "ตั้งแต่ทิศทางผลิตภัณฑ์ไปจนถึงการทำงานกับ supplier เราเปลี่ยนโจทย์ธุรกิจที่ซับซ้อนให้เป็น workstream ที่ลงมือทำได้จริง", heroAction: "ดูบริการของเรา",
    introLabel: "เส้นทางที่ชัดเจนขึ้น", introTitle: ["partner เดียวตั้งแต่", "คำถามถึงผลลัพธ์"], introText: "เรารวม intelligence, strategy และ action เข้าด้วยกัน ทั้งด้าน product, manufacturing, quality และ operations เพื่อให้ทีมของคุณก้าวหน้าโดยไม่หลุดจากเป้าหมายธุรกิจ",
    servicesLabel: "สิ่งที่เราทำ", servicesTitle: ["เลือก workstream", "ที่เหมาะกับคุณ"], discuss: "ดูบริการนี้",
    methodLabel: "วิธีที่เราทำงาน", methodTitle: ["วิธีทำงานที่ชัดเจน", "เพื่อก้าวไปข้างหน้า"], methodIntro: "INTEVIA เปลี่ยนโจทย์ที่กระจัดกระจายให้เป็นลำดับการทำงานที่ทีมของคุณนำไปใช้และต่อยอดได้จริง",
    diagnosticLabel: "BUSINESS & PRODUCT DIAGNOSTIC", diagnosticTitle: ["ยังไม่แน่ใจว่า", "ควรเริ่มตรงไหน?"], diagnosticText: "ให้ INTEVIA ช่วยประเมินสินค้า กระบวนการ หรือโจทย์ทางธุรกิจของคุณ เพื่อค้นหาจุดที่มีโอกาสสร้างผลลัพธ์ได้มากที่สุด", diagnosticAction: "ขอรับการวิเคราะห์เบื้องต้น", tags: ["PRODUCT", "NPD", "MANUFACTURING", "BUSINESS", "QC / QA"],
    methods: [["01", "RESEARCH", "เข้าใจตลาด ลูกค้า คู่แข่ง และธุรกิจของคุณ"], ["02", "INTELLIGENCE", "เปลี่ยนข้อมูลให้เป็น insight ที่นำไปใช้ได้จริง"], ["03", "STRATEGY", "จัดลำดับสิ่งที่ธุรกิจควรทำก่อน"], ["04", "EXECUTION", "พัฒนา ลงมือทำ และวัดผล"], ["05", "IMPROVEMENT", "เรียนรู้ ปรับให้ดีขึ้น และขยายผล"]],
    footer: "Business และ product transformation สำหรับองค์กรที่พร้อมขับเคลื่อนอย่างมีเป้าหมาย"
  }
} as const;

export const services: Record<"en" | "th", BusinessService[]> = {
  en: [
    { number: "01", label: "PRODUCT STRATEGY & PORTFOLIO", title: ["Decide what to build."], description: "Research, analyse and prioritise your product portfolio to identify the opportunities that actually matter.", details: "Product Strategy · Portfolio Analysis · Market Research · SKU Optimisation · Product Roadmap" },
    { number: "02", label: "NEW PRODUCT DEVELOPMENT", title: ["Turn opportunity", "into product."], description: "From concept and specification to prototype, validation and launch, we make the next product tangible.", details: "NPD Strategy · Product Concept · Specification · Feasibility · Prototype · Testing · Launch" },
    { number: "03", label: "OEM / ODM SOLUTIONS", title: ["From idea to", "market-ready."], description: "Connect product requirements with the right suppliers and lead the development journey through to production.", details: "OEM / ODM Sourcing · Supplier Evaluation · RFQ · Sample Development · Factory Coordination · Production Support" },
    { number: "04", label: "QC/QA & SUPPLIER QUALITY ASSURANCE", title: ["Quality assurance,", "on the ground."], description: "Act as your local QA/QC partner in Thailand—checking suppliers, inspecting production and addressing quality risks before they reach your market.", details: "Supplier Audit · Factory Assessment · In-process Inspection · Final Inspection · CAPA Follow-up · Supplier Quality Development" },
    { number: "05", label: "BUSINESS & MANUFACTURING IMPROVEMENT", title: ["Improve what moves", "the business."], description: "Identify operational problems, uncover root causes and build practical improvement roadmaps that create value.", details: "Lean · Six Sigma · Productivity · Quality · Cost Reduction · Process Improvement · Supplier Quality" }
  ],
  th: [
    { number: "01", label: "PRODUCT STRATEGY & PORTFOLIO", title: ["ตัดสินใจว่า", "ควรสร้างอะไร"], description: "วิเคราะห์และจัดลำดับ product portfolio เพื่อค้นหาโอกาสที่สำคัญต่อธุรกิจอย่างแท้จริง", details: "Product Strategy · Portfolio Analysis · Market Research · SKU Optimisation · Product Roadmap" },
    { number: "02", label: "NEW PRODUCT DEVELOPMENT", title: ["เปลี่ยนโอกาส", "ให้กลายเป็นสินค้า"], description: "ตั้งแต่ concept และ specification ไปจนถึง prototype การทดสอบ และการเปิดตัว เราทำให้สินค้าใหม่เกิดขึ้นได้จริง", details: "NPD Strategy · Product Concept · Specification · Feasibility · Prototype · Testing · Launch" },
    { number: "03", label: "OEM / ODM SOLUTIONS", title: ["จากไอเดีย", "สู่สินค้าพร้อมขาย"], description: "เชื่อม product requirement เข้ากับ supplier ที่เหมาะสม และบริหารการพัฒนาจนถึงการผลิตจริง", details: "OEM / ODM Sourcing · Supplier Evaluation · RFQ · Sample Development · Factory Coordination · Production Support" },
    { number: "04", label: "QC/QA & SUPPLIER QUALITY ASSURANCE", title: ["ประกันคุณภาพ", "ถึงหน้างานจริง"], description: "ทำหน้าที่เป็น partner QA/QC ในประเทศไทย ตรวจประเมิน supplier ติดตามการผลิต และจัดการความเสี่ยงด้านคุณภาพก่อนสินค้าถึงตลาดของคุณ", details: "Supplier Audit · Factory Assessment · In-process Inspection · Final Inspection · CAPA Follow-up · Supplier Quality Development" },
    { number: "05", label: "BUSINESS & MANUFACTURING IMPROVEMENT", title: ["ปรับปรุงสิ่งที่", "ขับเคลื่อนธุรกิจ"], description: "ค้นหาปัญหาการดำเนินงาน หา root cause และสร้าง improvement roadmap ที่นำไปใช้ได้จริงและสร้างคุณค่า", details: "Lean · Six Sigma · Productivity · Quality · Cost Reduction · Process Improvement · Supplier Quality" }
  ]
};

const headingStyle = (language: FocusedLanguage) => ({ fontFamily: language === "th" ? '"Noto Sans Thai", "Manrope", sans-serif' : 'Manrope, "Noto Sans Thai", sans-serif' });
function Lines({ lines }: { lines: readonly string[] }) { return <>{lines.map((line, index) => <span key={line}>{line}{index < lines.length - 1 && <br />}</span>)}</>; }

export default function BusinessServices() {
  const [language, setLanguage] = useState<FocusedLanguage>("en");
  const t = copy[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  const paths = language === "en"
    ? [{ href: "/services", number: "01", label: "SERVICES", title: "Business & Product Services", text: "Strategy, product development, supplier quality and operational improvement." }, { href: "/how-we-work", number: "02", label: "METHOD", title: "How We Work", text: "A practical sequence from the first question to an owned workstream." }, { href: "/diagnostic", number: "03", label: "START HERE", title: "Business & Product Diagnostic", text: "Frame the question before committing time, budget or resources." }]
    : [{ href: "/services", number: "01", label: "SERVICES", title: "บริการธุรกิจและผลิตภัณฑ์", text: "กลยุทธ์ การพัฒนาผลิตภัณฑ์ คุณภาพ supplier และการยกระดับการดำเนินงาน" }, { href: "/how-we-work", number: "02", label: "METHOD", title: "วิธีการทำงาน", text: "ลำดับการทำงานที่ชัดเจน ตั้งแต่คำถามแรกจนถึง workstream ที่ทีมรับไปทำต่อ" }, { href: "/diagnostic", number: "03", label: "START HERE", title: "วิเคราะห์โจทย์ธุรกิจและผลิตภัณฑ์", text: "ทำความเข้าใจโจทย์ก่อนตัดสินใจลงทุนเวลา งบประมาณ หรือทรัพยากร" }];

  return <FocusedPageLayout copy={t} language={language} setLanguage={setLanguage} pageClassName="business-overview-page">
    <section className="focused-hero business-overview-hero"><div className="focused-hero__grid" /><div className="focused-hero__copy"><p className="eyebrow eyebrow--light"><span /> {t.heroLabel}</p><h1 style={headingStyle(language)}><Lines lines={t.heroTitle} /></h1><p>{t.heroText}</p><a className="text-link text-link--light" href="#business-paths">{t.heroAction} <ArrowDownRight size={18} /></a></div><div className="focused-hero__mark" aria-hidden="true">V</div><span className="focused-hero__index">BUSINESS / 01</span></section>
    <section className="focused-intro business-overview-intro"><div className="focused-intro__meta"><p className="eyebrow"><span /> {t.introLabel}</p><span>01 — 03</span></div><div className="focused-intro__grid"><h2 style={headingStyle(language)}><Lines lines={t.introTitle} /></h2><p>{t.introText}</p></div></section>
    <section className="business-paths" id="business-paths"><div className="focused-section-heading"><p className="eyebrow"><span /> {t.servicesLabel}</p><h2 style={headingStyle(language)}><Lines lines={t.servicesTitle} /></h2></div><div className="business-path-grid">{paths.map((path) => <a className="business-path-card" href={path.href} key={path.href}><span>{path.number}</span><div><p className="eyebrow eyebrow--blue"><span /> {path.label}</p><h3 style={headingStyle(language)}>{path.title}</h3><p>{path.text}</p></div><ArrowRight size={20} /></a>)}</div></section>
  </FocusedPageLayout>;
}
