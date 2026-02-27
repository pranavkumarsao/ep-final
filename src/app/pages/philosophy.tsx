import { motion } from "motion/react";
import { Compass, Expand, Filter, Network, Users2 } from "lucide-react";
import { Link } from "react-router";

const bentoDimensions = [
  {
    dim: "Ways of Knowing",
    metaphor: "The Governing Principle",
    holds: "Methods without hierarchy.",
    experience: "Every question earns the method it truly demands.",
    hover: "Qual, Quant, Semiotics, Sensory, Neuro, Cultural Analysis, Design Research — every question earns the method it truly demands.",
    icon: Network,
    large: true,
  },
  {
    dim: "Vantage",
    metaphor: "The Perch",
    holds: "Cross-sector vision.",
    experience: "Multi-time horizons.",
    hover: "Cross-sector pattern recognition across three time horizons — what happened, what's happening, what's emerging.",
    icon: Compass,
    large: false,
  },
  {
    dim: "Scale",
    metaphor: "The Zoom",
    holds: "From horizon to shelf.",
    experience: "Altitude. Accuracy. Action. Agility.",
    hover: "Boardroom strategy to shelf-level detail; Tier 1–3 geographic coverage.",
    icon: Expand,
    large: false,
  },
  {
    dim: "Expertise",
    metaphor: "The Team",
    holds: "Disciplines in dialogue.",
    experience: "Tension. Integration. Clarity.",
    hover: "Multigenerational, multidisciplinary specialists with equity of voice as operating principle.",
    icon: Users2,
    large: false,
  },
  {
    dim: "Stakeholder",
    metaphor: "The Filter",
    holds: "Commercial. Human. Systemic.",
    experience: "Built to last.",
    hover: "Every recommendation stress-tested: commercially viable + consumer-real + category-sustainable.",
    icon: Filter,
    large: false,
  },
];

export default function Philosophy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Philosophy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-primary-gradient">Eagle</span> Perspective
            </h1>
            <p className="text-lg text-primary leading-relaxed">
              Plurality is the input. Singularity is the output.
              <br />
              Strategy is the destination.
            </p>
            <div className="section-divider-center mt-8" />
          </div>
        </div>
      </section>

      {/* Eagle Metaphor */}
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
              <p className="text-xl text-foreground font-semibold">
                An eagle does not see the world in fragments.
              </p>
              <p>
                From its vantage point, it integrates distance, depth, movement, and contrast into a
                single coherent view. It filters relentlessly—ignoring what does not matter, focusing only
                on what does. And when it acts, it acts with precision.
              </p>
              <p className="text-foreground font-medium">
                At Eagle Perspectives, this philosophy shapes how we think, how we work, and how we advise.
              </p>
            </div>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                We believe plurality of perspectives is essential. No single dataset, methodology, or
                analytical lens can explain modern markets. Quantitative data must be complemented by
                qualitative depth. AI-enabled pattern recognition must be interpreted through experience
                and commercial understanding.
              </p>
              <p>
                However, <strong className="text-foreground">plurality without convergence creates paralysis.</strong> Too often,
                organisations are left with multiple truths and no clear direction. Different teams draw
                different conclusions from the same evidence.
              </p>
              <p className="text-primary font-medium text-sm">
                The Eagle Perspective is about seeing widely—and acting decisively.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Five Dimensions Bento Grid */}
      <section className="py-6 md:py-8 lg:py-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-5 md:mb-6">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Dimensions of Plurality</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Five Dimensions of <span className="text-primary-gradient">Plurality</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hover over each card to reveal the deeper explanation.
            </p>
            <div className="section-divider mt-4" />
          </div>

          {/* Bento Grid — Desktop: cross/plus layout */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-1.5 bg-primary/10 h-[600px]">
            {/* Row 1: empty — Vantage — empty */}
            <div className="bg-background" />
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="group relative overflow-hidden bg-secondary/20 cursor-default">
              <div className="p-3 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-base font-bold text-primary/10 leading-none block">02</span>
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/50 mt-0.5 block">{bentoDimensions[1].dim}</span>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center bg-primary/10 text-primary shrink-0"><Compass className="h-3.5 w-3.5" /></span>
                </div>
                <h3 className="text-sm font-bold mb-2">{bentoDimensions[1].metaphor}</h3>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mb-0.5">What It Holds</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{bentoDimensions[1].holds}</p>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mt-2 mb-0.5">Client Experience</p>
                <p className="text-[11px] text-foreground font-medium">{bentoDimensions[1].experience}</p>
              </div>
              <div className="absolute inset-0 p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-2 block">{bentoDimensions[1].dim} · {bentoDimensions[1].metaphor}</span>
                <p className="text-xs text-primary-foreground leading-relaxed font-medium">{bentoDimensions[1].hover}</p>
              </div>
            </motion.div>
            <div className="bg-background" />

            {/* Row 2: Expertise — Ways of Knowing — Scale */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="group relative overflow-hidden bg-secondary/20 cursor-default">
              <div className="p-3 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-base font-bold text-primary/10 leading-none block">04</span>
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/50 mt-0.5 block">{bentoDimensions[3].dim}</span>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center bg-primary/10 text-primary shrink-0"><Users2 className="h-3.5 w-3.5" /></span>
                </div>
                <h3 className="text-sm font-bold mb-2">{bentoDimensions[3].metaphor}</h3>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mb-0.5">What It Holds</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{bentoDimensions[3].holds}</p>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mt-2 mb-0.5">Client Experience</p>
                <p className="text-[11px] text-foreground font-medium">{bentoDimensions[3].experience}</p>
              </div>
              <div className="absolute inset-0 p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-2 block">{bentoDimensions[3].dim} · {bentoDimensions[3].metaphor}</span>
                <p className="text-xs text-primary-foreground leading-relaxed font-medium">{bentoDimensions[3].hover}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden bg-background border border-primary/25 cursor-default">
              <div className="p-3 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-base font-bold text-primary/20 leading-none block">01</span>
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/70 mt-0.5 block">{bentoDimensions[0].dim}</span>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center bg-primary/15 text-primary shrink-0"><Network className="h-3.5 w-3.5" /></span>
                </div>
                <h3 className="text-sm font-bold mb-2">{bentoDimensions[0].metaphor}</h3>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mb-0.5">What It Holds</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{bentoDimensions[0].holds}</p>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mt-2 mb-0.5">Client Experience</p>
                <p className="text-[11px] text-foreground font-medium">{bentoDimensions[0].experience}</p>
              </div>
              <div className="absolute inset-0 p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-2 block">{bentoDimensions[0].dim} · {bentoDimensions[0].metaphor}</span>
                <p className="text-xs text-primary-foreground leading-relaxed font-medium">{bentoDimensions[0].hover}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="group relative overflow-hidden bg-secondary/20 cursor-default">
              <div className="p-3 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-base font-bold text-primary/10 leading-none block">03</span>
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/50 mt-0.5 block">{bentoDimensions[2].dim}</span>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center bg-primary/10 text-primary shrink-0"><Expand className="h-3.5 w-3.5" /></span>
                </div>
                <h3 className="text-sm font-bold mb-2">{bentoDimensions[2].metaphor}</h3>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mb-0.5">What It Holds</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{bentoDimensions[2].holds}</p>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mt-2 mb-0.5">Client Experience</p>
                <p className="text-[11px] text-foreground font-medium">{bentoDimensions[2].experience}</p>
              </div>
              <div className="absolute inset-0 p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-2 block">{bentoDimensions[2].dim} · {bentoDimensions[2].metaphor}</span>
                <p className="text-xs text-primary-foreground leading-relaxed font-medium">{bentoDimensions[2].hover}</p>
              </div>
            </motion.div>

            {/* Row 3: empty — Stakeholder — empty */}
            <div className="bg-background" />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="group relative overflow-hidden bg-secondary/20 cursor-default">
              <div className="p-3 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-base font-bold text-primary/10 leading-none block">05</span>
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/50 mt-0.5 block">{bentoDimensions[4].dim}</span>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center bg-primary/10 text-primary shrink-0"><Filter className="h-3.5 w-3.5" /></span>
                </div>
                <h3 className="text-sm font-bold mb-2">{bentoDimensions[4].metaphor}</h3>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mb-0.5">What It Holds</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{bentoDimensions[4].holds}</p>
                <p className="text-[10px] text-primary/40 font-medium tracking-[0.15em] uppercase mt-2 mb-0.5">Client Experience</p>
                <p className="text-[11px] text-foreground font-medium">{bentoDimensions[4].experience}</p>
              </div>
              <div className="absolute inset-0 p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-primary-foreground/60 mb-2 block">{bentoDimensions[4].dim} · {bentoDimensions[4].metaphor}</span>
                <p className="text-xs text-primary-foreground leading-relaxed font-medium">{bentoDimensions[4].hover}</p>
              </div>
            </motion.div>
            <div className="bg-background" />
          </div>

          {/* Mobile: simple stacked grid */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="sm:col-span-2 group relative overflow-hidden rounded-none bg-background border border-primary/25 hover:border-primary/45 active:border-primary/45 transition-colors cursor-default min-h-[170px]">
              <div className="p-3 sm:p-4 h-full flex flex-col gap-2 transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary/60 border border-primary/20 bg-primary/5 px-3 py-1 rounded-none">{bentoDimensions[0].dim}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-none bg-primary/10 text-primary"><Network className="h-4 w-4" /></span>
                </div>
                <h3 className="text-base font-bold">{bentoDimensions[0].metaphor}</h3>
                <p className="text-xs text-muted-foreground">{bentoDimensions[0].holds}</p>
                <p className="text-xs text-foreground font-medium">{bentoDimensions[0].experience}</p>
              </div>
              <div className="absolute inset-0 p-3 sm:p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center overflow-y-auto opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <p className="text-xs sm:text-sm text-primary-foreground leading-relaxed font-medium">{bentoDimensions[0].hover}</p>
              </div>
            </motion.div>
            {bentoDimensions.slice(1).map((item, index) => (
              <motion.div key={index + 1} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (index + 1) * 0.07 }} className="group relative overflow-hidden rounded-none bg-secondary/40 border border-primary/20 hover:border-primary/40 active:border-primary/40 transition-colors cursor-default min-h-[160px]">
                <div className="p-3 sm:p-4 h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary/60 border border-primary/20 bg-primary/5 px-3 py-1 rounded-none">{item.dim}</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-none bg-primary/10 text-primary"><item.icon className="h-4 w-4" /></span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">{item.metaphor}</h3>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">{item.holds}</p>
                    <p className="text-[11px] text-foreground font-medium mt-1">{item.experience}</p>
                  </div>
                </div>
                <div className="absolute inset-0 p-3 sm:p-4 bg-gradient-to-br from-primary to-[hsl(235_70%_35%)] flex flex-col justify-center overflow-y-auto opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                  <p className="text-xs sm:text-sm text-primary-foreground leading-relaxed font-medium">{item.hover}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Guiding Principles</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary-gradient">guiding principles</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Plurality is Essential",
                description:
                  "No single dataset, methodology, or analytical lens can explain modern markets. Quantitative data must be complemented by qualitative depth. Structured data must be balanced with unstructured signals. AI-enabled pattern recognition must be interpreted through experience, context, and commercial understanding.",
              },
              {
                num: "02",
                title: "Convergence Prevents Paralysis",
                description:
                  "Plurality without convergence creates paralysis. Too often, organisations are left with multiple truths and no clear direction. Different teams draw different conclusions from the same evidence. Insights accumulate without resolution. Strategy discussions extend without alignment.",
              },
              {
                num: "03",
                title: "We Take Responsibility",
                description:
                  "We take responsibility for strategy-led convergence. We integrate evidence, experience, and business reality to arrive at one clear way forward. We make trade-offs explicit. We articulate risks and implications. And we commit to a recommendation.",
              },
              {
                num: "04",
                title: "Decisive Action",
                description:
                  "We do not present options without guidance. We do not leave prioritisation to chance. The Eagle Perspective is about seeing widely—and acting decisively. We help leaders move forward with confidence.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-5 sm:p-8 border border-border hover:border-primary/20 active:border-primary/20 transition-colors"
              >
                <span className="text-4xl font-bold text-primary/10 block mb-4">{item.num}</span>
                <h3 className="text-base font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">What Makes Us Different</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Designed to <span className="text-primary-gradient">converge</span>, not just inform
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="space-y-0">
            {[
              {
                title: "Integration Over Production",
                description:
                  "Most insight organisations optimise for production—more studies, more dashboards, more outputs. Eagle Perspectives is optimised for decision-making.",
              },
              {
                title: "Multiple Inputs, One Narrative",
                description:
                  "We are deliberately structured to integrate multiple inputs into one narrative, balance speed with rigour, and combine AI-enabled intelligence with human strategic leadership.",
              },
              {
                title: "Ownership of Synthesis",
                description:
                  "We take ownership of synthesis and implication. Our clients value us because we do not stop at insight. We move decisively toward strategy.",
              },
              {
                title: "Senior-Led Throughout",
                description:
                  "Every engagement is shaped and led by senior practitioners with decades of experience across categories and markets. This ensures consistency, relevance, and strategic depth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-8 border-b border-border"
              >
                <div className="grid grid-cols-[60px_1fr] gap-4">
                  <span className="text-3xl font-bold text-primary/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-14 md:py-20 lg:py-28 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(235_65%_55%)] font-medium mb-6">
            Our Commitment
          </p>
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-background/80">
            "Like the eagle, we operate from a higher vantage point. We scan widely across markets,
            categories, cultures, and signals. We see patterns early, connect dots across disciplines,
            and distinguish what matters from what does not. But perspective alone is not enough.{" "}
            <span className="text-[hsl(235_65%_55%)]">What defines the eagle is its ability to act with precision.</span>"
          </blockquote>
          <p className="text-sm text-background/50">That philosophy defines everything we do.</p>
        </div>
      </section>
    </div>
  );
}
