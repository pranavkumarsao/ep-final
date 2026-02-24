import { motion } from "motion/react";
import { Globe, TrendingUp, Users, Map, ShoppingCart, Target } from "lucide-react";
import { Link } from "react-router";

export default function ConsumerIntelligence() {
  const services = [
    {
      icon: Globe,
      title: "Market Entry & Expansion Strategy",
      description:
        "We support market entry and expansion decisions by integrating market sizing, demand assessment, competitive intensity, pricing dynamics, and regulatory considerations. The output is a clear recommendation—go, delay, sequence, or exit—supported by evidence and strategic reasoning.",
    },
    {
      icon: Map,
      title: "Market Structure & Opportunity Mapping",
      description:
        "We map markets to reveal core and peripheral segments, value pools and margin dynamics, consumption occasions and unmet needs, and white spaces versus over-served zones. This enables organisations to focus resources where they can realistically build advantage.",
    },
    {
      icon: Users,
      title: "Consumer Understanding & Behavioural Insight",
      description:
        "We explore needs, tensions, and unmet expectations. We examine motivations and decision drivers, barriers to trial, adoption, and switching, and behaviour across moments and occasions. Insight is always translated into strategic implication.",
    },
    {
      icon: Target,
      title: "Segmentation & Strategic Personas",
      description:
        "We design segmentations that are strategically meaningful, distinct and stable over time, and easy to activate across functions. Personas are built as decision tools, not marketing artefacts—guiding innovation, communication, and channel strategy.",
    },
    {
      icon: ShoppingCart,
      title: "Shopper, Channel & Path-to-Purchase",
      description:
        "We analyse awareness and consideration triggers, channel roles and switching behaviour, conversion drivers and friction points, and in-store, online, and hybrid experiences. Outputs directly inform go-to-market and activation strategy.",
    },
    {
      icon: TrendingUp,
      title: "Category & Competitive Intelligence",
      description:
        "We provide deep understanding of category dynamics, competitive movements, and market forces. This helps organisations anticipate change, identify threats early, and position strategically relative to competition.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
              Consumer & Market
              <br />
              <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Seeing markets as systems, not snapshots
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
              Markets today are not static entities. They are dynamic systems shaped by economic
              conditions, cultural shifts, technological change, regulation, and evolving consumer
              expectations. Understanding them requires more than point-in-time measurement—it requires
              interpretation across contexts and trajectories.
            </p>
            <p className="text-foreground text-xl font-medium">
              Our Consumer & Market Intelligence practice is designed to help organisations understand
              where to play, why it matters, and how to win.
            </p>
            <p>
              We go beyond describing markets to explain how they are structured, where pressure points
              exist, and how opportunity is likely to evolve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-16"
          >
            How we <span className="text-primary">help</span>
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

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to understand your market?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's explore how consumer and market intelligence can drive your strategic decisions.
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