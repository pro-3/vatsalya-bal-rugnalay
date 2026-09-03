import { hospital } from "@/lib/content";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-primary/10 bg-cream/95 p-3 backdrop-blur lg:hidden">
      <a
        href={hospital.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-pill bg-primary py-3 font-body text-[14.5px] text-cream"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.7 21.1 2.9 13.3 2.9 3.9 2.9 3.3 3.4 2.8 4 2.8h3.3c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        Call Now
      </a>
      <a
        href={hospital.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-pill bg-warm py-3 font-body text-[14.5px] text-cream"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M8.5 8.8c.3-1 1-1 1.5-.9.4.1.7.9.9 1.4.2.4 0 .7-.2.9l-.4.4c-.2.2-.2.4 0 .7.5.9 1.5 1.8 2.4 2.2.3.2.5.1.7-.1l.4-.5c.2-.3.5-.4.9-.2.5.2 1.3.6 1.4 1 .1.4.1 1.1-.4 1.5-.5.4-1.2.7-2 .5-1.6-.4-3.6-1.8-4.8-3.5-.7-1-.9-2-.4-3.4Z" fill="currentColor" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
