/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.meepoong.com/product/meepoong

* Copyright 2021 MEE POONG (https://www.meepoong.com)
* Licensed under MIT (https://github.com/creativetimofficial/meepoong/blob/main/LICENSE.md)

* Coded by MEE POONG

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default ProfilePageHeader;
