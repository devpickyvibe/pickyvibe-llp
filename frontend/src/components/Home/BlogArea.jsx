import React from "react";

const BlogArea = () => {
  return (
    <div class="rts-section-gap rts-blog-area-one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-style-one-center">
              <span class="pre">Our Blog</span>
              <h2 class="title skew-up">
                Gain valuable insights from <br /> our original content
              </h2>
            </div>
          </div>
        </div>
        <div class="row g-48 mt--0">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="single-blog-area-style-one">
              <a href="blog-details.html" class="thumbnail">
                <img src="assets/images/blog/01.png" alt="blog-image" />
              </a>
              <div class="inner-content-wrapper">
                <a href="blog-details.html">
                  <h6 class="title">
                    Which tool seems the best for content writing strategy?
                  </h6>
                </a>
                <div class="bottom-area">
                  <span class="admin">Amir Nisi</span>
                  <span class="date">• 25 October, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="single-blog-area-style-one">
              <a href="blog-details.html" class="thumbnail">
                <img src="assets/images/blog/02.png" alt="blog-image" />
              </a>
              <div class="inner-content-wrapper">
                <a href="blog-details.html">
                  <h6 class="title">
                    Getting eyeballs on what you write for a business is tricky
                  </h6>
                </a>
                <div class="bottom-area">
                  <span class="admin">Amir Nisi</span>
                  <span class="date">• 25 October, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="single-blog-area-style-one">
              <a href="blog-details.html" class="thumbnail">
                <img src="assets/images/blog/03.png" alt="blog-image" />
              </a>
              <div class="inner-content-wrapper">
                <a href="blog-details.html">
                  <h6 class="title">
                    More than just buzzwords for marketing concepts of SEO
                  </h6>
                </a>
                <div class="bottom-area">
                  <span class="admin">Amir Nisi</span>
                  <span class="date">• 25 October, 2023</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12  text-center">
            <a href="blog.html" class="rts-btn btn-primary text-center">
              View Insights
            </a>
          </div>
        </div>
      </div>
      <div class="shape-area">
        <img class="one" src="assets/images/blog/shape/01.png" alt="shape" />
        <img class="two" src="assets/images/blog/shape/02.png" alt="shape" />
        <img class="three" src="assets/images/blog/shape/03.png" alt="shape" />
      </div>
    </div>
  );
};

export default BlogArea;
