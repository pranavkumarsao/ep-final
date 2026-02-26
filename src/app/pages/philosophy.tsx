import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 sm:mb-8">
              The Eagle Perspective
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary leading-relaxed">
              Plurality is the input. Singularity is the output.
              <br className="hidden sm:block" />
              {" "}Strategy is the destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eagle Metaphor */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p className="text-xl sm:text-2xl text-foreground font-medium">
              An eagle does not see the world in fragments.
            </p>

            <p>
              From its vantage point, it integrates distance, depth, movement, and contrast into a
              single coherent view. It filters relentlessly—ignoring what does not matter, focusing only
              on what does. And when it acts, it acts with precision.
            </p>

            <p className="text-foreground">
              At Eagle Perspectives, this philosophy shapes how we think, how we work, and how we advise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dimensions Carousel */}
      <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-br from-background via-secondary/20 to-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-14 text-center"
          >
            Five Dimensions of <span className="text-primary">Plurality</span>
          </motion.h2>

          <div className="dimensions-carousel -mx-4 sm:-mx-6 lg:-mx-8">
            <style>{`
              .dimensions-carousel .slick-slider {
                margin: 0 auto;
              }
              .dimensions-carousel .slick-list {
                overflow: visible;
                padding: 20px 0 60px 0;
              }
              .dimensions-carousel .slick-track {
                display: flex !important;
                align-items: stretch;
              }
              .dimensions-carousel .slick-slide {
                height: auto;
                display: flex;
              }
              .dimensions-carousel .slick-slide > div {
                width: 100%;
                display: flex;
              }
              .dimensions-carousel .slick-dots {
                bottom: 0;
                position: relative;
                margin-top: 24px;
              }
              .dimensions-carousel .slick-dots li button:before {
                font-size: 10px;
                color: hsl(235 65% 45%);
                opacity: 0.3;
              }
              .dimensions-carousel .slick-dots li.slick-active button:before {
                color: hsl(235 65% 45%);
                opacity: 1;
              }
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
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {pentagonPoints.map((point, index) => (
                <div key={index} className="px-3 sm:px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-border rounded-xl p-6 sm:p-8 min-h-[240px] sm:min-h-[280px] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow h-full"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-14 text-center">
            Our <span className="text-primary">guiding principles</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: ArrowRight,
                title: "Plurality is Essential",
                description:
                  "No single dataset, methodology, or analytical lens can explain modern markets. Quantitative data must be complemented by qualitative depth. Structured data must be balanced with unstructured signals. AI-enabled pattern recognition must be interpreted through experience, context, and commercial understanding.",
              },
              {
                icon: ChevronLeft,
                title: "Convergence Prevents Paralysis",
                description:
                  "Plurality without convergence creates paralysis. Too often, organisations are left with multiple truths and no clear direction. Different teams draw different conclusions from the same evidence. Insights accumulate without resolution. Strategy discussions extend without alignment.",
              },
              {
                icon: ChevronRight,
                title: "We Take Responsibility",
                description:
                  "We take responsibility for strategy-led convergence. We integrate evidence, experience, and business reality to arrive at one clear way forward. We make trade-offs explicit. We articulate risks and implications. And we commit to a recommendation.",
              },
              {
                icon: ArrowRight,
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
                className="bg-secondary border border-border rounded-xl p-6 sm:p-8 lg:p-10"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
            Designed to <span className="text-primary">converge</span>, not just inform
          </h2>

          <div className="space-y-5 sm:space-y-6">
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
                className="border-l-4 border-primary pl-5 sm:pl-6 py-3 sm:py-4"
              >
                <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <blockquote className="text-lg sm:text-2xl md:text-3xl leading-relaxed mb-6 sm:mb-8 text-foreground">
              "Like the eagle, we operate from a higher vantage point. We scan widely across markets,
              categories, cultures, and signals. We see patterns early, connect dots across disciplines,
              and distinguish what matters from what does not. But perspective alone is not enough.{" "}
              <span className="text-primary">What defines the eagle is its ability to act with precision.</span>"
            </blockquote>
            <p className="text-base sm:text-lg text-muted-foreground">That philosophy defines everything we do.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
