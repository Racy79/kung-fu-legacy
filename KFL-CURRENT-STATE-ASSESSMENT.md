# Kung Fu Legacy — Current State Assessment
**Status:** Working document. Not one of the three frozen foundational artifacts (`00_FOUNDATION/`). Produced to synthesize existing strategy work before any new Revenue Architecture or Client Acquisition Architecture is proposed.
**Method:** Reviewed every strategy document in the repository touching pricing, membership, website, positioning, applicant journey, traffic, and marketing — plus, critically, the actual shipped code (`app/components/*.tsx`, `app/page.tsx`) rather than relying on documentation alone. Documents reviewed: `KFL-SITE-BRIEF.md/.txt`, `KFL-AUDIT-BRIEF.txt`, `KFL-PROFESSIONAL-BRIEF.md`, `KFL-V1-BASELINE.md`, `KFL-WEBSITE-AUDIT.md`, `KFL-TRAFFIC-STRATEGY-90DAY.md`, `KFL-APPLICANT-TRACKER.md`, `PROJECT_NOTES.md`, `00_FOUNDATION/KFL-INSTITUTIONAL-BLUEPRINT.md`.

---

## Critical Finding — Read This Before Anything Else

**The documentation and the live site are not describing the same thing.** Five documents dated April 14–21, 2026 (`KFL-SITE-BRIEF`, `KFL-AUDIT-BRIEF`, `KFL-PROFESSIONAL-BRIEF`, `KFL-V1-BASELINE`, `KFL-WEBSITE-AUDIT`) all describe a **brotherhood/Freemasonry-model site**: "Request Entry" into a "brotherhood," a stated "maximum of fifteen men," lineage framed through Ip Man → Moy Yat → Thornton Williams → Rafael, no price on the page, hong bao progression payments ($100–$600 per milestone), and a Bai Si ceremony ($3,000).

The **actual live code**, checked directly (`Hero.tsx`, `Legacy.tsx`, `Application.tsx`, `page.tsx`), shows a materially different site already shipped:
- Hero tagline: *"Private Wing Chun Apprenticeship... This is not a martial arts school... By application only."* No brotherhood language.
- Legacy section states Rafael "holds Jui Pai within this lineage" — a credential never mentioned in any of the five April documents — and contains **no capacity cap language** ("maximum of fifteen men" is gone).
- Application form's development-goals options are `Structure, Sensitivity, Precision, Discipline, Instructor Development, Mastery` — "Brotherhood" has been replaced by "Instructor Development."
- `page.tsx` renders 12 sections in an order that **omits AnchorQuote and DecisiveMoment entirely**, both of which the April 21 `KFL-WEBSITE-AUDIT.md` documents as live, in-flow sections with open typographic violations still to fix.

This matches a June 14, 2026 repositioning recorded only in Claude's session memory (not in any repo file) — a full pivot from "brotherhood" to "private transmission practice" that was never written back into the repository's own documents. **The five April documents are stale.** `KFL-V1-BASELINE.md` still carries the header "APPROVED. DO NOT REVISE WITHOUT DATA TRIGGER" — but the site has self-evidently been revised twice since that lock, without the baseline document being updated or the lock formally lifted.

One further consequence: the Institutional Blueprint's own Preface (Part I) describes "the prior body of work" as the April brotherhood offer and frames itself as correcting that — which is accurate against the *documents* but was already half-overtaken by the *code* at the time it was written. The Blueprint's Part VI recommendation to "re-voice the website copy from high-ticket-offer register to institutional register" was written assuming the site still speaks in brotherhood voice. **It does not.** It already speaks in private-transmission voice. The actual Layer 3 task is smaller than Part VI implies: re-voicing from *private-transmission* register to *institutional* register, not from *brotherhood* register — a real but narrower gap.

**Recommendation before any new architecture work:** treat `app/components/*.tsx` as the ground truth for current site copy, not any of the five April documents, until those documents are either updated or formally marked superseded (see table below).

---

## 1. Positioning

**Confirmed (still governing):**
- Rafael is custodian/gatekeeper of the Moy Yat lineage only — never lifestyle guru, never broad-status authority. Consistent from earliest docs through the Blueprint's Part II naming-convention discussion.
- Lineage: Ip Man → Moy Yat → Thornton Williams (Moy Don) → Rafael Gonzalez (Moy Don Xùn). Unchanged across every document and the live code.
- Three-brand separation (I Am Wing Chun / Kung Fu House / Kung Fu Legacy) — confirmed in `PROJECT_NOTES.md` and reaffirmed in Blueprint Part IX.

**Evolved (three distinct positioning eras, in order):**
1. **April 2026** — high-ticket brotherhood/Freemasonry offer, $1,000–$1,500/mo, "Request Entry" into a men's circle.
2. **June 2026 (undocumented in repo)** — repositioned to "private Wing Chun apprenticeship" / transmission practice, Jui Pai credential foregrounded, "Instructor Development" replaces "Brotherhood" as a stated goal. This is what's actually live today.
3. **July 2026** — Institutional Blueprint reframes the whole enterprise as an institution preserving "the Work," with brotherhood/transmission language subordinated to Layer 1 culture rather than the top-line pitch.

**Open questions:**
- Does the June private-transmission voice get folded into the institutional register the Blueprint calls for, or does it get preserved as-is with only vocabulary adjustments (Chartered Chapter, the Work, etc.)?
- Was the June repositioning a deliberate, reasoned decision (and if so, is its rationale written down anywhere) or an interim experiment that was never revisited?

**Contradiction to resolve:**
- `KFL-V1-BASELINE.md`'s lock policy is still nominally in force but has already been violated twice by shipped changes. Either the lock should be formally retired in favor of the Blueprint's lighter governance, or a new baseline should be written and locked against the *current* code.

---

## 2. Pricing

**Confirmed:**
- No price is displayed anywhere on the site — deliberate, per `KFL-V1-BASELINE.md`'s stated rationale ("the wrong man screens himself out on commitment before price"). Verified still true in current `Hero.tsx`/`Application.tsx`.
- A Stripe monthly-membership link exists (`https://buy.stripe.com/9B64gA6FQ8BFfOf2mM57W05`) but per `KFL-PROFESSIONAL-BRIEF.md` was **not wired into the website** — manual distribution to accepted members only. No later document reports this changing.
- Bai Si ceremony ($3,000) is cash-in-envelope, explicitly non-digitized, "earned through trust, not purchasable — Rafael decides, not the student" (`KFL-AUDIT-BRIEF.txt`).

**Evolved / likely dropped, unconfirmed:**
- Hong bao progression payments ($100/$200/$300/$400/$500/$600 per milestone, $2,100 total) appear **only** in the two earliest documents (`KFL-SITE-BRIEF`, `KFL-AUDIT-BRIEF`, both April 14) and are never mentioned again in `KFL-PROFESSIONAL-BRIEF`, `KFL-V1-BASELINE`, or the Blueprint. Absence in later docs could mean this was dropped, or simply that later docs didn't need to restate it. Not verifiable from code (never displayed on-site).
- The two-tier geographic pricing ($1,000–$1,500/mo Texas vs. $400–$800/mo Puerto Rico) appears only in the same two earliest documents and is never mentioned again anywhere, including the Blueprint. No later document references a Puerto Rico location at all.
- The specific number "$1,000/mo" (as opposed to the "$1,000–$1,500" range) is the one live in Stripe, per `KFL-PROFESSIONAL-BRIEF.md` — meaning the actual operative price and the range quoted in strategy docs may already disagree with each other.

**Open questions:**
- Is there a current, operative monthly price at all, or was pricing left unresolved when positioning shifted in June?
- Is the hong bao/Bai Si progression-payment structure still part of the model, or was it quietly abandoned along with the April brotherhood framing?
- The Institutional Blueprint (Part IX) states pricing should reflect "what sustains quality instruction time," not market-rate brotherhood pricing — but proposes no replacement number. This is a genuine gap, not a contradiction: the Blueprint intentionally deferred the number, but it hasn't been picked up since.

**No direct contradictions found in pricing mechanics** — mostly gaps and undocumented drift, not conflicting statements.

---

## 3. Membership & Capacity

**Confirmed:**
- Capacity ceiling has been stated as "maximum of fifteen men" in every April document, framed explicitly as real (not manufactured) scarcity.
- Membership model: 1-on-1 weekly/bi-weekly private instruction + weekly group session (consistent across `KFL-AUDIT-BRIEF.txt` and `KFL-PROFESSIONAL-BRIEF.md`).

**Evolved:**
- The "maximum fifteen" capacity line is **no longer present** in the live `Legacy.tsx` — removed at some point during or after the June repositioning, undocumented.
- The Blueprint (Part V) explicitly recommends *not* treating a capacity number as a scarcity-marketing device, but as a Layer 4 constraint derived from how many students can actually be evaluated for custodial-character readiness. No specific number is proposed to replace "fifteen."
- Long-term membership structure per the Blueprint is now the Chartered Chapter federation model — not implemented anywhere in code, copy, or operations yet; purely aspirational at this stage.

**Open questions:**
- Was the removal of "maximum fifteen men" from the live site deliberate (aligned with the Blueprint's caution against capacity-as-marketing) or incidental fallout from the June rewrite?
- Should a capacity figure be restated on-site at all, and if so, on what basis (the Blueprint's Layer 4 test hasn't been run against real numbers)?

---

## 4. Website (Structure, Copy, Design System)

**Confirmed:**
- Live at thekungfulegacy.com, Next.js 14 App Router, Tailwind, Framer Motion, hosted on Hostinger via EasyPanel, deploy is manual-trigger after `git push`.
- A typographic system exists in `globals.css`/`tailwind.config.js` (`.label`, `.body`, `.kfl-pullquote`, etc.) — confirmed current as of the April 21 audit.

**Evolved:**
- Page structure has changed at least twice since the April 15 "locked" baseline. Current `page.tsx` renders: Hero → Recognition → TheRoom → Shift → Experience → Integration → Legacy → Voice → Filter → Requirement → Application → FinalClose → Footer (Testimonials imported but not confirmed rendered). This **omits AnchorQuote and DecisiveMoment**, both of which the April 21 audit treated as live sections with outstanding typographic violations.
- Copy voice has moved brotherhood → private-transmission (see Critical Finding above), which the April 21 typographic audit was not aware of — meaning some of that audit's "VIOLATIONS REMAIN" list may reference copy that no longer exists in its documented form and needs re-verification, not just re-fixing.

**Open questions / unresolved from the last audit, still valid regardless of the positioning question:**
- No system class defined for single-word conceptual display items (Structure, Sensitivity, Understanding, etc.) — three options were proposed, none chosen.
- No system class defined for lineage names in `Legacy.tsx`.
- AnchorQuote's typography (font-light 300, below system minimum) was flagged — moot if the component is genuinely no longer rendered, but the file and its violation still exist and should be either fixed or formally retired.
- Footer ghost-text sizing (9px/10px, below the 11px system floor) — undecided: enforce the floor or define a documented exception.

**Contradiction:**
- `KFL-V1-BASELINE.md`'s explicit "DO NOT REVISE WITHOUT DATA TRIGGER" policy vs. the fact that the site has already been revised substantially (twice) without any of the five listed triggers being documented as having fired.

---

## 5. Applicant Journey

**Confirmed:**
- Flow: application form → n8n webhook → auto-reply to applicant + notification to Rafael → manual review → Accept/Reject production URLs (via `legacywingchunmethod.com`) → Calendly booking on accept.
- Scoring rubric exists (`KFL-APPLICANT-TRACKER.md`): 1–5 quality score, Fit Classification (Clear/Unclear/Poor), Price-Qualified (Yes/Unclear/No), Brotherhood-Concept-Understood (Yes/Partial/No).
- Full email system confirmed operational in every document that discusses it, through the most recent memory.

**Evolved:**
- The tracker's "Understands brotherhood concept" field is now vocabulary-stale — the live application no longer asks about "brotherhood," it asks about instructor development and private apprenticeship. The rubric's third scoring dimension needs to be re-worded to match current form language before it's usable on a real applicant.

**Open questions:**
- The tracker template (`KFL-APPLICANT-TRACKER.md`) is entirely unfilled — all 20 applicant slots are blank templates, no real data recorded. Either no applicants have been tracked yet, or tracking happened elsewhere (Notion CRM was proposed but, per every document, never built). This means **there is currently no real applicant-quality data anywhere in the repository** — any future acquisition-strategy work has zero empirical grounding to draw on yet.

---

## 6. Traffic & Marketing

**Confirmed:**
- `KFL-TRAFFIC-STRATEGY-90DAY.md` gives a fully worked channel plan: direct personal outreach (highest priority), existing martial-arts social channels, OPTIMA brand crossover, LinkedIn, podcast appearances, word-of-mouth from early members — each with specific cadence, weekly time budget (~3 hrs/week), and explicit exclusions (no paid ads, no TikTok, no directories, no cold email, no fitness-influencer crossovers, no discount platforms).
- Success criteria for the 90-day window are quantified: 30–50 applications, 3.5+ average quality score, 8–15 interviews, 3–6 accepted.

**Open questions:**
- No document records whether this 90-day plan was ever executed, and if so, what actually happened — no post-mortem, no filled applicant tracker, no channel-performance notes exist anywhere in the repo.
- The plan is written entirely in brotherhood vocabulary ("brotherhood angle," "iron sharpens iron," OPTIMA alignment framed around "brotherhood-based" practice). If the June repositioning to private-transmission language is intentional and durable, this entire content-angle strategy needs re-voicing before it's usable again — not just the website.

**No contradictions found** — this document simply predates the June/July positioning shifts and hasn't been revisited since.

---

## 7. Revenue Model (Beyond Pricing Mechanics)

**Confirmed:**
- Historical target, per `PROJECT_NOTES.md`: replace $24.50/hr × 40hr/week job income by closing ~10 men at $1,000–$1,500/mo.
- Institutional Blueprint (Part IX) reframes the objective entirely: not "close 10 men," but long-term financial independence across multiple complementary income sources (private apprenticeship, books, the Invisible Curriculum/Student Manual, online courses, instructor development, annual gatherings, Chartered Chapter contributions), evaluated by freedom-per-hour-invested rather than revenue-per-month.

**Evolved:**
- The "$24.50/hr replacement" framing and the "10 men at $1,000–1,500/mo" target are both specific to the April brotherhood-offer model and have not been restated or explicitly carried forward or retired in the Blueprint. The Blueprint supersedes the *logic* (freedom over scale) but never explicitly says whether the old dollar target still applies as a floor, is now irrelevant, or needs replacing with a new number.

**Open questions:**
- What is the actual current income target, in dollars, that "long-term financial independence" cashes out to? The Blueprint deliberately avoided naming one (correctly, per its own freedom-over-growth logic) — but at some point a number will be needed to know whether any given initiative is working.
- Of the seven income sources named in Blueprint Part IX, only private apprenticeship currently exists in any operational form. The other six are entirely unbuilt.

---

## Summary Table — What's Actually Settled vs. Not

| Area | Confirmed & current | Needs reconciliation before new work |
|---|---|---|
| Lineage / credential | Ip Man→Moy Yat→Moy Don→Rafael; Jui Pai | — |
| Positioning voice | Live site = private-transmission (June), not brotherhood (April) | Whether/how to layer institutional register on top |
| Price | No price on-site (deliberate) | Whether $1,000/mo, a range, or nothing is the current real number; hong bao/Bai Si status |
| Capacity | — | Whether "fifteen" or any number is still the stated cap |
| Site structure | 12 sections per current `page.tsx` | AnchorQuote/DecisiveMoment fate; V1-BASELINE lock is stale and unenforced |
| Design system | Typographic classes defined | 5 open pattern decisions from April 21 audit, some possibly moot |
| Applicant data | Rubric defined | Zero real applicants tracked; no empirical basis yet |
| Traffic plan | Fully specified 90-day plan | Unknown if executed; written in now-superseded brotherhood vocabulary |
| Revenue target | Freedom-per-hour philosophy (Blueprint) | No current dollar target stated anywhere |

**Bottom line for what comes next:** the architectural thinking is genuinely extensive and should not be redone. What's missing is not strategy — it's **reconciliation**: the April docs need to be either updated or marked superseded, the live site's actual current copy needs to be the baseline for any Revenue or Acquisition Architecture (not the April briefs), and a small number of concrete open questions above (current price, current capacity, whether hong bao/Bai Si survives, whether the 90-day traffic plan ran) need direct answers from Rafael before external research would add anything that isn't already better answered by asking him directly.
