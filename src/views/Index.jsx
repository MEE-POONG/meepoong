import React from "react";

import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import LandingPageHeader from "../components/Headers/LandingPageHeader";

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
      <div className="main">{<LandingPage />}</div>
    </>
  );
}

export default Index;
