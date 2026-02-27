import { motion } from "motion/react";
import { Cpu, Brain, Zap, Shield } from "lucide-react";
import { Link } from "react-router";

export default function AIHumanIntelligence() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="relative py-14 md:py-20 lg:py-28 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-6">
              Services
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            >
              AI + Human
              <br />
              <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Scale through technology. Direction through strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              AI has transformed what is possible in insights—enabling faster processing, broader
              coverage, and deeper pattern detection across massive datasets.
            </p>
            <p className="text-foreground text-2xl font-medium">
              However, AI does not replace strategy.
            </p>
            <p>
              At Eagle Perspectives, we use AI to expand the field of vision—to see more, faster, and
              across more dimensions than ever before. But human expertise ensures contextual
              interpretation, strategic prioritisation, and alignment with commercial reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Balance */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-10 md:mb-16 text-center"
          >
            The <span className="text-primary">balanced approach</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What AI Enables</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Analyse large and complex datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Integrate structured and unstructured inputs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Detect early signals and emerging patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Process information at unprecedented speed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What Human Expertise Ensures</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Contextual interpretation and nuance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Strategic prioritisation and judgment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Alignment with commercial reality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Ethical considerations and responsibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-10 md:mb-16"
          >
            Our <span className="text-primary">capabilities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Advanced Analytics",
                description: "Sophisticated modeling, forecasting, and predictive analytics to anticipate market movements.",
              },
              {
                icon: Brain,
                title: "Pattern Detection",
                description: "AI-powered analysis to identify trends, anomalies, and opportunities across complex data landscapes.",
              },
              {
                icon: Shield,
                title: "Responsible AI",
                description: "Ethical application of AI tools with transparency, privacy protection, and human oversight.",
              },
              {
                icon: Cpu,
                title: "Integration at Scale",
                description: "Seamless combination of quantitative, qualitative, and unstructured data sources.",
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 active:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Commitment */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Our commitment
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are committed to responsible data usage, participant privacy and consent, and ethical
                application of AI-enabled tools. Our work adheres to global standards of research
                integrity and responsible intelligence.
              </p>
              <p className="text-foreground text-xl font-medium">
                AI expands the field of vision. Strategy determines the direction of movement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 sm:p-10 md:p-14 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Harness intelligence at scale
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's explore how AI and human intelligence can unlock new insights for your organisation.
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
