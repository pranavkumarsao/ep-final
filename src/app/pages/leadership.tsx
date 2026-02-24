import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, X } from "lucide-react";
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
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6">
              Leadership & <span className="text-primary">Core Team</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Built by leaders who have navigated complexity before
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Eagle Perspectives is led by senior practitioners with decades of experience across global
              research, insights, analytics, and strategic advisory environments. Our leadership team brings
              together diverse expertise across categories, methodologies, and markets—united by a shared
              commitment to clarity, rigour, and decisive strategy.
            </p>
            <p className="text-foreground text-lg sm:text-xl font-medium">
              Every engagement is shaped by senior leadership. This ensures that our work reflects
              experience, perspective, and accountability from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Carousel */}
      <section className="py-14 md:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-12 text-center">
            Our <span className="text-primary">Leadership</span>
          </h2>

          <Slider {...sliderSettings} className="leadership-carousel mb-6 sm:mb-8">
            {firstRowLeaders.map((leader, index) => (
              <div key={index} className="px-2 sm:px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedLeader(leader)}
                  className="bg-secondary border border-border rounded-xl p-4 sm:p-6 cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-center text-left"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 truncate">{leader.name}</h3>
                  <p className="text-primary text-xs sm:text-sm font-medium truncate">{leader.role}</p>
                </motion.div>
              </div>
            ))}
          </Slider>

          <Slider {...sliderSettingsReverse} className="leadership-carousel">
            {secondRowLeaders.map((leader, index) => (
              <div key={index} className="px-2 sm:px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedLeader(leader)}
                  className="bg-secondary border border-border rounded-xl p-4 sm:p-6 cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-center text-left"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 truncate">{leader.name}</h3>
                  <p className="text-primary text-xs sm:text-sm font-medium truncate">{leader.role}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-3 sm:p-4"
          onClick={() => setSelectedLeader(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-card border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-10">
              <h3 className="text-lg sm:text-2xl font-semibold">{selectedLeader.name}</h3>
              <button
                onClick={() => setSelectedLeader(null)}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary transition-colors flex-shrink-0 ml-3"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-5 sm:mb-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  {selectedLeader.image ? (
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-semibold text-primary">
                        {selectedLeader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-primary mb-2 sm:mb-3 font-medium text-base sm:text-lg">{selectedLeader.role}</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{selectedLeader.bio}</p>
                </div>
              </div>

              <div className="mb-5 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold mb-3 text-foreground/80 uppercase tracking-wide">
                  Areas of Focus
                </h4>
                <ul className="space-y-2">
                  {selectedLeader.expertise.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 sm:pt-5 border-t border-border">
                <a
                  href={selectedLeader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/70 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Strategic Advisors */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
            Strategic <span className="text-primary">Advisors</span>
          </h2>

          <div className="space-y-5 sm:space-y-6">
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary pl-5 sm:pl-6 py-3 sm:py-4"
              >
                <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
