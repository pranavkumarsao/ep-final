import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import logo from "figma:asset/1c87df128a6d245a47d853c159c41e6e6df2811a.png";

const serviceLinks = [
  { label: "Consumer & Market Intelligence", path: "/services/consumer-intelligence" },
  { label: "Brand, Communication & Media", path: "/services/brand-communication" },
  { label: "Product, Innovation & Experience", path: "/services/product-innovation" },
  { label: "AI + Human Intelligence", path: "/services/ai-human-intelligence" },
  { label: "Integrated Solutions", path: "/services/integrated-solutions" },
];

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Philosophy", path: "/philosophy" },
  { label: "How We Work", path: "/how-we-work" },
  { label: "Leadership", path: "/leadership" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith("/services");

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
            {/* About */}
            <Link
              to="/about"
              className={`text-xs font-medium tracking-widest uppercase whitespace-nowrap transition-colors ${
                location.pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary active:text-primary"
              }`}
            >
              About
            </Link>

            {/* Philosophy */}
            <Link
              to="/philosophy"
              className={`text-xs font-medium tracking-widest uppercase whitespace-nowrap transition-colors ${
                location.pathname === "/philosophy"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary active:text-primary"
              }`}
            >
              Philosophy
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-xs font-medium tracking-widest uppercase whitespace-nowrap transition-colors ${
                  isServicesActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary active:text-primary"
                }`}
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-background border border-border shadow-lg py-2 z-50"
                  >
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-5 py-2.5 text-xs font-medium transition-colors ${
                          location.pathname === item.path
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining nav links */}
            {navLinks.slice(2).map((link) => (
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
              <Link
                to="/about"
                className={`block py-3 text-xs font-medium tracking-widest uppercase transition-colors ${
                  location.pathname === "/about" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
              <Link
                to="/philosophy"
                className={`block py-3 text-xs font-medium tracking-widest uppercase transition-colors ${
                  location.pathname === "/philosophy" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Philosophy
              </Link>

              {/* Mobile Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full py-3 text-xs font-medium tracking-widest uppercase transition-colors ${
                    isServicesActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 border-l border-primary/20"
                    >
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block py-2.5 text-xs font-medium transition-colors ${
                            location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-xs font-medium tracking-widest uppercase transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 pb-1">
                <Link
                  to="/work-with-us"
                  className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:bg-[hsl(235_70%_35%)] transition-colors"
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
