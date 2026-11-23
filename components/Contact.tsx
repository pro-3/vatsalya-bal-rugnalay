import { hospital } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-canvasWarm py-20 lg:py-28">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <h2 className="font-display text-[2rem] leading-tight text-primary sm:text-[2.4rem]">
            We&rsquo;re here when your child needs us.
          </h2>
          <p className="mr-display mt-2 text-lg text-warm">
            आपल्या मुलाला गरज असेल तेव्हा आम्ही येथे आहोत.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-7.5-4.7-10-9.4C.6 8.1 2.3 4 6.3 4c2 0 3.7 1.1 4.7 2.7C12 5.1 13.7 4 15.7 4c4 0 5.7 4.1 4.3 7.6C19.5 16.3 12 21 12 21Z" stroke="#173B57" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg text-primary">{hospital.name}</p>
                <p className="mr text-[14px] text-ink/60">{hospital.nameMr}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="#173B57" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="font-body text-[15px] text-ink/85">{hospital.address}</p>
                <p className="mr text-[14px] text-ink/60">{hospital.addressMr}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.7 21.1 2.9 13.3 2.9 3.9 2.9 3.3 3.4 2.8 4 2.8h3.3c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8Z" stroke="#173B57" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-body text-[15px] text-ink/85">{hospital.phoneDisplay}</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={hospital.phoneHref}
              className="rounded-pill bg-primary px-7 py-3.5 font-body text-[15px] text-cream shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Call Now
            </a>
            <a
              href={hospital.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-warm px-7 py-3.5 font-body text-[15px] text-cream shadow-soft transition-transform hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
            <a
              href={hospital.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-primary/25 px-7 py-3.5 font-body text-[15px] text-primary transition-colors hover:bg-primary hover:text-cream"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl border border-primary/10 bg-white shadow-card">
          <div className="relative aspect-[4/3] min-h-[280px] w-full bg-[#e9eef0] sm:min-h-[360px]">
            <iframe
              title="Vatsalya Bal Rugnalay location on Google Maps"
              src={hospital.mapEmbedHref}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="font-display text-lg text-primary">View the hospital location</p>
              <p className="mr mt-1 text-sm text-ink/60">नकाशावर स्थान पाहा आणि मार्ग मिळवा</p>
            </div>
            <a
              href={hospital.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-pill bg-primary px-5 py-3 font-body text-sm text-cream transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
