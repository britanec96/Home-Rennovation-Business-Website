import { useState } from "react";

export default function BeforeAfterSlider({ caption, beforeImage, afterImage }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
        {/* Before side */}
        <div className="absolute inset-0 bg-border">
          {beforeImage && (
            <img src={beforeImage} alt="Before" className="h-full w-full object-cover" />
          )}
          <span className="absolute left-4 top-4 rounded-full bg-charcoal/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Before
          </span>
        </div>

        {/* After side */}
        <div
          className="absolute inset-0 bg-light-gray"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          {afterImage && (
            <img src={afterImage} alt="After" className="h-full w-full object-cover" />
          )}
          <span className="absolute right-4 top-4 rounded-full bg-sage/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            After
          </span>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-md"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-sage text-white shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Range input */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Before and after comparison slider"
        />
      </div>

      {caption && (
        <p className="mt-4 text-center text-sm text-warm-gray">{caption}</p>
      )}
    </div>
  );
}
