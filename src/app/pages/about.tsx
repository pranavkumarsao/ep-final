import { motion } from "motion/react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Built for complexity.{" "}
              <span className="text-primary-gradient">Designed for decisiveness.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We bridge the widening gap between complexity and decisiveness.
            </p>
            <div className="section-divider mt-8" />
          </div>
        </div>
      </section>

      {/* Market Reality */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl"
            >
              The structure of markets has fundamentally changed
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  Consumers today do not behave in linear or predictable ways. Their choices vary by
                  context, occasion, channel, price sensitivity, and cultural environment. Brand
                  relationships are fluid rather than fixed. Loyalty is conditional. Attention is
                  fragmented. Expectations are shaped by experiences across categories, not just within
                  them.
                </p>
                <p>
                  At the same time, organisations face unprecedented pressure to move faster, innovate
                  continuously, and justify every investment with measurable impact. Decisions that once
                  unfolded over years are now compressed into months—or weeks. The cost of being wrong has
                  increased, even as the tolerance for delay has declined.
                </p>
              </div>
              <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p className="text-foreground font-semibold text-lg">
                  Despite this complexity, one requirement remains unchanged: organisations still need
                  singular strategies.
                </p>
                <p>
                  They need clarity on where to play and where not to. They need prioritisation when
                  resources are constrained. They need alignment across leadership teams.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Role</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We are a <span className="text-primary-gradient">one-stop insights</span> and strategic intelligence
              partner
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Designed to integrate diverse perspectives without passing complexity on to our clients. We
              deliberately combine multiple methodologies, data sources, analytical approaches, and expert
              viewpoints—and translate them into coherent, actionable strategy.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Pattern Recognition",
                description:
                  "Decades of cross-category experience give us pattern recognition that goes beyond individual studies or datasets.",
              },
              {
                title: "Commercial Context",
                description:
                  "We contextualise signals, challenge surface-level conclusions, and frame insights in commercially meaningful ways.",
              },
              {
                title: "Strategic Partnership",
                description:
                  "We are not a data vendor or research factory. We are a strategic partner for leaders who value rigour, integration, and clarity.",
              },
              {
                title: "Cross-Category Expertise",
                description:
                  "Experience across consumer goods, services, technology, financial services, healthcare, retail, and emerging categories.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-8 border border-border hover:border-primary/20 transition-colors"
              >
                <h3 className="text-base font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Commitment</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                At Eagle Perspectives, insight is not the end product
              </h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="pt-8 space-y-3 border-l-2 border-primary/20 pl-8 max-w-lg">
              {[
                "Insight leads to strategy",
                "Strategy leads to action",
                "Action defines impact",
              ].map((item, i) => (
                <p key={i} className="text-foreground font-medium text-sm">{item}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Clients</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who we work with
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Consumer goods and services",
              "Financial services and fintech",
              "Technology and platforms",
              "Healthcare and wellness",
              "Retail and e-commerce",
              "Emerging and adjacent categories",
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-3 p-5 border border-border hover:border-primary/30 transition-colors"
              >
                <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm text-foreground/90">{category}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-base text-muted-foreground leading-relaxed max-w-3xl"
          >
            We support both established leaders and challengers navigating growth, disruption, or
            transformation. Our clients value us when data exists but clarity does not, when
            perspectives are fragmented, and when decisions carry significant risk.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
