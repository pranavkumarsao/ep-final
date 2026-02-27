import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router";
import heroImage from "@/assets/hero-eagle.jpg";
import teamImage from "@/assets/team-strategy.jpg";
import convergenceImage from "@/assets/convergence.jpg";
import nilakshiImage from "figma:asset/008ee0585922a486d8481eefd553bc58df96f193.png";
import vivekImage from "figma:asset/e314a4604007185f64e5570d9eaf158f36bd7db1.png";
import sharmilaImage from "figma:asset/d7b390df77c236edd7af98cfcfc0de6cbeaf3126.png";
import sanjayImage from "figma:asset/99f74438f5e6de35e1279b2e820e51e4ff2e8d2f.png";
import vikramImage from "figma:asset/ec0fdb2fa4f0f9f7ceb77f0bce5ef89e466acb0c.png";
import vinayImage from "figma:asset/c58f54935fbc19bb013e0870062b46e2555d68ae.png";
import vigyanImage from "figma:asset/8f5998d4cf6e8a4d3768d818eebaac5ee71f11be.png";
import ronitaImage from "figma:asset/c93f1b93c3de091194dbffdc6c47f527c3efc269.png";
import bipradeepImage from "figma:asset/66f34e1ef888f51e4e93588ff206041ef921f6f8.png";
import dipanyitaImage from "figma:asset/99398e657e579b93569ae21a3c80a85d0fa8bbcc.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Consumer & Market Intelligence",
    tagline: "Seeing markets as systems, not snapshots",
    items: [
      "Market Entry & Expansion Strategy",
      "Market Structure & Opportunity Mapping",
      "Consumer Understanding & Behavioural Insight",
      "Segmentation & Strategic Personas",
      "Shopper, Channel & Path-to-Purchase",
    ],
  },
  {
    title: "Brand, Communication & Media Strategy",
    tagline: "Building brands that remain relevant under pressure",
    items: [
      "Brand Equity & Diagnostic Assessment",
      "Brand Positioning & Architecture",
      "Communication Development & Evaluation",
      "Media & ROI Intelligence",
    ],
  },
  {
    title: "Product, Innovation & Experience",
    tagline: "Reducing risk while accelerating progress",
    items: [
      "Innovation Strategy & Opportunity Identification",
      "Concept, Product & Service Development",
      "Pricing & Revenue Strategy",
      "Experience & Sensory Intelligence",
    ],
  },
  {
    title: "AI + Human Intelligence",
    tagline: "Scale through technology. Direction through strategy.",
    items: [
      "Large-scale data analysis & pattern detection",
      "Structured & unstructured data integration",
      "Early signal detection & emerging trends",
      "Contextual strategic interpretation",
    ],
  },
  {
    title: "Integrated Solutions",
    tagline: "Designed to converge, not fragment",
    items: [
      "Multi-lens convergence frameworks",
      "Cross-functional insight synthesis",
      "One coherent strategic narrative",
      "Leadership alignment & momentum",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Strategic Framing",
    desc: "We align on decision scope, success criteria, time horizons, and key uncertainties. This creates a shared definition of the problem.",
  },
  {
    num: "02",
    title: "Insight Architecture Design",
    desc: "We determine which lenses are essential, which data sources are required, and where depth is needed versus breadth.",
  },
  {
    num: "03",
    title: "Integrated Analysis",
    desc: "Inputs are analysed both independently and collectively. Contradictions are explored. Patterns are tested across lenses.",
  },
  {
    num: "04",
    title: "Strategy-led Convergence",
    desc: "We integrate findings into clear strategic choices, explicit trade-offs, and prioritised pathways. We take responsibility for recommending a way forward.",
  },
  {
    num: "05",
    title: "Implications & Alignment",
    desc: "We articulate what this strategy enables, what it deprioritises, and what changes in behaviour or investment are required.",
  },
];

const engagementTypes = [
  {
    title: "Rapid Strategic Sprints",
    desc: "Time-sensitive decisions, market shocks, leadership alignment under pressure.",
  },
  {
    title: "Deep Strategic Programmes",
    desc: "Category redefinition, portfolio resets, market entry or transformation initiatives.",
  },
  {
    title: "Ongoing Strategic Partnerships",
    desc: "Continuous sensing of change, strategic interpretation, trusted external perspective.",
  },
];

interface Leader {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin: string;
  image?: string;
}

const leaders: Leader[] = [
  {
    name: "Vivek Gupta",
    role: "Founder & Managing Partner",
    bio: "Vivek leads Eagle Perspectives with a clear belief: insight must converge into strategy, and strategy must enable action. With over two decades of experience across market research, analytics, and strategic advisory roles, Vivek has worked across consumer goods, services, technology, financial services, and emerging categories.",
    expertise: [
      "Strategic framing of client questions",
      "Integration and synthesis of diverse inputs",
      "Development of clear strategic pathways",
      "Leadership alignment and decision support",
    ],
    linkedin: "https://www.linkedin.com/in/vivek-gupta-4608065/",
    image: vivekImage,
  },
  {
    name: "Nilakshi Sengupta",
    role: "Partner – Consumer & Cultural Insights",
    bio: "Nilakshi brings deep expertise in qualitative research, cultural analysis, and behavioural understanding. Her work focuses on uncovering the underlying motivations, tensions, and contextual drivers that shape consumer behaviour.",
    expertise: [
      "Deep qualitative and ethnographic programmes",
      "Cultural and semiotic interpretation",
      "Consumer immersion and narrative synthesis",
    ],
    linkedin: "https://www.linkedin.com/in/findnilakshi/",
    image: nilakshiImage,
  },
  {
    name: "Sharmila Das",
    role: "Partner – Brand & Strategic Intelligence",
    bio: "Sharmila specialises in brand strategy, equity measurement, and long-term brand building. With extensive experience across categories and markets, she brings a sharp strategic lens to brand positioning, architecture, and communication effectiveness.",
    expertise: [
      "Brand diagnostics and equity frameworks",
      "Positioning and portfolio strategy",
      "Communication development and evaluation",
    ],
    linkedin: "https://www.linkedin.com/in/sharmila-das-a642293/",
    image: sharmilaImage,
  },
  {
    name: "Sanjay Pal",
    role: "Partner – Analytics & Strategic Intelligence",
    bio: "Sanjay leads advanced analytics and AI-enabled intelligence at Eagle Perspectives. His expertise lies in translating complex data into meaningful insight that supports strategic decisions.",
    expertise: [
      "Advanced modelling and analytics",
      "Integration of structured and unstructured data",
      "AI-enabled pattern detection and foresight",
    ],
    linkedin: "https://www.linkedin.com/in/sanjay2609/",
    image: sanjayImage,
  },
  {
    name: "Vikram Jain",
    role: "Partner – Product Innovation & Strategic Intelligence",
    bio: "Vikram specialises in product innovation, consumer-led development, and translating market insight into tangible product strategies. He works closely with organisations to shape product roadmaps and innovation pipelines that deliver meaningful consumer value.",
    expertise: [
      "Product innovation and development strategy",
      "Consumer need identification and solution mapping",
      "Strategic evaluation of innovation opportunities",
    ],
    linkedin: "https://www.linkedin.com/in/vikram-jain123/",
    image: vikramImage,
  },
  {
    name: "Vinay Pant",
    role: "Partner – Growth Strategy & Consumer Leadership",
    bio: "Vinay focuses on growth strategy, consumer understanding, and translating market insight into decisive business direction. He works closely with senior leadership teams to align consumer-led thinking with commercial priorities and long-term growth ambitions.",
    expertise: [
      "Consumer-led growth and market expansion strategy",
      "Strategic brand and portfolio direction",
      "Go-to-market and commercial prioritisation",
    ],
    linkedin: "https://www.linkedin.com/in/vinay-pant-5682625/",
    image: vinayImage,
  },
  {
    name: "Vigyan Verma",
    role: "Partner – Brand, Marketing & Strategic Intelligence",
    bio: "Vigyan brings more than two decades of leadership experience in brand strategy, marketing, and communications across global and Indian contexts. He has served in senior roles at major advertising and marketing organisations, where he led brand transformation, strategic positioning, and growth initiatives.",
    expertise: [
      "Brand strategy and positioning frameworks",
      "Marketing and communication strategy integration",
      "Strategic interpretation of consumer insight",
    ],
    linkedin: "https://www.linkedin.com/in/vigyanverma/",
    image: vigyanImage,
  },
  {
    name: "Ronita Mitra",
    role: "Partner – Brand & Strategic Growth",
    bio: "Ronita brings extensive leadership experience in brand strategy, consumer understanding, and strategic marketing direction across consumer goods, financial services, and telecommunications. She has held senior roles driving brand transformation, communication strategy, and growth initiatives in complex markets.",
    expertise: [
      "Brand strategy and positioning frameworks",
      "Consumer experience and strategic response planning",
      "Integration of market insight into strategic business actions",
    ],
    linkedin: "https://www.linkedin.com/in/ronita-mitra-4891713/",
    image: ronitaImage,
  },
  {
    name: "Venkatnath Kukillaya",
    role: "Partner – Strategic Operations & Delivery",
    bio: "Brings deep expertise in managing complex, multi-market research programmes with a strong focus on execution quality and operational rigour.",
    expertise: [
      "Strategic operations and programme delivery",
      "Data quality governance",
      "Multi-market research coordination",
    ],
    linkedin: "https://www.linkedin.com/in/venkatnathkukillaya/",
  },
  {
    name: "Bipradeep Chakraborty",
    role: "Partner – Consumer Insights & Strategic Analytics",
    bio: "Extensive experience in consumer research and analytics, supporting strategic decision-making across brand, innovation, and market understanding.",
    expertise: [
      "Consumer insight synthesis",
      "Strategic segmentation and targeting",
      "Analytics-driven strategic decision support",
    ],
    linkedin: "https://www.linkedin.com/in/bipradeep-chakraborty-b1662b4/",
    image: bipradeepImage,
  },
  {
    name: "Dipanyita Ray",
    role: "Partner – Strategic Research & Insight Integration",
    bio: "Specialises in integrating quantitative and qualitative research to deliver clear, actionable insight aligned to business strategy.",
    expertise: [
      "Integrated research design",
      "Insight synthesis and integration",
      "Strategic implications and recommendations",
    ],
    linkedin: "https://www.linkedin.com/in/dipanyitaray/",
    image: dipanyitaImage,
  },
  {
    name: "Ruchika Aggarwal",
    role: "Partner – Strategic Consulting & Enablement",
    bio: "Brings strong consulting and programme leadership experience, aligning strategic intent with execution across complex initiatives.",
    expertise: [
      "Strategic consulting",
      "Programme enablement",
      "Execution alignment across complex initiatives",
    ],
    linkedin: "https://www.linkedin.com/in/ruchikaaggarwal/",
  },
  {
    name: "Mini Pinto Sinha",
    role: "Partner – US Geography Head & Strategic Business Leadership",
    bio: "Brings extensive experience in commercial leadership and strategic market development, with a strong track record in driving business growth and cross-functional team alignment in highly competitive markets.",
    expertise: [
      "Business management & market leadership",
      "Strategic execution",
      "Cross-functional team alignment",
    ],
    linkedin: "https://www.linkedin.com/in/pintosinha/",
  },
  {
    name: "Suparna M",
    role: "Partner – Strategy, Operations & Capability Enablement",
    bio: "Brings strong leadership in strategic planning, cross-functional execution, and organisational capability development across complex business environments. Focuses on aligning operational excellence with strategic outcomes.",
    expertise: [
      "Strategic planning",
      "Operational excellence",
      "Capability enablement",
    ],
    linkedin: "https://www.linkedin.com/in/suparna-m-24b32915/",
  },
  {
    name: "Swati Kulkarni",
    role: "Partner – Beauty, Personal Care, OTC Healthcare & CPG",
    bio: "Brings extensive experience as a research user as well as insights practitioner, with multi-decade experience. Has been a trusted advisor to CEOs and business heads, guiding them with strategic inputs for brand launch strategies and continued brand growth.",
    expertise: [
      "Strategy & brand management",
      "Business outcomes",
      "Beauty, personal care, OTC healthcare & CPG",
    ],
    linkedin: "https://www.linkedin.com/in/swati-kulkarni-bb07a020/",
  },
];

const values = [
  { title: "Strategy First", desc: "Every engagement is anchored in the decision that needs to be made. Insight serves strategy—not the other way around." },
  { title: "Plurality with Purpose", desc: "We actively seek diverse perspectives, methodologies, and viewpoints—but always with the intent of convergence and clarity." },
  { title: "Rigour without Rigidity", desc: "We uphold high standards of quality and discipline while remaining flexible and responsive to client needs." },
  { title: "Ownership of Outcomes", desc: "We take responsibility for synthesis, prioritisation, and recommendation. We do not leave clients to connect the dots alone." },
  { title: "Learning as a Constant", desc: "Markets evolve. Tools evolve. We invest continuously in learning, capability building, and staying ahead." },
];

const differentiators = [
  {
    title: "Designed to converge, not just inform",
    description:
      "Most insight organisations optimise for production. Eagle Perspectives is optimised for decision-making. We integrate multiple inputs into one narrative, balance speed with rigour, and take ownership of synthesis.",
  },
  {
    title: "Senior-led by design",
    description:
      "Every engagement is shaped and led by senior practitioners with decades of experience across categories and markets. This ensures consistency, relevance, and strategic depth throughout.",
  },
  {
    title: "Flexible, modular, and responsive",
    description:
      "Fast, focused solutions when time is critical. Deep, scenario-based strategy when stakes are high. Value-for-money structures without compromising quality. Our model adapts to the question at hand.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <div>
      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Aerial city view representing strategic perspective"
            className="w-full h-full object-cover photo-filter opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-8">
            Strategic Intelligence & Insight
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-primary-gradient">Plurality</span> in Perspectives.
            <br />
            <span className="text-primary-gradient">Clarity</span> in Convergence.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            We help organisations convert complexity into clarity—and clarity into strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-[hsl(235_70%_35%)] active:bg-[hsl(235_70%_35%)] transition-colors"
            >
              Start a Strategic Conversation
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground text-sm font-medium tracking-wide hover:border-primary active:border-primary hover:text-primary active:text-primary transition-colors"
            >
              Explore Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Built for complexity.{" "}
              <span className="text-primary-gradient">Designed for decisiveness.</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                The structure of markets has fundamentally changed. Consumers today do not behave in linear or predictable ways. Their choices vary by context, occasion, channel, price sensitivity, and cultural environment.
              </p>
              <p>
                Despite this complexity, one requirement remains unchanged: <strong className="text-foreground">organisations still need singular strategies.</strong> They need clarity on where to play and where not to. They need prioritisation when resources are constrained. They need alignment across leadership teams.
              </p>
              <p>
                Eagle Perspectives exists because the world's best organisations still struggle with the same problem: too much research, too little clarity. Multiple agencies. Competing dashboards. Teams interpreting the same signals differently. Strategy discussions that extend without alignment. We are built to solve that — not by adding another lens, but by converging the ones that matter into one answer which you can act on
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Strategic boardroom discussion"
                  className="w-full aspect-[4/3] object-cover photo-filter"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start mt-8">
            <div className="space-y-3 border-l-2 border-primary/20 pl-6">
              <p className="text-foreground font-semibold text-sm">We are not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-foreground font-medium text-sm">A data vendor — we don't sell volume; we sell clarity</li>
                <li className="text-foreground font-medium text-sm">A measurement factory — we don't optimise for more studies, more dashboards, more outputs</li>
                <li className="text-foreground font-medium text-sm">A boutique ideas shop — we have the depth of specialists and the scale of a pan-India network</li>
              </ul>
            </div>
            <div className="space-y-3 border-l-2 border-primary/20 pl-6">
              <p className="text-foreground font-semibold text-sm">We are:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-foreground font-medium text-sm">
                  A research intelligence consortium — multiple specialist organisations, orchestrated as one, assembled per brief
                </li>
                <li className="text-foreground font-medium text-sm">
                  A convergence firm — our job is not to produce more research but to make the research you have decisive
                </li>
                <li className="text-foreground font-medium text-sm">
                  A system built to evolve — new capabilities added by design, not by accident; every specialist fills a structural gap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section id="philosophy" className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The <span className="text-primary-gradient">Eagle</span> Perspective
            </h2>
            <p className="text-lg text-muted-foreground">
              Clarity is the outcome. Action is the destination.
            </p>
            <div className="section-divider-center mt-6" />
          </div>

          <div className="relative mb-10 md:mb-16 max-w-4xl mx-auto">
            <img
              src={convergenceImage}
              alt="Convergence of multiple perspectives into one"
              className="w-full aspect-[21/9] object-cover photo-filter"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                An eagle does not see the world in fragments. From its vantage point, it integrates distance, depth, movement, and contrast into a single coherent view. It filters relentlessly—ignoring what does not matter, focusing only on what does.
              </p>
              <p>
                We believe plurality of perspectives is essential. No single dataset, methodology, or analytical lens can explain modern markets. Quantitative data must be complemented by qualitative depth. AI-enabled pattern recognition must be interpreted through experience and commercial understanding.
              </p>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                However, <strong className="text-foreground">plurality without convergence creates paralysis.</strong> Too often, organisations are left with multiple truths and no clear direction. Different teams draw different conclusions from the same evidence.
              </p>
              <p>
                Our role is to prevent that outcome. We take responsibility for strategy-led convergence. We integrate evidence, experience, and business reality to arrive at <strong className="text-foreground">one clear way forward.</strong>
              </p>
              <p className="text-primary font-medium text-sm pt-2">
                The Eagle Perspective is about seeing widely—and acting decisively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five Dimensions Bento Grid ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Dimensions of Plurality</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Five Dimensions of <span className="text-primary-gradient">Plurality</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Hover over each card to reveal the deeper explanation.</p>
              <div className="section-divider mt-6" />
            </div>
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary hover:text-primary/70 active:text-primary/70 transition-colors shrink-0"
            >
              Explore Our Philosophy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 — wide */}
            <div className="lg:col-span-2 group relative overflow-hidden bg-background border border-border hover:border-primary/30 active:border-primary/30 transition-colors cursor-default min-h-[220px]">
              <div className="p-5 sm:p-8 h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                <div>
                  <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary/50 border border-primary/15 px-3 py-1 mb-5">Ways of Knowing</span>
                  <h3 className="text-xl font-bold mb-3">The Governing Principle</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-primary/40 font-medium tracking-wide uppercase w-28 shrink-0 pt-0.5">What It Holds</span>
                    <p className="text-sm text-muted-foreground">Methods without hierarchy.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-primary/40 font-medium tracking-wide uppercase w-28 shrink-0 pt-0.5">Client Experience</span>
                    <p className="text-sm text-foreground font-medium">Every question earns the method it truly demands.</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 p-5 sm:p-8 bg-primary flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">Hover Explanation</p>
                <p className="text-base text-primary-foreground leading-relaxed font-medium">Qual, Quant, Semiotics, Sensory, Neuro, Cultural Analysis, Design Research — every question earns the method it truly demands.</p>
              </div>
            </div>

            {[
              { dim: "Vantage", metaphor: "The Perch", holds: "Cross-sector vision.", exp: "Multi-time horizons.", hover: "Cross-sector pattern recognition across three time horizons — what happened, what's happening, what's emerging." },
              { dim: "Scale", metaphor: "The Zoom", holds: "From horizon to shelf.", exp: "From horizon to shelf.", hover: "Boardroom strategy to shelf-level detail; Tier 1–3 geographic coverage." },
              { dim: "Expertise", metaphor: "The Team", holds: "Disciplines in dialogue.", exp: "Disciplines in dialogue.", hover: "Multigenerational, multidisciplinary specialists with equity of voice as operating principle." },
              { dim: "Stakeholder", metaphor: "The Filter", holds: "Commercial. Human. Systemic.", exp: "Commercial. Human. Systemic.", hover: "Every recommendation stress-tested: commercially viable + consumer-real + category-sustainable." },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden bg-background border border-border hover:border-primary/30 active:border-primary/30 transition-colors cursor-default min-h-[220px]">
                <div className="p-5 sm:p-8 h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-within:opacity-0 active:opacity-0">
                  <div>
                    <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary/50 border border-primary/15 px-3 py-1 mb-5">{item.dim}</span>
                    <h3 className="text-lg font-bold mb-3">{item.metaphor}</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-primary/40 font-medium tracking-wide uppercase mb-1">What It Holds</p>
                      <p className="text-sm text-muted-foreground">{item.holds}</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary/40 font-medium tracking-wide uppercase mb-1">Client Experience</p>
                      <p className="text-sm text-foreground font-medium">{item.exp}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 p-5 sm:p-8 bg-primary flex flex-col justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 active:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">Hover Explanation</p>
                  <p className="text-sm text-primary-foreground leading-relaxed font-medium">{item.hover}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">What Makes Us Different</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Designed to <span className="text-primary-gradient">converge</span>, not just inform
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group relative p-5 sm:p-8 border border-border hover:border-primary/30 active:border-primary/30 transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus-within:scale-x-100 active:scale-x-100 transition-transform origin-left" />
                <span className="text-5xl font-bold text-primary/10 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              One partner. Every insight.{" "}
              <span className="text-primary-gradient">One clear way forward.</span>
            </h2>
            <p className="text-muted-foreground">
              An integrated suite of insight and strategy services across the full decision lifecycle.
            </p>
            <div className="section-divider-center mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`bg-background p-5 sm:p-8 border border-border hover:shadow-lg active:shadow-lg transition-shadow ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-xs text-primary font-medium tracking-wide mb-5">{service.tagline}</p>
                <ul className="space-y-2.5">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Axis 1: What We Solve ── */}
      <section id="what-we-solve" className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Axis 1</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Decisions <span className="text-primary-gradient">We Solve</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Start here if you know the business question. We'll assemble the right team.
              </p>
              <div className="section-divider mt-6" />
            </div>
            <Link
              to="/what-we-solve"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary hover:text-primary/70 active:text-primary/70 transition-colors shrink-0"
            >
              Explore All Five Decisions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Find the Space", question: "Where should we play next?" },
              { num: "02", title: "Build the Brand", question: "What should we stand for?" },
              { num: "03", title: "Launch & Grow", question: "Will this work in market?" },
              { num: "04", title: "What's Emerging", question: "What should we prepare for?" },
              { num: "05", title: "Measure What Matters", question: "Are we winning?" },
            ].map((item, i) => (
              <Link
                key={i}
                to="/what-we-solve"
                className="bg-background border border-border p-8 hover:border-primary/30 active:border-primary/30 transition-colors group relative overflow-hidden block"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus-within:scale-x-100 active:scale-x-100 transition-transform origin-left duration-300" />
                <span className="text-4xl font-bold text-primary/10 block mb-3 group-hover:text-primary/20 group-active:text-primary/20 group-focus-within:text-primary/20 active:text-primary/20 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-primary font-medium italic">"{item.question}"</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Axis 2: What We Bring ── */}
      <section id="what-we-bring" className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Axis 2</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Expertise <span className="text-primary-gradient">We Bring</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Start here if you know the discipline. We'll connect it to the decision.
              </p>
              <div className="section-divider mt-6" />
            </div>
            <Link
              to="/what-we-bring"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary hover:text-primary/70 active:text-primary/70 transition-colors shrink-0"
            >
              Explore All Eight Disciplines
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { lens: "The depth lens", title: "Qualitative & Ethnographic Research" },
              { lens: "The scale lens", title: "Quantitative Research & Analytics" },
              { lens: "The unconscious lens", title: "Neuroscience & Behavioural Science" },
              { lens: "The embodied lens", title: "Sensory Science" },
              { lens: "The meaning lens", title: "Semiotics & Cultural Intelligence" },
              { lens: "The specialist lens", title: "Healthcare Research" },
              { lens: "The action lens", title: "Behaviour Design" },
              { lens: "The equity lens", title: "Social Impact Research" },
            ].map((item, i) => (
              <Link
                key={i}
                to="/what-we-bring"
                className="bg-background border border-border p-6 hover:border-primary/30 active:border-primary/30 transition-colors group relative overflow-hidden block"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus-within:scale-x-100 active:scale-x-100 transition-transform origin-left duration-300" />
                <span className="block text-xs font-medium tracking-wide uppercase text-primary/50 mb-3">
                  {item.lens}
                </span>
                <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section id="how-we-work" className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary-gradient">Strategic Synthesis</span> Model
            </h2>
            <p className="text-muted-foreground">
              Every engagement begins with clarifying the decision that needs to be made—not with tools, templates, or methodologies.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="space-y-0 mb-12 md:mb-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 py-8 border-b border-border group"
              >
                <span className="text-3xl md:text-4xl font-bold text-primary/15 group-hover:text-primary/40 group-active:text-primary/40 group-focus-within:text-primary/40 active:text-primary/40 transition-colors">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-8">
              Engagement <span className="text-primary-gradient">Types</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {engagementTypes.map((type, i) => (
                <div key={i} className="border-l-2 border-primary/20 pl-5">
                  <h4 className="font-semibold mb-2 text-sm">{type.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section id="leadership" className="py-14 md:py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built by leaders who have{" "}
              <span className="text-primary-gradient">navigated complexity</span> before
            </h2>
            <div className="section-divider-center mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader, i) => (
              <div
                key={i}
                onClick={() => setSelectedLeader(leader)}
                className="bg-background p-5 sm:p-8 border border-border group hover:border-primary/20 active:border-primary/20 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-primary">
                    {leader.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-semibold">{leader.name}</h3>
                <p className="text-xs text-primary font-medium tracking-wide mb-3">{leader.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Culture & Values</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What defines <span className="text-primary-gradient">how we work</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="border-t-2 border-primary/15 pt-5">
                <h3 className="text-sm font-semibold mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-14 md:py-20 lg:py-28 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(235_65%_55%)] font-medium mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background">
            See the bigger picture.
            <br />
            Decide with confidence.
          </h2>
          <p className="text-base text-background/60 max-w-xl mx-auto mb-10 leading-relaxed">
            When decisions matter, perspective matters. Let's define the way forward—together.
          </p>
          <a
            href="mailto:contact@eagleperspectives.com"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-[hsl(235_65%_55%)] active:bg-[hsl(235_65%_55%)] transition-colors"
          >
            Start a Strategic Conversation
          </a>
        </div>
      </section>

      {/* ── Leader Modal ── */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-background border-b border-border px-5 py-4 sm:px-8 sm:py-5 flex items-center justify-between z-10">
              <h3 className="text-xl font-semibold">{selectedLeader.name}</h3>
              <button
                onClick={() => setSelectedLeader(null)}
                className="p-1.5 hover:bg-secondary active:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
                {selectedLeader.image ? (
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-20 h-20 object-cover flex-shrink-0 photo-filter"
                  />
                ) : (
                  <div className="w-20 h-20 bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {selectedLeader.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-xs text-primary font-medium tracking-wide mb-3">{selectedLeader.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedLeader.bio}</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs tracking-[0.3em] uppercase text-foreground/60 font-medium mb-4">Areas of Focus</p>
                <ul className="space-y-2">
                  {selectedLeader.expertise.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-border">
                <a
                  href={selectedLeader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/70 active:text-primary/70 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
