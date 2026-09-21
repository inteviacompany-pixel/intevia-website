import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const diagnosticSource = readFileSync(
  fileURLToPath(new URL("./Diagnostic.tsx", import.meta.url)),
  "utf8",
);
const focusedLayoutSource = readFileSync(
  fileURLToPath(new URL("../components/FocusedPageLayout.tsx", import.meta.url)),
  "utf8",
);

describe("Diagnostic English heading copy", () => {
  it("keeps the requested line breaks, spaces, and punctuation", () => {
    expect(diagnosticSource).toContain(
      '{language === "en" ? <>Find the signal<br />inside the noise</> :',
    );
    expect(diagnosticSource).toContain(
      '{language === "en" ? <>Clarity before<br />commitment</> :',
    );
    expect(diagnosticSource).toContain(
      '{language === "en" ? <>Bring us the<br />question</> :',
    );
  });

  it("removes malformed duplicate style props from the visual-editor pass", () => {
    expect(diagnosticSource).not.toContain("style={{fontSize:");
    expect(focusedLayoutSource).not.toContain("style={{fontSize:");
  });

  it("keeps the intended shared footer contact links", () => {
    expect(focusedLayoutSource).toContain('mailto:intervia.company@gmail.com');
    expect(focusedLayoutSource).toContain('tel:+66802888858');
    expect(focusedLayoutSource).not.toContain('mailto:admin@intevia.co.th');
  });

  it("does not retain the stale English heading variants", () => {
    expect(diagnosticSource).not.toContain("inside the noise.</>");
    expect(diagnosticSource).not.toContain("commitment.</>");
    expect(diagnosticSource).not.toContain("thequestion");
    expect(diagnosticSource).not.toContain("question.</>");
  });
});
