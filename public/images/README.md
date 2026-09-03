# /public/images

This folder is where real Vatsalya photography goes. The site currently
renders working placeholder photos from Unsplash (configured in
`lib/images.ts`) so the design is fully browsable before real photography
is ready.

## How to replace a placeholder

1. Get the real photo, sized for the web (a long edge of ~1600px is plenty).
2. Save it into this folder using the filename listed below.
3. Open `lib/images.ts` and change that entry's `src` to the local path,
   e.g. `src: "/images/hero.jpg"`.

That's it — no other file needs to change.

## Expected filenames

| Key                  | Filename                    | Used for                          |
|-----------------------|------------------------------|------------------------------------|
| hero                  | hero.jpg                    | Hero section photo                |
| introduction          | introduction.jpg            | "A trusted place" section         |
| doctorNikita          | doctor-nikita.jpg           | Dr. Nikita Pawar's profile card   |
| skinCare              | skin-care.jpg               | Skin Care Clinic section          |
| parentResources       | parent-resources.jpg        | Parent guidance section           |
| contact               | contact.jpg                 | Contact section                   |
| facilityExterior      | facility-exterior.jpg       | Facilities gallery                |
| facilityReception     | facility-reception.jpg      | Facilities gallery                |
| facilityPatientRoom   | facility-patient-room.jpg   | Facilities gallery                |
| facilityNicu          | facility-nicu.jpg           | Facilities gallery                |
| facilityEquipment     | facility-equipment.jpg      | Facilities gallery                |
| facilityCare          | facility-care.jpg           | Facilities gallery                |

Add a doctor's own photo the same way if more doctors join `lib/content.ts`.

## A note on the current placeholders

This project was generated in a sandboxed environment with no access to
image CDNs, so the exact Unsplash URLs in `lib/images.ts` could not be
verified before hand-off. If any placeholder ever fails to load, the
`<PhotoFrame>` component (in `components/PhotoFrame.tsx`) automatically
shows a labelled placeholder card instead of a broken image — so nothing
in the layout breaks either way. Swap in real photography as soon as it's
available.
