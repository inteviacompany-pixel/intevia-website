import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { copy } from "./RfidServices";

const rfidSource = readFileSync(
  fileURLToPath(new URL("./RfidServices.tsx", import.meta.url)),
  "utf8",
);

describe("RFID services content", () => {
  it("contains the four requested engineering and operations services in both languages", () => {
    expect(copy.en.services.map(([_, title]) => title)).toEqual([
      "PLANT DESIGN",
      "WORK STUDY",
      "PRODUCT CAPABILITY",
      "YIELD UP",
    ]);
    expect(copy.th.services.map(([_, title]) => title)).toEqual([
      "PLANT DESIGN",
      "WORK STUDY",
      "PRODUCT CAPABILITY",
      "YIELD UP",
    ]);
  });

  it("keeps the requested English editorial copy clean", () => {
    expect(copy.en.heroTitle).toEqual(["Connect the", "physical world", "to better decisions"]);
    expect(copy.en.introTitle).toEqual(["From plant design", "to yield up"]);
    expect(copy.en.services.map(([, , headline]) => headline)).toEqual([
      "Design the flow before you build it",
      "Make every motion count",
      "Know what the process can deliver",
      "Turn loss into output",
    ]);
    expect(copy.en.rfidTitle).toEqual(["Make every item", "visible"]);
    expect(copy.en.projectsTitle).toEqual(["Connect the data", "to the work"]);
    expect(copy.en.ctaTitle).toEqual(["Start with the", "operational question"]);
  });

  it("keeps the capabilities heading and service-card copy in the JSX", () => {
    expect(rfidSource).toContain(
      '<h2 style={headingStyle(language)}>Four ways to<br />move the system forward</h2>',
    );
    expect(rfidSource).toContain(
      "{t.services.map(([number, title, headline, text]) => <article className=\"rfid-service-card\"",
    );
    expect(rfidSource).not.toContain("Four ways to<br />move the system forward.</h2>");
    expect(rfidSource).not.toContain("Design the flow before you build it.");
    expect(rfidSource).not.toContain("Make every motion count.");
    expect(rfidSource).not.toContain("Know what the process can deliver.");
    expect(rfidSource).not.toContain("Turn loss into output.");
  });

  it("keeps the RFID solution architecture complete in both languages", () => {
    expect(copy.en.stack.map(([_, title]) => title)).toEqual(["TAG", "READER", "ANTENNA", "SOFTWARE"]);
    expect(copy.th.stack.map(([_, title]) => title)).toEqual(["TAG", "READER", "ANTENNA", "SOFTWARE"]);
    expect(copy.en.tech).toHaveLength(3);
    expect(copy.th.tech).toHaveLength(3);
  });
});
