import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const decisions = [
  {
    num: "01",
    title: "Find the Space",
    question: "Where should we play next?",
    body: "Market entry, white-space identification, occasion mapping, need-state architecture. We map the landscape your competitors haven't seen yet — then size the opportunity so you can act on it.",
  },
  {
    num: "02",
    title: "Build the Brand",
    question: "What should we stand for?",
    body: "Brand positioning, architecture, communications strategy, campaign development. From brand health diagnosis to creative territory — grounded in culture, validated by data, built to move people.",
  },
  {
    num: "03",
    title: "Launch & Grow",
    question: "Will this work in market?",
    body: "Innovation pipelines, concept testing, pack optimisation, pricing architecture, launch tracking. We stress-test before you spend — and track after you launch, so the learning compounds.",
  },
  {
    num: "04",
    title: "What's Emerging",
    question: "What should we prepare for?",
    body: "Trend sensing, cultural foresight, scenario planning, early-signal detection. We read three time horizons simultaneously — what happened, what's happening, what's about to.",
  },
  {
    num: "05",
    title: "Measure What Matters",
    question: "Are we winning?",
    body: "Brand tracking, campaign effectiveness, customer experience measurement, competitive benchmarking. Not dashboards for dashboard's sake — metrics connected to the decisions they're meant to inform.",
  },
];

export default function WhatWeSolve() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Axis 1</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What Decisions <span className="text-primary-gradient">We Solve</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Start here if you know the business question. We'll assemble the right team.
            </p>
            <div className="section-divider-center mt-8" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20"
          >
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                These are the 5 client-facing entry points. Each represents a business decision a CMO,
                CEO, or strategy head brings to Eagle Perspectives. The client doesn't need to know which
                methodologies sit behind the card — they just need to recognise their question.
              </p>
            </div>
            <div>
              <p className="text-foreground text-lg font-semibold leading-relaxed">
                Your decision shapes which capabilities we assemble. Our expertise shapes how we get there.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decision Cards */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">The Five Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recognise your <span className="text-primary-gradient">question</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {decisions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-background border border-border p-5 sm:p-8 hover:border-primary/30 transition-colors group relative overflow-hidden ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="text-5xl font-bold text-primary/10 block mb-4 group-hover:text-primary/20 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-primary font-medium tracking-wide mb-4 italic">"{item.question}"</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Intersection */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-6">The Intersection</p>
            <p className="text-2xl md:text-3xl font-bold leading-snug mb-6">
              Every engagement lives at the intersection of both axes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Your decision shapes which capabilities we assemble. Our expertise shapes how we get there.
            </p>
            <div className="section-divider-center mb-10" />
            <Link
              to="/what-we-bring"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:bg-[hsl(235_70%_35%)] transition-colors"
            >
              Explore What Expertise We Bring
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 lg:py-28 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(235_65%_55%)] font-medium mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
            Know your question.
            <br />
            Let's find the answer.
          </h2>
          <p className="text-base text-background/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Start with your business question. We'll assemble the right capabilities and get you to a clear way forward.
          </p>
          <Link
            to="/work-with-us"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-[hsl(235_65%_55%)] transition-colors"
          >
            Start a Strategic Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
