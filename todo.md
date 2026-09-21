# INTEVIA RFID Services Expansion

- [x] Review the attached RFID reference document and map its themes into INTEVIA content.
- [x] Add a new bilingual services page for RFID / IoT Solutions.
- [x] Add Plant Design, Work Study, Product Capability, and Yield Up service offerings.
- [x] Add RFID solution categories, integration capabilities, and project examples based on the reference.
- [x] Add a second-page route and connect it from desktop and mobile navigation.
- [x] Validate route, bilingual content, responsive layout, and TypeScript before creating a checkpoint.

Reference themes captured: RFID/NFC/IoT solutions, LF/HF/UHF technology, tag-reader-antenna-software components, ERP and third-party integration, inventory control, production traceability, supplier queue systems, patient/event/product authenticity use cases, dispensing systems, and 3D printing.

Previous scope note: The stable INTEVIA bilingual landing page and QC/QA supplier quality service are preserved at checkpoint 40c24055.


- [x] Resolve the dev-server runtime error caused by the missing dotenv dependency.
- [x] Verify the updated home page mobile navigation, including the RFID link and language controls.
- [x] Create a fresh checkpoint only after runtime health and all responsive route checks pass.

- [x] Explicitly verify the mobile menu exposes the RFID link and language controls.
- [x] Save a new checkpoint after the clean restart and final route checks.

# Readability and RFID Visual Update

- [x] Increase readable body copy sizes to approximately 150% while preserving heading hierarchy.
- [x] Audit text and background pairings across the landing page and RFID page for clear contrast.
- [x] Create a realistic RFID implementation visual aligned to the INTEVIA navy and signal-blue identity.
- [x] Add the new RFID visual to the RFID page with useful alt text and responsive cropping.
- [x] Run tests and validate desktop/mobile visuals before the next checkpoint.

- [x] Confirm the generated RFID image finished successfully and is loading as the final asset.
- [x] Recheck the RFID page after final image delivery on desktop and mobile.

- [x] Verify in the browser that /rfid-services loads the final RFID asset URL, not a placeholder.
- [x] Capture fresh desktop and mobile screenshots after final image availability and confirm crop, readability, and contrast.
- [x] Mark the final image checks complete only after the fresh browser evidence is available.

# Page Separation Update

- [x] Separate the landing page into focused routes so the home page is not an overly long scroll.
- [x] Create a dedicated Business & Product Services page for the four transformation services and diagnostic CTA.
- [x] Keep the RFID / IoT page as its own dedicated route and preserve its bilingual content.
- [x] Add shared page navigation, bilingual language switching, and clear back/home links.
- [x] Validate all routes, menu links, desktop/mobile layouts, and TypeScript before checkpointing.

- [x] Open the updated Home and Business Services mobile menus and verify cross-page links navigate correctly.
- [x] Click-test the main desktop links between Home, Business Services anchors, and RFID / IoT.
- [x] Mark route/menu validation complete only after interaction checks pass.

- [x] Click each Home mobile-menu link and confirm the correct page or Business Services anchor opens.
- [x] Click each Business Services mobile-menu link and confirm the correct section or RFID page opens.
- [x] Click-test desktop navigation links on Home and Business Services, then update route validation only after all interactions pass.

- [x] Click Home mobile-menu links for Business Services method, Diagnostic, and RFID / IoT and confirm destinations.
- [x] Click each Business Services mobile-menu link and confirm the section or RFID page destination.
- [x] Click Home desktop How We Work, Diagnostic, and RFID / IoT links and confirm destinations.

- [x] Click Home mobile-menu links for `/business-services#method`, `/business-services#diagnostic`, and `/rfid-services`, confirming each browser destination.
- [x] Click Business Services mobile-menu links for `#services`, `#method`, `#diagnostic`, and `/rfid-services`, confirming each resulting destination.

# Thai Typography and Page Separation Update

- [x] Split Services into a dedicated page with its own bilingual route.
- [x] Split How We Work into a dedicated page with its own bilingual route.
- [x] Split Diagnostic into a dedicated page with its own bilingual route.
- [x] Update Home and shared navigation so all separated pages are reachable in Thai and English.
- [x] Use Noto Sans Thai for Thai content and add comfortable letter spacing without weakening the existing English hierarchy.
- [x] Validate route links, bilingual switching, typography, responsive layouts, and TypeScript before checkpointing.

# Final Thai Typography and Interaction QA

- [x] Update all Thai-facing heading styles so Noto Sans Thai is prioritized on Home, Business Services, Services, How We Work, Diagnostic, and RFID pages.
- [x] Browser-test Thai/English switching and shared navigation links on Services, How We Work, and Diagnostic after this refactor.

# Final Shared Navigation Interaction QA

- [x] Click-test shared navigation links on `/services`, `/how-we-work`, and `/diagnostic`, confirming each destination route in the browser after the refactor.
- [x] Save a fresh checkpoint after the dedicated-page navigation links are interaction-tested end-to-end.

# Complete Shared Navigation Coverage

- [x] From `/services`, click How We Work, Diagnostic, and RFID / IoT and confirm `/how-we-work`, `/diagnostic`, and `/rfid-services`.
- [x] From `/how-we-work`, click Services, Diagnostic, and RFID / IoT and confirm `/services`, `/diagnostic`, and `/rfid-services`.
- [x] From `/diagnostic`, click Services, How We Work, and RFID / IoT and confirm `/services`, `/how-we-work`, and `/rfid-services`.
- [x] Save the checkpoint only after every shared navigation destination is confirmed.

# Final How We Work Navigation Check

- [x] Click the shared RFID / IoT link from `/how-we-work` and confirm the browser reaches `/rfid-services`.
- [x] Save a fresh checkpoint after the final shared-navigation coverage is fully confirmed.

# Checkpoint Delivery

- [x] Save a new checkpoint after the final Thai-first typography and shared-navigation verification changes.

# Home Copy Verification

- [x] Inspect the current Home hero and supporting CTA text for missing spaces or unintended line breaks.
- [x] Apply the requested copy correction without changing the bilingual layout or navigation.
- [x] Run TypeScript checks and visually verify the Home page before creating a checkpoint.

# How We Work Copy Verification

- [x] Inspect the actual How We Work title and supporting section headings for missing spaces or trailing punctuation.
- [x] Apply the requested copy cleanup without changing the page layout or bilingual behavior.
- [x] Run TypeScript/tests and visually verify the How We Work page before creating a checkpoint.

# Diagnostic Copy Verification

- [x] Inspect the three Diagnostic English headings for missing spaces and trailing punctuation.
- [x] Apply the requested Diagnostic copy cleanup without changing bilingual behavior or layout.
- [x] Run TypeScript/tests and visually verify the Diagnostic page before creating a checkpoint.

# Diagnostic CTA Copy Follow-up

- [x] Update the Diagnostic CTA English heading to remove the trailing period while preserving the line break.
- [x] Revise the Diagnostic copy regression test to assert the punctuation-free CTA heading.
- [x] Rerun TypeScript/tests and visually verify the Diagnostic page on desktop and mobile after the CTA fix.

# RFID / IoT Copy Verification

- [x] Inspect the affected English RFID / IoT labels and headings for missing spaces and trailing punctuation.
- [x] Apply the requested RFID / IoT copy cleanup without changing bilingual behavior, line breaks, or layout.
- [x] Run TypeScript/tests and visually verify the RFID / IoT page before creating a checkpoint.

# RFID / IoT Lower-Page Visual Follow-up

- [x] Capture full-page or section-level desktop and mobile evidence for the capabilities heading and four service-card headlines.
- [x] Extend the RFID / IoT regression test to cover the capabilities JSX heading and service-card rendering copy.
- [x] Re-run validation and confirm the lower-page visual evidence before creating a checkpoint.

# RFID / IoT Post-Test-Edit Validation

- [x] Re-run TypeScript and Vitest after the final RFID / IoT regression-test edit.
- [x] Record the post-test-edit validation together with the existing full-page desktop/mobile evidence.

# Thai Header Copy and Sizing Update

- [x] Inspect Thai header and navigation strings for trailing periods and identify the shared header font-size rules.
- [x] Remove trailing periods from Thai header copy and reduce header text sizing to approximately 90% without harming readability.
- [x] Run TypeScript/tests and visually verify shared headers on desktop and mobile before creating a checkpoint.

# Scoped Thai Heading Typography Follow-up

- [x] Replace the global Thai heading transform hack with explicit scoped 90% font-size rules for intended hero and section headings.
- [x] Re-run TypeScript/tests and visually verify Thai desktop/mobile alignment after the scoped font-size update.


# Homepage Compression and Menu Sizing

- [x] Review the current Home page sections and identify the essential one-page content versus content already represented on dedicated routes.
- [x] Compress Home to a focused, approximately one-A4-length landing experience and route remaining information through existing pages or clear menu links.
- [x] Increase desktop and mobile navigation menu text to approximately 150% while preserving header fit and accessibility.
- [x] Add or update regression coverage for the shortened Home structure and enlarged menu typography.
- [x] Run TypeScript/tests and visually verify Home and shared navigation on desktop and mobile before creating a checkpoint.


# Homepage Typography and Single-Line Layout Update

- [x] Inspect the Home selectors for the requested labels, route cards, and route-directory intro text.
- [x] Set the requested Home labels and supporting headings to 14px and keep the route-directory heading and description on one desktop line without harming mobile readability.
- [x] Add or update regression coverage for the 14px typography and single-line desktop layout rules.
- [x] Run TypeScript/tests and visually verify Home on desktop and mobile before creating a checkpoint.


# Site-wide 14px Text and English Header Punctuation Update

- [x] Audit small-text selectors and English header/section-heading copy across Home, Services, How We Work, Diagnostic, and RFID / IoT pages.
- [x] Raise applicable small readable text to at least 14px without enlarging compact metadata beyond the intended hierarchy, and remove trailing periods from English headers across all pages.
- [x] Add regression coverage for the site-wide minimum text size and punctuation-free English headers.
- [x] Run TypeScript/tests and visually verify all principal routes in English and Thai on desktop/mobile before creating a checkpoint.

# Final English Header and Thai Visual QA Follow-up

- [x] Remove the remaining trailing period from the English Services CTA heading and audit page-local English headers for consistency.
- [x] Update regression coverage for the Services CTA heading and rerun TypeScript/Vitest.
- [x] Visually verify principal routes in Thai on desktop and mobile and record the evidence before checkpointing.


# Opaque Homepage Header on Scroll

- [x] Inspect the Home header structure and current background/positioning rules.
- [x] Make the homepage header background solid at rest and while scrolling so text and menu do not overlap the hero image.
- [x] Add regression coverage for the opaque header styling and verify header contrast on desktop/mobile during scroll.
- [x] Run TypeScript/tests and visually verify the homepage header before creating a checkpoint.

# Homepage Scroll-State Verification Follow-up

- [x] Confirm whether Home applies a distinct scrolled-header class; keep the header permanently solid if no state change is needed.
- [x] Record desktop and mobile evidence for the permanently opaque fixed header and rerun validation before checkpointing.

# Header Verification Wording Correction

- [x] Update the QA note and checklist wording to describe the permanently opaque fixed-header behavior, since Home has no distinct scroll-state class.
- [x] Re-read todo.md and rerun the final validation before checkpointing.

# Final Checkpoint Readiness

- [x] Re-read todo.md after the final wording correction and confirm the opaque-header wording is consistent.
- [x] Re-run TypeScript and Vitest after the final QA-note/todo updates and record the result before checkpointing.


# Diagnostic Visual Editor Cleanup

- [x] Inspect Diagnostic.tsx and FocusedPageLayout.tsx for duplicate style props, malformed JSX, and unintended footer contact changes.
- [x] Normalize Diagnostic typography to the existing CSS scale and restore the intended shared footer contact information.
- [x] Add or update regression coverage for valid JSX, expected typography, and footer contact links.
- [x] Run TypeScript/tests and visually verify Diagnostic plus representative focused pages before creating a checkpoint.


# Home Hero Visual Editor Cleanup

- [ ] Inspect Home.tsx and existing hero CSS for duplicate inline style props and the intended 549px height / -30px bottom spacing.
- [ ] Restore the requested hero sizing through clean CSS or a single scoped style without applying styles to every child element.
- [ ] Add or update regression coverage for valid Home JSX and the intended hero layout values.
- [ ] Run TypeScript/tests and visually verify Home on desktop and mobile before checkpointing.
