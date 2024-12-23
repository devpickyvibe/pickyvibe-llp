import React from "react";

const BlogArea = () => {
  return (
    <div class="rts-section-gap rts-blog-area-one style-seven about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-style-one-center">
              <h2 class="title skew-up">Recent articles from blog</h2>
            </div>
          </div>
        </div>
        <div class="row g-48 mt--0 justify-content-sm-center justify-content-md-start">
          <div class="col-lg-4 col-md-6 col-sm-10">
            <div class="single-blog-area-style-one eight-area text-center">
              <a href="blog-details.html" class="thumbnail">
                <img src="assets/images/blog/01.png" alt="blog-image" />
              </a>
              <div class="inner-content-wrapper">
                <div class="bottom-area mb--25">
                  <span class="admin">Amir Nisi</span>
                  <span class="date">• 25 October, 2023</span>
                </div>
                <a href="blog-details.html">
                  <h6 class="title mb--20">
                    Which tool seems the best for content writing strategy?
                  </h6>
                </a>
                <a href="blog-details.html" class="btn-readmore-inner">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-10">
            <div class="single-blog-area-style-one eight-area">
              <a href="blog-details.html" class="thumbnail">
                <img src="assets/images/blog/02.png" alt="blog-image" />
              </a>
              <div class="inner-content-wrapper">
                <div class="bottom-area mb--25">
                  <span class="admin">Amir Nisi</span>
                  <span class="date">• 25 October, 2023</span>
                </div>
                <a href="blog-details.html">
                  <h6 class="title mb--20">
                    Getting eyeballs on what you write for a business is tricky
                  </h6>
                </a>
                <a href="blog-details.html" class="btn-readmore-inner">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-10">
            <div class="single-blog-area-style-one eight-area">
              <a href="blog-details.html" class="thumbnail">
                <img src="assets/images/blog/03.png" alt="blog-image" />
              </a>
              <div class="inner-content-wrapper">
                <div class="bottom-area mb--25">
                  <span class="admin">Amir Nisi</span>
                  <span class="date">• 25 October, 2023</span>
                </div>
                <a href="blog-details.html">
                  <h6 class="title mb--20">
                    More than just buzzwords for marketing concepts of SEO
                  </h6>
                </a>
                <a href="blog-details.html" class="btn-readmore-inner">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="blog-btn-area mt--50">
            <a
              href="blog.html"
              class="rts-btn btn-primary-4-border arrow-rotate inner m-auto"
            >
              See More Posts <i class="fa-light fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="shape-area">
        <img
          src="assets/images/blog/shape/01.png"
          alt="marketing"
          class="one"
        />
        <img
          src="assets/images/blog/shape/02.png"
          alt="marketing"
          class="two"
        />
        <img
          src="assets/images/blog/shape/03.png"
          alt="marketing"
          class="three"
        />
      </div>
    </div>
  );
};

export default BlogArea;
