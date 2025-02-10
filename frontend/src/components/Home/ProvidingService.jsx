import React from "react";
import service1 from "../../assets/images/service/01.jpg";
import service3 from "../../assets/images/service/03.png";
import service2 from "../../assets/images/service/02.jpg";
import service7 from "../../assets/images/service/07.png";
import shape1 from "../../assets/images/service/shape/01.png";
import shape2 from "../../assets/images/service/shape/02.png";
import shape3 from "../../assets/images/service/shape/03.png";
import shape4 from "../../assets/images/service/shape/04.png";
import shape5 from "../../assets/images/service/shape/05.png";
import shape6 from "../../assets/images/service/shape/06.png";
const ProvidingService = () => {
  return (
    <div class="providing-service-area-start-one rts-section-gap">
      <div class="container-2">
        <div class="row g-5 align-items-center single-service-row-1">
          <div class="col-lg-6">
            <div class="image-area-service-1">
              <div class="thumbnail-service-1">
                <img src={service1} alt="service-area" />
              </div>
              <img
                src={service3}
                alt="service"
                class="images-2 small"
                width="286"
              />
            </div>
          </div>
          <div class="col-lg-6 pl--120 pl_md--15 pl_sm--15">
            <div class="service-content-style-one">
              <h3 class="title split-collab">
                Sharing and cross <br /> promotion
              </h3>
              <p class="disc">
                Includes using high-quality keywords to write strategic content
                that ranks, as well as descriptive metadata and meaningful image
                alt text.
              </p>
              <a href="/service-single.html" class="under-line-btn">
                Get more traffic
              </a>
            </div>
          </div>
        </div>
        <div class="row g-5 align-items-center mt--50">
          <div class="col-lg-6">
            <div class="service-content-style-one">
              <h3 class="title split-collab">
                Search Engine <br /> Optimization
              </h3>
              <p class="disc">
                Includes all the links and ads from outside your website that
                point people to your website, like press releases, guest blogs,
                and paid search engine ads.
              </p>
              <a href="/service-single.html" class="under-line-btn">
                Get more traffic
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-area-service-1  bottom-1">
              <div class="thumbnail-service-1">
                <img src={service2} alt="service-area" />
              </div>
              <img
                src={service7}
                alt="service"
                class="images-2 small"
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="shape-area">
        <img class="one" src={shape1} alt="Service_Shave" />
        <img class="two" src={shape2} alt="Service_Shave" />
        <img class="three" src={shape3} alt="Service_Shave" />
        <img class="four" src={shape4} alt="Service_Shave" />
        <img class="five" src={shape5} alt="Service_Shave" />
        <img class="six" src={shape6} alt="Service_Shave" />
      </div>
    </div>
  );
};

export default ProvidingService;
