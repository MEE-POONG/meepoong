// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import './logo.css';

// Common Layout
// import Layout from "./component/common/App";

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Demo from './page-demo/Demo';
// import MainDemo from './home/MainDemo';
// import Startup from './home/Startup';
// import Paralax from './home/Paralax';
// import DigitalAgency from './home/DigitalAgency';
// import CreativeAgency from './home/CreativeAgency';
// import PersonalPortfolio from './home/PersonalPortfolio';
// import Business from './home/Business';
// import StudioAgency from './home/StudioAgency';
// import PortfolioLanding from './home/PortfolioLanding';
// import CreativeLanding from './home/CreativeLanding';
// import HomeParticles from './home/HomeParticles';
// import CreativePortfolio from './home/CreativePortfolio';
// import DesignerPortfolio from './home/DesignerPortfolio';
// import InteriorLanding from './home/Interior';
// import CorporateBusiness from './home/CorporateBusiness';

// Dark Home Layout 
// import DarkMainDemo from './dark/MainDemo';
// import DarkPortfolioLanding from './dark/PortfolioLanding';
// import HomePortfolio from './dark/HomePortfolio';

// Element Layout
// import Service from "./elements/Service";
// import ServiceDetails from "./elements/ServiceDetails";
// import About from "./elements/About";
// import Contact from "./elements/Contact";
// import PortfolioDetails from "./elements/PortfolioDetails";
import PortfolioMeePoongDetails from "./elements/PortfolioMeePoongDetails";
// import BLogList from "./elements/blog/BLogList";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout
// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";
// import Button from "./blocks/Button";


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import backend from './elements/blog/backend';
import Blog from "./elements/Blog";

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={PortfolioMeePoongDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details/:id`} component={BlogDetails}/> 
                        <Route exact path={`${process.env.PUBLIC_URL}/backend`} component={backend}/>
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness}/> */}


                        {/* Element Layot */}
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                       */}


                        {/* Blocks Elements  */}
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/button`} component={Button}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/> */}




                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
                        <Route component={error404} />

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();