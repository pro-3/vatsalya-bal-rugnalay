import { parentResources } from "@/lib/content";
import { images } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

export default function ParentResources() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl shadow-card lg:sticky lg:top-28">
            <PhotoFrame slot={images.parentResources} className="rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-[2rem] leading-tight text-primary sm:text-[2.4rem]">
            Helpful guidance for parents
          </h2>
          <p className="mr-display mt-2 text-lg text-warm">
            पालकांसाठी उपयुक्त आरोग्य मार्गदर्शन
          </p>

          <div className="mt-9 flex flex-col divide-y divide-primary/10 rounded-card border border-primary/8 bg-cream shadow-card">
            {parentResources.map((r) => (
              <a
                key={r.title}
                href="#contact"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-canvasWarm/60"
              >
                <div>
                  <span className="font-body text-[13px] font-medium text-warm">
                    {r.tag}
                  </span>
                  <p className="mt-1 font-display text-[17px] text-primary">{r.title}</p>
                  <p className="mr mt-0.5 text-[13.5px] text-ink/55">{r.titleMr}</p>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-primary/50 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
          <p className="mt-4 font-body text-[13px] text-ink/50">
            All guidance is reviewed by our medical team before publication.
          </p>
        </div>
      </div>
    </section>
  );
}
