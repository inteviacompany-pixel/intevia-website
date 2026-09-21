# Final Visual QA Notes

The generated RFID asset is complete and present as a 1664 × 2080 photorealistic factory image with a quality specialist, carton, conveyor, and fixed RFID reader. It matches the INTEVIA midnight-navy / signal-blue editorial direction and loads in the RFID systems section.

The final desktop full-page review showed readable enlarged explanatory copy, the RFID photo integrated beside the tag-reader-antenna-software stack, and the technology section heading corrected to navy on the off-white background. The mobile review showed the enlarged hero and body copy remain legible without visible overflow.

Validation: Vitest passed 2 tests; TypeScript check passed; dev server restarted cleanly after dependency restoration.

Fresh post-generation evidence: the browser rendered the exact final image URL `/manus-storage/intevia-rfid-traceability_1a2f139a.jpg` in the RFID systems section. New desktop and mobile full-page screenshots after final asset availability show the factory worker, carton, conveyor, and RFID reader image rendering correctly; the portrait crop remains useful on mobile. Enlarged copy remains readable, and the technology heading is now dark on the light section background.

Page split review: the router currently has `/` and `/rfid-services`; Home contains all business services, methodology, and diagnostic sections in one long scroll. The new split should introduce `/business-services`, keep `/rfid-services` dedicated to RFID, and make Home a short path-selection page. Shared header/footer styles and bilingual language controls can be reused; the existing RFID header classes provide a fixed, responsive chrome pattern.

Page separation visual QA: Home is now a short two-path landing page; Business Services and RFID / IoT render as separate routes on desktop. The Business Services header currently shows an overlap between its centered INTEVIA brand mark and the expanded desktop nav, so the header spacing must be corrected before checkpointing. The Home and RFID hero layouts remain visually consistent.

Page separation final QA: fresh desktop and mobile captures show Home as a concise path-selection page, Business Services as its own `/business-services` route, and RFID / IoT as its own `/rfid-services` route. Desktop Business Services header spacing is corrected; mobile headers retain accessible menu buttons. The separate pages preserve the enlarged readable body text and INTEVIA visual system.

Navigation interaction QA: Home browser markup exposes `/business-services`, `/business-services#method`, `/business-services#diagnostic`, and `/rfid-services`; the Home mobile menu opened successfully and returned all four links. Business Services loads separately and its mobile menu opened successfully with `#services`, `#method`, `#diagnostic`, and `/rfid-services` destinations. The fixed header and menu states remain accessible.

Anchor-route QA: `/business-services#method` opened the dedicated page with the How We Work section available; `/business-services#diagnostic` opened the same page at the diagnostic section. Both destinations are valid cross-page navigation targets from the separated menu structure.

Click-level navigation QA: the Home mobile-menu Business Services link was activated and the browser arrived at `/business-services`. The Business Services desktop RFID / IoT link was activated and the browser arrived at `/rfid-services`. The Business Services anchor destinations `/business-services#method` and `/business-services#diagnostic` also resolved and displayed their target sections.

Desktop click QA: Home Services navigation opened `/business-services`; Business Services Services link resolved to `#services`; How We Work resolved to `#method`; Diagnostic resolved to `#diagnostic`; and the Business Services RFID / IoT link opened `/rfid-services`. These interactions confirm the separated navigation destinations are active rather than markup-only.

Final navigation QA: Home desktop How We Work opened `/business-services#method`; Home desktop Diagnostic opened `/business-services#diagnostic`; Home desktop RFID / IoT opened `/rfid-services`. Earlier mobile-menu inspections and click-level Business Services routing also passed. The page-separation objective is now fully verified at route and anchor level.

Mobile click QA update: the Home mobile-menu How We Work link was activated and the browser arrived at `/business-services#method`, confirming that the menu link performs the expected cross-page anchor navigation.

Home mobile click QA: How We Work opened `/business-services#method`; Diagnostic opened `/business-services#diagnostic`; RFID / IoT opened `/rfid-services`. Together with the earlier Home mobile Business Services click, all Home mobile-menu destinations have now been activated and confirmed.

Business Services mobile click QA: Services opened `/business-services#services`; How We Work opened `/business-services#method`; Diagnostic opened `/business-services#diagnostic`; RFID / IoT opened `/rfid-services`. All four mobile destinations have now been activated and confirmed.

## Thai-first typography and separated-page language QA

Verified in the live browser:

- `/services`: EN -> ไทย renders Thai copy and Thai-first heading style; ไทย -> EN restores English copy.
- `/how-we-work`: EN -> ไทย renders Thai copy and Thai-first heading style; ไทย -> EN restores English copy.
- `/diagnostic`: EN -> ไทย renders Thai copy and Thai-first heading style; ไทย -> EN restores English copy.
- Shared navigation remains visible on each dedicated page with links to Services, How We Work, Diagnostic, RFID / IoT, and the contact CTA.
- TypeScript and Vitest remain green after the heading-style changes.

## Final refactor interaction QA

- `/services` shared desktop Services link was loaded and its shared How We Work link navigated to `/how-we-work`.
- `/services` and `/how-we-work` both exposed the same cross-page navigation and bilingual controls.

## Final shared navigation click QA after Thai-first refactor

- The shared navigation link from How We Work opened `/diagnostic`.
- The shared RFID / IoT link from Diagnostic opened `/rfid-services`.
- Together with the earlier Services -> How We Work click, the core shared navigation chain across the new dedicated pages is verified in the browser.

## Complete shared-navigation coverage in progress

- From `/services`, the shared How We Work link opened `/how-we-work` successfully.

- From `/services`, the shared Diagnostic navigation link opened `/diagnostic` successfully.

- From `/diagnostic`, the shared Services link opened `/services`.
- From `/diagnostic`, the shared How We Work link opened `/how-we-work`.

- From `/services`, the shared RFID / IoT navigation link opened `/rfid-services` successfully.
- Complete shared navigation coverage is now verified for Services, How We Work, and Diagnostic after the Thai-first typography refactor.

- From `/how-we-work`, the shared RFID / IoT navigation link opened `/rfid-services` successfully. This completes the explicit cross-page shared-navigation coverage.

## Home copy verification

The English Home hero now renders “Make the next” and “move matter” without the trailing period, and the desktop and mobile screenshots show the line break and spacing remain balanced. The compact mobile layout remains readable with no visible overflow.

## How We Work copy verification

The shared English method title now renders “A practical method / for moving forward” without the trailing period. The intro heading renders “A clear sequence / creates momentum” and the next-step heading renders “Put the method / to work” without punctuation. Desktop and mobile screenshots preserve the intended editorial hierarchy with no overflow.

## Diagnostic copy verification

The visual editor reported no changes because its selectors were stale or did not match the current JSX structure. Manual inspection found the English headings in `Diagnostic.tsx`; the CTA heading retained its intentional line break but required removal of its trailing period. The final English headings now render “Find the signal / inside the noise”, “Clarity before / commitment”, and “Bring us the / question” without trailing periods. Desktop and mobile screenshots show readable headings, strong contrast, and no overflow.

## RFID / IoT copy verification

The visual editor selectors did not match the current `RfidServices.tsx` structure, so the requested copy cleanup was applied manually. The English hero, intro, four service headlines, RFID systems title, capabilities title, projects title, and CTA title now omit the requested trailing periods while preserving intentional `<br />` line breaks. The desktop and mobile hero screenshots show the corrected editorial copy with readable sizing, strong contrast, and no visible overflow.

The follow-up full-page desktop and mobile captures visibly include the “Four ways to / move the system forward” capabilities heading and all four service cards. The card headlines render with correct spaces and no trailing periods; the responsive cards remain legible and aligned without visible overflow.

Post-test-edit validation: `pnpm check` passed and Vitest passed 10 tests across 4 files, including the extended RFID / IoT JSX assertions.


## Thai header copy and sizing update

Removed trailing periods from Thai heading copy across Home, Business Services, Services, How We Work, Diagnostic, and RFID / IoT sections. Applied explicit scoped `font-size` rules at 90% of the existing desktop and mobile scales for the intended hero, section, and card headings, preserving intentional line breaks without transform-based layout artifacts. Final Thai desktop and mobile captures confirmed readable type, clean wrapping, aligned spacing, strong contrast, and no visible overflow across all five routes. Final validation: `pnpm check` passed and Vitest passed 13 tests across 5 files; the normal English default language was restored afterward.


## Homepage compression and menu sizing update

Reduced Home to a focused landing experience: one compact hero, one route directory for Services, How We Work, Diagnostic, and RFID / IoT, and a concise contact footer. Removed the duplicated long-form intro/path content from Home; detailed information remains available on the linked dedicated routes and in the existing shared navigation. Increased primary desktop navigation and mobile menu typography to approximately 150% of the former values, including the shared focused-page shell. Final desktop and mobile captures confirmed clean wrapping, readable hierarchy, preserved contrast, and no visible overflow across Home and the principal destination routes. Final validation: `pnpm check` passed and Vitest passed 15 tests across 5 files.


## Homepage typography and single-line route intro update

Updated the Home hero CTA wording to “Explore our services”. Set the requested utility labels and headings—01–04, Explore our services, BUSINESS & PRODUCT TRANSFORMATION, EXPLORE, CONTACT, and ONE CLEAR NEXT STEP—to 14px. The route-directory title “Choose the page that matches your decision” and its supporting description now stay on one line on desktop, with an explicit mobile override that wraps naturally at narrow widths. Desktop and mobile screenshots confirmed readable hierarchy, no clipping, and no horizontal overflow. Final validation: `pnpm check` passed and Vitest passed 16 tests across 5 files.


## Site-wide English readability and header punctuation update

Audited the focused English header copy and removed trailing full stops from the Business Services hero, intro, services heading, and RFID core-technology heading while leaving body-sentence punctuation intact. Added a scoped readability override that brings supporting labels, metadata, navigation-adjacent copy, cards, footer text, and other small UI copy to 14px without changing the large editorial heading hierarchy. TypeScript passed and Vitest passed 18 tests. Full-page desktop and mobile screenshots for Home, Services, How We Work, Diagnostic, and RFID / IoT showed the intended larger supporting text, open header phrasing, preserved line breaks, and no horizontal overflow.


## Thai visual QA for site-wide readability update

Temporarily rendered Home, Services, How We Work, Diagnostic, and RFID / IoT in Thai to verify the 14px supporting-text pass at desktop and mobile widths. The screenshots showed readable navigation, labels, card descriptions, footer copy, and diagnostic/method details with preserved Noto Sans Thai hierarchy. Mobile layouts wrapped naturally without horizontal overflow; the compact route cards and focused-page sections remained aligned.


## Opaque homepage header on scroll

Changed only the Home page fixed header to a solid midnight-navy surface (`#081522`) for both the default and scrolled states, with backdrop blur removed so the hero image cannot show through the navigation. Desktop and mobile screenshots confirmed clear separation between the header and hero image, readable navigation, and no overflow. TypeScript passed and Vitest passed 19 tests.


Final recheck after scoping the rule to `.home-page .site-header`: desktop and mobile viewport captures confirmed the fixed header remains a solid midnight-navy bar at the top while the hero image begins below it. Since Home does not apply a distinct scroll-state class, the permanent solid rule is the intended behavior and keeps the navigation protected as the page scrolls. TypeScript and all 19 Vitest tests passed.


## Diagnostic visual-editor cleanup

The visual editor had inserted duplicate `style` attributes into Diagnostic.tsx and FocusedPageLayout.tsx, which caused TypeScript failures. Both files were rewritten with clean semantic JSX, preserving bilingual content, intentional line breaks, existing CSS typography hierarchy, and responsive layout. The focused footer now uses `intervia.company@gmail.com` and `tel: +66802888858` as the intended contact links. Desktop top-view and mobile full-page captures for Diagnostic, Services, How We Work, and RFID / IoT showed clean rendering without JSX-related layout breakage. TypeScript passed and Vitest passed 21 tests.
