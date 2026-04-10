import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images = [], title = "" }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(new Set([0]));

  const prev = useCallback(() => {
    setCurrent((i) => {
      const next = i === 0 ? images.length - 1 : i - 1;
      setLoaded((s) => new Set([...s, next]));
      return next;
    });
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => {
      const next = i === images.length - 1 ? 0 : i + 1;
      setLoaded((s) => new Set([...s, next]));
      return next;
    });
  }, [images.length]);

  const goTo = useCallback((i) => {
    setLoaded((s) => new Set([...s, i]));
    setCurrent(i);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  // Preload adjacent image on mount and whenever current changes
  useEffect(() => {
    const nextIdx = current === images.length - 1 ? 0 : current + 1;
    const prevIdx = current === 0 ? images.length - 1 : current - 1;
    setLoaded((s) => new Set([...s, nextIdx, prevIdx]));
  }, [current, images.length]);

  if (!images.length) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-light-gray text-warm-gray">
        No photos available
      </div>
    );
  }

  // Dot navigation — show up to 9 dots, collapse the middle if more
  const showDots = images.length > 1 && images.length <= 20;
  const showCounter = images.length > 20;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-charcoal shadow-2xl">
      {/* Image stack — only images that have been visited are in the DOM */}
      <div className="relative aspect-[4/3] w-full md:aspect-video">
        {images.map((src, i) => {
          if (!loaded.has(i)) return null;
          return (
            <img
              key={i}
              src={src}
              alt={`${title} — photo ${i + 1} of ${images.length}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              decoding="async"
            />
          );
        })}

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal/70 to-transparent pointer-events-none" />

        {/* Counter (always visible) */}
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-charcoal/60 px-4 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/60 text-white backdrop-blur-sm transition-all hover:bg-charcoal/90 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/60 text-white backdrop-blur-sm transition-all hover:bg-charcoal/90 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators (≤20 photos) */}
      {showDots && (
        <div className="flex justify-center gap-1.5 py-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current ? "w-6 bg-sage" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* For large sets — just show prev/next with counter, no dots */}
      {showCounter && (
        <div className="flex items-center justify-center gap-6 py-4">
          <button
            onClick={prev}
            className="text-xs text-white/50 transition-colors hover:text-white"
          >
            ← Prev
          </button>
          <span className="text-xs text-white/30">
            Use arrow keys or buttons to navigate
          </span>
          <button
            onClick={next}
            className="text-xs text-white/50 transition-colors hover:text-white"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
