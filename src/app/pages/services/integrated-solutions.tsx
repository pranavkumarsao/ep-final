import { motion } from "motion/react";
import { Link } from "react-router";
import { Layers, Link as LinkIcon, Target, TrendingUp } from "lucide-react";

export default function IntegratedSolutions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-6">
              Services
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6"
            >
              Integrated
              <br />
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Designed to converge, not fragment
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Many organisations struggle because insights arrive in silos—consumer, brand, innovation,
              media, analytics—each telling a different story. Teams draw different conclusions.
              Leadership discussions extend without resolution. Decisions are delayed.
            </p>
            <p className="text-foreground text-2xl font-medium">
              This is precisely the problem Eagle Perspectives was designed to solve.
            </p>
            <p>
              Our integrated solutions bring multiple lenses together, resolve contradictions, and deliver
              one coherent narrative. The outcome is alignment, confidence, and momentum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Integrate */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-16"
          >
            What we <span className="text-primary">integrate</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Layers,
                title: "Multiple Methodologies",
                description:
                  "Quantitative data, qualitative depth, behavioral analysis, and AI-enabled pattern detection—integrated into a single strategic view.",
              },
              {
                icon: LinkIcon,
                title: "Cross-Functional Perspectives",
                description:
                  "Consumer insights, market intelligence, brand diagnostics, innovation inputs, and commercial realities—aligned into one coherent strategy.",
              },
              {
                icon: Target,
                title: "Short-Term and Long-Term",
                description:
                  "Immediate performance needs and long-term strategic positioning—balanced to support sustainable growth and competitive advantage.",
              },
              {
                icon: TrendingUp,
                title: "Global and Local Context",
                description:
                  "Market-level dynamics, regional nuances, and global patterns—synthesized to inform decisions that work across contexts.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary border border-border rounded-xl p-8 hover:border-primary/30 active:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Integrated Programmes */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12"
          >
            Examples of <span className="text-primary">integrated programmes</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Growth Strategy Development",
                description:
                  "Combining market sizing, competitive analysis, consumer insight, and innovation pipeline assessment to define where and how to grow.",
              },
              {
                title: "Brand Portfolio Strategy",
                description:
                  "Integrating brand equity measurement, positioning analysis, consumer segmentation, and media effectiveness to optimise brand architecture and investment.",
              },
              {
                title: "Category Redefinition",
                description:
                  "Synthesizing consumer needs evolution, competitive movements, technological disruption, and regulatory changes to redefine category boundaries and opportunity spaces.",
              },
              {
                title: "Market Entry Assessment",
                description:
                  "Combining market structure analysis, consumer demand validation, competitive intensity mapping, and operational feasibility to inform go/no-go decisions.",
              },
              {
                title: "Innovation Portfolio Optimization",
                description:
                  "Integrating consumer unmet needs, technology possibilities, competitive gaps, and commercial viability to prioritize innovation investments.",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-8"
            >
              The outcome
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 text-lg">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-primary font-semibold">1</span>
                  </div>
                  <p className="text-left text-muted-foreground flex-1">
                    <span className="font-semibold text-foreground">Alignment:</span> Leadership teams share
                    a common understanding and speak the same language
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-primary font-semibold">2</span>
                  </div>
                  <p className="text-left text-muted-foreground flex-1">
                    <span className="font-semibold text-foreground">Confidence:</span> Decisions are made
                    with clarity about trade-offs and implications
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-primary font-semibold">3</span>
                  </div>
                  <p className="text-left text-muted-foreground flex-1">
                    <span className="font-semibold text-foreground">Momentum:</span> Organisations move
                    forward rather than remaining stuck in analysis
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              From complexity to clarity
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how integrated solutions can drive alignment and momentum in your organisation.
            </p>
            <Link
              to="/work-with-us"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:bg-primary/90 transition-all duration-300 font-medium"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}