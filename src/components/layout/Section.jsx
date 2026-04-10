const bgMap = {
  white: "bg-white",
  light: "bg-cream",
  dark: "bg-charcoal text-white",
  accent: "bg-sage text-white",
};

export default function Section({ id, background = "white", className = "", children }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgMap[background] || bgMap.white} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">{children}</div>
    </section>
  );
}
