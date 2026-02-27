import { motion } from "motion/react";
import { Lightbulb, Package, DollarSign, Sparkles } from "lucide-react";
import { Link } from "react-router";

export default function ProductInnovation() {
  const services = [
    {
      icon: Lightbulb,
      title: "Innovation Strategy & Opportunity Identification",
      description:
        "We identify opportunities by integrating consumer unmet needs, market gaps and white spaces, competitive activity, and technology and feasibility constraints. This ensures innovation efforts are focused and prioritised.",
    },
    {
      icon: Package,
      title: "Concept, Product & Service Development",
      description:
        "We support idea screening and refinement, concept validation, and product, pack, and service testing. Feedback is translated into clear direction for optimisation or progression.",
    },
    {
      icon: DollarSign,
      title: "Pricing & Revenue Strategy",
      description:
        "We help organisations define willingness to pay, price elasticity, and revenue-maximising price points. Pricing is treated as a strategic lever, not an afterthought.",
    },
    {
      icon: Sparkles,
      title: "Experience & Sensory Intelligence",
      description:
        "We support customer experience evaluation, sensory testing across touchpoints, and employee experience insight. Experience is assessed for its ability to reinforce brand and drive loyalty.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
              Product, Innovation &
              <br />
              <span className="text-primary">Strategic Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Reducing risk while accelerating progress
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
              Innovation remains one of the most critical—and risky—growth levers for organisations. The
              challenge is not generating ideas, but selecting the right ones and executing them
              effectively.
            </p>
            <p className="text-foreground text-xl font-medium">
              We support innovation as a strategic portfolio, not a series of isolated experiments.
            </p>
            <p>
              Our approach reduces risk by testing assumptions early, prioritising opportunities based on
              strategic fit and commercial potential, and translating insights into clear direction for
              development teams.
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
            How we <span className="text-primary">accelerate innovation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary border border-border rounded-xl p-8 hover:border-primary/30 active:border-primary/30 transition-all duration-300"
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

      {/* Innovation Philosophy */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12"
          >
            Our innovation <span className="text-primary">philosophy</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Portfolio Thinking",
                description:
                  "We help organisations balance breakthrough innovations, adjacency plays, and core optimisation—ensuring the portfolio supports both short-term performance and long-term growth.",
              },
              {
                title: "Commercial Realism",
                description:
                  "Innovation ideas are assessed not just for novelty, but for strategic fit, feasibility, scalability, and commercial viability. We help you invest in ideas that can actually win.",
              },
              {
                title: "Rapid Learning Cycles",
                description:
                  "We design testing approaches that maximise learning while minimising time and cost. Early feedback prevents costly mistakes downstream.",
              },
              {
                title: "Experience as Differentiation",
                description:
                  "Product performance alone is rarely enough. We help organisations design experiences that create meaningful differentiation and build lasting preference.",
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
              Innovate with confidence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how to accelerate your innovation agenda while managing risk.
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