# Kung Fu Legacy — Client Acquisition Architecture
**Status:** Working document, Execution Mode (Phase II). Second commercial-architecture deliverable.
**Pre-flight review completed:** Institutional Blueprint (Strategic Filter, Chapter Model, succession pipeline), Hormozi Synthesis (especially #13's rejection of volume-funnel Attraction Offers, #7's Honest Scarcity), Offer Architecture (differentiation argument, uncertainty-reduction findings), Revenue Architecture (pricing hypothesis, capacity formula), `KFL-TRAFFIC-STRATEGY-90DAY.md` (existing channel plan, still valid). No new contradictions found — C1 (Constitution not yet migrated) remains open but doesn't block this document.

---

## The Governing Objective: Validated Learning, Not Growth

Per Rafael's explicit reframe: this is not a growth document and not a hold-steady document. There's a third option, and it's the correct one for this phase — **the objective is gathering enough high-quality evidence to validate or falsify the assumptions Revenue Architecture and Offer Architecture were forced to make without real data**, not filling capacity and not deliberately restricting it either.

This changes what "success" means for everything below. A stage in this journey doing its job is not measured by conversion rate alone — it's measured by whether it produces a clear answer to one of the five open questions this phase exists to resolve:

1. **The Offer** — does the category-of-one differentiation argument (Offer Architecture Part I) actually land with real prospects, or does it need revision?
2. **Website messaging** — does reduced uncertainty (the five questions from Offer Architecture Part III) actually change applicant behavior, once it's live?
3. **The interview process** — does it reliably distinguish Clear Fit from Poor Fit, or does the existing rubric (`KFL-APPLICANT-TRACKER.md`) need revision?
4. **Pricing assumptions** — does the $1,500–$2,500/mo hypothesis (Revenue Architecture Part II, explicitly a hypothesis, not a recommendation) survive contact with real prospects, or does it need to move?
5. **Applicant psychology** — who actually applies, why, and does that match the target-buyer profile documented in `KFL-PROFESSIONAL-BRIEF.md`, or has that profile gone stale?

**The Learning Target.** Enough qualified applicants to see real patterns, not a growth quota. `KFL-APPLICANT-TRACKER.md` already assumes pattern review every 5 applicants and a fuller review at 20 — that existing cadence is the right size for this phase and doesn't need to be reinvented. **Recommendation: treat the first 15–20 qualified applications (not 15–20 acceptances) as the validated-learning cohort.** That's enough to run the tracker's own pattern log twice and see whether the five questions above are converging on answers, without requiring capacity math that doesn't exist yet (Revenue Architecture Part IV) or a growth commitment nobody has made.

**What this explicitly is not:** a directive to maximize applications. Quality of signal matters more than volume — five sharp, on-profile applications that clearly confirm or break a hypothesis are worth more here than fifty generic ones. This is consistent with Hormozi Synthesis #2 (starving crowd over broad reach) and #13 (rejecting volume-acquisition mechanics) — nothing about designing for learning changes the channel judgment already made in the Traffic Strategy document.

---

## The Journey, Stage by Stage

Each stage states: what happens, what hypothesis it's actually testing, what gets captured, and what "working" looks like.

### 1. Discovery
**What happens:** A prospect first encounters KFL — referral, direct outreach, or evidence-archive content (per the existing Traffic Strategy channel plan; unchanged here).
**What's being tested:** Whether the current channel mix (referral-first, no paid acquisition, no volume tactics) actually reaches the target-buyer profile, or whether that profile itself needs updating.
**Capture:** Source of each applicant, where known (already a field in `KFL-APPLICANT-TRACKER.md`, currently unused — see Data Capture below).
**Working looks like:** A visible pattern in *how* the first 15–20 qualified applicants actually heard about KFL, confirming or correcting the channel priority order in the Traffic Strategy doc.

### 2. Interest
**What happens:** The prospect engages further — reads the site, follows content, has an informal conversation.
**What's being tested:** Whether the differentiation argument (Offer Architecture Part I — lineage + individualized correction + cross-domain authority, no single alternative combines all three) is the thing that actually converts curiosity into serious interest, or whether something else is doing the work.
**Capture:** Not formally tracked today — this is a gap. At minimum, the interview stage (below) should ask what specifically moved someone from aware to interested.
**Working looks like:** A repeatable answer across multiple applicants to "what made you take this seriously," that either confirms or contradicts the stated differentiation argument.

### 3. Trust
**What happens:** The prospect resolves enough doubt to consider applying — this is where the uncertainty-reduction findings (Offer Architecture Part III) do their work, once the site is re-voiced to actually answer them.
**What's being tested:** Whether answering the five uncertainty questions (especially "what happens after I apply" and a general Plum Blossom description) measurably reduces hesitation, compared to the current site which answers none of them before the point of application.
**Capture:** Whether applicants raise fewer or different objections during interviews once the re-voiced copy is live, compared to the historical pattern (though there's no historical pattern to compare against yet — see Data Capture below, this is itself a gap to close).
**Working looks like:** Fewer interview conversations spent clarifying things the site should have already answered (this is literally the trigger condition #2 already defined in `KFL-V1-BASELINE.md`'s revision policy — "Rafael is repeatedly clarifying the same thing on calls that the site should have resolved" — this document doesn't invent a new signal, it operationalizes one that was already specified).

### 4. Application
**What happens:** Formal application submitted, per the existing flow (`KFL-V1-BASELINE.md`, `PROJECT_NOTES.md` — n8n webhook, auto-reply, notification to Rafael). Unchanged mechanically.
**What's being tested:** Whether the application's current questions (last updated in the brotherhood-era copy, per Current State Assessment) still surface the right signals, or need re-wording to match the private-transmission/institutional voice now in use.
**Capture:** Every field in `KFL-APPLICANT-TRACKER.md`'s existing rubric (Quality Score, Fit Classification, Price-Qualified, "Understands the concept" — this last field needs re-wording, see below).
**Working looks like:** The scoring rubric's fields actually predicting the interview outcome — this is directly checkable once 15–20 real entries exist, which they currently don't (Assumption Register A5).

### 5. Interview
**What happens:** Direct call with Rafael, per the existing operational flow.
**What's being tested:** Whether the interview reliably distinguishes Clear Fit from Poor Fit — i.e., whether the application-stage score correlates with Rafael's actual in-conversation read, or whether the application is missing signals only the interview catches (or vice versa).
**Capture:** Interview notes field already exists in the tracker; needs to actually get filled in going forward, and should explicitly note whether the interview changed the fit assessment from what the application alone suggested.
**Working looks like:** After 15–20 interviews, a clear read on whether the application stage is pulling its weight or whether it's just a formality before the interview does all the real evaluation.

### 6. Acceptance
**What happens:** Accept/reject decision, communicated per the existing operational flow (production URLs, Calendly booking on accept).
**What's being tested:** The pricing hypothesis (Revenue Architecture Part II) — does an accepted, on-profile applicant treat $1,500–$2,500/mo as appropriate "sting," or does real reaction at the moment of commitment argue for a different number?
**Capture:** Explicit note of price reaction at acceptance — hesitation, immediate agreement, negotiation attempt (which per Hormozi Synthesis #15 should never be met with an ad hoc discount, but is itself a data point).
**Working looks like:** A real, if small, sample of price reactions from genuinely qualified people — the only evidence that can actually move the pricing hypothesis from "assumed" to "tested" in the Assumption Register.

### 7. Onboarding
**What happens:** The admission package (Blueprint Part VII — Constitution first, then Covenant, then practical forms) plus first sessions designed around the "fast win" principle (Hormozi Synthesis #6).
**What's being tested:** Whether the onboarding sequence actually produces a felt early win within the first several sessions, per Offer Architecture Part II's flagged Time Delay gap — this is currently undesigned (no document describes what the first weeks look like) and this stage cannot be fully validated until that content exists.
**Capture:** Whatever informal read Rafael has of a new student's engagement/momentum in the first month.
**Note:** This stage depends on work this document cannot complete — the "first year" content gap flagged in Offer Architecture Part III (Q2) is a prerequisite for onboarding to be more than logistics. Recommend this becomes the next content deliverable after this document, ahead of the Welcome Packet (which needs the Constitution migrated first anyway, per C1).

### 8. Retention
**What happens:** Ongoing private instruction, per the existing model.
**What's being tested:** Whether the students who stay match the "custodial character" indicators the Blueprint's succession model describes (Part VIII), or whether retention correlates with something else entirely.
**Capture:** Not formally tracked anywhere today — a real gap. At minimum, any voluntary departure should be understood, not just recorded as churn.
**Working looks like:** Enough retained students over time to start distinguishing real signal from small-sample noise — this stage's validation horizon is longer than the others and won't resolve within the first 15–20 applicant cohort.

### 9. Special Student
**What happens:** Formal standing within the Special Student Association (Blueprint Part II) — governed by the Constitution once it's migrated (C1), not invented here.
**What's being tested:** Nothing new at this phase — this stage is governance, not acquisition, and this document doesn't extend into it.

### 10. Instructor
**What happens:** Per the Blueprint's succession pipeline (Part VIII) — milestone-based, not time-based, multiple candidates at each stage.
**What's being tested:** Whether the Invisible Curriculum and Instructor Manual (once written) actually let a second person teach with materially the same judgment Rafael would apply — the founder-dependency test the Blueprint itself defines. Out of scope for this document; flagged here only because it's the natural endpoint of the journey the roadmap specified.

### 11. Chartered Chapter
**What happens:** Per Blueprint Part II — a five-to-ten-year horizon item, requires a Head Instructor to already exist. Out of scope for this document entirely; included only to close the loop on the journey as specified.

---

## Data Capture — What Needs to Change in the Existing Tracker

`KFL-APPLICANT-TRACKER.md` is structurally sound but has two problems this document surfaces:

1. **It's entirely unfilled** (Assumption Register A5) — this document's validated-learning objective is meaningless without it actually being used going forward.
2. **The "Understands brotherhood concept" field is vocabulary-stale**, per the Current State Assessment's finding that the live site no longer uses brotherhood language. It should be reworded to match current copy (e.g., "Understands private-transmission/apprenticeship concept") before the next real applicant is logged, or the field will silently misclassify people who understand the actual current offer correctly but never heard the word "brotherhood."

This document does not redesign the CRM/tracker system itself — that's the separate `KFL-CRM-ARCHITECTURE.md` deliverable later in your checklist. This section only flags what must be fixed in the existing tracker before the validated-learning cohort starts, since using a stale field would corrupt the very evidence this phase exists to gather.

---

## What Graduates This Phase to Scaling

Per the Strategic Filter (Blueprint Part I) and the Freedom Test specifically: this phase ends and a scaling phase can reasonably begin only when growth would increase freedom while preserving quality — not on a calendar date and not automatically at 15–20 applicants. Concretely, graduation requires:
- The pricing hypothesis has real evidence behind it (from Acceptance-stage reactions), not just Hormozi's general principle.
- The interview process has demonstrated it reliably separates fit from non-fit.
- The capacity formula (Revenue Architecture Part IV) has real inputs from Rafael, not placeholders.
- The Invisible Curriculum exists, at least enough to answer Offer Architecture's "first year" gap.

Until all four are true, any acquisition activity should stay sized to the learning objective, not a growth objective — this is the same discipline Honest Scarcity (Hormozi Synthesis #7) already argues for: don't state or imply more capacity or more urgency than what's actually true right now.

---

## What This Document Does Not Decide

- Channel tactics — unchanged from `KFL-TRAFFIC-STRATEGY-90DAY.md`.
- The CRM/tracker tool itself — deferred to `KFL-CRM-ARCHITECTURE.md`.
- Final pricing — stays a hypothesis until Acceptance-stage evidence exists.
- Onboarding content (the "first year" journey) — flagged as the next needed deliverable, not written here.

---

## Assumption Register Additions

| # | Assumption | Status | What would validate it |
|---|---|---|---|
| A12 | 15–20 qualified applications is the right size for a validated-learning cohort, rather than a smaller or larger number | Assumed | Whether real patterns actually emerge by that count, or whether more/fewer are needed |
| A13 | The "Understands brotherhood concept" tracker field, if used unchanged, would misclassify applicants who understand the current private-transmission offer but were never exposed to brotherhood language | Assumed | Direct comparison once the field is reworded and reused |
| A14 | Trust-stage reduction in interview clarification time is measurable even without a pre-re-voice baseline to compare against | Assumed (weak — no real baseline exists) | Track it anyway starting now, treat current state as the de facto baseline |
