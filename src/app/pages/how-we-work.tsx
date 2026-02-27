import { motion } from "motion/react";

const process = [
  {
    number: "01",
    title: "Strategic Framing",
    desc: "We align on decision scope, success criteria, time horizons, and key uncertainties. This creates a shared definition of the problem before any methodology is chosen.",
  },
  {
    number: "02",
    title: "Insight Architecture Design",
    desc: "We determine which lenses are essential, which data sources are required, and where depth is needed versus breadth. This ensures efficient use of time and resources.",
  },
  {
    number: "03",
    title: "Integrated Analysis",
    desc: "Inputs are analysed both independently and collectively. Contradictions are explored rather than ignored. Patterns are tested across lenses to surface what is signal, not noise.",
  },
  {
    number: "04",
    title: "Strategy-led Convergence",
    desc: "We integrate findings into clear strategic choices, explicit trade-offs, and prioritised pathways. Eagle Perspectives takes responsibility for recommending a way forward—not presenting options without guidance.",
  },
  {
    number: "05",
    title: "Implications & Alignment",
    desc: "We articulate what the strategy enables, what it deprioritises, and what changes in behaviour or investment are required. Outputs are designed to align leadership teams and enable execution.",
  },
];

const engagementTypes = [
  {
    title: "Rapid Strategic Sprints",
    subtitle: "When time is of the essence",
    description:
      "Designed for time-sensitive decisions, market shocks, or sudden change. These engagements deliver focused insight and clear direction within compressed timelines—without sacrificing rigour.",
    timeline: "2–4 weeks",
  },
  {
    title: "Deep Strategic Programmes",
    subtitle: "When the stakes are high",
    description:
      "Designed for category redefinition, portfolio strategy resets, or market entry initiatives. Multiple lenses integrated over time to support high-stakes, high-consequence decisions.",
    timeline: "2–6 months",
  },
  {
    title: "Ongoing Strategic Partnerships",
    subtitle: "When continuous insight matters",
    description:
      "Designed for organisations that need continuous sensing of change, strategic interpretation over time, and a trusted external perspective. We act as an extension of the leadership team.",
    timeline: "Ongoing retainer",
  },
];

const operatingPrinciples = [
  {
    title: "Senior leadership throughout",
    desc: "Every engagement is shaped and led by senior practitioners. No hand-offs to junior teams at the critical synthesis stage.",
  },
  {
    title: "Dedicated teams, client-aligned",
    desc: "Teams are assembled and aligned to client context—not rotated through generic pools. Continuity enables better thinking.",
  },
  {
    title: "Agile workflows, clear milestones",
    desc: "We work in structured phases with clear deliverables and decision points—flexible enough to adapt, disciplined enough to deliver.",
  },
  {
    title: "Continuous client collaboration",
    desc: "We engage clients throughout—not just at the start and end. Insight improves when context is shared early and often.",
  },
];

export default function HowWeWork() {
  return (
    <div className="pt-24 lg:pt-28">

      {/* ── Hero ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">How We Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-gradient">Strategic Synthesis</span> Model
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Decision-led by design.</span>{" "}
              Every engagement begins not with methodology—but with the decision that needs to be made.
            </p>
            <div className="section-divider-center mt-8" />
          </div>
        </div>
      </section>

      {/* ── Where We Begin ── */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mb-10 md:mb-14">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Where We Begin</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Every engagement begins by clarifying the decision
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Too many insight programmes start with methodologies, tools, or data availability.
                We start with intent. We work with clients to define the challenge before designing
                the solution.
              </p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  At Eagle Perspectives, every engagement begins with a simple but critical discipline:{" "}
                  <span className="text-foreground font-semibold">
                    clarifying the decision that needs to be made.
                  </span>
                </p>
                <p>
                  This shapes everything that follows—what we measure, how deeply we look, which
                  lenses matter, and what success looks like. The quality of the answer depends
                  entirely on the precision of the question.
                </p>
                <p className="text-sm text-primary font-medium">
                  From question to strategy. Clearly.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 font-medium mb-4">
                  We work with clients to define
                </p>
                {[
                  "What decision is being contemplated",
                  "Why it matters now",
                  "What happens if the decision is delayed",
                  "What the cost of being wrong looks like",
                  "What constraints must be respected",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background border border-border hover:border-primary/20 transition-colors">
                    <span className="text-xs font-bold text-primary/30 flex-shrink-0 w-4">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Five-Stage Model ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turning plurality into{" "}
              <span className="text-primary-gradient">one way forward</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              A disciplined five-stage synthesis model that takes responsibility for convergence—not
              just for production of insight.
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
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-border group hover:border-primary/20 transition-colors"
              >
                <span className="text-3xl md:text-5xl font-bold text-primary/10 group-hover:text-primary/30 transition-colors leading-none pt-1">
                  {step.number}
                </span>
                <div className="py-1">
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Types ── */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Engagement Types</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible by design.{" "}
              <span className="text-primary-gradient">Rigorous by default.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Our engagements are modular and tailored to client needs, timelines, and constraints.
              The structure changes. The standard does not.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-1.5">
            {engagementTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="bg-background border border-border p-6 sm:p-8 hover:border-primary/20 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="text-3xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors block mb-5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold mb-1">{type.title}</h3>
                <p className="text-xs text-primary font-medium tracking-wide mb-4">{type.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{type.description}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs text-foreground/40 uppercase tracking-widest font-medium">Timeline</span>
                  <p className="text-sm font-semibold mt-1">{type.timeline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operating Model ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Operating Model</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for agility{" "}
                <span className="text-primary-gradient">without compromise</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                How we structure engagements reflects our belief that quality of thinking is
                inseparable from quality of process. Senior involvement, client proximity, and
                disciplined delivery are not optional extras—they are built into how we operate.
              </p>
              <div className="section-divider" />
            </motion.div>
            <div className="space-y-0">
              {operatingPrinciples.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="py-6 border-b border-border"
                >
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality & Governance ── */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Standards</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality, Governance &{" "}
              <span className="text-primary-gradient">Data Integrity</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Trust is built through discipline. Every deliverable is senior-reviewed.
              Accuracy and integrity are non-negotiable.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-1.5">
            {[
              {
                title: "Rigorous Quality Assurance",
                items: [
                  "Rigorous partner and panel selection",
                  "Robust data validation protocols",
                  "Multi-layered quality checks at every stage",
                  "Transparent documentation of assumptions",
                  "Every deliverable is senior-reviewed before release",
                ],
              },
              {
                title: "Ethics & Responsible Insights",
                items: [
                  "Responsible data usage at every stage",
                  "Participant privacy and informed consent",
                  "Ethical application of AI-enabled tools",
                  "Adherent to global research integrity standards",
                  "Curated data ecosystem reducing bias and fraud",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-border p-6 sm:p-8 hover:border-primary/20 transition-colors"
              >
                <h3 className="text-base font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
