import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { FocusedPageLayout, type FocusedLanguage } from "@/components/FocusedPageLayout";
import { copy } from "./BusinessServices";

const headingStyle = (language: FocusedLanguage) => ({ fontFamily: language === "th" ? '"Noto Sans Thai", "Manrope", sans-serif' : 'Manrope, "Noto Sans Thai", sans-serif' });
function Lines({ lines }: { lines: readonly string[] }) { return <>{lines.map((line, index) => <span key={line}>{line}{index < lines.length - 1 && <br />}</span>)}</>; }

export default function HowWeWork() {
  const [language, setLanguage] = useState<FocusedLanguage>("en");
  const t = copy[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return <FocusedPageLayout copy={t} language={language} setLanguage={setLanguage} pageClassName="method-page">
    <section className="focused-hero method-hero"><div className="focused-hero__grid" /><div className="focused-hero__copy"><p className="eyebrow eyebrow--light"><span /> {t.methodLabel}</p><h1 style={headingStyle(language)}><Lines lines={t.methodTitle} /></h1><p>{t.methodIntro}</p><a className="text-link text-link--light" href="#method-steps">{language === "en" ? "See the method" : "ดูวิธีการทำงาน"} <ArrowDownRight size={18} /></a></div><div className="focused-hero__mark" aria-hidden="true">V</div><span className="focused-hero__index">METHOD / 01</span></section>
    <section className="method-page-intro"><p className="eyebrow"><span /> {language === "en" ? "FROM QUESTION TO ACTION" : "จากคำถามสู่การลงมือทำ"}</p><div className="method-page-intro__grid"><h2 style={headingStyle(language)}>{language === "en" ? <>A clear sequence<br />creates momentum</> : <>ลำดับการทำงานที่ชัดเจน<br />สร้างแรงส่งให้ธุรกิจ</>}</h2><p>{language === "en" ? "The right answer is only useful when a team can act on it. Our method brings the right people, evidence and decisions into one practical sequence." : "คำตอบที่ดีจะมีคุณค่าก็ต่อเมื่อทีมสามารถนำไปลงมือทำได้ วิธีการของเรานำคน ข้อมูล และการตัดสินใจที่สำคัญมาอยู่ในลำดับการทำงานเดียวกัน"}</p></div></section>
    <section className="method-section method-page-section" id="method-steps"><div className="method-section__head"><p className="eyebrow eyebrow--light"><span /> {t.methodLabel}</p><h2 id="method-title" style={headingStyle(language)}><Lines lines={t.methodTitle} /></h2><p>{t.methodIntro}</p></div><ol className="method-list">{t.methods.map(([number, title, detail], index) => <li key={number}><span className="method-list__count">{number}</span><div><h3>{title}</h3><p>{detail}</p></div>{index < t.methods.length - 1 && <ArrowRight className="method-list__arrow" size={18} />}</li>)}</ol></section>
    <section className="method-next"><p className="eyebrow"><span /> {language === "en" ? "READY TO APPLY IT?" : "พร้อมนำไปใช้กับโจทย์จริงหรือยัง?"}</p><h2 style={headingStyle(language)}>{language === "en" ? <>Put the method<br />to work</> : <>เปลี่ยนวิธีการ<br />ให้เกิดผลลัพธ์</>}</h2><a className="diagnostic-button" href="/diagnostic">{t.diagnosticAction} <ArrowRight size={18} /></a></section>
  </FocusedPageLayout>;
}
