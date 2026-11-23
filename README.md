# Vatsalya Bal Rugnalay — Website

Next.js 14 (App Router), TypeScript and Tailwind CSS website for Vatsalya Bal Rugnalay in Karanja Lad, Washim, Maharashtra. The site supports English and Marathi content.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Photo assets

The hospital photographs from the latest WhatsApp ZIP have been renamed, optimized and added under `public/images/`. See `public/images/README.md` and `PHOTO_ASSET_CHECKLIST.md` for exact image paths and the original-to-website filename mapping.

The original doctor headshots were not present in that ZIP. Add the verified portraits using these exact paths:

- `public/images/doctors/dr-nilesh-chavhan.jpg`
- `public/images/doctors/dr-nikita-chavhan.jpg`

Do not use stock portraits or hospital/interior photos as doctor photographs. All displayed photos can be clicked to open the full-screen viewer. Image cards use portrait-friendly ratios and responsive image sizing for phones, laptops and larger displays.

## Before deployment

1. Confirm that the two doctor portraits are the correct original photographs.
2. Verify the Skin Care signboard image, because it contains service and qualification text that should be current and approved.
3. Confirm doctor details and clinical service information with the hospital.
4. Confirm that `9158426955` is the hospital's active phone and WhatsApp number.
5. Check the Google Maps embed and directions pin.
6. Do not publish identifiable patient/visitor/staff images without hospital approval and any required consent.
7. No prices or appointment-booking form are included.

## Project structure

```text
app/                  Next.js App Router
components/            Homepage sections and photo viewer
lib/content.ts         Hospital copy, phone/address and Google Maps URL
lib/images.ts          Central map of website image slots
public/images/         Optimized hospital photos and logo
```

The hospital logo is included at `public/images/vatsalya-logo-mark.png` and is already used in the website header. Desktop and mobile hero images remain separate to preserve their respective compositions.
