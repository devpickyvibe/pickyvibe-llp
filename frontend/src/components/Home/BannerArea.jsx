import React from "react";
import avatar1 from "../../assets/images/testimonials/avatars/01.png";
import avatar2 from "../../assets/images/testimonials/avatars/02.png";
import banner1 from "../../assets/images/banner/short/01.png";
import short2 from "../../assets/images/banner/short/02.png";
import banner0 from "../../assets/images/banner/01.png";
import short3 from "../../assets/images/banner/short/03.png";
import short5 from "../../assets/images/banner/short/05.png";
import short4 from "../../assets/images/banner/short/04.png";
import short6 from "../../assets/images/banner/short/06.png";
import brand1 from "../../assets/images/brand/01.svg";
import brand2 from "../../assets/images/brand/02.svg";
import brand3 from "../../assets/images/brand/03.svg";
import brand4 from "../../assets/images/brand/04.svg";
import brand5 from "../../assets/images/brand/05.svg";
import brand21 from "../../assets/images/brand/21.svg";
import brand22 from "../../assets/images/brand/22.svg";
import brand23 from "../../assets/images/brand/23.svg";
const BannerArea = () => {
  return (
    <div class="rts-banner-area-one home-five rts-section-gap">
      <div class="box-one-top"></div>
      <div class="box-one-bottom"></div>
      <div class="container pt--120 pt_sm--80">
        <div class="row align-items-center">
          <div class="col-lg-5 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2 mt_md--100 mt_sm--100">
            <div class="banner-one-content-left">
              <h1 class="title split-collab">
                Make your <br /> <span>SEO Comaign </span>
                <br />
                Successful.
              </h1>
              <p class="disc">
                Get organic traffic and high rankings with multi-team
                collaboration that will help you optimize on-page and off-page
                SEO.
              </p>
              <div class="button-banner-one-wrapper">
                <a href="book-a-demo.html" class="rts-btn btn-primary">
                  Start 14-day Free Trial
                </a>
                <div class="customer-review-area">
                  <div class="client-img">
                    <img class="one" src={avatar1} alt="png-img" />
                    <img class="two" src={avatar2} alt="png-img" />
                    <img class="three" src={avatar1} alt="png-img" />
                    <img class="four" src={avatar2} alt="png-img" />
                  </div>
                  <p class="desc">Based on 40M reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1 d-flex justify-content-end justify-content-md-center justify-content-sm-center">
            <div class="banner-one-right-content-with-img">
              <img src={banner0} alt="banner_image" />

              <div class="short-image-area">
                <img src={banner1} alt="banner" class="img-1" width="200" />
                <img src={short2} alt="banner" class="img-2" width="286" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="radious-shape">
        <img class="right-top" src={short3} alt="banner_image" />
        <img class="mid-top" src={short5} alt="banner_image" />
        <img class="left-bottom" src={short4} alt="banner_image" />
        <img class="center-bottom" src={short6} alt="banner_image" />
      </div>

      <div class="container rts-section-gapTop">
        <div class="row pt--120 pt_md--40 pt_sm--30">
          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
            <div class="brand-left-short-title-one">
              <p class="disc">
                Trusted by <br />
                Top Companies
              </p>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-12 col-12 mt_sm--30">
            <div class="brand-area-wrapper-one">
              <div class="light swiper mySwiper-brand-1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand1} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand2} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand3} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand4} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand5} alt="brand" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="dark swiper mySwiper-brand-1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand21} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand22} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand23} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand23} alt="brand" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src={brand21} alt="brand" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerArea;
