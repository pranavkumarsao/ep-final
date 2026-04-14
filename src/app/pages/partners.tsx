import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Decrypt",
    logo: "/partners/decrypt.png",
    url: "https://decryptint.com/",
    logoClass: "max-h-20",
  },
  {
    name: "Purple Audacity",
    logo: "/partners/purple-audacity.png",
    url: "https://www.purpleaudacity.com/",
    logoClass: "max-h-20",
  },
  {
    name: "Eval360",
    logo: "/partners/eval360.png",
    url: "https://eval360r.com/",
    logoClass: "max-h-20",
  },
  {
    name: "The Alchemic",
    logo: "/partners/capsule.webp",
    url: "https://thealchemic.com/",
    logoClass: "max-h-8",
  },
  {
    name: "Aisles & Shelves",
    logo: "/partners/aisles-shelves.jpeg",
    url: "",
    logoClass: "max-h-14",
  },
  {
    name: "Crisp",
    logo: "/partners/crisp.png",
    url: "",
    logoClass: "max-h-14",
  },
];

const constellationWings = [
  {
    label: "The Specialist Wing",
    tagline: "Range and depth where the brief demands it",
    body: "We have curated a consortium of domain and methodology specialists across the disciplines that modern client briefs require — neuromarketing, semiotics, sensory science, behavioural design, and more. Each partner brings independent authority in their field. And as new domains emerge, the constellation expands.",
  },
  {
    label: "The Sharp Eye",
    tagline: "Focused expertise that spots what others miss",
    body: "Senior practitioners with decades of category, market, or functional context that no dataset can replicate. They work directly with leadership teams, not through layers.",
  },
  {
    label: "The Ground Grip",
    tagline: "Precision and hold where it matters most",
    body: "On-ground research operations across India and key Asian markets, curated for accuracy and agility. The right scale, the right rigour, the right speed — matched to what each engagement demands.",
  },
  {
    label: "The Tailwind",
    tagline: "Momentum without drag",
    body: "AI-enabled intelligence, advanced modelling, and data architecture that gives every engagement speed and analytical reach without compromising interpretive depth.",
  },
];

export default function Partners() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Partners</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Constellation Behind{" "}
              <span className="text-primary-gradient">Every Engagement</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Eagle Perspectives is not a single firm stretching across capabilities. It is a research
              intelligence consortium — a fluid network of specialist organisations and senior
              practitioners, assembled around the question that needs answering.
            </p>
            <div className="section-divider-center mt-8" />
          </div>
        </div>
      </section>

      {/* Constellation Wings */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {constellationWings.map((wing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background border border-border p-5 sm:p-8 hover:border-primary/30 active:border-primary/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus-within:scale-x-100 active:scale-x-100 transition-transform origin-left duration-300" />
                <h3 className="text-xl font-bold mb-1">{wing.label}</h3>
                <p className="text-sm text-primary font-medium tracking-wide mb-4 italic">
                  {wing.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{wing.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl font-bold leading-snug mb-6">
              No fixed rosters. No standing overheads.
              <br />
              No generalists where specialists are needed.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Every constellation is shaped by the client's brief — and the team that frames the question
              is the team that presents the answer.
            </p>
            <div className="section-divider-center mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">The Constellation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary-gradient">Partner Organisations</span>
            </h2>
            <div className="section-divider-center mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background border border-border p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/30 active:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`${partner.logoClass} max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300`}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 lg:py-28 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(235_65%_55%)] font-medium mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
            The right constellation
            <br />
            for every question.
          </h2>
          <p className="text-base text-background/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Every engagement is shaped by the client's brief. Tell us yours, and we'll assemble the right team.
          </p>
          <Link
            to="/work-with-us"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-[hsl(235_65%_55%)] active:bg-[hsl(235_65%_55%)] transition-colors"
          >
            Start a Strategic Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
