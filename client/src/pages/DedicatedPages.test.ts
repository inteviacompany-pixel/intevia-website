import { describe, expect, it } from "vitest";
import { focusedRoutes } from "@/components/FocusedPageLayout";
import { copy, services } from "./BusinessServices";

describe("dedicated INTEVIA pages", () => {
  it("exposes distinct routes for services, method, diagnostic, and RFID", () => {
    expect(focusedRoutes.map((route) => route.href)).toEqual([
      "/services",
      "/how-we-work",
      "/diagnostic",
      "/rfid-services",
    ]);
  });

  it("keeps the business service model bilingual", () => {
    expect(services.en).toHaveLength(5);
    expect(services.th).toHaveLength(5);
    expect(services.en[3]?.label).toContain("QC/QA");
    expect(copy.th.nav.method).toBe("วิธีการทำงาน");
    expect(copy.th.nav.diagnostic).toBe("วิเคราะห์โจทย์");
  });
});
