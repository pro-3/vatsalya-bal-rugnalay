# Vatsalya website revision notes

## Applied changes

- Main Doctors section now uses the supplied details for Dr. Nilesh Chavhan: MBBS, MD; Child Specialist.
- Skin Care section now contains the supplied profile for Dr. Nikita Chavhan (Pawar): BAMS (MUHS); General Physician & Cosmetologist.
- Doctor profiles use dedicated local image paths instead of stock portraits.
- Hospital phone, call link, and WhatsApp link now use 9158426955.
- The visible location text now says Karanja Lad, Washim, Maharashtra.
- Parent resource cards no longer behave like broken links to the contact section.
- Doctor and treatment details still need final confirmation by the hospital before the website is published.

## Add the original doctor photos

Copy these exact files into `public/images/doctors/`:

- `dr-nilesh-chavhan.jpg`
- `dr-nikita-chavhan.jpg`

Their public URLs are:

- `/images/doctors/dr-nilesh-chavhan.jpg`
- `/images/doctors/dr-nikita-chavhan.jpg`

If the files are absent, the existing PhotoFrame component displays its fallback. Use real, approved photographs only.

## Validation

- TypeScript check: passed (`tsc --noEmit --incremental false`).
- Production build: not completed in this environment because Next.js could not download its platform-specific SWC compiler package (network/DNS unavailable). Run `npm run build` in the normal development environment before deployment.

## Before deployment

- Confirm that 9158426955 is the hospital's active phone and WhatsApp number.
- Confirm both doctors' displayed names, qualifications, and designation.
- Confirm the Google Maps pin and address.
- Confirm which skin-care services are currently offered. The page includes a notice to contact the clinic to confirm availability, but the list itself should still be reviewed by the clinic.
- Replace Unsplash placeholders for hospital facilities with actual hospital photographs where possible.


## Google Maps location

- The Contact section now embeds a Google Maps view using the address shown in the verified Google Business Profile: Gayatri Nagar, behind Mahesh Bhavan, Shivaji Nagar, Karanja Lad, Maharashtra 444105.
- The "Open in Google Maps" action uses the exact share link supplied by the business owner: https://share.google/JRAc1H4l4kCQcPQkj
- If the business owner later copies the dedicated Google Maps "Embed a map" URL from the listing, replace `hospital.mapEmbedHref` in `lib/content.ts` with that URL for a listing-specific iframe.
