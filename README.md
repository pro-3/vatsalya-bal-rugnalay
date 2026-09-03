# Vatsalya Bal Rugnalay — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS site for Vatsalya Bal
Rugnalay, a children's hospital in Karanja Lad, Maharashtra. Bilingual
(English + Marathi) throughout.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before you launch

1. **Replace placeholder contact details.** Search `lib/content.ts` for
   `PLACEHOLDER` — phone number, WhatsApp number, and address all need
   verified values.
2. **Add real photography.** See `public/images/README.md` — every photo
   currently comes from Unsplash as a working stand-in.
3. **Confirm doctor details.** Only Dr. Nikita Pawar's profile is
   populated (`lib/content.ts` → `doctors`); add more once details are
   confirmed.
4. **Never add pricing or a booking form** — this was an explicit
   requirement in the design brief. The only calls to action anywhere on
   the site are Call Now, WhatsApp, and Get Directions.

## Project structure

```
app/                Next.js app router (layout, page, global styles)
components/          One component per homepage section
lib/content.ts       All bilingual copy in one place
lib/images.ts         Every photo slot, keyed by name
public/images/        Where real photography goes (see README there)
```

## Design tokens

Colors, type families and border-radius scale are defined in
`tailwind.config.ts` and follow the palette in the original design
specification (`Chavhan_Children_Hospital_Website_Design.md`):

- Background `#F7F5F0`, Primary `#173B57`, Secondary `#6FA9B8`,
  Warm accent `#C47A5A`, Gold accent `#D9B56D`
- Display type: Fraunces (English) / Noto Serif Devanagari (Marathi)
- Body type: Work Sans (English) / Noto Sans Devanagari (Marathi)

## What's intentionally missing

Per the brief: no treatment/consultation/room pricing anywhere, no
appointment booking form, no invented statistics or testimonials.
