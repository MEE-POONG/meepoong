import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { BrowserView, MobileView } from "react-device-detect";
function LandingPageHeader() {
  let pageHeader = React.createRef();

  useEffect(() => {
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
    <div
      style={{
        backgroundImage: "url(" + require("assets/img/c1.png").default + ")",
      }}
      className="page-header"
      data-parallax={true}
      ref={pageHeader}
    >
      {headerContentFilter()}
      {headerContent()}
    </div>
  );

  function headerContentFilter() {
    return <div className="filter" />;
  }

  function headerContent() {
    return <Container>{headerContentTitle()}</Container>;
  }

  function headerContentTitle() {
    return (
      <div className="motto text-center">
        {desktopContent()}
        {mobileContent()}
      </div>
    );

    function mobileContent() {
      return <MobileView>
        <h4>Coder | Designer | Thinker | Blogger</h4>
      </MobileView>;
    }

    function desktopContent() {
      return <BrowserView>
        <h1>Coder | Designer | Thinker | Blogger</h1>
      </BrowserView>;
    }
  }
}

export default LandingPageHeader;
