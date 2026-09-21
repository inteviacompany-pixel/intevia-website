import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, Menu, X } from "lucide-react";

type Language = "en" | "th";
const headingStyle = (language: Language) => ({ fontFamily: language === "th" ? '"Noto Sans Thai", "Manrope", sans-serif' : 'Manrope, "Noto Sans Thai", sans-serif' });

type HomePath = { href: string; number: string; label: string; title: string; text: string };

const copy = {
  en: {
    nav: { services: "Services", method: "How we work", diagnostic: "Diagnostic", rfid: "RFID / IoT" },
    menu: { open: "Open menu", close: "Close menu" },
    hero: { label: "BUSINESS & PRODUCT TRANSFORMATION", title: ["Make the next", "move matter"], text: "INTEVIA helps businesses identify what to build, why to build it, and how to make it happen.", action: "Explore our services", side: "CHOOSE YOUR PATH" },
    routes: { label: "ONE CLEAR NEXT STEP", title: "Choose the page that matches your decision", text: "The detailed work is organised into focused pages so you can move directly to the question in front of you." },
    paths: [
      { href: "/services", number: "01", label: "BUSINESS & PRODUCT", title: "Services", text: "Product strategy, NPD, supplier quality and operational improvement." },
      { href: "/how-we-work", number: "02", label: "METHOD", title: "How we work", text: "A practical sequence from the first question to an owned workstream." },
      { href: "/diagnostic", number: "03", label: "START HERE", title: "Diagnostic", text: "Frame the question before committing time, budget or resources." },
      { href: "/rfid-services", number: "04", label: "CONNECTED OPERATIONS", title: "RFID / IoT", text: "Plant design, work study, yield up and connected industrial systems." },
    ] as HomePath[],
    footer: "Business and product transformation for organisations ready to move with intent.", explore: "EXPLORE", contact: "CONTACT", conversation: "Start a conversation"
  },
  th: {
    nav: { services: "บริการธุรกิจ", method: "วิธีการทำงาน", diagnostic: "วิเคราะห์โจทย์", rfid: "RFID / IoT" },
    menu: { open: "เปิดเมนู", close: "ปิดเมนู" },
    hero: { label: "BUSINESS & PRODUCT TRANSFORMATION", title: ["ทำให้ก้าวต่อไป", "สร้างความหมาย"], text: "INTEVIA ช่วยธุรกิจค้นหาว่าควรสร้างอะไร ทำไมจึงควรสร้าง และจะทำให้เกิดผลลัพธ์ได้อย่างไร", action: "สำรวจบริการธุรกิจ", side: "เลือกเส้นทางของคุณ" },
    routes: { label: "ขั้นตอนถัดไปที่ชัดเจน", title: "เลือกหน้าที่ตรงกับการตัดสินใจ", text: "เราแยกเนื้อหาเชิงลึกเป็นหน้าเฉพาะ เพื่อให้คุณไปต่อกับคำถามที่อยู่ตรงหน้าได้ทันที" },
    paths: [
      { href: "/services", number: "01", label: "BUSINESS & PRODUCT", title: "บริการธุรกิจ", text: "กลยุทธ์ผลิตภัณฑ์ การพัฒนาสินค้า คุณภาพ supplier และการปรับปรุงการดำเนินงาน" },
      { href: "/how-we-work", number: "02", label: "METHOD", title: "วิธีการทำงาน", text: "ลำดับการทำงานที่ชัดเจน ตั้งแต่คำถามแรกจนถึง workstream ที่ทีมรับไปทำต่อ" },
      { href: "/diagnostic", number: "03", label: "START HERE", title: "วิเคราะห์โจทย์", text: "ทำความเข้าใจโจทย์ก่อนตัดสินใจลงทุนเวลา งบประมาณ หรือทรัพยากร" },
      { href: "/rfid-services", number: "04", label: "CONNECTED OPERATIONS", title: "RFID / IoT", text: "Plant design, work study, yield up และระบบอุตสาหกรรมที่เชื่อมต่อกัน" },
    ] as HomePath[],
    footer: "Business และ product transformation สำหรับองค์กรที่พร้อมขับเคลื่อนอย่างมีเป้าหมาย", explore: "สำรวจ", contact: "ติดต่อ", conversation: "เริ่มต้นพูดคุย"
  }
} as const;

function BrandMark() { return <span className="brand-mark" aria-label="INTEVIA"><img src="/manus-storage/intevia-iv-mark_c17c09be.png" alt="" aria-hidden="true" /><span>INTE</span><b>V</b><span>IA</span></span>; }
function LanguageToggle({ language, setLanguage, mobile = false }: { language: Language; setLanguage: (language: Language) => void; mobile?: boolean }) { return <div className={`language-toggle ${mobile ? "language-toggle--mobile" : ""}`} role="group" aria-label="Language selector"><button className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button><span>/</span><button className={language === "th" ? "is-active" : ""} onClick={() => setLanguage("th")} aria-pressed={language === "th"}>ไทย</button></div>; }

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  const closeMenu = () => setMenuOpen(false);
  return <div className={`site-shell lang-${language} home-page`}>
    <header className="site-header"><a className="brand-button" href="/" aria-label="INTEVIA home"><BrandMark /></a><nav className="desktop-nav" aria-label="Primary navigation"><a href="/services">{t.nav.services}</a><a href="/how-we-work">{t.nav.method}</a><a href="/diagnostic">{t.nav.diagnostic}</a><a href="/rfid-services">{t.nav.rfid}</a></nav><div className="header-actions"><a className="header-cta" href="/diagnostic">{t.conversation} <ArrowRight size={15} /></a><LanguageToggle language={language} setLanguage={setLanguage} /><button className="menu-toggle" aria-label={menuOpen ? t.menu.close : t.menu.open} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={24} />}</button></div></header>
    <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}><a href="/services" onClick={closeMenu}>{t.nav.services}<ArrowRight size={18} /></a><a href="/how-we-work" onClick={closeMenu}>{t.nav.method}<ArrowRight size={18} /></a><a href="/diagnostic" onClick={closeMenu}>{t.nav.diagnostic}<ArrowRight size={18} /></a><a href="/rfid-services" onClick={closeMenu}>{t.nav.rfid}<ArrowRight size={18} /></a><LanguageToggle language={language} setLanguage={setLanguage} mobile /></div>

    <main>
      <section className="hero-section home-hero" aria-labelledby="hero-title" style={{marginBottom: '-30px'}} style={{height: '549px'}}><img className="hero-image" src="/manus-storage/intevia-hero_99f2c636.jpg" alt={language === "en" ? "Strategic business and product transformation workshop in a dark executive environment" : "ทีมงานกำลังวางกลยุทธ์ธุรกิจและพัฒนาผลิตภัณฑ์"} style={{marginBottom: '-30px'}} style={{height: '549px'}} /><div className="hero-scrim" style={{marginBottom: '-30px'}} style={{height: '549px'}} /><div className="hero-grid" aria-hidden="true" style={{marginBottom: '-30px'}} style={{height: '549px'}} /><div className="hero-content" style={{marginBottom: '-30px'}} style={{height: '549px'}}><p className="eyebrow eyebrow--light" style={{marginBottom: '-30px'}} style={{height: '549px'}}><span style={{marginBottom: '-30px'}} style={{height: '549px'}} /> {t.hero.label}</p><h1 id="hero-title" style={{height: '549px'}}><span style={{marginBottom: '-30px'}} style={{height: '549px'}}>{t.hero.title[0]}<br style={{marginBottom: '-30px'}} style={{height: '549px'}} />{t.hero.title[1]}</span></h1><p className="hero-intro" style={{marginBottom: '-30px'}} style={{height: '549px'}}>{t.hero.text}</p><a className="text-link text-link--light" href="/services" style={{marginBottom: '-30px'}} style={{height: '549px'}}>{t.hero.action} <ArrowDownRight size={18} style={{marginBottom: '-30px'}} style={{height: '549px'}} /></a></div><div className="hero-index" style={{marginBottom: '-30px'}} style={{height: '549px'}}><span style={{marginBottom: '-30px'}} style={{height: '549px'}}>{t.hero.side}</span><span className="hero-index__line" style={{marginBottom: '-30px'}} style={{height: '549px'}} /><span style={{marginBottom: '-30px'}} style={{height: '549px'}}>01—02</span></div><div className="hero-side-note" style={{marginBottom: '-30px'}} style={{height: '549px'}}><span style={{marginBottom: '-30px'}} style={{height: '549px'}}>INTELLIGENCE</span><i style={{marginBottom: '-30px'}} style={{height: '549px'}} /><span style={{marginBottom: '-30px'}} style={{height: '549px'}}>STRATEGY</span><i style={{marginBottom: '-30px'}} style={{height: '549px'}} /><span style={{marginBottom: '-30px'}} style={{height: '549px'}}>ACTION</span></div></section>
      <section className="home-route-section" aria-labelledby="home-routes-title"><div className="home-route-section__intro"><p className="eyebrow"><span /> {t.routes.label}</p><h2 id="home-routes-title" style={headingStyle(language)}>{t.routes.title}</h2><p>{t.routes.text}</p></div><nav className="home-route-grid" aria-label={language === "en" ? "Explore INTEVIA pages" : "เลือกหน้าของ INTEVIA"}>{t.paths.map((path) => <a className="home-route-card" href={path.href} key={path.href}><span className="home-route-card__number">{path.number}</span><div><p className="eyebrow eyebrow--blue"><span /> {path.label}</p><h3 style={headingStyle(language)}>{path.title}</h3><p>{path.text}</p></div><ArrowRight size={19} /></a>)}</nav></section>
    </main>
    <footer className="site-footer home-footer"><div className="site-footer__brand"><BrandMark /><p>Intelligence · Strategy · Action</p><p className="site-footer__statement">{t.footer}</p></div><div className="site-footer__links"><div><p className="footer-label">{t.explore}</p><a href="/services">{t.nav.services}</a><a href="/how-we-work">{t.nav.method}</a><a href="/diagnostic">{t.nav.diagnostic}</a><a href="/rfid-services">{t.nav.rfid}</a></div><div><p className="footer-label">{t.contact}</p><a href="mailto:admin@intevia.co.th">admin@intevia.co.th</a><a href="https://www.intevia.co.th" target="_blank" rel="noreferrer">www.intevia.co.th</a></div></div><div className="site-footer__bottom"><span>© {new Date().getFullYear()} INTEVIA</span><span>INTELLIGENCE <i /> STRATEGY <i /> ACTION</span></div></footer>
  </div>;
}
