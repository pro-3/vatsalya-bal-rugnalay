# Vatsalya Bal Rugnalay — website photo assets

The hospital photographs from the latest WhatsApp ZIP have already been renamed, optimized, and added to this folder in the updated project archive. All paths are centrally defined in `lib/images.ts`.

## Doctor portraits still needed

No original doctor headshots were included in the recent upload. Add genuine, approved portraits under `doctors/`:

- `doctors/dr-nilesh-chavhan.jpg`
- `doctors/dr-nikita-chavhan.jpg`

Never use a hospital-room photo, poster, or stock portrait as a doctor's photograph.

## Included photo files

- `herobg.jpg` — desktop hero background
- `herobg-mobile.jpg` — mobile hero background
- `vatsalya-logo-mark.png` — hospital logo in the header
- `introduction.jpg` — About / introduction
- `skin-care.jpg` — Skin Care Clinic signboard
- `parent-resources.jpg` — hospital interior used with parent guidance
- `facility-exterior.jpg` — exterior
- `facility-approach.jpg` — street approach
- `facility-reception.jpg` — reception / waiting area
- `facility-corridor.jpg` — interior corridor
- `facility-patient-room.jpg` — patient room
- `facility-ward-room.jpg` — ward room
- `facility-care-room.jpg` — care room
- `facility-examination-room.jpg` — examination room

The Contact section uses the Google Maps embed and does not need a contact photograph.

## Responsive display and photo viewer

The source hospital photographs are 960 × 1280 px (3:4 portrait). The layout uses portrait-friendly proportions and a responsive Facilities grid: two columns on phones, three on medium screens, and four on wide screens. `next/image` provides responsive delivery. Every displayed photograph opens in the full-screen viewer; the viewer shows the complete photo using `object-contain`.

The Skin Care signboard uses `object-contain` so its text is not cropped. Doctor portraits use their own dedicated paths and do not fall back to stock images.

## Publication review

The Skin Care signboard photo contains clinic service and qualification text. Confirm that it is current and approved before deployment. Photos showing a rate list or recognisable visitors/staff were not added to the public images folder. Obtain the hospital's approval and any required consent before publishing identifiable individuals.
