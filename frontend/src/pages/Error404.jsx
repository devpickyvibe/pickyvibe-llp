import React from "react";

const Error404 = () => {
  return (
    <div class="rts-error-section">
      <div class="section-inner">
        <img src="assets/images/error.png" alt="" />
        <div class="wrapper-para mt--45">
          <h3 class="title">Page Not Found</h3>
          <p class="disc">
            We're sorry, the page you requested could not be found <br /> please
            go back to the homepage
          </p>
          <a href="index.html" class="rts-btn btn-primary m-auto">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
