import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { FocusedPageLayout, type FocusedLanguage } from "@/components/FocusedPageLayout";
import { copy } from "./BusinessServices";

const headingStyle = (language: FocusedLanguage) => ({
  fontFamily: language === "th" ? '"Noto Sans Thai", "Manrope", sans-serif' : 'Manrope, "Noto Sans Thai", sans-serif',
});

const steps = {
  en: [
    ["01", "FRAME", "Clarify the business question, context and decision that needs to move."],
    ["02", "ASSESS", "Review product, process, supplier and operating evidence with the right stakeholders."],
    ["03", "PRIORITISE", "Identify the highest-value opportunities, risks and practical next actions."],
    ["04", "ACT", "Leave with a focused brief and a workstream your team can take forward."],
  ],
  th: [
    ["01", "FRAME", "ทำความเข้าใจคำถามทางธุรกิจ บริบท และการตัดสินใจที่ต้องขยับ"],
    ["02", "ASSESS", "ทบทวนข้อมูลสินค้า กระบวนการ supplier และการดำเนินงานกับผู้เกี่ยวข้องที่เหมาะสม"],
    ["03", "PRIORITISE", "จัดลำดับโอกาส ความเสี่ยง และ next action ที่สร้างคุณค่าสูงสุด"],
    ["04", "ACT", "จบด้วย brief ที่ชัดเจนและ workstream ที่ทีมของคุณนำไปทำต่อได้"],
  ],
} as const;

function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function Diagnostic() {
  const [language, setLanguage] = useState<FocusedLanguage>("en");
  const t = copy[language];
  const subject = encodeURIComponent(language === "en" ? "Business & Product Diagnostic" : "ขอรับการวิเคราะห์ธุรกิจและผลิตภัณฑ์");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <FocusedPageLayout copy={t} language={language} setLanguage={setLanguage} pageClassName="diagnostic-page">
      <section className="focused-hero diagnostic-hero">
        <div className="focused-hero__grid" />
        <div className="focused-hero__copy">
          <p className="eyebrow eyebrow--light"><span /> {t.diagnosticLabel}</p>
          <h1 style={headingStyle(language)}><Lines lines={t.diagnosticTitle} /></h1>
          <p>{t.diagnosticText}</p>
          <a className="diagnostic-button" href={`mailto:admin@intevia.co.th?subject=${subject}`}>
            {t.diagnosticAction} <ArrowRight size={18} />
          </a>
        </div>
        <div className="focused-hero__mark" aria-hidden="true">IV</div>
        <span className="focused-hero__index">DIAGNOSTIC / 01</span>
      </section>

      <section className="diagnostic-brief">
        <p className="eyebrow"><span /> {language === "en" ? "A DECISION STARTS WITH A BETTER QUESTION" : "การตัดสินใจที่ดี เริ่มจากคำถามที่ชัดเจนกว่า"}</p>
        <div className="diagnostic-brief__grid">
          <h2 style={headingStyle(language)}>
            {language === "en" ? <>Find the signal<br />inside the noise</> : <>ค้นหาสัญญาณ<br />ท่ามกลางข้อมูลที่กระจัดกระจาย</>}
          </h2>
          <p>{language === "en" ? "A diagnostic is a short, practical engagement for teams who need clarity before committing time, budget or resources. We turn a broad challenge into a sharper direction." : "Diagnostic คือการทำงานระยะสั้นที่ช่วยให้ทีมเห็นภาพก่อนตัดสินใจลงทุนเวลา งบประมาณ หรือทรัพยากร เราเปลี่ยนความท้าทายที่กว้างให้เป็นทิศทางที่ชัดขึ้น"}</p>
        </div>
        <div className="diagnostic-focus-grid">
          <div><span>01</span><h3 style={headingStyle(language)}>Product</h3><p>{language === "en" ? "Portfolio, NPD, specification or market direction." : "Portfolio, NPD, specification หรือทิศทางตลาด"}</p></div>
          <div><span>02</span><h3 style={headingStyle(language)}>Process</h3><p>{language === "en" ? "Plant flow, work study, capability or yield." : "Plant flow, work study, capability หรือ yield"}</p></div>
          <div><span>03</span><h3 style={headingStyle(language)}>Supplier</h3><p>{language === "en" ? "Quality, readiness, coordination or risk." : "Quality, readiness, coordination หรือความเสี่ยง"}</p></div>
          <div><span>04</span><h3 style={headingStyle(language)}>Business</h3><p>{language === "en" ? "A growth question that needs a practical next move." : "โจทย์การเติบโตที่ต้องการ next move ที่ลงมือทำได้จริง"}</p></div>
        </div>
      </section>

      <section className="diagnostic-flow">
        <div className="focused-section-heading">
          <p className="eyebrow"><span /> {language === "en" ? "THE DIAGNOSTIC FLOW" : "ลำดับการวิเคราะห์"}</p>
          <h2 style={headingStyle(language)}>
            {language === "en" ? <>Clarity before<br />commitment</> : <>เห็นภาพชัดก่อน<br />ตัดสินใจลงมือ</>}
          </h2>
        </div>
        <ol className="diagnostic-flow__list">
          {steps[language].map(([number, title, text]) => (
            <li key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <ArrowDownRight size={18} />
            </li>
          ))}
        </ol>
      </section>

      <section className="diagnostic-cta" id="diagnostic-request">
        <div className="diagnostic-cta__art" aria-hidden="true"><img src="/manus-storage/intevia-iv-mark_c17c09be.png" alt="" /></div>
        <div>
          <p className="eyebrow eyebrow--light"><span /> {language === "en" ? "READY TO START?" : "พร้อมเริ่มต้นหรือยัง?"}</p>
          <h2 style={headingStyle(language)}>
            {language === "en" ? <>Bring us the<br />question</> : <>นำคำถาม<br />มาคุยกับเรา</>}
          </h2>
          <p>{language === "en" ? "Share the context, the constraint or the decision ahead. We will help shape the right first conversation." : "เล่าบริบท ข้อจำกัด หรือการตัดสินใจที่อยู่ข้างหน้า แล้วเราจะช่วยวางกรอบสำหรับบทสนทนาแรกที่เหมาะสม"}</p>
          <a className="diagnostic-button" href={`mailto:admin@intevia.co.th?subject=${subject}`}>
            {t.diagnosticAction} <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </FocusedPageLayout>
  );
}
