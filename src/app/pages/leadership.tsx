import { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

interface Leader {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin: string;
  image?: string;
}

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderSettingsReverse = {
    ...sliderSettings,
    rtl: true,
    dots: false,
  };

  const firstRowLeaders = leaders.slice(0, Math.ceil(leaders.length / 2));
  const secondRowLeaders = leaders.slice(Math.ceil(leaders.length / 2));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Leadership</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leadership & <span className="text-primary-gradient">Core Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Built by leaders who have navigated complexity before
            </p>
            <div className="section-divider-center mt-8" />
          </div>
        </div>
      </section>

      {/* Introduction */}
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
              <p>
                Eagle Perspectives is led by senior practitioners with decades of experience across global
                research, insights, analytics, and strategic advisory environments. Our leadership team brings
                together diverse expertise across categories, methodologies, and markets—united by a shared
                commitment to clarity, rigour, and decisive strategy.
              </p>
            </div>
            <div>
              <p className="text-foreground text-lg font-semibold leading-relaxed">
                Every engagement is shaped by senior leadership. This ensures that our work reflects
                experience, perspective, and accountability from start to finish.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Carousel */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built by leaders who have{" "}
              <span className="text-primary-gradient">navigated complexity</span> before
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <style>{`
            .leadership-carousel-eagle .slick-dots { bottom: -40px; }
            .leadership-carousel-eagle .slick-dots li button:before { font-size: 10px; color: hsl(235 65% 45%); opacity: 0.3; }
            .leadership-carousel-eagle .slick-dots li.slick-active button:before { opacity: 1; color: hsl(235 65% 45%); }
          `}</style>

          <Slider {...sliderSettings} className="leadership-carousel-eagle mb-16">
            {firstRowLeaders.map((leader, index) => (
              <div key={index} className="px-2 sm:px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedLeader(leader)}
                  className="bg-background border border-border p-8 cursor-pointer hover:border-primary/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-primary">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold truncate">{leader.name}</h3>
                  <p className="text-xs text-primary font-medium tracking-wide mt-1 truncate">{leader.role}</p>
                </motion.div>
              </div>
            ))}
          </Slider>

          <Slider {...sliderSettingsReverse} className="leadership-carousel-eagle">
            {secondRowLeaders.map((leader, index) => (
              <div key={index} className="px-2 sm:px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedLeader(leader)}
                  className="bg-background border border-border p-8 cursor-pointer hover:border-primary/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-primary">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold truncate">{leader.name}</h3>
                  <p className="text-xs text-primary font-medium tracking-wide mt-1 truncate">{leader.role}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedLeader(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-background border-b border-border px-8 py-5 flex items-center justify-between z-10">
              <h3 className="text-xl font-semibold">{selectedLeader.name}</h3>
              <button
                onClick={() => setSelectedLeader(null)}
                className="p-1.5 hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex gap-6 mb-8">
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
                  className="inline-flex items-center text-primary hover:text-primary/70 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Strategic Advisors / Values */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">Culture & Values</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What defines <span className="text-primary-gradient">how we work</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Strategy First",
                description:
                  "Every engagement is anchored in the decision that needs to be made. Insight serves strategy—not the other way around.",
              },
              {
                title: "Plurality with Purpose",
                description:
                  "We actively seek diverse perspectives, methodologies, and viewpoints—but always with the intent of convergence and clarity.",
              },
              {
                title: "Rigour without Rigidity",
                description:
                  "We uphold high standards of quality and discipline while remaining flexible and responsive to client needs.",
              },
              {
                title: "Ownership of Outcomes",
                description:
                  "We take responsibility for synthesis, prioritisation, and recommendation. We do not leave clients to connect the dots alone.",
              },
              {
                title: "Learning as a Constant",
                description:
                  "Markets evolve. Tools evolve. Expectations evolve. We invest continuously in learning and staying ahead of the insights and technology curve.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-2 border-primary/15 pt-5"
              >
                <h3 className="text-sm font-semibold mb-2">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
