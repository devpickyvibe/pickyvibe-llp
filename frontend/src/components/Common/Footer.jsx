import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div class="rts-footer-area-one pt--80 pb--80">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-top-area">
              <div class="logo-area">
                <a href="#">
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
              <ul class="social-area-one">
                <li>
                  <a href="#">
                    <FaLinkedin class="fa-brands fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter class="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube class="fa-brands fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebook class="fa-brands fa-facebook-f" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row g-48 g-lg-0 pt--40">
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="single-footer-wized-one">
              <h6 class="title">Solutions</h6>
              <ul>
                <li>
                  <a href="#">Content Marketing</a>
                </li>
                <li>
                  <a href="#">Consumer Insights</a>
                </li>
                <li>
                  <a href="#">SEO Content Strategy</a>
                </li>
                <li>
                  <a href="#">Keyword Research</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="single-footer-wized-one">
              <h6 class="title">Resources</h6>
              <ul>
                <li>
                  <a href="#">Insights</a>
                </li>
                <li>
                  <a href="#">Keyword Generator</a>
                </li>
                <li>
                  <a href="#">Research Tool</a>
                </li>
                <li>
                  <a href="#">News & Events</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="single-footer-wized-one">
              <h6 class="title">Company</h6>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="single-footer-wized-one">
              <h6 class="title">Other links</h6>
              <ul>
                <li>
                  <a href="#">Content Marketing</a>
                </li>
                <li>
                  <a href="#">Consumer Insights</a>
                </li>
                <li>
                  <a href="#">SEO Content Strategy</a>
                </li>
                <li>
                  <a href="#">Keyword Research</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="footer-input-main-wrapper-one">
              <div class="single-footer-wized-one">
                <h6 class="title">Newsletter</h6>
                <form action="#">
                  <input type="email" placeholder="Email address.." required />
                  <i class="fa-regular fa-envelope"></i>
                  <button class="rts-btn btn-primary">Subscribe now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-area-start">
              <p>© 2025 PickyVibe LLP, All right reserved.</p>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
