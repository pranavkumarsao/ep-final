import { motion } from "motion/react";
import { Award, MessageSquare, BarChart3, Target } from "lucide-react";
import { Link } from "react-router";

export default function BrandCommunication() {
  const services = [
    {
      icon: Award,
      title: "Brand Equity & Diagnostic Assessment",
      description:
        "We assess brand strength through awareness, consideration, and usage, differentiation and relevance, emotional connection and trust, and competitive positioning. The objective is not to score brands, but to identify levers for strategic action.",
    },
    {
      icon: Target,
      title: "Brand Positioning & Architecture",
      description:
        "We help define clear brand positioning territories, brand architecture across portfolios, and roles of master brands, sub-brands, and variants. Positioning is treated as a strategic asset that guides long-term decision-making.",
    },
    {
      icon: MessageSquare,
      title: "Communication Development & Evaluation",
      description:
        "We support idea and concept development, pre-launch evaluation, and post-launch effectiveness tracking. Creative is assessed not just for likeability, but for its ability to drive strategic objectives.",
    },
    {
      icon: BarChart3,
      title: "Media & ROI Intelligence",
      description:
        "We evaluate media channel effectiveness, budget allocation efficiency, and balance between short-term activation versus long-term brand building. Outputs help optimise investment while maintaining strategic coherence.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
              Brand & Communication
              <br />
              <span className="text-primary">Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Building brands that remain relevant under pressure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
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
              Brands today operate under constant scrutiny. Consumers expect relevance, authenticity, and
              value—while competition increases and attention spans shorten.
            </p>
            <p className="text-foreground text-xl font-medium">
              Our Brand & Communication work helps organisations make clear strategic choices about brand
              meaning, messaging, and investment.
            </p>
            <p>
              We don't just measure brand health—we diagnose strategic opportunities and guide decisions
              that build lasting brand value in dynamic markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-16"
          >
            Our <span className="text-primary">approach</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12"
          >
            What we <span className="text-primary">prioritise</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Strategic Clarity Over Scores",
                description:
                  "We don't just measure brand metrics—we identify what drives them and what actions will move them in strategically meaningful ways.",
              },
              {
                title: "Long-Term Value Creation",
                description:
                  "We balance short-term performance needs with long-term brand building, ensuring investment decisions support sustainable growth.",
              },
              {
                title: "Creative Effectiveness",
                description:
                  "We evaluate creative work not just for likeability, but for its ability to change behaviour and drive business outcomes.",
              },
              {
                title: "Portfolio Coherence",
                description:
                  "We ensure brand architecture and positioning decisions create clarity in the market and efficiency in execution.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Build a brand that endures
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how brand and communication strategy can drive your business forward.
            </p>
            <Link
              to="/work-with-us"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}