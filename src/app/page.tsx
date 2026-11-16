import { CrownSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/config/site";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function ComingSoon() {
  return (
    <div className="hero flex min-h-[100dvh] flex-col">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />

      <header
        className="arrive mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8 lg:px-14"
        style={step(0)}
      >
        <div className="flex items-center gap-2.5">
          <CrownSimpleIcon size={22} weight="fill" aria-hidden="true" />
          <span className="text-lg font-medium tracking-[-0.01em]">
            {site.name}
          </span>
        </div>
        <span className="pill px-4 py-2 text-sm font-medium">Opening soon</span>
      </header>

      <p
        className="arrive wordmark mt-[7dvh] text-center sm:mt-[5dvh]"
        style={step(1)}
        aria-hidden="true"
      >
        {site.name}
      </p>

      <main className="mx-auto mt-auto grid w-full max-w-[1600px] gap-6 px-6 pb-8 sm:px-10 sm:pb-10 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16 lg:px-14 lg:pb-12">
        <h1
          className="arrive max-w-[14ch] text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.08] font-light tracking-[-0.025em] text-balance"
          style={step(2)}
        >
          The doors open soon.
        </h1>

        <div className="arrive md:justify-self-end" style={step(3)}>
          <p className="max-w-[42ch] text-base leading-[1.6] text-paper-soft sm:text-[1.0625rem]">
            We are finishing the new {site.name} website, where you will soon
            be able to explore our homes and projects.
          </p>
          <p className="mt-6 text-sm text-paper-soft">
            © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
