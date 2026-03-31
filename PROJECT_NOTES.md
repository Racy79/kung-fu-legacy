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

## Form / Applications
- Submissions go to: rafaelgonzalezrosado@gmail.com
- Via: n8n workflow "Kung Fu Legacy — Application Form"
- n8n URL: https://legacywingchunmethod.com
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

## How to deploy a change
1. Claude makes code changes locally
2. git push (automatic)
3. Go to EasyPanel → kungfulegacy service → click Deploy
4. Wait ~30 seconds → refresh site
