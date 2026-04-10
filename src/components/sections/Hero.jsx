import WhatsAppButton from "../ui/WhatsAppButton";
import Button from "../ui/Button";
import heroBg from "../../assets/Hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-linear-to-br from-charcoal via-charcoal-light to-charcoal md:min-h-screen">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/60" />

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,140,110,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:px-8">
        <span className="mb-6 inline-block rounded-sm bg-charcoal/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          Manchester&apos;s Trusted Renovation Specialists
        </span>

        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Your Home, Reimagined
        </h1>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
          {["Painting & Decorating", "Wardrobes", "Tiling", "Flooring", "Plastering", "3D Design", "Full Renovations"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Whether it&apos;s a single room refresh or a complete property overhaul &mdash; we handle
          everything from painting and fitted wardrobes to full renovations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton text="Get a Free Quote" size="lg" />
          <Button variant="outline-white" size="lg" href="#projects">
            See Our Work
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce text-white/30 md:mt-24">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
