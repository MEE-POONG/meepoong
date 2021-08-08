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
        backgroundImage: "url(" + require("assets/img/vector1.jpeg").default + ")",
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
        {/* <img src={require("assets/img/logom.png").default} width="145" alt="MEE POONG GROUP LOGO" className="rounded-circle bg-white" /> */}
        <img src={require("assets/img/logomm.png").default} width="285" alt="MEE POONG GROUP LOGO" className="shadow-logo" />
        <p className="p-2"> </p>
        {desktopContent()}
        {mobileContent()}
      </div>
    );

    function mobileContent() {
      return <MobileView>
        <h5 className="font-weight-bold">Coder <span className="text-coder"> | </span> Designer <span className="text-designer"> | </span>  Thinker <span className="text-thinker"> | </span>  Blogger <span className="text-blocker"> | </span>  Marketer</h5>
      </MobileView>;
    }

    function desktopContent() {
      return <BrowserView>
        <h3 className="font-weight-bold">Coder <span className="text-coder"> | </span>  Designer <span className="text-designer"> | </span>  Thinker <span className="text-thinker"> | </span>  Blogger <span className="text-blocker"> | </span>  Marketer</h3>
      </BrowserView>;
    }
  }
}

export default LandingPageHeader;
