# Kung Fu Legacy — Version 1 Launch Baseline
**Locked:** April 15, 2026  
**Status:** APPROVED. DO NOT REVISE WITHOUT DATA TRIGGER.  
**Live URL:** https://thekungfulegacy.com  
**Repo:** Racy79/kung-fu-legacy (branch: master)

---

## Revision Policy

This website is locked at Version 1. No copy changes, structural redesigns, section removals, CTA modifications, or strategic pivots are to be made without a data trigger from real-world evidence.

### Approved Triggers for Future Revision

1. **Applicant quality mismatch** — Applications are consistently coming from men who do not meet the profile (not ready, wrong life stage, wrong motivation)
2. **Repeated interview objections or misunderstandings** — Rafael is repeatedly clarifying the same thing on calls that the site should have resolved
3. **Traffic/conversion data reveals friction** — Analytics show a specific drop-off point, high bounce from a specific section, or the form is starting but not completing
4. **Technical or UX issues** — Broken functionality, slow load, mobile rendering problems, form errors
5. **Offer or business model materially changes** — Price, format, location, capacity, or structure of the offer changes

### What Does NOT Qualify as a Trigger

- Personal preference or boredom with the copy
- Desire to add more content or sections
- Copywriting trends or competitor comparisons
- Feedback from people outside the target profile
- Wanting to "improve" something that is not broken

---

## Locked Architecture

### Section Order
1. Navbar (sticky)
2. Hero
3. Recognition
4. The Room
5. The System
6. Anchor Quote
7. Legacy
8. From the Instructor
9. Testimonials (hidden — activated when real quotes available)
10. Filter (Is / Is Not For You)
11. Training
12. Integration
13. Application Form
14. Final Close
15. Footer

### CTA Structure (locked)
- Navbar: "Request Entry" (persistent, always visible)
- Final Close: "Request Entry" (bottom of page before form)
- Form submit: "Request Entry"
- Hero CTA: **intentionally removed** — redundant with persistent navbar

### Email System (fully operational)
- Form → /api/apply → n8n webhook
- Applicant receives auto-reply on submission
- Rafael receives full application at rafaelgonzalezrosado@gmail.com
- Accept: https://legacywingchunmethod.com/form/72a28a38-7c9b-4716-a2d4-c8310e025696
- Reject: https://legacywingchunmethod.com/form/a3a55188-400e-4dac-a3b6-a2e1a85340a1

---

## Locked Copy — Full Record

### Navbar
- Logo: KFL seal (scrolls to top)
- CTA: "Request Entry"

### Hero
- Heading: Kung Fu Legacy
- Tagline: You already know what is missing.
- Body: Not structure. Not discipline. You have both. / What you have not found is the men who carry the same weight.

### Recognition
- Heading: You are not here because something is broken.
- Core beat: You have built something real. The absence you feel is not a gap in training — it's the absence of men who can actually challenge you.
- Gold close: "Most men stop looking for it. They settle. You are still looking. That is why you are here."

### The Room
- Heading: You will know the moment you walk in.
- Core beat: Selected men. Earned correction. Standard most rooms never reach.
- Gold close: "That is what has been missing."

### The System
- Heading: This is not a collection of techniques. This is a system.
- Principles: Structure before movement. / Sensitivity before speed. / Control before force.
- Close: You are not learning what to do. You are building understanding.

### Anchor Quote
- "A structure cannot hold what it was not built to carry."

### Legacy
- Heading: Built on direct transmission.
- Lineage: Ip Man → Moy Yat → Thornton Williams (Moy Don) → Rafael Gonzalez (Moy Don Xùn)
- Capacity: "This brotherhood holds a maximum of fifteen men."
- Close: Refined through years of practice. / Tested through real students. / Preserved with intention.

### From the Instructor
1. "I am not building a school. I am building a brotherhood."
2. "What I carry was passed to me through a direct line from Ip Man — through Moy Yat, through my teacher Moy Don. That transmission does not go to everyone. It goes to the men who are ready to receive it and carry it forward."
3. "This system is not philosophy. I have spent three decades in the art and watched how serious training shapes the men who commit to it."
4. "What you enter here is not a program. It is a circle of men — selected, not collected. Men who are building something in their lives, who understand that iron sharpens iron, and who are ready to be held to a standard by the men beside them."
5. "What stands before you is a living lineage — refined through decades, carried by the men beside you."
- Final: "If that is what you are looking for, request entry."

### Filter — Not For You
- You are between stable commitments or looking for something to try.
- You want technique. This is not technique-based instruction.
- You are not ready to be corrected without resistance.
- You want to take from this room more than you give.
- You are not willing to be held to a standard by the men around you.

### Filter — For You
- You have built something real and you are ready to go deeper than you can go alone.
- You are the most capable man in most rooms — and that has started to feel like a ceiling.
- You understand that what you bring matters as much as what you gain.
- You understand that in a serious lineage, rank is earned — not assumed.
- You are ready to enter a lineage — not attend a program.

### Training — Development Grid
Structure / Sensitivity / Precision / Control / Discipline / Timing

### Training — What You Train
- Siu Lim Tao: The first form. Structure, root, and the economy of motion.
- Chum Kiu: Bridging and footwork. How to enter, turn, and control space.
- Biu Jee: Emergency techniques and extreme-angle striking.
- Chi Sao: Sticky hands. Sensitivity, reflexes, and live application.
- Muk Yan Jong: The wooden dummy. Angles, combinations, and contact conditioning.

### Integration
- Gold line: "What is trained here changes how you move, respond, and carry structure under pressure."
- Pillars: Structure is built. / Sensitivity is developed. / Discipline is lived. Not performed.

### Application Form
- Label: Previous Martial Background
- Dropdown: None / Some Formal Training / Extensive Training / High-Level Experience
- Question: "Why do you want to enter this brotherhood?"
- Goals grid: Structure / Sensitivity / Precision / Discipline / Brotherhood / Mastery
- Submit: "Request Entry"

### Final Close
- "Some men are not looking for more information."
- "They are looking for the men they were meant to stand with."
- CTA: "Request Entry"

---

## Design Rationale — Key Decisions

### No Hero CTA
The sticky navbar "Request Entry" is permanently visible from the first scroll. A Hero CTA created two competing CTAs in the same viewport. Removed to preserve restraint and premium positioning. The right man doesn't need a button in the first 5 seconds.

### No Price on the Page
The offer is framed as a serious ongoing financial commitment — no number given. Rationale: the wrong man screens himself out on commitment before price. Price is a detail for the right conversation. Premature pricing attracts the wrong questions.

### Application Before Offer Details
The form asks for contribution, commitment, and character before it explains what the man gets. This is intentional. The site is not selling a service — it is selecting a man.

### Filter Section (Is / Is Not)
Dual-column disqualifier. Exists to do two things: (1) pre-qualify the right men by mirroring their self-concept back to them, (2) actively push away men who will waste Rafael's time in interviews. Wrong men should leave before reaching the form.

### Testimonials Hidden
Real testimonials require real quotes. Placeholder or fabricated social proof would undermine the credibility of the entire site. Activated only when genuine member language is available.

### Images — Studio Shots Only
No facility/room photos. The garage is not the offer. The art, the lineage, and the brotherhood are the offer. All images: dark background, technical poses, presence. No sunglasses. No smiling.

### Capacity Cap ("maximum of fifteen men")
Stated explicitly. Creates real scarcity without manufacturing false urgency. It is true — and it frames the brotherhood as exclusive by design, not by marketing.

### Voice Section as Character Filter
The instructor section is not a bio. It does not list credentials or accomplishments. It states what Rafael is building and why. Men who are not drawn to that framing self-select out. Men who are drawn to it are exactly who the site is for.

---

## Image Map (locked)

| Section | File | Description |
|---|---|---|
| Hero (background) | hero.jpg | Rafael, arms crossed, dark background |
| Voice (portrait) | hero.jpg | Same photo, circular crop |
| The Room | 40258FD4.jpeg | Technical Wing Chun hand position |
| Legacy | group-photo.jpg | Four men in black, dark background |
| Training (Experience) | IMG_3853.png | Rafael on wooden dummy |
| Integration | 50A5A5C3.png | Rafael, bong sao posture, dramatic lighting |

---

## What Is Not Yet Built (pending data/resources)

| Item | Trigger to Build |
|---|---|
| Stripe payment link wired to site | When first applicant is accepted and payment flow is needed |
| Testimonials activated | When real member quotes are collected |
| Notion CRM | When application volume justifies tracking pipeline |
| GA4 + Meta Pixel | When paid traffic or serious organic strategy begins |
| n8n domain migration | Operational — do when convenient |
| New training photos | After garage repaint (espresso walls) |

---

## Commit Reference

Last commit before V1 lock: `93dd740`  
Message: Refinements: dropdown options, Voice line 5, replace Presence with Timing in training grid

---

*This document is the authoritative baseline for Version 1 of the Kung Fu Legacy website.*  
*Do not revise this site without a documented trigger from the approved list above.*
