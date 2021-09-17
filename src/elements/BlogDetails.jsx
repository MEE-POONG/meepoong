import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
// import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
// import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import BlogContent from "./blog/BlogContent";

class BlogDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const PostList = BlogContent.slice(0, 6);
    const Title = "Title News";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Blog Details" />
        <Header
          headertransparent="header--transparent"
          s
          colorblack="color--black"
          logoname="logo.png"
        />
        {PostList.map((e, i) => (
          <div>
            {/* Start Breadcrump Area */}
            <div
              className="rn-page-title-area pt--120 pb--190 bg_image bg_image--27"
              data-black-overlay="7"
            >
              <div className="container">
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <div className="blog-single-page-title text-center pt--100">
                      <h2 className="title theme-gradient">{value.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner-wrapper">
                      <div className="inner">
                        <div className="thumbnail">
                          <img
                            src={`/assets/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </div>
                        <p className="mt--40"></p>
                        <p>{value.category}</p>
                        <blockquote className="rn-blog-quote">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes.
                        </blockquote>

                        <p className="mt--25 mt_sm--5">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum. You need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend toitrrepeat predefined chunks.
                          Necessary, making this the first true generator on the
                          Internet. It re are many variations of passages of
                          Lorem Ipsum available, but the majority have suffered
                          alteration in some form, by injectedeed eedhumour, or
                          randomised words which don't look even slightly
                          believable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog Details */}
          </div>
        ))}
        {/* Start Footer Area  */}
        <footer
          className="pv-callto-action call-to-action-wrapper text-white-wrapper call-to-action ptb--120 bg_image bg_image--34"
          data-black-overlay="9"
        ></footer>
        {/* End Footer Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default BlogDetails;
