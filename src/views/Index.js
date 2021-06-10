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
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import LandingPageHeader from "../components/Headers/LandingPageHeader";


// index sections


import LandingPage from"./examples/LandingPage.js";

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
      <div className="main">
        {
          <LandingPage />
        }
      </div>
    </>
  );
}

export default Index;
