import React from "react";
import PageHelmet from "../component/common/Helmet";
import { Helmet } from 'react-helmet'

// import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
// import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import { useParams } from "react-router";

import {
  database,
} from '../firebase.js';


import Editor from '@react-page/editor';

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
import '@react-page/editor/lib/index.css';

// The rich text area plugin
import slate from '@react-page/plugins-slate';
// image
import image from '@react-page/plugins-image';

// Stylesheets for the rich text area plugin
// uncomment this
import '@react-page/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
import '@react-page/plugins-image/lib/index.css';

// Define which plugins we want to use.
const cellPlugins = [slate(), image];


const BlogDetails = () => {



  // const Title = "Title News";
  const { id } = useParams();
  const blogsRef = database.ref('/blogs/' + id);





  const [newsDetail, setNewsDetail] = React.useState([])
  React.useEffect(() => {

    blogsRef.on('value', (snapshot) => {
      const data = snapshot.val();

      setNewsDetail(data)
    });
    // eslint-disable-next-line
  }, [id])


  const { description, detail, image, title } = newsDetail

  return (
    <React.Fragment>
      <PageHelmet pageTitle={`MEE POONG BLOG DETAIL - ${title}`} />
      <Helmet>
        <title>{`MEE POONG BLOG DETAIL - ${title}`}</title>

        <meta property="og:title" content={`MEE POONG BLOG DETAIL - ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content={`MEE POONG BLOG DETAIL - ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={`MEE POONG BLOG DETAIL - ${title}`} />
        <meta name="twitter:image:alt" content={`MEE POONG BLOG DETAIL - ${title}`} />
      </Helmet>
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
                <h2 className="title theme-gradient">{title}</h2>
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
                  {/* <div className="thumbnaili text-center" >
                    <img
                      src={image}
                      alt={title}
                    />
                  </div> */}
                  <p className="mt--40"></p>
                  {/* <p>{postdetail.category}</p> */}
                  {/* <blockquote className="rn-blog-quote">
                    {title}
                  </blockquote> */}

                  <p className="mt--25 mt_sm--5">
                    <Editor
                      id="detail"
                      name="detail"
                      placeholder="เนื้อหา"
                      cellPlugins={cellPlugins}
                      value={detail}
                      readOnly
                    /></p>
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
