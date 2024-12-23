import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Pricing from "../pages/Pricing";
import FreeAudit from "../pages/FreeAudit";
import Faqs from "../pages/Faqs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import CaseStudies from "../pages/CaseStudies";
export const publicRoutes = [
  // Error Pages

  { path: "/404", element: Error404 },

  // General Pages
  { path: "/", element: Home },
  { path: "/contact", element: Contact },
  { path: "/pricing", element: Pricing },
  { path: "/free-audit", element: FreeAudit },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-and-conditions", element: Terms },
  { path: "/faqs", element: Faqs },
  { path: "/pricing", element: Pricing },
  { path: "/services", element: Services },
  { path: "/about", element: AboutUs },
  { path: "/case-studies", element: CaseStudies },
];
