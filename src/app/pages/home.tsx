import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Eye, Target, Zap, Shield, Users, TrendingUp } from "lucide-react";
import heroImage from "figma:asset/247e3ff07dddc08d184eb07a6a49e501cb6583d5.png";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center grayscale"
          />
          {/* Heavy white overlay */}
          <div className="absolute inset-0 bg-white/80"></div>
          {/* Gradient: fully white at top, fading to lighter mid */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 sm:mb-6"
          >
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium tracking-wide">
              Strategic Intelligence for Modern Leaders
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-5 sm:mb-6 leading-tight text-foreground"
          >
            <span className="block">Plurality in <span className="text-primary">Perspectives.</span></span>
            <span className="block">Clarity in <span className="text-primary">Convergence.</span></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            We help organisations convert complexity into clarity—and clarity into strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              to="/work-with-us"
              className="group w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-primary/20"
            >
              <span className="font-medium text-sm sm:text-base">Start a Strategic Conversation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/philosophy"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-white border border-border text-foreground rounded-lg hover:bg-secondary/50 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
            >
              <span className="font-medium">Explore Our Approach</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center mb-10 sm:mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
            >
              The hardest thing to achieve is still{" "}
              <span className="text-primary">decisiveness</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Despite an abundance of data, tools, and analytics, organisations struggle with
              convergence. Research outputs multiply. Dashboards compete. Teams interpret the same
              signals differently. Complexity increases, but confidence does not.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              {
                icon: Eye,
                title: "The Problem",
                description: "Not the lack of information, but the lack of convergence.",
              },
              {
                icon: Target,
                title: "The Need",
                description: "Clarity, prioritisation, and a defensible strategy.",
              },
              {
                icon: Zap,
                title: "The Solution",
                description: "Strategy-led synthesis that enables confident action.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-secondary border border-border rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* When Clients Call Us */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mb-10 sm:mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
            >
              When organisations work with us
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-muted-foreground">
              We step in when clarity matters most and the path forward is not obvious.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {[
              "Markets are evolving faster than planning cycles",
              "Consumer behaviour appears contradictory or unstable",
              "Growth opportunities are visible but difficult to prioritise",
              "Strategic choices carry high financial or reputational risk",
              "Leadership teams need alignment, not more debate",
              "Decisions are delayed while data accumulates",
            ].map((scenario, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{scenario}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-10 sm:mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
            >
              What makes us <span className="text-primary">different</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              {
                icon: Target,
                title: "Designed to Converge",
                description:
                  "We integrate multiple inputs into one narrative. Our optimization is for decision-making, not production.",
              },
              {
                icon: Users,
                title: "Senior-Led by Design",
                description:
                  "Every engagement is shaped and led by senior practitioners with decades of cross-category experience.",
              },
              {
                icon: Shield,
                title: "Ownership of Synthesis",
                description:
                  "We take responsibility for strategy-led convergence. We don't leave prioritisation to chance.",
              },
              {
                icon: Zap,
                title: "AI + Human Intelligence",
                description:
                  "We combine AI-enabled pattern detection with experienced strategic leadership for clarity at scale.",
              },
              {
                icon: TrendingUp,
                title: "Flexible & Responsive",
                description:
                  "Our operating model adapts to the question at hand—fast sprints or deep strategic programmes.",
              },
              {
                icon: Eye,
                title: "The Eagle Perspective",
                description:
                  "We see widely across markets and signals, but act decisively with precision and clarity.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-secondary border border-border rounded-xl p-6 sm:p-8 hover:border-primary/30 hover:bg-secondary/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
              Navigate complexity with <span className="text-primary">clarity</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">
              When decisions matter, perspective matters. Let's define the way forward together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/work-with-us"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-primary/20"
              >
                <span className="font-medium">Start a Conversation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/leadership"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary border border-border text-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center"
              >
                <span className="font-medium">Meet the Leadership Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
