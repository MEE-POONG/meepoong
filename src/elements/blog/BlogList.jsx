import React, { Fragment } from "react";
// import BlogContent from "./BlogContent";
import { Link } from "react-router-dom";

// import * as loadingData from "./loading.json";
// import * as successData from "./success.json";

// import FadeIn from "react-fade-in";
// import Lottie from "react-lottie";

import {
  database,
  // storage 
} from '../../firebase';

import _ from 'lodash';

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: loadingData.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// };

// const defaultOptions2 = {
//   loop: true,
//   autoplay: true,
//   animationData: successData.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// };

const BLogList = () => {
  const blogsRef = database.ref('/blogs');
  // const blogStorageRef = storage.ref('/blogs-files')
  // const PostList = BlogContent.slice(0, 6);
  const [newsList, setNewsList] = React.useState([])
  React.useEffect(() => {

    blogsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      let messagesVal = data;
      let messages = _(messagesVal)
        .keys()
        .map(messageKey => {
          let cloned = _.clone(messagesVal[messageKey]);
          cloned.key = messageKey;
          return cloned;
        }).value();
      console.log(messages);
      setNewsList(messages)
    });
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <div className="row mt_dec--30">
        {newsList.map(({ key, title, image }) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30" key={key}>
            <div className="im_box">
              <div className="thumbnail">
                <Link to={`/blog-details/${key}`}>
                  <img
                    className="w-100"
                    src={image}
                    alt="Blog Images"
                  />
                </Link>
              </div>
              <div className="content">
                <div className="inner">
                  <div className="content_heading">
                    <div className="category_list">
                      <Link to={`/blog-details/${key}`}>{title}</Link>
                    </div>
                    <h4 className="title">
                      <Link to={`/blog-details/${key}`}>{''}</Link>
                    </h4>
                  </div>
                  <div className="content_footer">
                    <Link to={`/blog-details/${key}`} className="rn-btn btn-opacity">
                      Read More
                    </Link>
                  </div>
                </div>
                <Link className="transparent_link" to={`/blog-details/${key}`}></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default BLogList;
