import { describe, expect, it } from "vitest";
import { copy, services } from "./BusinessServices";

describe("business services page content", () => {
  it("keeps the five transformation services in both languages", () => {
    expect(services.en).toHaveLength(5);
    expect(services.th).toHaveLength(5);
    expect(services.en.map((service) => service.label)).toContain("QC/QA & SUPPLIER QUALITY ASSURANCE");
    expect(services.en.map((service) => service.label)).toContain("BUSINESS & MANUFACTURING IMPROVEMENT");
  });

  it("keeps bilingual route navigation labels available", () => {
    expect(copy.en.nav.rfid).toBe("RFID / IoT");
    expect(copy.th.nav.services).toBe("บริการ");
    expect(copy.th.nav.method).toBe("วิธีการทำงาน");
  });
});
