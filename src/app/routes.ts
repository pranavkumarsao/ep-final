import { createBrowserRouter } from "react-router";
import Root from "./root";
import Home from "./pages/home";
import About from "./pages/about";
import Philosophy from "./pages/philosophy";
import ConsumerIntelligence from "./pages/services/consumer-intelligence";
import BrandCommunication from "./pages/services/brand-communication";
import ProductInnovation from "./pages/services/product-innovation";
import AIHumanIntelligence from "./pages/services/ai-human-intelligence";
import IntegratedSolutions from "./pages/services/integrated-solutions";
import HowWeWork from "./pages/how-we-work";
import Leadership from "./pages/leadership";
import WorkWithUs from "./pages/work-with-us";
import WhatWeSolve from "./pages/what-we-solve";
import WhatWeBring from "./pages/what-we-bring";
import NotFound from "./pages/not-found";

// App routes configuration
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "philosophy", Component: Philosophy },
      { path: "services/consumer-intelligence", Component: ConsumerIntelligence },
      { path: "services/brand-communication", Component: BrandCommunication },
      { path: "services/product-innovation", Component: ProductInnovation },
      { path: "services/ai-human-intelligence", Component: AIHumanIntelligence },
      { path: "services/integrated-solutions", Component: IntegratedSolutions },
      { path: "how-we-work", Component: HowWeWork },
      { path: "leadership", Component: Leadership },
      { path: "work-with-us", Component: WorkWithUs },
      { path: "what-we-solve", Component: WhatWeSolve },
      { path: "what-we-bring", Component: WhatWeBring },
      { path: "*", Component: NotFound },
    ],
  },
]);