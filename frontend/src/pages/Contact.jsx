import React from "react";

const Contact = () => {
  return (
    <>
      <div class="contact-banner-area-start rts-section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-inner-area-contact-inner">
                <h1 class="title skew-up-2">
                  Don’t hesitate to <br /> <span> reach out</span>
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
        <div class="shape-area">
          <img src="assets/images/product/shape/01.png" alt="" class="one" />
          <img src="assets/images/product/shape/02.png" alt="" class="two" />
          <img src="assets/images/product/shape/03.png" alt="" class="three" />
          <img src="assets/images/product/shape/04.png" alt="" class="four" />
        </div>
      </div>

      <div class="rts-contact-form-area contact-form-page rts-section-gapBottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form
                class="contact-form"
                action="https://html.themewant.com/fluxi/mailer.php"
                method="post"
                id="contact-form"
              >
                <div class="single-input-area">
                  <label for="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <i class="fa-regular fa-user"></i>
                </div>

                <div class="single-input-area">
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your email"
                    required
                  />
                  <i class="fa-regular fa-envelope"></i>
                </div>

                <div class="single-input-area text-area">
                  <label for="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                  ></textarea>
                  <i class="fa-regular fa-message"></i>
                </div>

                <button type="submit" class="rts-btn btn-primary">
                  Send message <i class="fa-solid fa-location-arrow"></i>
                </button>

                <div
                  id="form-messages"
                  class="text-center text-primary mt-5 text-capitalize"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
