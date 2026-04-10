const Star = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gold">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimonialCard({ quote, name, location, rating }) {
  return (
    <div className="flex flex-col rounded-lg bg-white/5 p-8">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p className="mb-6 flex-1 text-base leading-relaxed text-white/90 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-sm text-sage">{location}</p>
      </div>
    </div>
  );
}
