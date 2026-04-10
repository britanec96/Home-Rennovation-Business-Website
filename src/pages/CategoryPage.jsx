import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategoryBySlug } from "../data/portfolio";

export default function CategoryPage() {
  const { category: categorySlug } = useParams();
  const navigate = useNavigate();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="mb-4 text-warm-gray">Category not found.</p>
          <Link to="/portfolio" className="text-sage hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Header banner */}
      <div className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/40">
            <Link to="/portfolio" className="transition-colors hover:text-white/70">
              Portfolio
            </Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white/70">{category.title}</span>
          </nav>

          <h1 className="mb-3 font-serif text-4xl text-white md:text-5xl">{category.title}</h1>
          <p className="max-w-xl text-white/60">{category.description}</p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-2 text-sm text-warm-gray transition-colors hover:text-charcoal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            All Categories
          </button>
          <span className="text-sm text-warm-gray">
            {category.projects.length} {category.projects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.projects.map((project) => {
            const thumb = project.images[0];
            return (
              <Link
                key={project.id}
                to={`/portfolio/${category.slug}/${project.slug}`}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Thumbnail */}
                <div className="aspect-4/3 w-full overflow-hidden bg-light-gray">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-warm-gray">
                      Project Photo
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-sm bg-sage/10 px-2 py-0.5 text-xs font-medium text-sage">
                    {category.title}
                  </span>
                  <h3 className="mb-1 font-serif text-xl text-charcoal">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1 text-sm text-warm-gray">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {project.location}
                    </p>
                    <span className="text-xs text-warm-gray">{project.images.length} photos</span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sage">
                    View project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
