import { Link } from "react-router-dom";
import { portfolioCategories } from "../data/portfolio";
import { siteConfig } from "../data/siteConfig";
import WhatsAppButton from "../components/ui/WhatsAppButton";

export default function PortfolioPage() {
  const totalProjects = portfolioCategories.reduce((sum, c) => sum + c.projects.length, 0);

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Hero banner */}
      <div className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="mb-4 inline-block rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Our Work
          </span>
          <h1 className="mb-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="max-w-xl text-base text-white/60 md:text-lg">
            Browse {totalProjects} completed projects across {portfolioCategories.length} categories.
            From individual rooms to full property renovations.
          </p>
        </div>
      </div>

      {/* Category grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCategories.map((category) => {
            const coverImage = category.projects[0]?.images[0];
            return (
              <Link
                key={category.id}
                to={`/portfolio/${category.slug}`}
                className="group relative overflow-hidden rounded-xl bg-charcoal shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Cover image */}
                <div className="aspect-4/3 w-full overflow-hidden">
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={category.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-charcoal-light" />
                  )}
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

                {/* Project count badge */}
                <span className="absolute right-4 top-4 rounded-full bg-sage px-3 py-1 text-xs font-semibold text-white">
                  {category.projects.length} {category.projects.length === 1 ? "project" : "projects"}
                </span>

                {/* Category info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="mb-1 font-serif text-2xl text-white">{category.title}</h2>
                  <p className="text-sm text-white/60 line-clamp-2">{category.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sage">
                    View projects
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-xl bg-charcoal px-8 py-12 text-center">
          <h2 className="mb-3 font-serif text-2xl text-white md:text-3xl">
            Ready to transform your space?
          </h2>
          <p className="mb-8 text-white/60">
            Get in touch for a free, no-obligation quote.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton text="Get a Free Quote" size="lg" />
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
