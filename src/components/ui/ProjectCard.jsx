export default function ProjectCard({ title, location, service, slug }) {
  return (
    <a
      href={`#${slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden bg-border">
        <div className="flex h-full items-center justify-center text-sm text-warm-gray transition-transform duration-300 group-hover:scale-103">
          Project Photo
        </div>
      </div>
      <div className="p-5">
        <span className="mb-2 inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sage">
          {service}
        </span>
        <h3 className="font-sans text-lg font-semibold text-charcoal">{title}</h3>
        <p className="mt-1 text-sm text-warm-gray">{location}</p>
      </div>
    </a>
  );
}
