import { services } from "@/lib/content";

const paths: Record<string, JSX.Element> = {
  stethoscope: (
    <path d="M6 4v6a5 5 0 0 0 10 0V4M6 4H4M16 4h2M8 18a3 3 0 1 0 0 .01M8 15.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "heart-pulse": (
    <path d="M12 20s-7-4.5-9-9c-1.3-3 .5-6.5 4-6.5 2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.5 0 5.3 3.5 4 6.5-2 4.5-9 9-9 9ZM6 12h2l1.5-3 2 5 1.5-3H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  syringe: (
    <path d="m19 5-3-3-2 2 1 1-8 8-2-1-2 2 2 2-2 3 1 1 3-2 2 2 8-8 1 1 2-2Zm-6 4 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  lungs: (
    <path d="M12 3v7m0 0c-1-2-3-2-4-1-2 1-3 4-2 8 .5 2 2 2.5 3 1.5s1-3 1-5m2-3.5c1-2 3-2 4-1 2 1 3 4 2 8-.5 2-2 2.5-3 1.5s-1-3-1-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  puzzle: (
    <path d="M9 4h4v2.2a1.8 1.8 0 1 0 0 3.6V12h3.5a1.8 1.8 0 1 1 0 3.6V19h-4v-2.2a1.8 1.8 0 1 0 0-3.6V10H9V7.8a1.8 1.8 0 1 1 0-3.6V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  ),
  "shield-heart": (
    <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Zm0 5.5c1-1.3 3.2-1 3.2 1 0 1.7-2 3-3.2 4-1.2-1-3.2-2.3-3.2-4 0-2 2.2-2.3 3.2-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  ),
  bandage: (
    <path d="m7 17-4-4a3 3 0 0 1 0-4.2l6.8-6.8a3 3 0 0 1 4.2 0l4 4a3 3 0 0 1 0 4.2L11.2 17A3 3 0 0 1 7 17Zm3-11 5 5m-7 0 1.5 1.5M13.5 8 15 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  activity: (
    <path d="M3 12h4l2 7 4-14 2 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wind: (
    <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 12h15a2.5 2.5 0 1 1-2.5 2.5M3 16h9a2 2 0 1 1-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Services() {
  return (
    <section id="services" className="bg-canvasWarm py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] leading-tight text-primary sm:text-[2.4rem]">
            Care for every stage of childhood.
          </h2>
          <p className="mr-display mt-2 text-lg text-warm">
            बालपणाच्या प्रत्येक टप्प्यासाठी काळजी.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          
          {services.map((s, index) => {
            const featured = index === 1;

            return (
              <div
                key={s.en}
                className={`group rounded-card border border-primary/8 bg-cream p-7 text-primary shadow-card transition-all hover:-translate-y-1 hover:shadow-soft lg:col-span-4
                  ${index === 0 ? "lg:col-span-7 lg:p-9" : ""}
                  ${featured ? "lg:col-span-5 lg:bg-primary lg:text-cream" : ""}
                  ${index === 5 ? "lg:col-span-5" : ""}
                  ${index === 6 ? "lg:col-span-7" : ""}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                    featured
                      ? "bg-primary/8 text-primary lg:bg-cream/15 lg:text-cream"
                      : "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-cream"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {paths[s.icon] ?? null}
                  </svg>
                </span>

                <h3
                  className={`mt-5 font-display text-xl ${
                    featured ? "text-primary lg:text-cream" : "text-primary"
                  }`}
                >
                  {s.en}
                </h3>

                <p
                  className={`mr mt-1 text-[14px] ${
                    featured
                      ? "text-ink/60 lg:text-cream/65"
                      : "text-ink/60"
                  }`}
                >
                  {s.mr}
                </p>

                <p
                  className={`mt-3 font-body text-[14.5px] leading-relaxed ${
                    featured
                      ? "text-ink/70 lg:text-cream/75"
                      : "text-ink/70"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
