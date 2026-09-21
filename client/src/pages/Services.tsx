import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { FocusedPageLayout, type FocusedLanguage } from "@/components/FocusedPageLayout";
import { copy, services } from "./BusinessServices";

const headingStyle = (language: FocusedLanguage) => ({ fontFamily: language === "th" ? '"Noto Sans Thai", "Manrope", sans-serif' : 'Manrope, "Noto Sans Thai", sans-serif' });
function Lines({ lines }: { lines: readonly string[] }) { return <>{lines.map((line, index) => <span key={line}>{line}{index < lines.length - 1 && <br />}</span>)}</>; }

export default function Services() {
  const [language, setLanguage] = useState<FocusedLanguage>("en");
  const t = copy[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return <FocusedPageLayout copy={t} language={language} setLanguage={setLanguage} pageClassName="services-page">
    <section className="focused-hero services-hero"><div className="focused-hero__grid" /><div className="focused-hero__copy"><p className="eyebrow eyebrow--light"><span /> {t.heroLabel}</p><h1 style={headingStyle(language)}><Lines lines={t.heroTitle} /></h1><p>{t.heroText}</p><a className="text-link text-link--light" href="#service-list">{t.heroAction} <ArrowDownRight size={18} /></a></div><div className="focused-hero__mark" aria-hidden="true">V</div><span className="focused-hero__index">SERVICES / 01</span></section>
    <section className="focused-intro"><div className="focused-intro__meta"><p className="eyebrow"><span /> {t.introLabel}</p><span>01 — 05</span></div><div className="focused-intro__grid"><h2 style={headingStyle(language)}><Lines lines={t.introTitle} /></h2><p>{t.introText}</p></div></section>
    <section className="services-list-page" id="service-list"><div className="focused-section-heading"><p className="eyebrow"><span /> {t.servicesLabel}</p><h2 style={headingStyle(language)}><Lines lines={t.servicesTitle} /></h2><p>{language === "en" ? "Five focused workstreams for product direction, supplier execution and operational improvement." : "5 workstream ที่ชัดเจน ตั้งแต่ทิศทางผลิตภัณฑ์ การทำงานกับ supplier ไปจนถึงการยกระดับการดำเนินงาน"}</p></div><div className="business-service-grid">{services[language].map((service) => <article className="business-service-card" key={service.number}><span className="business-service-card__number">{service.number}</span><p className="eyebrow eyebrow--blue"><span /> {service.label}</p><h3 style={headingStyle(language)}><Lines lines={service.title} /></h3><p className="business-service-card__description">{service.description}</p><p className="business-service-card__details">{service.details}</p><a className="text-link" href="/diagnostic">{t.discuss} <ArrowRight size={17} /></a></article>)}</div></section>
    <section className="services-next"><p className="eyebrow"><span /> {language === "en" ? "NEED A CLEARER START?" : "อยากเริ่มจากโจทย์ที่ชัดขึ้นหรือยัง?"}</p><h2 style={headingStyle(language)}>{language === "en" ? <>Start with the<br />question behind the work</> : <>เริ่มจากคำถาม<br />ที่อยู่เบื้องหลังงาน</>}</h2><a className="diagnostic-button" href="/diagnostic">{t.diagnosticAction} <ArrowRight size={18} /></a></section>
  </FocusedPageLayout>;
}
