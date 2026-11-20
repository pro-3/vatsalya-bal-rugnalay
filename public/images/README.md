# Vatsalya Bal Rugnalay — website photo assets

All photographs used by the site are defined centrally in `lib/images.ts`. Add real hospital photographs using the exact names below. Once a local image is present, the website uses it automatically; you do not need to edit the code.

## Where to put the images

Use `public/images/` for general photographs and `public/images/doctors/` for doctor portraits. In a Next.js project, files in `public/` are served from the root, so `public/images/hero.jpg` is referenced in code as `/images/hero.jpg`.

## Exact image filenames

| No. | Exact filename to save | Website location | Status in this project |
|---:|---|---|---|
| 1 | `herobg.jpg` | Desktop hero background | Already included — keep this filename |
| 2 | `herobg-mobile.jpg` | Mobile hero background | Already included — keep this filename |
| 3 | `introduction.jpg` | About / introduction section | Add original hospital photo |
| 4 | `doctors/dr-nilesh-chavhan.jpg` | Main Doctors section | Add original portrait |
| 5 | `doctors/dr-nikita-chavhan.jpg` | Skin Care doctor profile | Add original portrait |
| 6 | `skin-care.jpg` | Skin Care section | Add original clinic/treatment-room photo |
| 7 | `parent-resources.jpg` | Parent guidance section | Add suitable original photo |
| 8 | `contact.jpg` | Contact section | Add hospital reception/entrance photo |
| 9 | `facility-exterior.jpg` | Facilities gallery — exterior | Add original hospital exterior |
| 10 | `facility-reception.jpg` | Facilities gallery — reception | Add original reception photo |
| 11 | `facility-patient-room.jpg` | Facilities gallery — patient room | Add original patient-room photo |
| 12 | `facility-nicu.jpg` | Facilities gallery — NICU | Add original NICU photo, only if approved for public use |
| 13 | `facility-equipment.jpg` | Facilities gallery — equipment | Add original equipment photo |
| 14 | `facility-care.jpg` | Facilities gallery — child-care area | Add original child-care area photo |

The full paths for the two doctor portraits are:

- `public/images/doctors/dr-nilesh-chavhan.jpg`
- `public/images/doctors/dr-nikita-chavhan.jpg`

The full paths for the other photos are `public/images/<filename>` using the filenames in the table.

## Logo

`vatsalya-logo-mark.png` is already included at `public/images/vatsalya-logo-mark.png` and is used in the website header. Do not replace it unless you have a newly approved logo.

## Photo opening behavior

Every displayed photograph is clickable. Clicking it opens a full-screen image viewer; click the dark background or close button, or press `Escape`, to close it. This applies to the hero photos, doctor portraits, introduction, skin-care, parent guidance, contact, and every facilities-gallery photo. The logo is a brand mark, not a gallery photo.

## Important photo guidance

- Use actual clinic/doctor photos only where the image is described as the real hospital or doctor.
- Never use a stock portrait as a photograph of either doctor.
- Do not upload identifiable patient or child photographs without appropriate consent from the parent/guardian and authorization from the hospital.
- Use landscape images for room/facility sections where possible; portrait images for doctor profiles.
- Suggested long edge: around 1400–2000 px. JPG or WebP is recommended for photographs. Keep the exact filename.

## Temporary fallbacks

For non-doctor photos, if the named local file is not present, the page temporarily falls back to an Unsplash stock image. It is only a layout placeholder and must not be presented as an actual Vatsalya facility. Once you add the local photo under the exact name, the real file is used automatically.

Doctor portraits do not use stock fallbacks. Until the actual portrait is added, the page shows a neutral placeholder card with the expected filename.
