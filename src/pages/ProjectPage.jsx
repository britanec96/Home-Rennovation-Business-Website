import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategoryBySlug, getProjectBySlug } from "../data/portfolio";
import Carousel from "../components/ui/Carousel";
import WhatsAppButton from "../components/ui/WhatsAppButton";

export default function ProjectPage() {
  const { category: categorySlug, project: projectSlug } = useParams();
  const navigate = useNavigate();

  const category = getCategoryBySlug(categorySlug);
  const project = getProjectBySlug(categorySlug, projectSlug);

  if (!category || !project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="mb-4 text-warm-gray">Project not found.</p>
          <Link to="/portfolio" className="text-sage hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Find adjacent projects in same category for prev/next navigation
  const siblings = category.projects;
  const currentIndex = siblings.findIndex((p) => p.slug === projectSlug);
  const prevProject = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const nextProject = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Top bar with breadcrumbs */}
      <div className="bg-charcoal py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/40">
            <Link to="/portfolio" className="transition-colors hover:text-white/70">
              Portfolio
            </Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link
              to={`/portfolio/${category.slug}`}
              className="transition-colors hover:text-white/70"
            >
              {category.title}
            </Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white/70">{project.title}</span>
          </nav>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="mb-2 font-serif text-3xl text-white md:text-4xl">{project.title}</h1>
              <p className="flex items-center gap-1.5 text-sm text-white/50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {project.location}
                <span className="mx-1 text-white/20">·</span>
                <span className="rounded-sm bg-sage/20 px-2 py-0.5 text-sage">{category.title}</span>
              </p>
            </div>
            <span className="text-sm text-white/40">{project.images.length} photos</span>
          </div>
        </div>
      </div>

      {/* Carousel section */}
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14">
        <Carousel images={project.images} title={project.title} />

        {/* Prev / Next project navigation */}
        {(prevProject || nextProject) && (
          <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
            {prevProject ? (
              <button
                onClick={() => navigate(`/portfolio/${category.slug}/${prevProject.slug}`)}
                className="group flex items-center gap-3 text-left"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-warm-gray transition-all group-hover:border-sage group-hover:text-sage">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-warm-gray">Previous</p>
                  <p className="text-sm font-medium text-charcoal group-hover:text-sage">{prevProject.title}</p>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <button
                onClick={() => navigate(`/portfolio/${category.slug}/${nextProject.slug}`)}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-warm-gray">Next</p>
                  <p className="text-sm font-medium text-charcoal group-hover:text-sage">{nextProject.title}</p>
                </div>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-warm-gray transition-all group-hover:border-sage group-hover:text-sage">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </button>
            ) : (
              <div />
            )}
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-14 rounded-xl bg-charcoal px-8 py-10 text-center">
          <h2 className="mb-2 font-serif text-2xl text-white">Like what you see?</h2>
          <p className="mb-6 text-white/60">
            Get in touch for a free quote — no obligation, no pressure.
          </p>
          <WhatsAppButton text="Get a Free Quote" size="lg" />
        </div>
      </div>
    </div>
  );
}
