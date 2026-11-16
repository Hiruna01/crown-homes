import {
  CrownSimpleIcon,
  EnvelopeSimpleIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { WindowLight } from "@/components/window-light";
import { emailHref, site, whatsappHref } from "@/config/site";

export default function ComingSoon() {
  return (
    <div className="wall flex min-h-[100dvh] flex-col">
      <WindowLight />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 py-7 sm:px-10 sm:py-9 lg:px-16">
        <header
          className="arrive flex items-center gap-2.5"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <CrownSimpleIcon size={22} weight="light" aria-hidden="true" />
          <span className="font-display text-[1.375rem] leading-none tracking-[-0.01em]">
            {site.name}
          </span>
        </header>

        <main className="flex flex-1 flex-col justify-end pt-24 pb-10 sm:pb-14">
          <h1
            className="arrive max-w-[11ch] font-display text-[clamp(3.25rem,10.5vw,9.5rem)] leading-[0.95] font-normal tracking-[-0.035em] text-balance"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            The doors open soon.
          </h1>

          <p
            className="arrive mt-7 max-w-[44ch] text-[1.0625rem] leading-[1.65] text-muted sm:mt-9 sm:text-lg"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            We are finishing the new {site.name} website. Until it opens, write
            to us and we will help you find your next home.
          </p>

          <div
            className="arrive mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a
              href={emailHref}
              className="inline-flex h-13 items-center justify-center gap-2.5 bg-ink px-7 text-[0.9375rem] font-medium text-wall transition-[background-color,transform] duration-300 hover:bg-accent active:translate-y-px"
            >
              <EnvelopeSimpleIcon size={18} aria-hidden="true" />
              Email us
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2.5 border border-line px-7 text-[0.9375rem] font-medium text-ink transition-[border-color,transform] duration-300 hover:border-ink active:translate-y-px"
            >
              <WhatsappLogoIcon size={18} aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>
        </main>

        <footer
          className="arrive text-sm text-muted"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          © 2026 {site.name}. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
