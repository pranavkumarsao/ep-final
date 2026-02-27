import { motion } from "motion/react";
import { Link } from "react-router";

export default function About() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Built for complexity.{" "}
              <span className="text-primary-gradient">Designed for decisiveness.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the widening gap between complexity and decisiveness—translating plural
              perspectives into singular, actionable strategy.
            </p>
            <div className="section-divider-center mt-8" />
          </div>
        </div>
      </section>

      {/* ── Market Reality ── */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The structure of markets has fundamentally changed
              </h2>
              <p>
                Consumers today do not behave in linear or predictable ways. Their choices vary by
                context, occasion, channel, price sensitivity, and cultural environment. Brand
                relationships are fluid rather than fixed. Loyalty is conditional. Attention is
                fragmented. Expectations are shaped by experiences across categories, not just within them.
              </p>
              <p>
                At the same time, organisations face unprecedented pressure to move faster, innovate
                continuously, and justify every investment with measurable impact. Decisions that once
                unfolded over years are now compressed into months—or weeks. The cost of being wrong has
                increased, even as the tolerance for delay has declined.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-primary font-semibold text-lg leading-relaxed">
                Despite this complexity, one requirement remains unchanged: organisations still need
                singular strategies.
              </p>
              <div className="space-y-3 border-l-2 border-primary/20 pl-6">
                {[
                  "Clarity on where to play and where not to",
                  "Prioritisation when resources are constrained",
                  "Alignment across leadership teams",
                  "Strategies that can be explained, defended, and executed",
                ].map((item, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                ))}
              </div>
              <p className="text-sm text-primary font-medium">
                Eagle Perspectives was founded to bridge that widening gap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Are ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Role</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A <span className="text-primary-gradient">one-stop strategic intelligence</span> partner
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              We deliberately combine multiple methodologies, data sources, analytical approaches,
              and expert viewpoints—and translate them into coherent, actionable strategy.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-1.5">
            {/* We are NOT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 md:p-10"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 font-medium mb-6">We are not</p>
              <div className="space-y-4">
                {[
                  { label: "A data vendor", desc: "We do not collect and deliver raw numbers." },
                  { label: "A research factory", desc: "We do not optimise for volume of studies." },
                  { label: "A dashboard provider", desc: "We do not stop at presenting what happened." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-5 h-px bg-border mt-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 line-through decoration-primary/40">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* We ARE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary p-8 md:p-10"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 font-medium mb-6">We are</p>
              <div className="space-y-4">
                {[
                  { label: "A strategic partner", desc: "For leaders who value rigour, integration, and clarity." },
                  { label: "Built for decisiveness", desc: "Insight leads to strategy. Strategy leads to action." },
                  { label: "Senior-led by design", desc: "Every engagement shaped by decades of cross-category experience." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-primary-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">{item.label}</p>
                      <p className="text-xs text-primary-foreground/70 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Cross-category depth ── */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start"
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pattern recognition that goes <span className="text-primary-gradient">beyond individual studies</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Decades of cross-category experience across consumer goods, services, technology,
                financial services, healthcare, retail, and emerging categories. This experience allows us
                to contextualise signals, challenge surface-level conclusions, and frame insights in
                commercially meaningful ways.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-background border border-border p-4 hover:border-primary/20 transition-colors flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-xs text-foreground/80 leading-snug">{category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── When Clients Call ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">When We're Called</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Organisations work with us when <span className="text-primary-gradient">decisions matter most</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              In these moments, organisations do not need more data. They need clarity, prioritisation,
              and a defensible strategy.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1.5">
            {[
              {
                num: "01",
                trigger: "Markets are evolving faster than planning cycles",
                desc: "When the pace of change outstrips the pace of planning, decisions get delayed—and delayed decisions have a cost.",
              },
              {
                num: "02",
                trigger: "Consumer behaviour appears contradictory or unstable",
                desc: "When the same data is being read differently by different teams, convergence is the missing ingredient.",
              },
              {
                num: "03",
                trigger: "Growth opportunities are visible but difficult to prioritise",
                desc: "When too many options exist and resources are finite, prioritisation must be defended, not just discussed.",
              },
              {
                num: "04",
                trigger: "Strategic choices carry high financial or reputational risk",
                desc: "When the cost of being wrong is high, rigour and experience matter more than speed alone.",
              },
              {
                num: "05",
                trigger: "Leadership teams need alignment, not more debate",
                desc: "When teams are interpreting the same evidence differently, one clear way forward requires synthesis, not more data.",
              },
              {
                num: "06",
                trigger: "Data exists but clarity does not",
                desc: "When dashboards and reports multiply without resolution, what's needed is convergence—not more inputs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-background border border-border p-6 hover:border-primary/20 active:border-primary/20 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors block mb-4">{item.num}</span>
                <h3 className="text-sm font-semibold mb-2 leading-snug">{item.trigger}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Clients Value ── */}
      <section className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">What Clients Value</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why clients <span className="text-primary-gradient">choose and return</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Eagle Perspectives is particularly valued when the stakes are high and the path forward
                is not obvious. We reduce complexity without oversimplifying. We integrate multiple
                perspectives into one narrative. We balance speed with depth.
              </p>
              <div className="section-divider mt-8" />
            </motion.div>
            <div className="space-y-0">
              {[
                { title: "Clear recommendations, not just insight", desc: "We do not present options without guidance. We commit to a recommendation." },
                { title: "Senior-level thinking throughout", desc: "Every engagement shaped and led by practitioners with decades of experience." },
                { title: "Balanced use of AI and human expertise", desc: "AI expands the field of vision. Strategy determines the direction of movement." },
                { title: "Flexibility without loss of rigour", desc: "Customised to client need, timeline, and constraints—without compromising quality." },
                { title: "Strategic confidence in uncertain environments", desc: "Not because uncertainty disappears, but because strategy demands commitment." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="py-5 border-b border-border flex items-start gap-4"
                >
                  <span className="text-xs font-bold text-primary/30 mt-0.5 flex-shrink-0 w-5">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-sm font-semibold mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Insight to Action ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              At Eagle Perspectives, insight is not <span className="text-primary-gradient">the end product</span>
            </h2>
            <div className="section-divider mb-12" />
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { step: "01", label: "Insight", sub: "Rigorously gathered, synthesised, and interpreted" },
                { step: "02", label: "Strategy", sub: "One clear way forward, with trade-offs made explicit" },
                { step: "03", label: "Action", sub: "Decisions aligned, confidence built, execution enabled" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="border border-border p-6 relative group hover:border-primary/20 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <span className="text-3xl font-bold text-primary/10 block mb-4">{item.step}</span>
                  <h3 className="text-base font-bold mb-2">{item.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
