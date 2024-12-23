import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Common/Loader";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />

        <div id="side-bar" class="side-bar header-two">
          <button class="close-icon-menu">
            <i class="fa-sharp fa-thin fa-xmark"></i>
          </button>

          <div class="mobile-menu-main">
            <nav class="nav-main mainmenu-nav mt--30">
              <ul class="mainmenu metismenu" id="mobile-menu-active">
                <li class="has-droupdown">
                  <a href="#" class="main">
                    Home
                  </a>
                  <ul class="submenu mm-collapse">
                    <li>
                      <a class="mobile-menu-link" href="index.html">
                        SEO Marketing
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-two.html">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-three.html">
                        Digital Agency
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-four.html">
                        Startup Agency
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-five.html">
                        Advertising Agency
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-six.html">
                        Web Design Agency
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-seven.html">
                        Social Media Agency
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="index-eight.html">
                        SEO Agency
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="has-droupdown">
                  <a href="#" class="main">
                    Pages
                  </a>
                  <ul class="submenu mm-collapse">
                    <li>
                      <a class="mobile-menu-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="team.html">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="faq.html">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="book-a-demo.html">
                        Book a Demo
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="free-audit.html">
                        Free Audit
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="pricing.html">
                        Pricing Plans
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="404.html">
                        404 Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="has-droupdown">
                  <a href="#" class="main">
                    Services
                  </a>
                  <ul class="submenu mm-collapse">
                    <li>
                      <a class="mobile-menu-link" href="service.html">
                        Services
                      </a>
                    </li>
                    <li class="has-droupdown third-lvl">
                      <a class="main" href="#">
                        Service Details
                      </a>
                      <ul class="submenu-third-lvl mm-collapse">
                        <li>
                          <a href="service-details.html"></a>Paid Search
                          Marketing
                        </li>
                        <li>
                          <a href="email-marketing.html"></a>Email Marketing
                        </li>
                        <li>
                          <a href="social-media-marketing.html"></a>Social Media
                          Marketing
                        </li>
                        <li>
                          <a href="influencer-marketing.html"></a>Influencer
                          Marketing
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="has-droupdown">
                  <a href="#" class="main">
                    Work
                  </a>
                  <ul class="submenu mm-collapse">
                    <li>
                      <a class="mobile-menu-link" href="case-studies.html">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        class="mobile-menu-link"
                        href="single-case-studies.html"
                      >
                        Case Studies Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="has-droupdown">
                  <a href="#" class="main">
                    Blog
                  </a>
                  <ul class="submenu mm-collapse">
                    <li>
                      <a class="mobile-menu-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="blog-left-sidebar.html">
                        Blog Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="blog-grid-2.html">
                        Blog Grid Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="blog-grid-3.html">
                        Blog Grid Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a class="mobile-menu-link" href="blog-details.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html" class="main">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <ul class="social-area-one pl--20 mt--100">
              <li>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="loader-wrapper">
          <div class="loader"></div>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>

        <div class="rts-switcher rts-theme-mode">
          <div class="rts-darkmode">
            <a id="rts-data-toggle" class="rts-dark-light">
              <i class="rts-go-dark fal fa-moon"></i>
              <i class="rts-go-light fa-light fa-sun-bright"></i>
            </a>
          </div>
        </div>

        <div class="progress-wrap">
          <svg
            class="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: " stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "307.919",
              }}
            ></path>
          </svg>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
