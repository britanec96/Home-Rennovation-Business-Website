// Portfolio data — images imported via Vite's import.meta.glob
// Each folder in /assets/Projects maps to one project inside a category.

function toImageArray(globResult) {
  return Object.values(globResult)
    .map((mod) => mod.default)
    .sort();
}

// ── Raw image imports per folder ──────────────────────────────────────────────
const bathImgs = import.meta.glob("../assets/Projects/bath/*.{jpg,JPG}", { eager: true });
const bthr2Imgs = import.meta.glob("../assets/Projects/bthr2/*.{jpg,JPG}", { eager: true });
const wrdImgs = import.meta.glob("../assets/Projects/wrd/*.{jpg,JPG}", { eager: true });
const wdr2Imgs = import.meta.glob("../assets/Projects/wdr2/*.{jpg,JPG}", { eager: true });
const kiraWrdrImgs = import.meta.glob("../assets/Projects/kira wrdr/*.{jpg,JPG}", { eager: true });
const ktchImgs = import.meta.glob("../assets/Projects/ktch hrgt/*.{jpg,JPG}", { eager: true });
const lvgImgs = import.meta.glob("../assets/Projects/lvg/*.{jpg,JPG}", { eager: true });
const mediaWImgs = import.meta.glob("../assets/Projects/media w/*.{jpg,JPG}", { eager: true });
const housImgs = import.meta.glob("../assets/Projects/hous wrngt/*.{jpg,JPG}", { eager: true });
const fltImgs = import.meta.glob("../assets/Projects/flt altrch/*.{jpg,JPG}", { eager: true });
const oldFlatImgs = import.meta.glob("../assets/Projects/old flat pctr/*.{jpg,JPG}", { eager: true });
const florImgs = import.meta.glob("../assets/Projects/flor slfd/*.{jpg,JPG}", { eager: true });
const doorImgs = import.meta.glob("../assets/Projects/door stocp/*.{jpg,JPG}", { eager: true });
const selvsImgs = import.meta.glob("../assets/Projects/selvs room paint cpp/*.{jpg,JPG}", { eager: true });
const crdrImgs = import.meta.glob("../assets/Projects/crdr/*.{jpg,JPG}", { eager: true });

// ── Portfolio categories & projects ──────────────────────────────────────────
export const portfolioCategories = [
  {
    id: "kitchens",
    slug: "kitchens",
    title: "Kitchens",
    description: "From modern handleless designs to classic shaker styles — built to last.",
    icon: "kitchen",
    projects: [
      {
        id: "heritage-kitchen",
        slug: "heritage-kitchen",
        title: "Heritage Kitchen Renovation",
        location: "Manchester",
        images: toImageArray(ktchImgs),
      },
    ],
  },
  {
    id: "bathrooms",
    slug: "bathrooms",
    title: "Bathrooms",
    description: "Stylish bathrooms and en-suites with expert plumbing, tiling, and finishing.",
    icon: "bathroom",
    projects: [
      {
        id: "modern-bathroom",
        slug: "modern-bathroom",
        title: "Modern Bathroom Refit",
        location: "Manchester",
        images: toImageArray(bathImgs),
      },
      {
        id: "luxury-ensuite",
        slug: "luxury-ensuite",
        title: "Luxury En-Suite Renovation",
        location: "Manchester",
        images: toImageArray(bthr2Imgs),
      },
    ],
  },
  {
    id: "wardrobes",
    slug: "wardrobes",
    title: "Wardrobes & Storage",
    description: "Bespoke fitted wardrobes and storage solutions designed to perfectly suit your space.",
    icon: "wardrobes",
    projects: [
      {
        id: "fitted-wardrobe",
        slug: "fitted-wardrobe",
        title: "Fitted Wardrobe Installation",
        location: "Manchester",
        images: toImageArray(wrdImgs),
      },
      {
        id: "bespoke-bedroom-storage",
        slug: "bespoke-bedroom-storage",
        title: "Bespoke Bedroom Storage",
        location: "Manchester",
        images: toImageArray(wdr2Imgs),
      },
      {
        id: "walk-in-wardrobe",
        slug: "walk-in-wardrobe",
        title: "Walk-In Wardrobe Design",
        location: "Manchester",
        images: toImageArray(kiraWrdrImgs),
      },
    ],
  },
  {
    id: "living-rooms",
    slug: "living-rooms",
    title: "Living Rooms",
    description: "Open-plan conversions, media walls, and complete living space transformations.",
    icon: "refurbishment",
    projects: [
      {
        id: "contemporary-living",
        slug: "contemporary-living",
        title: "Contemporary Living Room",
        location: "Manchester",
        images: toImageArray(lvgImgs),
      },
      {
        id: "media-wall",
        slug: "media-wall",
        title: "Media Wall & Living Space",
        location: "Manchester",
        images: toImageArray(mediaWImgs),
      },
    ],
  },
  {
    id: "full-renovations",
    slug: "full-renovations",
    title: "Full Renovations",
    description: "Complete property transformations from floor to ceiling — we manage every detail.",
    icon: "refurbishment",
    projects: [
      {
        id: "full-house-worrall",
        slug: "full-house-worrall",
        title: "Full House Renovation",
        location: "Manchester",
        images: toImageArray(housImgs),
      },
      {
        id: "flat-altrincham",
        slug: "flat-altrincham",
        title: "Complete Flat Refurbishment",
        location: "Altrincham",
        images: toImageArray(fltImgs),
      },
      {
        id: "period-property",
        slug: "period-property",
        title: "Period Property Renovation",
        location: "Manchester",
        images: toImageArray(oldFlatImgs),
      },
      {
        id: "flooring-project",
        slug: "flooring-project",
        title: "Flooring & Interiors Project",
        location: "Manchester",
        images: toImageArray(florImgs),
      },
      {
        id: "interior-fitout",
        slug: "interior-fitout",
        title: "Complete Interior Fit-Out",
        location: "Stockport",
        images: toImageArray(doorImgs),
      },
    ],
  },
  {
    id: "painting-decorating",
    slug: "painting-decorating",
    title: "Painting & Decorating",
    description: "Professional painting, feature walls, and decorating to refresh any room.",
    icon: "design",
    projects: [
      {
        id: "feature-room-shelving",
        slug: "feature-room-shelving",
        title: "Feature Room & Shelving",
        location: "Manchester",
        images: toImageArray(selvsImgs),
      },
      {
        id: "hallway-corridor",
        slug: "hallway-corridor",
        title: "Hallway & Corridor Refresh",
        location: "Manchester",
        images: toImageArray(crdrImgs),
      },
    ],
  },
];

// Helper: find a category by slug
export function getCategoryBySlug(slug) {
  return portfolioCategories.find((c) => c.slug === slug) || null;
}

// Helper: find a project by category slug + project slug
export function getProjectBySlug(categorySlug, projectSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.projects.find((p) => p.slug === projectSlug) || null;
}
