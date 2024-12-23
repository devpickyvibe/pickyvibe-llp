import React from "react";

const SubscribeArea = () => {
  return (
    <div class="rts-subscribe-area-one rts-section-gapBottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="subscribe-main-wrapper-one">
              <div class="title-style-one-center">
                <h2 class="title split-collab">
                  It's time to tell the <br />
                  world about it
                </h2>
                <p class="disc">
                  We will shows you exactly what content you should write to
                  make it <br /> to the top of search engine results and drive
                  the traffic you want.
                </p>
                <form action="#">
                  <input type="text" placeholder="yourwebsite.com" required />
                  <i class="fa-light fa-globe"></i>
                  <button class="rts-btn btn-primary">Start a SEO Audit</button>
                </form>
              </div>
              <div class="shape-area">
                <img
                  class="one"
                  src="assets/images/subscribtion/shape/01.png"
                  alt="subscribtion"
                />
                <img
                  class="two"
                  src="assets/images/subscribtion/shape/02.png"
                  alt="subscribtion"
                />
                <img
                  class="three"
                  src="assets/images/subscribtion/shape/03.png"
                  alt="subscribtion"
                />
                <img
                  class="four"
                  src="assets/images/subscribtion/shape/04.png"
                  alt="subscribtion"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeArea;
