import { motion } from "motion/react";
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
      title: "Rapid Strategic Sprints",
      subtitle: "When time is of the essence",
      description:
        "Designed for time-sensitive decisions, market shocks, or sudden change. These engagements deliver focused insight and clear direction within compressed timelines.",
      timeline: "2-4 weeks",
    },
    {
      title: "Deep Strategic Programmes",
      subtitle: "When stakes are high",
      description:
        "Designed for category redefinition, portfolio strategy resets, or market entry initiatives. These engagements integrate multiple lenses over time to support high-stakes decisions.",
      timeline: "2-6 months",
    },
    {
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
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">How We Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary-gradient">Strategic Synthesis</span> Model
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <span className="text-primary font-medium">Decision-led by design.</span> Every engagement begins with
              clarity.
            </p>
            <div className="section-divider mt-8" />
          </div>
        </div>
      </section>

      {/* Starting Point */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Where We Begin</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Every engagement begins with clarifying the decision
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  At Eagle Perspectives, every engagement begins with a simple but critical discipline:{" "}
                  <span className="text-foreground font-semibold">
                    clarifying the decision that needs to be made.
                  </span>
                </p>
                <p>
                  Too many insight programmes start with methodologies, tools, or data availability. We start
                  with intent. We work with clients to define the challenge before designing the solution.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "What decision is being contemplated",
                  "Why it matters now",
                  "What happens if the decision is delayed",
                  "What the cost of being wrong looks like",
                  "What constraints must be respected",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background border border-border">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Five-stage synthesis model
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Turning plurality into one way forward through a disciplined, five-stage process.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="space-y-0">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 py-8 border-b border-border group"
              >
                <span className="text-3xl md:text-4xl font-bold text-primary/15 group-hover:text-primary/40 transition-colors">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Engagement Types</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement <span className="text-primary-gradient">Types</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Flexible by design. Rigorous by default. Our engagements are modular and tailored to client
              needs, timelines, and constraints.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-l-2 border-primary/20 pl-5"
              >
                <h3 className="text-base font-semibold mb-1">{type.title}</h3>
                <p className="text-xs text-primary font-medium tracking-wide mb-3">{type.subtitle}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{type.description}</p>
                <p className="text-xs font-medium text-foreground">Timeline: {type.timeline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Governance */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Standards</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality, Governance & <span className="text-primary-gradient">Data Integrity</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Trust is built through discipline. Accuracy and integrity are non-negotiable.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Rigorous Quality Assurance",
                items: [
                  "Rigorous partner and panel selection",
                  "Robust data validation protocols",
                  "Multi-layered quality checks",
                  "Transparent documentation of assumptions",
                ],
              },
              {
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
                className="bg-secondary p-8 border border-border"
              >
                <h3 className="text-base font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(235_65%_55%)] font-medium mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background">
            Ready to get started?
          </h2>
          <p className="text-base text-background/60 mb-10">
            Let's discuss your challenge and explore how our approach can help.
          </p>
          <Link
            to="/work-with-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-[hsl(235_65%_55%)] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
