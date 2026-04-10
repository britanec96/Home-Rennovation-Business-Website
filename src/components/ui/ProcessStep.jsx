export default function ProcessStep({ number, title, description, isLast = false }) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <span className="mb-3 font-serif text-5xl text-sage/30">{number}</span>
      <h3 className="mb-2 text-lg font-semibold text-charcoal">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-warm-gray">{description}</p>
      {!isLast && (
        <div className="absolute top-6 left-full hidden h-px w-full -translate-x-1/2 bg-border lg:block" />
      )}
    </div>
  );
}
