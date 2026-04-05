# Kung Fu Legacy — Project Notes

## Live Site
https://thekungfulegacy.com
https://www.thekungfulegacy.com

## Hosting
- Provider: Hostinger VPS
- Panel: EasyPanel (v2.28.0)
- Server IP: 187.124.243.192
- EasyPanel service: kung-fu-legacy / kungfulegacy
- Port: 80 (internal), 3000 (Next.js)

## Domain
- Registrar: Namecheap
- Domain: thekungfulegacy.com
- DNS: A record @ and www → 187.124.243.192

## GitHub
- Repo: https://github.com/Racy79/kung-fu-legacy
- Branch: master
- Deploy: push to master → go to EasyPanel → hit Deploy

## Two Separate Systems — Do Not Confuse
| What | URL | Purpose |
|---|---|---|
| **The Website** | https://thekungfulegacy.com | What applicants see |
| **The Automation Backend (n8n)** | https://legacywingchunmethod.com | Email flows, webhooks, automation — TEMPORARY |

## Future Migration — n8n Domain (DO THIS)
Current n8n URL (legacywingchunmethod.com) references Wing Chun specifically.
Rafael plans to expand to Tai Chi and other arts — needs inclusive branding.
**Target URL:** `n8n.thekungfulegacy.com`

Steps when ready:
1. Namecheap → add A record: `n8n` → `187.124.243.192`
2. EasyPanel → n8n service → add domain `n8n.thekungfulegacy.com`
3. Update env var in EasyPanel for kung-fu-legacy service: `WEBHOOK_URL` → new URL
4. Update webhook URL in n8n workflow itself
5. Test form submission end to end
6. Decommission legacywingchunmethod.com when confirmed working

## Form / Applications
- Submissions go to: rafaelgonzalezrosado@gmail.com
- Via: n8n workflow "Kung Fu Legacy — Application Form"
- n8n login: https://legacywingchunmethod.com
- Production webhook URL: https://legacywingchunmethod.com/webhook/kung-fu-legacy-apply
- EasyPanel env var: WEBHOOK_URL (set in Environment tab as .env file)
- SMTP credential: rafaelgonzalezrosado@gmail.com via Gmail App Password

## Environment Variables (EasyPanel → Environment tab)
WEBHOOK_URL=https://hook.us2.make.com/24itgbw91m3cdyq8j64gwi5mgz6hru16
NEXT_PUBLIC_GA_ID= (add when ready)
NEXT_PUBLIC_META_PIXEL_ID= (add when ready)

## Page Structure (in order)
1. Hero — full screen photo, tagline, CTA button
2. Recognition — "You have trained. But something has always been missing."
3. Shift — The System (Structure, Sensitivity, Control)
4. AnchorQuote — "A structure cannot hold what it was not built to carry."
5. Legacy — lineage chain: Ip Man → Moy Yat → Thornton Williams → Rafael Gonzalez
6. Voice — instructor speaks directly (Rafael's personal section)
7. Filter — This is not for you if / This is for you if
8. Experience — Training here is different
9. Integration — This goes beyond fighting
10. Application — form (name, phone, email, experience, goals, commitment questions)
11. FinalClose — final CTA

## Pending
- Hero image: can be replaced with a higher quality photo anytime
  (drop new file at public/images/hero.jpg, commit, push, deploy)
- Training photos: 3 placeholder boxes in Legacy, Experience, Integration
  (replace placeholder divs per instructions in DEPLOY.md)
- Analytics: GA4 and Meta Pixel IDs not yet configured
- Make.com scenario must stay ACTIVE or form submissions won't send

## Training Space — Paint Plan (do when ready)
Garage walls need to match the brand before final photos are taken for the website.

| Wall | Color | Hex |
|---|---|---|
| Altar wall (lineage portraits) | Full espresso | #2B1F1A |
| Training wall (opposite) | Full espresso | #2B1F1A |
| Side walls (left + right) | Dark walnut — one shade lighter | #3D2B22 |
| Ceiling | Bone / off-white | #E8E3D9 |

- Finish: matte or eggshell (absorbs light, photographs better)
- Take both hex codes to paint store — ask for Benjamin Moore or Sherwin-Williams match
- After painting: retake all garage photos before shooting final website images
- The yellow walls currently create visual dissonance against the brand — this fixes it

## How to deploy a change
1. Claude makes code changes locally
2. git push (automatic)
3. Go to EasyPanel → kungfulegacy service → click Deploy
4. Wait ~30 seconds → refresh site

---

## Instruction — Role Behavior
When working on any aspect of this project or business, pull the behavior, mindset, and decision-making patterns of whichever professionals are relevant to the task at hand and act accordingly — without being asked. The roles are not a checklist. They are lenses. Apply the ones that matter for the moment.

This includes the two business models and their associated teams:

**Model 1 — Persona-based (Kung Fu Legacy):** Content Strategist, Video Editor, Copywriter, Paid Ads Specialist, Funnel Builder, High-Ticket Closer
**Model 2 — Product-based (future AI platform):** Product Developer, UX Designer, Copywriter, SEO Specialist, Paid Ads Specialist, Customer Success

Sequence: close Kung Fu Legacy to 10 men at $1,500/month first → then build the passive income product.

---

## Active Roles — Think Like All of These at All Times
When working on this project, every decision must be evaluated through all of these lenses simultaneously:

- Conversion Copywriter
- Brand Designer
- Behavioral Psychologist
- UX / Motion Designer
- Frontend Engineer
- Backend Engineer
- Full-Stack Engineer
- High-Ticket Sales Closer
- Offer Strategist
- Funnel Strategist
- Lead Generation Strategist
- Paid Ads Specialist
- Organic Content Strategist
- Social Media Manager
- Video Editor / Content Producer
- SEO Specialist
- Email Marketing Specialist
- CRM Architect
- Automation Engineer (n8n / AI Systems)
- Chatbot Designer
- Copy Chief (Messaging Consistency)
- Story Strategist
- Community Manager
- Reputation Manager
- Customer Success Manager
- Onboarding Specialist
- Retention Strategist
- Analytics / Data Analyst
- Conversion Rate Optimizer (CRO)
- Performance Marketer
- DevOps / Deployment Architect
- Performance Optimizer
- Security Engineer
- QA / Tester
- Product Manager
- Project Manager
- Creative Director
- Real User (Target Audience Simulation)

---

## Business Strategy Notes
*(Updated as we build — this is the living brain of the project)*

### Brand Separation (IMPORTANT)
Rafael has 3 distinct brands. Do NOT mix audiences or strategy:

| Brand | Audience | Price Point | Status |
|---|---|---|---|
| I Am Wing Chun (YouTube) | General martial arts consumers | Low ticket | Existing — do not redirect here |
| Kung Fu House | Basic/casual clients | Low ticket | Existing — Rafael is moving away from this model |
| **Kung Fu Legacy** (thekungfulegacy.com) | High-ticket selective mentorship | $1,000–$1,500/mo | ← This is the focus |

Rafael is **done with low-ticket**. The mission of this project is to build a system that attracts and converts high-ticket clients exclusively.

### The Ideal Client
NOT a broken man looking to be fixed. NOT a casual martial arts consumer.

**He is:**
- Deep, profound, a serious thinker
- Already capable and smart — seeking elevation, not rescue
- Hungry for real brotherhood and fellowship with men of the same caliber
- Passionate about kung fu, fitness, nutrition, business, entrepreneurship — full development of a man
- Willing to contribute his skills and gifts to the collective good of the group
- The kind of man you would trust with your back

**He is looking for:**
- A brotherhood, not a program
- Men who pull each other up, not drag each other down
- A structured path with depth — like Freemasonry or a guild
- Initiation, progression, belonging, shared mission

**The model is closer to:** Freemasonry / fraternal order / guild — Wing Chun is the central vehicle and discipline structure binding it all together.

**He is NOT:**
- Broken, unstable, or carrying bad energy
- A surprise (unpredictable, volatile, entitled)
- Someone who needs to be rescued or managed
- A consumer looking for martial arts classes

**He is financially successful:**
- Entrepreneur, business owner, or high-earning professional
- 30–50 years old
- Already invests in himself — masterminds, coaches, premium experiences
- $1,000–$1,500/month is not a shock IF the value and exclusivity are clear
- Too cheap would actually repel him — price signals quality
- Can smell inauthenticity and desperation instantly

**His deeper pain:**
- Capable man surrounded by men who don't match his depth — quietly suffocating
- Lonely at the top — employees below, competitors around, no real peers
- Modern male friendship is shallow — sports talk, no real depth
- No rites of passage left — no initiation, no brotherhood, no elder to answer to
- Has achieved things but something is still hollow
- Wants to belong to something that outlasts him

**What he searches for (not Wing Chun):**
- "men's brotherhood community"
- "modern freemasonry alternatives"
- "high performance men's group"
- "men's mastermind entrepreneurs"
- "stoicism discipline martial arts"
- "elite men's community"

**Content he consumes:** Jocko Willink, David Goggins, Ryan Holiday, Marcus Aurelius, Andrew Huberman, entrepreneurship podcasts, fraternal order / warrior tradition content

**Entry point message:** "You have built things. You have done the work. But you are surrounded by men who cannot meet you where you are." — Wing Chun is revealed as the vehicle AFTER he knows this is his place.

**Primary acquisition channel:** Referral from existing members. One referred man > 10,000 YouTube views.
**Secondary channels:** LinkedIn, entrepreneurship/mastermind communities, long-form authority content

**Disqualifier:** Bad energy, resistance to structure, financially unstable, unwilling to contribute to the collective.

### High-Ticket Converting System — What's Needed
The website is the front door. The full system requires:

1. **Traffic** — NOT from existing YouTube/Kung Fu House audience (wrong crowd)
   - Needs its own content presence built around transformation, not technique
   - Target: where does the ideal client already spend his attention?
   - Long-form authority content (podcast, essays, LinkedIn) > martial arts clips

2. **Application → Qualification Flow**
   - Form (built) → automated acknowledgment email (n8n)
   - Rafael reviews and filters
   - Discovery/interview call = the real sales moment

3. **n8n Automation** (partially built)
   - Form → instant notification to Rafael
   - Auto-reply to applicant (sets tone)
   - Follow-up if no response in X days
   - Rejection/acceptance email templates

4. **Booking System** — Calendly or Cal.com for interview call scheduling

5. **Payment** — Stripe for monthly + one-time hong bao offerings

6. **Onboarding Sequence** — what happens after acceptance (welcome, expectations, first session)

7. **Lightweight CRM** — track: applicant → interview → accepted/rejected → active → progression stage
   (Notion database recommended)

### Positioning Principle
The application itself is a filter. The copy must repel the wrong person before they apply.
High-ticket buyers do not respond to volume — they respond to exclusivity and signal.
One referral from a current student > 10,000 YouTube views.

### Authority Structure — Two Pillars
This is what separates Kung Fu Legacy from every other men's group or martial arts school:

**Pillar 1 — The Lineage (Ancient Root)**
Ip Man → Moy Yat → Moy Don (Thornton Williams) → Rafael Gonzalez
- Ip Man is globally known — Bruce Lee's teacher, multiple films, worldwide recognition
- This is a direct, unbroken living transmission — not a credential, not a certification
- Gives the brotherhood weight that cannot be manufactured or imitated
- The "why this matters beyond Rafael"

**Pillar 2 — The Man (Modern Branch)**
Rafael is not a one-dimensional martial arts instructor. Proficient in:
- Wing Chun / Kung Fu
- Fitness and physical conditioning
- Nutrition
- Fighting / combat application
- Business, entrepreneurship, intellectual depth across subjects

He is a complete man who has built himself across every domain and applies the same principles everywhere.

**The combination is rare:** Most brotherhoods have range but no lineage. Most lineage holders are narrow. Rafael has both. The lineage gives it ancient weight. His range makes it relevant to the whole man.

**Core message:**
"You are not joining a gym. You are not hiring a coach. You are entering a transmission carried by men of uncommon depth since Ip Man — and the man bringing it to you has applied it across every dimension of his life."

---

### Stripe Payment Links
| Product | Link |
|---|---|
| **Monthly Membership ($1,000/mo)** | https://buy.stripe.com/9B64gA6FQ8BFfOf2mM57W05 |

Note: Hong bao offerings and Bai Si ceremony are cash in red envelope — NOT digitized. Ceremonial by design.

---

### n8n Decision URLs — BOOKMARK THESE
Use the PRODUCTION URLs — these work anytime without being inside n8n.

| Action | Production URL |
|---|---|
| **Accept applicant** | https://legacywingchunmethod.com/form/72a28a38-7c9b-4716-a2d4-c8310e025696 |
| **Reject applicant** | https://legacywingchunmethod.com/form/a3a55188-400e-4dac-a3b6-a2e1a85340a1 |

Test URLs (only work inside n8n during testing):
- Accept test: https://legacywingchunmethod.com/form-test/72a28a38-7c9b-4716-a2d4-c8310e025696
- Reject test: https://legacywingchunmethod.com/form-test/a3a55188-400e-4dac-a3b6-a2e1a85340a1

How to use: open the production URL → enter applicant name and email → submit → email sends automatically.

### n8n Workflow — Current State (Working)
Flow: **Webhook → Node 2 (Auto-reply to applicant) → Node 3 (Notify Rafael) → Node 4 (Respond to Webhook)**

**Node 2 — Send an Email (auto-reply to applicant):**
- To Email: `{{ $json.body.email }}` — expression mode ON, no `=` prefix (typeVersion 2.1)
- Subject: `Your application has been received.`
- Text: plain auto-reply message — fixed mode

**Node 3 — Send Email (Notify Rafael):**
- To Email: `rafaelgonzalezrosado@gmail.com` — fixed mode
- Subject: `New Brotherhood Application — Kung Fu Legacy`
- Text: `{{ $('Webhook').first().json.body.emailBody }}` — expression mode ON
- Note: shows `=` prefix in Rafael's email — cosmetic only, doesn't affect function

**Calendly booking link:** https://calendly.com/rafaelgonzalezrosado/30min
- Event: Kung Fu Legacy Entry Call
- Available: Tue/Thu 5-7pm CT, Sat 10am-12pm CT

### Still To Build
1. **Acceptance email workflow** — separate n8n workflow Rafael triggers manually (includes Calendly link)
2. **Rejection email workflow** — separate n8n workflow Rafael triggers manually
3. **Stripe** — payment link for monthly + onboarding fee
4. **Notion CRM** — track applicants: applied → interview → accepted/rejected → active → progression stage

### Open Strategic Questions
- [ ] How many existing members, and what kind of men are they? (activating referral engine)
- [ ] Rafael's personal story for this brand — why he built a brotherhood, what he saw missing in men
- [ ] Primary content vehicle: LinkedIn + long-form video (separate from I Am Wing Chun)
- [ ] Does current landing page copy repel low-ticket buyers hard enough?
- [ ] Structured referral process for existing members
