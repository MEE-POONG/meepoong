import React from "react";
import PageHelmet from "../component/common/Helmet";
// import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
// import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import BlogContent from "./blog/BlogContent";
import { useParams } from "react-router";

const BlogDetails = () => {
  const PostList = BlogContent.slice(0, 6);
  const Title = "Title News";
  const { id } = useParams();
  const postdetail = PostList.find((e) => (+e.id === id));
  console.log(id);
  console.log(postdetail);
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Blog Details/" />
      <Header
        headertransparent="header--transparent"
        s
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--27"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">{Title}</h2>
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
                  <div className="thumbnaili text-center" >
                    <img
                      src={`/assets/images/blog/blog-${postdetail.images}.jpg`}
                      alt="Blog Images"
                      
                    />
                  </div>
                  <p className="mt--40"></p>
                  <p>{postdetail.category}</p>
                  <blockquote className="rn-blog-quote">
                    {postdetail.title}
                  </blockquote>

                  <p className="mt--25 mt_sm--5">{postdetail.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

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
};
export default BlogDetails;
