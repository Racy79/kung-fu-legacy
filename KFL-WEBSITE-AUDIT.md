# KUNG FU LEGACY — WEBSITE AUDIT FILE
# For Claude Code / Design Audit Session
# Generated: 2026-04-21
# Site: thekungfulegacy.com
# Stack: Next.js 14 App Router, Tailwind CSS, Framer Motion
# Fonts: Playfair Display (serif) + Inter (sans-serif) via next/font/google

---

## BRAND BRIEF

Kung Fu Legacy is a selective Wing Chun brotherhood in Converse, Texas.
- Instructor: Rafael Gonzalez (Sifu, lineage: Ip Man → Moy Yat → Moy Don → Moy Don Xùn)
- NOT a public school. NOT drop-in. Entry by application and review only.
- Max 15 members. Brotherhood positioning — not fitness, not hobby, not technique collection.
- Target: men who have built something real, are the most capable person in most rooms, and feel the ceiling of that.
- Brand feel: institutional, disciplined, authoritative, lineage-based, selective.

---

## PAGE STRUCTURE (top to bottom)

1. Navbar
2. Hero
3. Recognition
4. TheRoom
5. Shift
6. AnchorQuote
7. Legacy
8. Voice
9. Testimonials (currently HIDDEN — SHOW_TESTIMONIALS = false)
10. Filter
11. Experience
12. Integration
13. Requirement
14. Application (form)
15. DecisiveMoment
16. FinalClose
17. Footer

---

## TYPOGRAPHIC SYSTEM (current state)

### globals.css — System Classes

```css
.label {
  font: Inter 11px/16px weight-500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #C6A962 (gold);
}

.kfl-support {
  font: Inter 13px/20px weight-400;
  color: bone/55;
}

.body {
  font: Inter 16px/24px weight-400;
  color: bone/70;
}

.kfl-h3 {
  font: Inter 22px/30px weight-600;
  color: bone;
}

.heading-lg  (H2) {
  font: Playfair Display 30px/38px weight-400 mobile;
               38px/48px weight-400 md+;
  letter-spacing: -0.01em;
  color: bone;
}

.heading-xl  (H1/Display) {
  font: Playfair Display 48px/56px weight-400 mobile;
               64px/72px weight-400 md+;
               80px/88px weight-400 lg+;
  letter-spacing: -0.02em;
  color: bone;
}

.kfl-pullquote {
  font: Playfair Display italic 22px/32px weight-400 mobile;
                               28px/40px weight-400 md+;
  color: bone/85;
}

.kfl-pullquote--gold    { color: #C6A962 }
.kfl-pullquote--authority {
  font: Playfair Display 26px/36px weight-400 mobile;
                         32px/44px weight-400 md+;
  color: bone;
}

.btn {
  font: Inter 13px/20px weight-600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  border: 1px solid gold;
  color: gold;
  hover: bg-gold text-matte-black;
}

.field {
  font: Inter 16px/24px weight-400;
  border: 1px solid bone/15;
  focus: border-gold/50;
}
```

### tailwind.config.js — Custom Font Size Scale

```js
fontSize: {
  'kfl-meta':    ['11px', { lineHeight: '16px', letterSpacing: '0.04em' }],
  'kfl-support': ['13px', { lineHeight: '20px' }],
  'kfl-body':    ['16px', { lineHeight: '24px' }],
  'kfl-h3':      ['22px', { lineHeight: '30px' }],
  'kfl-h2':      ['30px', { lineHeight: '38px' }],
  'kfl-h2-lg':   ['38px', { lineHeight: '48px' }],
  'kfl-h1':      ['48px', { lineHeight: '56px' }],
  'kfl-h1-lg':   ['64px', { lineHeight: '72px' }],
  'kfl-display': ['80px', { lineHeight: '88px' }],
  'kfl-quote':   ['22px', { lineHeight: '32px' }],
  'kfl-quote-lg':['28px', { lineHeight: '40px' }],
}
```

### Weight Rules
- 400 → body, pullquotes (Playfair at large size carries authority without bold)
- 500 → labels, support text
- 600 → .kfl-h3, .btn
- 700 → H1 display only (used sparingly)

### Colors
```
background:  #0B0B0B  (matte-black)
surface:     #161616
espresso:    #2B1F1A
gold:        #C6A962
bone:        #E8E3D9
```

---

## KNOWN REMAINING VIOLATIONS (not yet fixed — for auditor to address)

These inline type patterns still exist in components and do NOT use the system classes:

### Legacy.tsx
```
Line 48: className="font-serif text-xl text-bone/60 italic mb-20"
  → Should be: className="kfl-pullquote text-bone/60 mb-20"

Line 64 (desktop lineage names): className="font-serif text-lg text-bone"
  → Not in system. Lineage names. Needs system class or kfl-support treatment.

Line 66 (honorifics): className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mt-1"
  → Should be: className="label mt-1"

Line 93 (mobile lineage names): className="font-serif text-lg text-bone"
  → Same as line 64.

Line 94 (mobile honorifics): className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mt-1"
  → Should be: className="label mt-1"
```

### Experience.tsx
```
Line 51 (italic challenge lines): className="font-serif text-xl md:text-2xl text-bone/65 italic"
  → Should be: className="kfl-pullquote text-bone/65"

Line 62 (Progress is earned): className="font-serif text-xl md:text-2xl text-bone mb-16"
  → Should be: className="kfl-pullquote text-bone mb-16" (or kfl-pullquote--authority without italic)

Line 82 (development grid items): className="font-serif text-xl md:text-2xl text-bone"
  → These are single-word display items (Structure, Sensitivity, etc.) — no system class covers this.
  → Needs decision: kfl-h2 level? kfl-pullquote? Define and apply.

Line 92 (callout eyebrow): className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/55 mb-4"
  → Should be: className="label text-bone/55 mb-4" (label is already uppercase gold — override color)

Line 95 (Understanding): className="font-serif text-2xl md:text-3xl text-gold"
  → This is the emotional peak of the section. Needs kfl-pullquote--authority with gold color.
  → Should be: className="kfl-pullquote--authority text-gold"

Line 112 (form names): className="font-serif text-lg text-bone flex-shrink-0 sm:w-44"
  → No system class at this size. Closest is kfl-h3 (22px) but weight-400 preferred here.
  → Should define or use kfl-support at 13px or create a pattern decision.

Line 113 (form descriptions): className="font-sans text-sm text-bone/45 leading-relaxed"
  → Should be: className="kfl-support text-bone/45" (but kfl-support is 13px which is correct)
```

### Integration.tsx
```
Line 41 (italic emphasis): className="font-serif text-xl md:text-2xl text-bone/65 italic mb-20"
  → Should be: className="kfl-pullquote text-bone/65 mb-20"

Line 50 (core attributes — Your structure etc): className="font-serif text-2xl md:text-3xl text-bone"
  → Authority statements. Should be: className="kfl-pullquote--authority"

Line 62 (gold emphasis): className="font-serif text-xl text-gold mb-20"
  → Should be: className="kfl-pullquote kfl-pullquote--gold mb-20"

Line 71 (pillar headlines): className="font-serif text-xl text-bone mb-1"
  → Should be: className="kfl-pullquote text-bone mb-1"

Line 72 (pillar subs): className="font-sans text-sm text-bone/55"
  → Should be: className="kfl-support text-bone/55"
```

### Requirement.tsx
```
Line 49 (italic): className="font-serif text-xl text-bone/60 italic mb-20"
  → Should be: className="kfl-pullquote text-bone/60 mb-20"

Line 59 (requirement labels — Presence, Openness, Contribution):
  className="font-serif text-xl text-bone mb-2"
  → These are H3-level section labels. Should be: className="kfl-h3 font-normal" or kfl-pullquote.
  → Decision needed: do these belong to the H3 track (sans 600) or the serif track (400)?

Line 61 (requirement bodies): className="font-sans text-sm text-bone/55 leading-relaxed"
  → Should be: className="kfl-support text-bone/55"

Line 67 (closing note): className="font-sans text-[10px] tracking-[0.25em] uppercase text-bone/40 mt-14"
  → Should be: className="label text-bone/40 mt-14"
```

### Shift.tsx
```
Line 40 (This is a system): className="font-serif text-2xl md:text-3xl text-gold italic mb-24"
  → Authority statement. Should be: className="kfl-pullquote--authority text-gold mb-24"

Line 51 (principle accents — Structure, Sensitivity, Control):
  className="font-serif text-2xl md:text-3xl text-gold"
  → Single-word display. Same question as Experience.tsx line 82.
  → Decision needed: define a "kfl-display-word" pattern or use kfl-pullquote--authority.

Line 53 (principle rests — before movement etc):
  className="font-sans text-base md:text-lg text-bone/55"
  → Should be: className="body text-bone/55" (remove md:text-lg, body is 16px fixed)

Line 64 (You are building understanding):
  className="font-serif text-xl md:text-2xl text-bone italic"
  → Should be: className="kfl-pullquote text-bone"
```

### DecisiveMoment.tsx
```
Line 27 (first italic): className="font-serif text-xl md:text-2xl text-bone italic mb-8 text-center leading-relaxed"
  → Should be: className="kfl-pullquote text-bone mb-8 text-center"

Line 33 (second italic): className="font-serif text-xl md:text-2xl text-bone italic mb-16 text-center leading-relaxed"
  → Should be: className="kfl-pullquote text-bone mb-16 text-center"

Line 52 (gold italic): className="font-serif text-xl text-gold italic text-center"
  → Should be: className="kfl-pullquote kfl-pullquote--gold text-center"
```

### FinalClose.tsx
```
Line 27: className="font-serif text-xl md:text-2xl text-bone italic mb-6 leading-relaxed"
  → Should be: className="kfl-pullquote text-bone mb-6 text-center"

Line 30: className="font-serif text-xl md:text-2xl text-bone italic mb-20 leading-relaxed"
  → Should be: className="kfl-pullquote text-bone mb-20 text-center"
```

### AnchorQuote.tsx
```
Line 28 (blockquote): className="font-serif text-2xl md:text-4xl lg:text-5xl text-bone font-light leading-snug"
  → This is the site's biggest typographic moment outside the H1.
  → Currently: 24px → 36px → 48px with font-light (300).
  → Problem: font-light (300) on Playfair at these sizes is below the minimum weight rule.
  → The gold italic span inside is correct styling but needs system class treatment.
  → Should use: heading-lg at minimum, or a defined kfl-display class.
  → Proposed: className="heading-lg text-center" at lg, or define kfl-pullquote--display.
```

### Filter.tsx
```
Lines 44 and 59: className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-12"
  → Should be: className="label mb-12"
  → These are section eyebrows — exactly what .label is for.
```

### Navbar.tsx
```
Line 58 (Request Entry button):
  className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/60 px-6 py-2.5 ..."
  → text-[10px] is below the 11px minimum. Should use .btn class or match .label sizing.
  → The .btn class already handles this correctly — use it.
  → Should be: className="btn px-6 py-2.5"
```

### Testimonials.tsx (currently hidden)
```
Line 70 (quote): className="font-serif text-lg md:text-xl text-bone/80 italic leading-relaxed mb-8"
  → When enabled, should be: className="kfl-pullquote text-bone/80 mb-8"

Line 77 (attribution): className="font-sans text-[10px] tracking-[0.25em] uppercase text-bone/40"
  → Should be: className="label text-bone/40"
```

### Footer.tsx
```
Line 25 (lineage): className="font-sans text-[9px] tracking-[0.32em] uppercase text-bone/20 mb-8 text-center"
  → text-[9px] is below the 11px system minimum.
  → Should be: className="label text-bone/20 mb-8 text-center"
  → OR: acceptable as pure decorative/ceremonial text that intentionally recedes.
  → Decision needed: enforce minimum or allow as intentional ghost text.

Line 33 (copyright): className="font-sans text-[10px] text-bone/15 text-center"
  → Same decision: below minimum or intentionally ghost.
```

---

## OPEN DESIGN DECISIONS (auditor must decide)

### 1. Single-word display items (Shift.tsx, Experience.tsx)
Words like "Structure", "Sensitivity", "Control", "Presence", "Understanding" are set at
`font-serif text-2xl md:text-3xl`. These are emotional/conceptual peaks.
- Option A: Treat as kfl-pullquote--authority (26/32px → 32/44px)
- Option B: Define a new `kfl-word` class: Playfair 34px/40px, weight 400, no italic
- Option C: Elevate to kfl-h2 level (30/38px) with Playfair weight-400

### 2. Lineage names in Legacy.tsx
"Ip Man", "Moy Yat", "Thornton Williams", "Rafael Gonzalez" are set in `font-serif text-lg`.
They are proper names in a lineage chain — more important than body copy, less than a heading.
- Option A: kfl-h3 (22px, sans, 600) — feels too mechanical for lineage names
- Option B: Playfair 20px/28px, weight 400 — define as `kfl-name`
- Option C: kfl-pullquote (22px italic) — italic may not be right for a name

### 3. AnchorQuote blockquote
The site's centerpiece typographic moment: "A structure cannot hold what it was not built to carry."
Currently font-light (300) which is below system minimum weight (400).
- Option A: Keep Playfair weight-400, heading-lg responsive sizing
- Option B: Define `kfl-pullquote--display`: Playfair 32/40px → 48/56px → 60/68px, weight-400
- Option C: Use heading-xl sizing (the display track) — most authoritative

### 4. Footer ghost text (9px / 10px)
The lineage credits and copyright are intentionally minimal — ceremonial ghost text.
- Option A: Enforce the 11px floor, accept slightly less recessed feel
- Option B: Formally define a `kfl-ghost` class below the scale (9px/14px, opacity 0.2)
  and document it as the sole exception to the 11px minimum

### 5. Requirement labels (Presence, Openness, Contribution)
Currently `font-serif text-xl text-bone`. These head the three requirement blocks.
- Option A: kfl-h3 (22px, Inter, 600) — sans-serif creates institution/rule feel
- Option B: kfl-pullquote (22px, Playfair, 400) — stays in the serif voice of the section
- This is a brand voice decision: structured-institution (sans) vs. living-lineage (serif)

---

## COMPONENT SOURCE CODE

### app/layout.tsx
```tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Analytics from './components/Analytics'
import ScrollTracker from './components/ScrollTracker'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-matte-black text-bone antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
```

### app/globals.css (current — post system implementation)
```css
/* [See TYPOGRAPHIC SYSTEM section above for full contents] */
/* Key classes: .label, .kfl-support, .body, .kfl-h3, .heading-lg, .heading-xl,
   .kfl-pullquote, .kfl-pullquote--gold, .kfl-pullquote--authority, .btn, .field */
```

### components/Navbar.tsx
```tsx
// Fixed top nav, transparent → matte-black/92 on scroll
// Logo: seal image left, "Request Entry" button right
// VIOLATION: button uses text-[10px] — should use .btn class
<button className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/60 px-6 py-2.5 ...">
  Request Entry
</button>
```

### components/Hero.tsx (post-fix)
```tsx
<h1 className="heading-xl mb-7">Kung Fu Legacy</h1>
<p className="kfl-pullquote text-bone/80 mb-10">You already know what is missing.</p>
<div className="gold-line mb-10" />
<p className="body max-w-sm">Not structure. Not discipline. You have both.</p>
<p className="body max-w-sm">What you have not found is the men who carry the same weight.</p>
// Bottom right:
<p className="label opacity-30">Instructor</p>
<p className="kfl-support text-bone/50 mt-1">Rafael Gonzalez</p>
```

### components/Recognition.tsx (post-fix)
```tsx
<p className="label mb-14">Recognition</p>
<h2 className="heading-lg mb-12">You are not here because something is broken.</h2>
<p className="body text-bone/70">...</p>
<p className="kfl-pullquote">None of them can actually challenge you.</p>
<p className="body text-bone/70">...</p>
<p className="body text-bone/70">...</p>
<p className="body text-bone/70">...</p>
<p className="kfl-pullquote kfl-pullquote--gold">Most men stop looking for it. They settle. You are still looking. That is why you are here.</p>
```

### components/TheRoom.tsx (post-fix)
```tsx
<p className="label mb-14">The Room</p>
<h2 className="heading-lg mb-10">You will know the moment you walk in.</h2>
<p className="body text-bone/70">This is not a class...</p>
<p className="body text-bone/70">The men here were selected...</p>
<p className="kfl-pullquote">When you walk in, you feel it immediately.</p>
<p className="body text-bone/70">Not intensity for its own sake...</p>
<p className="kfl-pullquote kfl-pullquote--gold">That is what has been missing.</p>
```

### components/Shift.tsx (VIOLATIONS REMAIN)
```tsx
<p className="label mb-14">The System</p>
<h2 className="heading-lg mb-8">This is not a collection of techniques.</h2>

// VIOLATION — needs system class:
<p className="font-serif text-2xl md:text-3xl text-gold italic mb-24">This is a system.</p>

// VIOLATION — single-word display items:
<span className="font-serif text-2xl md:text-3xl text-gold">{accent}</span>  // Structure, Sensitivity, Control
<span className="font-sans text-base md:text-lg text-bone/55">{rest}</span>  // before movement, etc.

<p className="body text-bone/70">You are not learning what to do.</p>

// VIOLATION:
<p className="font-serif text-xl md:text-2xl text-bone italic">You are building understanding.</p>
```

### components/AnchorQuote.tsx (VIOLATION REMAINS)
```tsx
// Site's biggest typographic moment — centerpiece quote
// VIOLATION: font-light (300) below system minimum + no system class
<blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-bone font-light leading-snug">
  A structure cannot hold
  <span className="text-gold italic">what it was not built to carry.</span>
</blockquote>
```

### components/Legacy.tsx (VIOLATIONS REMAIN)
```tsx
<p className="label mb-14">Legacy</p>
<h2 className="heading-lg mb-8">Built on direct transmission.</h2>

// VIOLATION:
<p className="font-serif text-xl text-bone/60 italic mb-20">
  This is not learned casually. It is passed, refined, and earned.
</p>

// VIOLATION — lineage names (decision needed):
<p className="font-serif text-lg text-bone">{name}</p>
// VIOLATION — honorifics:
<p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mt-1">{honorific}</p>
```

### components/Voice.tsx (post-fix)
```tsx
<p className="label mb-14">From the Instructor</p>
<p className="label opacity-30 mt-4">Rafael Gonzalez · Sifu</p>
// Quote lines:
{lines.slice(0, -1).map((line, i) => (
  <p className={i === 0 ? 'kfl-pullquote text-bone' : 'kfl-pullquote text-bone/80'}>{line}</p>
))}
// Final authority line:
<p className="kfl-pullquote--authority">{lastLine}</p>
```

### components/Filter.tsx (VIOLATIONS REMAIN)
```tsx
// VIOLATION — should be .label:
<p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-12">This is not for you if:</p>
<p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-12">This is for you if:</p>

// Correct:
<p className="body text-bone/80">{item}</p>
```

### components/Experience.tsx (VIOLATIONS REMAIN)
```tsx
<p className="label mb-14">Training</p>
<h2 className="heading-lg mb-16">Training here is different.</h2>

// VIOLATION — 3 italic challenge lines:
<p className="font-serif text-xl md:text-2xl text-bone/65 italic">{text}</p>

// VIOLATION:
<p className="font-serif text-xl md:text-2xl text-bone mb-16">Progress is earned.</p>

<p className="label mb-10">You will develop:</p>

// VIOLATION — development grid (Structure, Sensitivity, etc.):
<p className="font-serif text-xl md:text-2xl text-bone">{item}</p>

// VIOLATION — callout eyebrow:
<p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/55 mb-4">And something most never reach:</p>

// VIOLATION — Understanding (peak moment):
<p className="font-serif text-2xl md:text-3xl text-gold">Understanding.</p>

// VIOLATION — form names:
<p className="font-serif text-lg text-bone flex-shrink-0 sm:w-44">{name}</p>  // Siu Lim Tao, etc.

// VIOLATION — form descriptions:
<p className="font-sans text-sm text-bone/45 leading-relaxed">{description}</p>
```

### components/Integration.tsx (VIOLATIONS REMAIN)
```tsx
<p className="label mb-14">Integration</p>
<h2 className="heading-lg mb-8">Qualities most training ignores.</h2>

// VIOLATION:
<p className="font-serif text-xl md:text-2xl text-bone/65 italic mb-20">Not force. Not speed. Foundation.</p>

// VIOLATION — authority statements:
<p className="font-serif text-2xl md:text-3xl text-bone">Your structure.</p>
<p className="font-serif text-2xl md:text-3xl text-bone">Your discipline.</p>
<p className="font-serif text-2xl md:text-3xl text-bone">Your awareness.</p>

// VIOLATION — gold emphasis:
<p className="font-serif text-xl text-gold mb-20">What is trained here changes how you move...</p>

// VIOLATION — pillar structure:
<p className="font-serif text-xl text-bone mb-1">{headline}</p>  // Structure is built.
<p className="font-sans text-sm text-bone/55">{sub}</p>           // In the body. In every technique.
```

### components/Requirement.tsx (VIOLATIONS REMAIN)
```tsx
<p className="label mb-14">What this requires</p>
<h2 className="heading-lg mb-8">Three things. Not in addition to what you carry.</h2>

// VIOLATION:
<p className="font-serif text-xl text-bone/60 italic mb-20">As a condition of entry.</p>

// VIOLATION — requirement labels (Presence, Openness, Contribution):
<p className="font-serif text-xl text-bone mb-2">{label}</p>

// VIOLATION — requirement bodies:
<p className="font-sans text-sm text-bone/55 leading-relaxed">{body}</p>

// VIOLATION — closing note:
<p className="font-sans text-[10px] tracking-[0.25em] uppercase text-bone/40 mt-14">
  These are not expectations. They are the conditions of entry.
</p>
```

### components/Application.tsx (post-fix, partial)
```tsx
<p className="label mb-14">Application</p>
<h2 className="heading-lg mb-8">Entry is not given.</h2>
<p className="body text-bone/65">It is earned.</p>
<p className="body text-bone/65">It is granted by the men already inside it.</p>
<p className="kfl-pullquote text-bone/75 mb-10">
  What you are committing to is not a training schedule. It is a standard.
</p>
<p className="body text-bone/55 mb-16">Applications are reviewed...</p>

// Membership includes block:
<p className="label mb-6">What membership includes</p>
<p className="kfl-support text-bone/55">{line}</p>  // 4 operational lines
<p className="kfl-pullquote text-bone/75">Men who enter this brotherhood make a serious...</p>

// Success state:
<p className="label mb-6 text-gold">Received</p>
<h3 className="kfl-pullquote--authority text-bone mb-8">Application received.</h3>
<p className="body text-bone/65 mb-6">Your application will be reviewed...</p>
<p className="kfl-pullquote text-bone/80">Sit with what you wrote...</p>

// Form qualifier questions:
<p className="body text-bone/65 mb-5">{question}</p>  // post-fix

// Error/validation messages still use: font-sans text-sm text-gold — acceptable (system color)
```

### components/DecisiveMoment.tsx (VIOLATIONS REMAIN)
```tsx
// VIOLATION — 2 italic lines:
<p className="font-serif text-xl md:text-2xl text-bone italic mb-8 text-center leading-relaxed">
  You have been in rooms that were built for other men.
</p>
<p className="font-serif text-xl md:text-2xl text-bone italic mb-16 text-center leading-relaxed">
  This one is not.
</p>

<p className="body text-bone/65 text-center mb-6">You already know whether you belong here...</p>

// VIOLATION — gold italic close:
<p className="font-serif text-xl text-gold italic text-center">
  That is not patience. You have pressed against this ceiling before.
</p>
```

### components/FinalClose.tsx (VIOLATIONS REMAIN)
```tsx
// VIOLATION — 2 italic lines:
<p className="font-serif text-xl md:text-2xl text-bone italic mb-6 leading-relaxed">
  Some men are not looking for more information.
</p>
<p className="font-serif text-xl md:text-2xl text-bone italic mb-20 leading-relaxed">
  They are looking for the men.
</p>

<button onClick={scrollToForm} className="btn">Request Entry</button>
```

### components/Footer.tsx (DECISION NEEDED)
```tsx
// VIOLATION or EXCEPTION — ghost text below 11px minimum:
<p className="font-sans text-[9px] tracking-[0.32em] uppercase text-bone/20 mb-8 text-center">
  Yip Man · Moy Yat · Moy Don · Moy Don Xùn
</p>
<p className="font-sans text-[10px] text-bone/15 text-center">
  © 2026 Rafael Gonzalez. All rights reserved.
</p>
```

---

## AUDIT SUMMARY — WHAT STILL NEEDS TO BE DONE

### High Priority (system compliance — clear fixes)
1. Filter.tsx — 2 eyebrow labels using raw inline instead of .label
2. Navbar.tsx — Request Entry button using text-[10px] instead of .btn
3. DecisiveMoment.tsx — 3 inline serif italic lines
4. FinalClose.tsx — 2 inline serif italic lines
5. Legacy.tsx — italic subtitle + lineage honorifics
6. Requirement.tsx — italic subtitle + requirement bodies + closing note
7. Integration.tsx — 5 inline type instances

### Medium Priority (pattern decisions needed first)
8. Shift.tsx — single-word display items, system phrase, understanding line
9. Experience.tsx — 7 inline instances including single-word grid and peak moment "Understanding"
10. AnchorQuote.tsx — weight violation (font-light 300) + no system class

### Low Priority (intentional ghost text — owner decision)
11. Footer.tsx — text-[9px] and text-[10px] ghost text
    → Enforce 11px minimum OR formally define kfl-ghost exception

### Open Decisions (block implementation until resolved)
- What class governs single-word conceptual display items? (Structure, Sensitivity, Understanding)
- What class governs lineage names? (Ip Man, Moy Yat, etc.)
- AnchorQuote: what is the correct display level for the site's centerpiece quote?
- Footer ghost text: enforce floor or define exception?
- Requirement labels (Presence, Openness, Contribution): sans kfl-h3 or serif kfl-pullquote?

---

## FILES CHANGED IN LAST SESSION
- tailwind.config.js — added kfl-* fontSize scale
- app/globals.css — full rewrite with explicit line heights and system classes
- components/Hero.tsx — tagline and instructor credit fixed
- components/TheRoom.tsx — 2 inline instances fixed
- components/Recognition.tsx — 2 inline instances fixed
- components/Voice.tsx — quote lines, attribution, authority close fixed
- components/Application.tsx — italic quotes, support text, success state fixed

## FILES WITH ZERO CHANGES (all violations remain)
- components/Shift.tsx
- components/AnchorQuote.tsx
- components/Legacy.tsx
- components/Filter.tsx
- components/Experience.tsx
- components/Integration.tsx
- components/Requirement.tsx
- components/DecisiveMoment.tsx
- components/FinalClose.tsx
- components/Navbar.tsx (1 violation: Request Entry button sizing)
- components/Testimonials.tsx (currently hidden, will need fix when enabled)
- components/Footer.tsx (ghost text decision pending)
