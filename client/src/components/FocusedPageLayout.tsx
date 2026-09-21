import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, Menu, X } from "lucide-react";

export type FocusedLanguage = "en" | "th";

export type FocusedCopy = {
  back: string;
  contact: string;
  nav: { services: string; method: string; diagnostic: string; rfid: string };
  menu: { open: string; close: string };
  footer: string;
};

export const focusedRoutes = [
  { key: "services", href: "/services" },
  { key: "method", href: "/how-we-work" },
  { key: "diagnostic", href: "/diagnostic" },
  { key: "rfid", href: "/rfid-services" },
] as const;

function BrandMark() {
  return (
    <span className="brand-mark" aria-label="INTEVIA">
      <img src="/manus-storage/intevia-iv-mark_c17c09be.png" alt="" aria-hidden="true" />
      <span>INTE</span><b>V</b><span>IA</span>
    </span>
  );
}

function LanguageToggle({ language, setLanguage, mobile = false }: { language: FocusedLanguage; setLanguage: (language: FocusedLanguage) => void; mobile?: boolean }) {
  return (
    <div className={`language-toggle ${mobile ? "language-toggle--mobile" : ""}`} role="group" aria-label="Language selector">
      <button className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
      <span>/</span>
      <button className={language === "th" ? "is-active" : ""} onClick={() => setLanguage("th")} aria-pressed={language === "th"}>ไทย</button>
    </div>
  );
}

export function FocusedPageLayout({ copy, language, setLanguage, pageClassName, children }: { copy: FocusedCopy; language: FocusedLanguage; setLanguage: (language: FocusedLanguage) => void; pageClassName: string; children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`focused-page ${pageClassName} lang-${language}`}>
      <header className="focused-header">
        <a className="focused-back" href="/"><ChevronLeft size={16} /> {copy.back}</a>
        <a className="focused-brand" href="/" aria-label="INTEVIA home"><BrandMark /></a>
        <nav className="focused-nav" aria-label="Primary navigation">
          {focusedRoutes.map(({ key, href }) => <a key={href} href={href}>{copy.nav[key]}</a>)}
        </nav>
        <div className="header-actions">
          <a className="focused-contact" href="/diagnostic">{copy.contact} <ArrowRight size={15} /></a>
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button className="menu-toggle focused-menu-toggle" aria-label={menuOpen ? copy.menu.close : copy.menu.open} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={24} />}</button>
        </div>
      </header>

      <div className={`focused-mobile-menu ${menuOpen ? "focused-mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        {focusedRoutes.map(({ key, href }) => <a key={href} href={href} onClick={closeMenu}>{copy.nav[key]} <ArrowRight size={17} /></a>)}
        <LanguageToggle language={language} setLanguage={setLanguage} mobile />
      </div>

      <main>{children}</main>

      <footer className="site-footer focused-footer">
        <div className="site-footer__brand">
          <BrandMark />
          <p>Intelligence · Strategy · Action</p>
          <p className="site-footer__statement">{copy.footer}</p>
        </div>
        <div className="site-footer__links">
          <div>
            <p className="footer-label">NAVIGATE</p>
            {focusedRoutes.map(({ key, href }) => <a key={href} href={href}>{copy.nav[key]}</a>)}
          </div>
          <div>
            <p className="footer-label">CONTACT</p>
            <a href="mailto:intervia.company@gmail.com">intervia.company@gmail.com</a>
            <a href="tel:+66802888858">tel: +66802888858</a>
          </div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} INTEVIA</span><span>INTELLIGENCE <i /> STRATEGY <i /> ACTION</span></div>
      </footer>
    </div>
  );
}

export { BrandMark, LanguageToggle };
