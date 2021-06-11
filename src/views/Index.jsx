import React from "react";

// reactstrap components

// core components
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import LandingPageHeader from "../components/Headers/LandingPageHeader";
// import Slidecard from "../components/body/Slidecard";

// index sections

import LandingPage from "./examples/LandingPage";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      {/* <div className="section section-dark text-center">
        <div className="container mt-5 ">
          <Slidecard />
        </div>
      </div> */}

      <div className="main">{<LandingPage />}</div>
    </>
  );
}

export default Index;
