import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Philosophy() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const pentagonPoints = [
    {
      title: "The Governing Principle",
      description: "Qual, Quant, Semiotics, Sensory, Neuro, Cultural Analysis, Design Research",
    },
    {
      title: "The Perch",
      description: "Cross-sector pattern recognition + three time horizons (what happened, what's happening, what's emerging)",
    },
    {
      title: "The Zoom",
      description: "Boardroom strategy to shelf-level detail; Tier 1–3 geographic coverage",
    },
    {
      title: "The Team Architecture",
      description: "Multigenerational, multidisciplinary specialists with equity of voice as operating principle",
    },
    {
      title: "The Durability Filter",
      description: "Every recommendation stress-tested: commercially viable + consumer-real + category-sustainable",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
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
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20"
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

      {/* Five Dimensions Carousel */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Dimensions of Plurality</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Five Dimensions of <span className="text-primary-gradient">Plurality</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="dimensions-carousel -mx-4 sm:-mx-6 lg:-mx-8">
            <style>{`
              .dimensions-carousel .slick-slider { margin: 0 auto; }
              .dimensions-carousel .slick-list { overflow: visible; padding: 20px 0 60px 0; }
              .dimensions-carousel .slick-track { display: flex !important; align-items: stretch; }
              .dimensions-carousel .slick-slide { height: auto; display: flex; }
              .dimensions-carousel .slick-slide > div { width: 100%; display: flex; }
              .dimensions-carousel .slick-dots { bottom: 0; position: relative; margin-top: 24px; }
              .dimensions-carousel .slick-dots li button:before { font-size: 10px; color: hsl(235 65% 45%); opacity: 0.3; }
              .dimensions-carousel .slick-dots li.slick-active button:before { color: hsl(235 65% 45%); opacity: 1; }
            `}</style>
            <Slider
              dots={true}
              infinite={true}
              speed={600}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              arrows={false}
              centerMode={false}
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
              ]}
            >
              {pentagonPoints.map((point, index) => (
                <div key={index} className="px-3 sm:px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    onMouseEnter={() => setHoveredPoint(index)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    className="bg-background border border-border p-8 min-h-[240px] flex flex-col justify-center items-center text-center hover:border-primary/30 transition-colors h-full"
                  >
                    <h3 className="text-base font-semibold mb-3 text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
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
                className="bg-background p-8 border border-border hover:border-primary/20 transition-colors"
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
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
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
      <section className="py-24 lg:py-32 bg-foreground">
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
