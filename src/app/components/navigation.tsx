import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import logo from "figma:asset/1c87df128a6d245a47d853c159c41e6e6df2811a.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Philosophy", path: "/philosophy" },
    { label: "What We Solve", path: "/what-we-solve" },
    { label: "What We Bring", path: "/what-we-bring" },
    { label: "How We Work", path: "/how-we-work" },
    { label: "Leadership", path: "/leadership" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[76rem] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Eagle Perspectives" className="h-[3.75rem] md:h-[4.5rem] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium tracking-widest uppercase whitespace-nowrap transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary active:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/work-with-us"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase whitespace-nowrap hover:bg-[hsl(235_70%_35%)] active:bg-[hsl(235_70%_35%)] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-5 h-px bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-xs font-medium tracking-widest uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary active:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  to="/work-with-us"
                  className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:bg-[hsl(235_70%_35%)] active:bg-[hsl(235_70%_35%)] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
