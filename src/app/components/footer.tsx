import { Link } from "react-router";
import { Mail, Twitter } from "lucide-react";
import logo from "figma:asset/1c87df128a6d245a47d853c159c41e6e6df2811a.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Eagle Perspectives" className="h-10 w-auto" />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Converting complexity into clarity—and clarity into strategy.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Philosophy", path: "/philosophy" },
                { label: "How We Work", path: "/how-we-work" },
                { label: "Leadership", path: "/leadership" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-xs text-muted-foreground hover:text-primary transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:insights@eagleperspectives.in"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-start gap-2"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span className="break-all">insights@eagleperspectives.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 pt-1">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Eagle Perspectives. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Data Integrity
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-1 sm:mt-2 text-center sm:text-left">
            Plurality in Perspectives. Singularity in Strategy.
          </p>
        </div>
      </div>
    </footer>
  );
}
