import { useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../data/navigation";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-charcoal transition-all duration-300 lg:hidden ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 flex h-9 w-9 items-center justify-center text-white"
        aria-label="Close menu"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Nav links */}
      <nav className="flex h-full flex-col items-center justify-center gap-8">
        {navItems.map((item) =>
          item.type === "route" ? (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className="text-2xl font-medium text-white transition-colors hover:text-sage"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-2xl font-medium text-white transition-colors hover:text-sage"
            >
              {item.label}
            </a>
          )
        )}
        <div className="mt-4">
          <WhatsAppButton text="Get a Free Quote" size="lg" />
        </div>
      </nav>
    </div>
  );
}
