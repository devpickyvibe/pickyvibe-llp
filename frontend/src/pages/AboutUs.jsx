import React from "react";
import BrandArea from "../components/About/BrandArea";
import WorkingProgress from "../components/About/WorkingProgress";
import CounterUp from "../components/About/CounterUp";
import OurService from "../components/About/OurService";

const AboutUs = () => {
  return (
    <>
      <div class="about-area-banner-inner rts-section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-main-wrapper">
                <h1 class="title split-collab">
                  A full-service <br /> <span>creative digital</span> <br />{" "}
                  agency
                </h1>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
              <div class="banner-about-right">
                <p class="disc">
                  Fluxi focus on helping you to make useful content more
                  accessible with an ultimate goal for a good sharing profit as
                  a content creator.
                </p>
                <p class="disc">
                  We see more and more ads in search results and not enough care
                  for the people who are actually creating content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-large-image-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about-area-banner-large-image-video">
                <a
                  href="https://www.youtube.com/watch?v=sfmaJTwFP24"
                  class="rts-btn popup-video btn-secondary-5-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.25 20.9999C5.05109 20.9999 4.86032 20.9209 4.71967 20.7803C4.57902 20.6396 4.5 20.4488 4.5 20.2499V3.74993C4.49999 3.6196 4.53395 3.49151 4.59852 3.37829C4.6631 3.26508 4.75606 3.17065 4.86825 3.1043C4.98044 3.03796 5.10798 3.002 5.2383 2.99997C5.36862 2.99794 5.49722 3.0299 5.61143 3.09271L20.6114 11.3427C20.7291 11.4074 20.8273 11.5026 20.8956 11.6182C20.964 11.7338 21 11.8656 21 11.9999C21 12.1342 20.964 12.266 20.8956 12.3816C20.8273 12.4972 20.7291 12.5924 20.6114 12.6571L5.61143 20.9071C5.50069 20.968 5.37637 20.9999 5.25 20.9999Z"
                      fill="#614CE1"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandArea />
      <WorkingProgress />
      <CounterUp />
      <OurService />
    </>
  );
};

export default AboutUs;
