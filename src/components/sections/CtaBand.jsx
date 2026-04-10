import { siteConfig } from "../../data/siteConfig";
import WhatsAppButton from "../ui/WhatsAppButton";
import Button from "../ui/Button";

export default function CtaBand() {
  return (
    <section id="contact" className="bg-sage py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Ready to Transform Your Home?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/85">
          Send us a message and we&apos;ll get back to you within 24 hours. No obligation, no pressure
          &mdash; just honest advice.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton text="Message Us on WhatsApp" size="lg" variant="white" />
          <Button
            variant="outline-white"
            size="lg"
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Us: {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
