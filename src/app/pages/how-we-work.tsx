import { motion } from "motion/react";
import { Compass, Layers, Lightbulb, CheckCircle, Users, Shield } from "lucide-react";
import { Link } from "react-router";

export default function HowWeWork() {
  const process = [
    {
      number: "01",
      title: "Strategic Framing",
      description:
        "We align on decision scope, success criteria, time horizons, and key uncertainties. This creates a shared definition of the problem.",
    },
    {
      number: "02",
      title: "Insight Architecture Design",
      description:
        "We determine which lenses are essential, which data sources are required, and where depth is needed versus breadth. This ensures efficient use of time and resources.",
    },
    {
      number: "03",
      title: "Integrated Analysis",
      description:
        "Inputs are analysed both independently and collectively. Contradictions are explored rather than ignored. Patterns are tested across lenses.",
    },
    {
      number: "04",
      title: "Strategy-led Convergence",
      description:
        "We integrate findings into clear strategic choices, explicit trade-offs, and prioritised pathways. We take responsibility for recommending a way forward.",
    },
    {
      number: "05",
      title: "Implications & Alignment",
      description:
        "We articulate what this strategy enables, what it deprioritises, and what changes in behaviour or investment are required. Outputs are designed to align leadership teams and enable execution.",
    },
  ];

  const engagementTypes = [
    {
      icon: Lightbulb,
      title: "Rapid Strategic Sprints",
      subtitle: "When time is of the essence",
      description:
        "Designed for time-sensitive decisions, market shocks, or sudden change. These engagements deliver focused insight and clear direction within compressed timelines.",
      timeline: "2-4 weeks",
    },
    {
      icon: Layers,
      title: "Deep Strategic Programmes",
      subtitle: "When stakes are high",
      description:
        "Designed for category redefinition, portfolio strategy resets, or market entry initiatives. These engagements integrate multiple lenses over time to support high-stakes decisions.",
      timeline: "2-6 months",
    },
    {
      icon: Users,
      title: "Ongoing Strategic Partnerships",
      subtitle: "When continuous insight matters",
      description:
        "Designed for organisations that need continuous sensing of change, strategic interpretation over time, and a trusted external perspective. We act as an extension of leadership teams.",
      timeline: "Ongoing retainer",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6">
              How We Work
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <span className="text-primary">Decision-led by design.</span> Every engagement begins with
              clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Starting Point */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              At Eagle Perspectives, every engagement begins with a simple but critical discipline:{" "}
              <span className="text-foreground font-semibold">
                clarifying the decision that needs to be made.
              </span>
            </p>
            <p>
              Too many insight programmes start with methodologies, tools, or data availability. We start
              with intent. We work with clients to define:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {[
                "What decision is being contemplated",
                "Why it matters now",
                "What happens if the decision is delayed",
                "What the cost of being wrong looks like",
                "What constraints must be respected",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Our Strategic <span className="text-primary">Synthesis Model</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-14 max-w-3xl">
            Turning plurality into one way forward through a disciplined, five-stage process.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 sm:space-x-6 p-5 sm:p-7 bg-secondary border border-border rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-2xl font-semibold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Engagement <span className="text-primary">Types</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-14 max-w-3xl">
            Flexible by design. Rigorous by default. Our engagements are modular and tailored to client
            needs, timelines, and constraints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {engagementTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <type.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{type.title}</h3>
                <p className="text-primary text-sm mb-3 sm:mb-4">{type.subtitle}</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6 flex-1">{type.description}</p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Timeline: {type.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Governance */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
              Quality, Governance & <span className="text-primary">Data Integrity</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              Trust is built through discipline. Accuracy and integrity are non-negotiable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Rigorous Quality Assurance",
                  items: [
                    "Rigorous partner and panel selection",
                    "Robust data validation protocols",
                    "Multi-layered quality checks",
                    "Transparent documentation of assumptions",
                  ],
                },
                {
                  icon: CheckCircle,
                  title: "Ethical Standards",
                  items: [
                    "Responsible data usage",
                    "Participant privacy and consent",
                    "Ethical application of AI-enabled tools",
                    "Global research integrity standards",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-secondary border border-border rounded-xl p-6 sm:p-8"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <section.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
              Ready to get started?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Let's discuss your challenge and explore how our approach can help.
            </p>
            <Link
              to="/work-with-us"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-sm sm:text-base"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
