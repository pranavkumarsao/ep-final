import { Link } from "react-router";
import { Mail, Twitter } from "lucide-react";
import logo from "figma:asset/1c87df128a6d245a47d853c159c41e6e6df2811a.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand — full width on smallest screens */}
          <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Eagle Perspectives"
                className="h-9 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Converting complexity into clarity—and clarity into strategy.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Consumer & Market Intelligence", path: "/services/consumer-intelligence" },
                { label: "Brand & Communication", path: "/services/brand-communication" },
                { label: "Product & Innovation", path: "/services/product-innovation" },
                { label: "AI + Human Intelligence", path: "/services/ai-human-intelligence" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Philosophy", path: "/philosophy" },
                { label: "How We Work", path: "/how-we-work" },
                { label: "Leadership", path: "/leadership" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:insights@eagleperspectives.in"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-start space-x-2"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="break-all">insights@eagleperspectives.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-4 pt-1">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2026 Eagle Perspectives. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Data Integrity
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
