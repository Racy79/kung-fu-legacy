# Kung Fu Legacy

This repository is two things at once: the codebase for thekungfulegacy.com, and the institutional memory of Kung Fu Legacy — Rafael Gonzalez's private Wing Chun apprenticeship practice and the body of work built around it. This document is the front door. It orients; it doesn't govern. For governance, strategy, and educational philosophy, go to `00_FOUNDATION/`.

## What Kung Fu Legacy is

A private Wing Chun apprenticeship within the Moy Yat lineage (Ip Man → Moy Yat → Thornton Williams (Moy Don) → Rafael Gonzalez (Moy Don Xùn), who holds Jui Pai). Understood, as of July 2026, not primarily as a business but as an institution: a body that exists to receive, preserve, and faithfully transmit that tradition — with the business existing to sustain that work, not the reverse. See `00_FOUNDATION/KFL-INSTITUTIONAL-BLUEPRINT.md` for the full reasoning.

## Where to start

1. **New to this project?** Read `00_FOUNDATION/KFL-INSTITUTIONAL-BLUEPRINT.md` first. It is the strategic map of everything else here.
2. **Working on the website?** The Next.js app is at the repo root (`app/`). `KFL-CURRENT-STATE-ASSESSMENT.md` documents what's actually live in the code today, as distinct from what older strategy briefs describe — read it before trusting any pre-July positioning document.
3. **Working on curriculum, teaching philosophy, or succession?** Go to `00_FOUNDATION/INVISIBLE_CURRICULUM/` — currently a scaffold, not yet drafted, and the single highest-leverage document missing from the institution.
4. **Working on governance, membership, or conduct?** Go to `00_FOUNDATION/CONSTITUTION/` — the text exists outside this repo and still needs to be committed here; the directory is scaffolded and waiting.
5. **Working on commercial strategy (pricing, offer, acquisition)?** Read in this order: `KFL-CURRENT-STATE-ASSESSMENT.md` → `KFL-HORMOZI-SYNTHESIS.md` → `KFL-OFFER-ARCHITECTURE.md`. Revenue Architecture (pricing and acquisition mechanics) is the next document in this chain and hasn't been written yet — it derives from Offer Architecture, not the reverse.

## The three foundational documents

Everything else in this repository — website copy, onboarding materials, content strategy, operational procedure — derives from three documents and should not contradict them:

| Document | Governs | Status |
|---|---|---|
| **The Constitution** | Governance: stewardship, membership, conduct, continuity, succession philosophy | Written outside this repo; text not yet committed here — see `00_FOUNDATION/CONSTITUTION/` |
| **The Institutional Blueprint** | Strategy: the five layers, the Chapter Model, IP architecture, brand, business, succession | **Frozen at Version 1.0** — `00_FOUNDATION/KFL-INSTITUTIONAL-BLUEPRINT.md` |
| **The Invisible Curriculum** | Educational philosophy: why the system is sequenced as it is, what each stage actually trains | Not yet drafted — see `00_FOUNDATION/INVISIBLE_CURRICULUM/` |

These three are deliberately parallel, not hierarchical — the Constitution does not govern curriculum decisions, and the Invisible Curriculum does not govern membership decisions. See the Blueprint's Part III ("Intellectual Property Architecture: Two Hierarchies, Not One") for why.

## Frozen vs. working documents

- **Frozen** means: complete, versioned, and not edited in place. A change is a new version (1.1, 2.0, etc.) with its own entry in that document's Version History, following the amendment policy stated at the top of the document itself. Currently frozen: the Institutional Blueprint (v1.0).
- **Working documents** are everything else — active drafts, assessments, briefs, audits. They can be edited freely and don't require version numbers. Currently working: `KFL-CURRENT-STATE-ASSESSMENT.md`, `KFL-HORMOZI-SYNTHESIS.md` (permanent reference, extended over time rather than replaced), `KFL-OFFER-ARCHITECTURE.md`, `KFL-REVENUE-ARCHITECTURE.md`, `KFL-CLIENT-ACQUISITION-ARCHITECTURE.md`, `KFL-ASSUMPTION-REGISTER.md` (permanent, maintained continuously — every execution-phase document adds rows to it), the various `KFL-*-BRIEF.md`/`KFL-*-AUDIT.md` files (several of which are stale relative to the live site — see the Current State Assessment), and anything under active drafting inside `00_FOUNDATION/CONSTITUTION/` or `00_FOUNDATION/INVISIBLE_CURRICULUM/` until each reaches its own first frozen version.
- **Execution Mode (Phase II):** as of July 2026 the project has moved from architecture to building commercial and operational systems. Before any new execution-phase document, review the Institutional Blueprint, Hormozi Synthesis, and Offer Architecture — if a contradiction with prior decisions turns up, it gets logged in `KFL-ASSUMPTION-REGISTER.md`, not silently overwritten. Reading order for commercial work: Current State Assessment → Hormozi Synthesis → Offer Architecture → Revenue Architecture → (next) Client Acquisition Architecture.
- Once the Constitution and Invisible Curriculum each reach a complete first draft, they should be frozen the same way the Blueprint was: versioned, dated, with an amendment policy stated at the top and a Version History section at the bottom.

## Repository structure

```
kung-fu-legacy/
├── README.md                          ← this file
├── KFL-CURRENT-STATE-ASSESSMENT.md    ← working: what's actually decided vs. stale/open, as of July 2026
├── KFL-*-BRIEF.md / KFL-*-AUDIT.md    ← working: historical strategy/design documents, several superseded — see Current State Assessment
├── PROJECT_NOTES.md                   ← working: technical/operational reference (hosting, deploy, env vars)
├── 00_FOUNDATION/
│   ├── KFL-INSTITUTIONAL-BLUEPRINT.md ← FROZEN v1.0 — strategy
│   ├── CONSTITUTION/                  ← document project (manuscript/, pdf-exports/, version-history/, assets/, references/)
│   └── INVISIBLE_CURRICULUM/          ← document project (same structure)
└── app/                               ← the Next.js site (thekungfulegacy.com)
```

Documents that grow beyond a single file — currently the Constitution and the Invisible Curriculum — get their own directory under `00_FOUNDATION/` with a consistent internal shape: `manuscript/` (the primary text), `pdf-exports/` (formatted output), `version-history/` (prior versions plus change log), `assets/` (supporting visual material), `references/` (source material). This is meant to scale as each document project grows — a single Markdown file works today, but a Constitution with ceremonial PDF exports and an Invisible Curriculum with technical diagrams eventually won't fit in one file.

## Versioning philosophy

Foundational documents are not living drafts once frozen. The value of freezing is that everyone downstream — a future Head Instructor, a future collaborator, Rafael himself in five years — can rely on Version 1.0 meaning the same thing indefinitely. Disagreement with a frozen document is resolved by proposing a new version with a stated rationale, not by quietly editing the old one. Working documents (assessments, briefs, audits) don't need this discipline — they're expected to go stale and get superseded, which is exactly what happened to several of the April 2026 site briefs (see the Current State Assessment for specifics).
