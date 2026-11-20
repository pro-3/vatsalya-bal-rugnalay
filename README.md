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

1. **Add original doctor photographs.** Copy `dr-nilesh-chavhan.jpg` and
   `dr-nikita-chavhan.jpg` into `public/images/doctors/`. See that folder's
   README for the exact paths. Until then, the page displays labelled fallbacks.
2. **Replace stock hospital photography.** See `public/images/README.md` for
   the remaining image slots and filenames. Do not present stock images as the
   actual hospital or its staff.
3. **Verify clinical content.** Confirm doctor details, service availability,
   and all medical copy with the hospital before publishing.
4. **Check the contact and map links.** The phone number is configured in
   `lib/content.ts`; confirm that the supplied number is the hospital's active
   call and WhatsApp number and that the map pin is correct.
5. **Never add pricing or a booking form** unless the client explicitly changes
   the original requirement.

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


## Photo assets and click-to-open viewer

See `public/images/README.md` for the complete filename checklist. All site photographs open in a full-screen viewer when clicked. Add original photos under the exact documented names; doctor portraits have no stock-photo fallback. The hospital logo is included at `public/images/vatsalya-logo-mark.png` and appears in the header.
