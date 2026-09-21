import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const readSource = (fileName: string) =>
  readFileSync(fileURLToPath(new URL(`./${fileName}`, import.meta.url)), "utf8");

const businessServicesSource = readSource("BusinessServices.tsx");
const homeSource = readSource("Home.tsx");
const servicesSource = readSource("Services.tsx");
const methodSource = readSource("HowWeWork.tsx");
const diagnosticSource = readSource("Diagnostic.tsx");
const rfidSource = readSource("RfidServices.tsx");
const stylesheet = readSource("../index.css");

describe("Thai header copy and heading scale", () => {
  it("removes trailing periods from shared Thai heading copy", () => {
    expect(businessServicesSource).toContain('heroTitle: ["ทำให้ก้าวต่อไป", "สร้างความหมาย"],');
    expect(businessServicesSource).toContain('introTitle: ["partner เดียวตั้งแต่", "คำถามถึงผลลัพธ์"],');
    expect(businessServicesSource).toContain('servicesTitle: ["เลือก workstream", "ที่เหมาะกับคุณ"],');
    expect(businessServicesSource).toContain('methodTitle: ["วิธีทำงานที่ชัดเจน", "เพื่อก้าวไปข้างหน้า"],');
    expect(businessServicesSource).not.toContain("สร้างความหมาย.");
    expect(businessServicesSource).not.toContain("คำถามถึงผลลัพธ์.");
    expect(businessServicesSource).not.toContain("ที่เหมาะกับคุณ.");
    expect(businessServicesSource).not.toContain("เพื่อก้าวไปข้างหน้า.");
  });

  it("keeps the Thai Home hero clean and routes detailed content to dedicated pages", () => {
    expect(homeSource).toContain('title: ["ทำให้ก้าวต่อไป", "สร้างความหมาย"],');
    expect(homeSource).toContain('label: "ขั้นตอนถัดไปที่ชัดเจน"');
    expect(homeSource).toContain('className="home-route-grid"');
    expect(homeSource).toContain('href: "/services"');
    expect(homeSource).toContain('href: "/how-we-work"');
    expect(homeSource).toContain('href: "/diagnostic"');
    expect(homeSource).toContain('href: "/rfid-services"');
    expect(homeSource).not.toContain("home-intro");
  });

  it("applies the requested Home utility-label sizing and one-line desktop route intro", () => {
    expect(homeSource).toContain('action: "Explore our services"');
    expect(stylesheet).toContain(".home-page .hero-content>.eyebrow,.home-page .hero-content>.text-link,.home-page .home-route-section__intro>.eyebrow,.home-page .home-route-card__number,.home-page .home-route-card .eyebrow,.home-page .home-footer .footer-label{font-size:14px}");
    expect(stylesheet).toContain(".home-page .home-route-section__intro h2{font-size:clamp(2.4rem,4vw,3.6rem);white-space:nowrap}");
    expect(stylesheet).toContain(".home-page .home-route-section__intro>p:last-child{font-size:14px;white-space:nowrap}");
    expect(stylesheet).toContain(".home-page .home-route-section__intro h2,.home-page .home-route-section__intro>p:last-child{white-space:normal}");
  });

  it("removes trailing periods from page-local Thai headings", () => {
    expect(servicesSource).toContain("ที่อยู่เบื้องหลังงาน</>");
    expect(methodSource).toContain("สร้างแรงส่งให้ธุรกิจ</>");
    expect(methodSource).toContain("ให้เกิดผลลัพธ์</>");
    expect(diagnosticSource).toContain("ท่ามกลางข้อมูลที่กระจัดกระจาย</>");
    expect(diagnosticSource).toContain("ตัดสินใจลงมือ</>");
    expect(diagnosticSource).toContain("มาคุยกับเรา</>");
    expect(rfidSource).toContain('techLabel: "CORE TECHNOLOGY", techTitle: "เลือกความถี่ให้เหมาะกับการตัดสินใจ",');
    expect(rfidSource).not.toContain("ที่อยู่เบื้องหลังงาน.</>");
    expect(rfidSource).not.toContain("สร้างแรงส่งให้ธุรกิจ.</>");
    expect(rfidSource).not.toContain("มาคุยกับเรา.</>");
  });

  it("removes trailing periods from English headers across the focused pages", () => {
    expect(businessServicesSource).toContain('heroTitle: ["Make the next", "move matter"],');
    expect(businessServicesSource).toContain('introTitle: ["One partner from", "question to outcome"],');
    expect(businessServicesSource).toContain('servicesTitle: ["Choose the right", "workstream"],');
    expect(businessServicesSource).not.toContain('heroTitle: ["Make the next", "move matter."],');
    expect(businessServicesSource).not.toContain('introTitle: ["One partner from", "question to outcome."],');
    expect(businessServicesSource).not.toContain('servicesTitle: ["Choose the right", "workstream."],');
    expect(rfidSource).toContain('techLabel: "CORE TECHNOLOGY", techTitle: "The right frequency for the right decision",');
    expect(rfidSource).not.toContain('techTitle: "The right frequency for the right decision.",');
    expect(servicesSource).toContain("question behind the work</>");
    expect(servicesSource).not.toContain("question behind the work.</>");
  });

  it("keeps the homepage header on a solid background", () => {
    expect(stylesheet).toContain(".home-page .site-header{background:#081522");
    expect(stylesheet).toContain("backdrop-filter:none");
  });

  it("keeps supporting UI text at a readable 14px minimum", () => {
    expect(stylesheet).toContain("/* Site-wide readability pass: keep all supporting UI copy at a legible 14px minimum */");
    expect(stylesheet).toContain(":where(.site-shell,.rfid-page) .eyebrow");
    expect(stylesheet).toContain(".rfid-system__photo figcaption{font-size:14px}");
  });

  it("enlarges primary navigation typography to approximately 150%", () => {
    expect(stylesheet).toContain(".desktop-nav a{color:var(--silver);font-size:1.05rem");
    expect(stylesheet).toContain(".mobile-menu a{display:flex;align-items:center;justify-content:space-between;padding:1rem 0");
    expect(stylesheet).toContain("font-size:1.5rem;font-weight:800;line-height:1.2");
    expect(stylesheet).toContain(".focused-nav a{font-size:.99rem");
    expect(stylesheet).toContain(".focused-mobile-menu a{font-size:1.65rem");
  });

  it("scales Thai headings to 90% with scoped responsive font-size rules", () => {
    expect(stylesheet).toContain(
      ".lang-th{font-family:\"Noto Sans Thai\",\"Manrope\",sans-serif}.lang-th p,.lang-th li,.lang-th a,.lang-th button{letter-spacing:.012em}.lang-th h1,.lang-th h2,.lang-th h3{letter-spacing:-.025em}",
    );
    expect(stylesheet).toContain(".lang-th .focused-hero__copy h1{font-size:clamp(3.78rem,7.65vw,8.1rem)}");
    expect(stylesheet).toContain(".lang-th .rfid-hero__copy h1{font-size:clamp(3.6rem,7.2vw,7.74rem)}");
    expect(stylesheet).toContain(".lang-th .focused-hero__copy h1{font-size:clamp(3.24rem,14.4vw,4.68rem)}");
    expect(stylesheet).not.toContain("transform:scale(.9);transform-origin:top left");
  });
});
