# Vatsalya Bal Rugnalay — photo asset checklist

The latest photo ZIP contained 24 hospital photographs. I selected the clear building and interior images that can be used on the public website, renamed them, optimized them, and connected their paths in `lib/images.ts`.

## Added from your WhatsApp ZIP

Place these files under `public/images/` using the exact names:

| Exact website filename | Original photo in your ZIP | Used for |
|---|---|---|
| `introduction.jpg` | `WhatsApp Image 2026-11-23 at 9.12.14 PM.jpeg` | About / introduction |
| `facility-exterior.jpg` | `WhatsApp Image 2026-11-23 at 9.12.15 PM.jpeg` | Facilities — exterior |
| `facility-approach.jpg` | `WhatsApp Image 2026-11-23 at 9.12.14 PM (1).jpeg` | Facilities — street approach |
| `skin-care.jpg` | `WhatsApp Image 2026-11-23 at 9.12.13 PM.jpeg` | Skin Care section — clinic signboard |
| `parent-resources.jpg` | `WhatsApp Image 2026-11-23 at 9.12.12 PM.jpeg` | Parent guidance section — hospital interior |
| `facility-reception.jpg` | `WhatsApp Image 2026-11-23 at 9.12.11 PM.jpeg` | Facilities — reception / waiting area |
| `facility-corridor.jpg` | `WhatsApp Image 2026-11-23 at 9.12.10 PM.jpeg` | Facilities — interior corridor |
| `facility-patient-room.jpg` | `WhatsApp Image 2026-11-23 at 9.12.06 PM.jpeg` | Facilities — patient room |
| `facility-ward-room.jpg` | `WhatsApp Image 2026-11-23 at 9.11.51 PM.jpeg` | Facilities — ward room |
| `facility-care-room.jpg` | `WhatsApp Image 2026-11-23 at 9.11.48 PM.jpeg` | Facilities — care room |
| `facility-examination-room.jpg` | `WhatsApp Image 2026-11-23 at 9.11.49 PM.jpeg` | Facilities — examination room |

All 11 photos above are already in the updated project ZIP. You do not need to rename or copy them again.

## Already included

```text
public/images/herobg.jpg
public/images/herobg-mobile.jpg
public/images/vatsalya-logo-mark.png
```

The logo is used in the header. Desktop and mobile hero images remain separate to preserve their different compositions.

## Doctor portraits — still required

The WhatsApp ZIP did not include actual doctor headshots. Do not use an interior photo, signboard, poster, or stock portrait in their place.

Add the original approved portraits to:

```text
public/images/doctors/dr-nilesh-chavhan.jpg
public/images/doctors/dr-nikita-chavhan.jpg
```

The `public/images/doctors/README.md` file repeats these exact paths.

## Map and contact

The Contact section uses the Google Maps embed URL supplied for the verified Vatsalya listing. There is no longer a `contact.jpg` image slot in that section.

## Responsive layout and image behaviour

- The uploaded photos are portrait-oriented, mostly 960 × 1280 pixels (3:4).
- About and Skin Care sections use portrait-friendly image ratios.
- The Facilities gallery uses 3:4 cards: two columns on phones, three on medium screens, and four on wide screens.
- `next/image` serves responsive image sizes; photos are not stretched.
- All displayed photos are clickable and open in the full-screen viewer. The viewer shows the full image without cropping.
- The Skin Care signboard image uses `object-contain` so its text is not cropped.
- The Contact section uses the interactive Google Map instead of a photograph.

## Images intentionally not published from the ZIP

Some source photos were not copied into the public website because they show room/consultation charges, recognisable staff or visitors, duplicate views, or other details that should be checked before public use. In particular, the photo showing a hospital rate list was excluded so room/consultation prices are not published on the website.

## Important before deployment

- Confirm the Skin Care signboard image still shows current and approved services and doctor information.
- Confirm the hospital has permission to publish any image that includes a recognisable individual.
- Add the two official doctor portraits before treating the profile sections as complete.
