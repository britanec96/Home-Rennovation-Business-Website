const variants = {
  primary: "bg-sage text-white hover:bg-sage-dark",
  secondary: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-hover",
  white: "bg-white text-charcoal hover:bg-cream",
  "outline-white": "border border-white text-white hover:bg-white hover:text-charcoal",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  external = false,
  className = "",
  children,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
