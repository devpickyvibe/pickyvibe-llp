import React from "react";

const FreeAudit = () => {
  return (
    <>
      <div class="contact-banner-area-start rts-section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-inner-area-contact-inner">
                <h1 class="title skew-up-2">
                  Ready to grow <br />
                  <span>your revenue?</span>
                </h1>
                <p class="disc">
                  Amet tempor ornare a nunc mauris. Arcu dui ut ultrices nunc
                  mattis vitae. Aliquam pulvinar libero iaculis iaculis nullam
                  urna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rts-contact-form-area contact-form-page rts-section-gapBottom">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-lg-12 col-md-10">
              <form class="contact-form" action="#">
                <div class="single-input-area">
                  <label for="name">Full name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <i class="fa-light fa-user"></i>
                </div>

                <div class="single-input-area">
                  <label for="email">Email address</label>
                  <input id="email" type="text" placeholder="Your email" />
                  <i class="fa-light fa-envelope"></i>
                </div>

                <div class="single-input-area">
                  <label for="name">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Compnay Name"
                    required
                  />
                  <i class="fal fa-building"></i>
                </div>

                <div class="single-input-area">
                  <label for="name">Website URL</label>
                  <input
                    id="url"
                    type="url"
                    placeholder="Website URL"
                    required
                  />
                  <i class="fa-light fa-globe"></i>
                </div>

                <div class="single-input-area text-area">
                  <label for="message">Your Message</label>
                  <textarea id="message" placeholder="Your message"></textarea>
                  <i class="fa-regular fa-message"></i>
                </div>

                <button class="rts-btn btn-primary">
                  Start a free audit <i class="fa-solid fa-location-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeAudit;
