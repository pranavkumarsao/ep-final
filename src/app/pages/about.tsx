import { motion } from "motion/react";
import { Building2, Globe, Lightbulb, Users } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
              Built for complexity.
              <br />
              <span className="text-primary">Designed for decisiveness.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We bridge the widening gap between complexity and decisiveness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Reality */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8"
            >
              The structure of markets has fundamentally changed
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
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
              <p className="text-foreground font-medium text-lg sm:text-xl">
                Despite this complexity, one requirement remains unchanged: organisations still need
                singular strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
              We are a <span className="text-primary">one-stop insights</span> and strategic intelligence
              partner
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Designed to integrate diverse perspectives without passing complexity on to our clients. We
              deliberately combine multiple methodologies, data sources, analytical approaches, and expert
              viewpoints—and translate them into coherent, actionable strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Pattern Recognition",
                description:
                  "Decades of cross-category experience give us pattern recognition that goes beyond individual studies or datasets.",
              },
              {
                icon: Building2,
                title: "Commercial Context",
                description:
                  "We contextualise signals, challenge surface-level conclusions, and frame insights in commercially meaningful ways.",
              },
              {
                icon: Users,
                title: "Strategic Partnership",
                description:
                  "We are not a data vendor or research factory. We are a strategic partner for leaders who value rigour, integration, and clarity.",
              },
              {
                icon: Globe,
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
                className="bg-secondary border border-border rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 sm:p-12 md:p-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              At Eagle Perspectives, insight is not the end product
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
              {[
                "Insight leads to strategy",
                "Strategy leads to action",
                "Action defines impact",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
              Who we work with
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 sm:gap-6">
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
                  className="flex items-center space-x-3 p-4 bg-secondary border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-foreground/90">{category}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 sm:mt-12 text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              We support both established leaders and challengers navigating growth, disruption, or
              transformation. Our clients value us when data exists but clarity does not, when
              perspectives are fragmented, and when decisions carry significant risk.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
