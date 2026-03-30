# Deployment — EasyPanel on Hostinger

## 1. Add hero image

Place your instructor photo at:

```
public/images/hero.jpg
```

Recommended: 2400×1600px or larger, portrait/3:2 ratio. The page is designed for a full-body solo shot.

---

## 2. Lock dependencies

```bash
npm install
```

Commit the generated `package-lock.json`.

---

## 3. Configure environment variables in EasyPanel

In your EasyPanel service → **Environment**, add:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Your GA4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Your Meta Pixel numeric ID |
| `NEXT_PUBLIC_WEBHOOK_URL` | Full HTTPS webhook URL (Make.com, Zapier, n8n, etc.) |

> **Important:** Because these are `NEXT_PUBLIC_*` variables they are embedded **at build time**, not runtime.
> In EasyPanel, add them as **Build Arguments** as well as Environment Variables, or set them before running the Docker build.

---

## 4. Docker build (EasyPanel Dockerfile deployment)

EasyPanel will detect the `Dockerfile` and build automatically on push.

If building manually:

```bash
docker build \
  --build-arg NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX \
  --build-arg NEXT_PUBLIC_META_PIXEL_ID=1234567890 \
  --build-arg NEXT_PUBLIC_WEBHOOK_URL=https://hook.example.com/xyz \
  -t kung-fu-legacy .

docker run -p 3000:3000 kung-fu-legacy
```

---

## 5. EasyPanel service settings

| Setting | Value |
|---|---|
| Port | `3000` |
| Health check path | `/` |
| Restart policy | `always` |

---

## 6. Adding real training photos

Three placeholder sections are ready to accept photos:

| Component | Placeholder label | Suggested shot |
|---|---|---|
| `Legacy.tsx` | Training Photo — Correction | Instructor adjusting student's structure |
| `Experience.tsx` | Training Photo — Drills | Drilling or repetition sequence |
| `Integration.tsx` | Training Photo — Structure Work | Stance or sensitivity exercise |

In each component, replace the placeholder `<div>` block with:

```tsx
<Image
  src="/images/training-1.jpg"   // adjust filename
  alt="Description"
  fill
  className="object-cover"
/>
<div className="absolute inset-0 bg-black/50" />
```

---

## 7. Form webhook payload

The form POSTs JSON to `NEXT_PUBLIC_WEBHOOK_URL`:

```json
{
  "fullName": "...",
  "phone": "...",
  "email": "...",
  "experience": "none|beginner|intermediate|advanced",
  "whyTrain": "...",
  "developGoals": ["Structure", "Discipline"],
  "commitToTraining": "yes|no",
  "acceptChallenge": "yes|no",
  "willTravel": "yes|no",
  "source": "kung-fu-legacy"
}
```
