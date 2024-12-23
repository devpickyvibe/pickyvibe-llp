import React from "react";

const Header = () => {
  return (
    <header class="header-style-one header--sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-style-one-wrapper">
              <div class="logo-area">
                <a href="index.html" class="logo">
                  <img
                    class="light"
                    src="assets/images/logo/logo-1.svg"
                    alt="logo"
                  />
                  <img
                    class="dark"
                    src="assets/images/logo/logo-one-dark.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <nav class="main-nav-area">
                <ul class="list-unstyled fluxi-desktop-menu">
                  <li class="menu-item fluxi-has-dropdown">
                    <a href="/" class="fluxi-dropdown-main-element">
                      Home
                    </a>
                  </li>
                  <li class="menu-item fluxi-has-dropdown">
                    <a href="#" class="fluxi-dropdown-main-element">
                      Pages
                    </a>

                    <ul class="fluxi-submenu list-unstyled menu-home">
                      <li class="nav-item">
                        <a class="nav-link page" href="/about">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link page" href="/team">
                          Our Team
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link page" href="/faqs">
                          FAQ's
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/book-a-demo">
                          Book a Demo
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/free-audit">
                          Free Audit
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/pricing">
                          Pricing Plans
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item fluxi-has-dropdown">
                    <a href="/services" class="fluxi-dropdown-main-element">
                      Services
                    </a>

                    <ul class="fluxi-submenu list-unstyled menu-home">
                      <li class="nav-item">
                        <a class="nav-link page" href="service.html">
                          Service
                        </a>
                      </li>
                      <li class="nav-item sub-dropdown">
                        <a href="#" class="nav-link sub-menu-link">
                          Service Details
                        </a>
                        <ul class="fluxi-submenu third-lvl base">
                          <li>
                            <a
                              class="mobile-menu-link"
                              href="service-single.html"
                            >
                              Paid Search Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              class="mobile-menu-link"
                              href="email-marketing.html"
                            >
                              Email Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              class="mobile-menu-link"
                              href="social-media-marketing.html"
                            >
                              Social Media Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              class="mobile-menu-link"
                              href="influencer-marketing.html"
                            >
                              Influencer Marketing
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item fluxi-has-dropdown">
                    <a href="/case-studies" class="fluxi-dropdown-main-element">
                      Case Studies
                    </a>

                    <ul class="fluxi-submenu list-unstyled menu-home">
                      <li class="nav-item">
                        <a class="nav-link page" href="case-studies.html">
                          Case Studies
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="single-case-studies.html">
                          Case Studies Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item fluxi-has-dropdown">
                    <a href="/blogs" class="fluxi-dropdown-main-element">
                      Blog
                    </a>

                    <ul class="fluxi-submenu list-unstyled menu-home">
                      <li class="nav-item">
                        <a class="nav-link page" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="blog-left-sidebar.html">
                          Blog Left Sidebar
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="blog-grid.html">
                          Blog Grid
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="blog-grid-2.html">
                          Blog Grid Right Sidebar
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="blog-grid-3.html">
                          Blog Grid Left Sidebar
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="blog-details.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="menu-item">
                    <a
                      class="main-element fluxi-dropdown-main-element"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="button-area-start">
                <a class="call-us" href="tel:123-456-7890">
                  Call Us : +134 (99) 865
                </a>
                <a href="/free-audit" class="rts-btn btn-primary">
                  Free Audit
                </a>
                <div class="menu-btn" id="menu-btn">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                    <rect width="20" height="2" fill="#1F1F25"></rect>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
