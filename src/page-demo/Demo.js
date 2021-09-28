import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import {
    FiChevronUp
} from "react-icons/fi";
// Demo styles, see 'Styles' section below for some notes on use.
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { FiX, FiMenu } from "react-icons/fi";
import { MdPersonAdd } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { BiGhost } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";
import SkilledTeam from "../elements/SkilledTeam";
import dayjs from "dayjs";
import 'dayjs/locale/th'
import Scrollspy from 'react-scrollspy';
import MetaTags from 'react-meta-tags';

import Slider from "react-slick";

// import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Client First',
        description: <p>ใส่ใจความต้องการของลูกค้าเป็นอันดับแรก</p>
    },
    {
        icon: <FiCast />,
        title: 'User Friendly',
        description: <p>ใช้งานง่าย และเป็นมิตรกับผู้ใช้งาน</p>
    },
    {
        icon: <FiMap />,
        title: 'Growth Marketing',
        description: <p>โฟกัสที่การเติบโตของธุรกิจโดยเฉพาะ</p>
    },
]

class Demo extends Component {
    static defaultProps = {
        center: {
            lat: 14.9727756,
            lng: 102.1327993
        },
        zoom: 11
    };
    constructor(props) {
        super(props);
        this.state = {
            todayCovid: {
                cases: 736522,
                deaths: 6066,
                DevBy: "https://corona.lmao.ninja/v2/countries/TH",
                active: 213444,
                todayCases: 21838,
                todayDeaths: 212,
                NewHospitalized: 518,
                todayRecovered: 21108,
                recovered: 517012,
                updated: "1629382499758"
            }
        };
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded');
        })
        fetch("https://corona.lmao.ninja/v2/countries/TH").then(e => e.json()).then(e => {
            this.setState({ todayCovid: e })
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    stickyHeader() { }
    render() {
        const { todayCovid } = this.state;
        const { currencyFormat } = this;

        var elements = document.querySelectorAll('.has-droupdown > a');
        let covid19List = [
            {
                icon: <MdPersonAdd />,
                title: `ติดเชื้อ : ${currencyFormat(todayCovid.todayCases)}`,
                subtitle: `(สะสม ${currencyFormat(todayCovid.cases)})`
            },
            {
                icon: <GiHomeGarage />,
                title: `หายแล้ว : ${currencyFormat(todayCovid.recovered)}`,
                subtitle: `(เพิ่มขึ้น ${currencyFormat(todayCovid.todayRecovered)})`
            },
            {
                icon: <MdLocalHospital />,
                title: `รักษาอยู่ : ${currencyFormat(todayCovid.active)}`,
                subtitle: <span>&nbsp;</span>
            },
            {
                icon: <BiGhost />,
                title: `เสียชีวิต : ${currencyFormat(todayCovid.todayDeaths)} `,
                subtitle: `(สะสม ${currencyFormat(todayCovid.deaths)} )`
            },
        ];
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return (
            <>
                <MetaTags>
                    <title>{`MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`}</title>

                    <meta property="og:title" content={`MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                    <meta property="og:description" content={`Coder | Designer | Thinker | Blogger | Marketer`} />
                    <meta property="og:image" content={`https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/assets%2Fshow.png?alt=media&token=0fd2c8ae-119b-4d40-9acc-ab43864d27b5`} />

                    <meta name="twitter:title" content={`MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                    <meta name="twitter:description" content={`Coder | Designer | Thinker | Blogger | Marketer`} />
                    <meta name="twitter:image" content={`https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/assets%2Fshow.png?alt=media&token=0fd2c8ae-119b-4d40-9acc-ab43864d27b5`} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="og:site_name" content={`MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                    <meta name="twitter:image:alt" content={`MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                </MetaTags>

                <div className="active-dark">
                    {/* Start Banner Area  */}

                    <header className={`header-area header--transparent formobile-menu header--transparent color--black`}>
                        <div className="header-wrapper" id="header-wrapper">
                            <div className="header-left">
                                <div className="logo">
                                    <a href="/" style={{ textAlignLast: 'center', textAlign: '-webkit-center' }}>
                                        <img src="/assets/images/logo/logo.png" alt="MEE POONG" />
                                        <br />
                                        <h5 className="title theme-gradient">MEE POONG GROUP</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="header-right">
                                <nav className="mainmenunav d-lg-block">
                                    <Scrollspy className="mainmenu" items={['covid-19', 'who-are-we', 'mission', 'brand-top-clients', 'portfolio']} currentClassName="is-current" offset={-200}>
                                        <li><a href="#covid-19">Covid 19</a></li>
                                        <li><a href="#who-are-we">WHO ARE WE</a></li>
                                        <li><a href="#mission">MISSION</a></li>
                                        <li><a href="#brand-top-clients">BRAND</a></li>
                                        <li><a href="/blog">NEWS</a></li>
                                        <li><a href="/portfolio">เกี่ยวกับเรา</a></li>
                                    </Scrollspy>
                                </nav>

                                <div className="header-btn">
                                    <a className="btn-default" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/meepoong">
                                        <span>ติดต่อเรา</span>
                                    </a>
                                </div>
                                {/* Start Humberger Menu  */}
                                <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                                    <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                </div>
                                {/* End Humberger Menu  */}
                                <div className="close-menu d-block d-lg-none">
                                    <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                </div>
                            </div>
                        </div>
                    </header>


                    {/* Start Slider Area   */}
                    <div className="pv-slider-area slider-wrapper">
                        <div className="slider-activation">
                            {/* Start Single Slide */}
                            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--34" data-black-overlay="9">
                                <div className="container position-relative">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner">
                                                {/* <h2 className="title theme-gradient">Coder | Designer | Thinker | Blogger | Marketer</h2> */}
                                                {/* <h2 className="title theme-gradient"> - MEE POONG GROUP - </h2> */}
                                                <h2 className="title theme-gradient">รับทำเว็บไซต์ และการตลาดออนไลน์ครบวงจร</h2>
                                                <h4 className="title theme-gradient">ไม่ว่าธุรกิจของคุณ จะมีขนาดเล็กหรือใหญ่ เราช่วยให้ธุรกิจของคุณเติบโต ในโลกออนไลน์</h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Start Service Area */}
                                    <div className="service-wrapper service-white">
                                        <div className="row row--25">
                                            {ServiceList.map((val, i) => (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                    <div className="service service__style--1">
                                                        <div className="icon">
                                                            {val.icon}
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">{val.title}</h4>
                                                            {val.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* End Service Area */}

                                </div>
                            </div>
                            {/* End Single Slide */}
                        </div>
                    </div>
                    {/* End Slider Area   */}


                    {/* End Banner Area  */}

                    {/* Start Preview Main Wrapper */}
                    <div className="main-wrapper">

                        {/* Start Main Demo Area  */}
                        <div id="covid-19" className="home-demo-area bg_color--1 ptb--120">
                            <div className="wrapper plr--120">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center pb--30">
                                            <h2 className="title theme-gradient">อัพเดทสถานการณ์ COVID-19</h2>
                                            <p>อัพเดทขัอมูลล่าสุด : {dayjs(todayCovid.updated).locale('th').format('DD MMMM YYYY HH:mm:ss')} </p>
                                            {/* <p>ที่มา : กรมควบคุมโรค กระทรวงสาธารณสุข</p> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="row service-main-wrapper">
                                            {/* Start Single Feature  */}
                                            {covid19List.map((value, i) => (
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                                                    <div className="service service__style--2 text-left">
                                                        <div className="icon">
                                                            {value.icon}
                                                        </div>
                                                        <div className="content">
                                                            <h3 className="title">{value.title}</h3>
                                                            <p className="subtitle">{value.subtitle}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {/* End Single Feature  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Demo Area  */}

                        {/* Start Main WHO ARE WE Area  */}
                        <div id="who-are-we" className="home-demo-area bg_color--6 ptb--340">
                            <div className="wrapper plr--340">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center pb--30">
                                            <h1 className="icon">
                                                <BsPeopleFill />
                                            </h1>
                                            <h2 className="title theme-gradient">WHO ARE WE?</h2>
                                            <p>เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main WHO ARE WE Area  */}

                        {/* Start Main WHO ARE WE Area  */}
                        <div id="mission" className="home-demo-area bg_color--1 ptb--340">
                            <div className="wrapper plr--340">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center pb--30">
                                            <h1 className="icon">
                                                <RiPlantFill />
                                            </h1>
                                            <h2 className="title theme-gradient">OUR MISSION?</h2>
                                            <p>เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main WHO ARE WE Area  */}

                        {/* Start Main Skilled Team Area  */}
                        <SkilledTeam />
                        {/* End Main Skilled Team Area  */}

                        {/* Start Main Demo Area  */}
                        {/* <div id="demo" className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="title theme-gradient">Home Demo</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas. <br /> More
                                            demos are coming soon.</p>
                                    </div>
                                </div>
                            </div>
                            <Tabs>
                                <div className="row text-center">
                                    <div className="col-lg-12">
                                        <div className="tablist-inner">
                                            <TabList className="pv-tab-button text-center mt--30">
                                                <Tab><span>All Demo</span></Tab>
                                                <Tab><span>Agency</span></Tab>
                                                <Tab><span>Corporate</span></Tab>
                                                <Tab><span>Portfolio</span></Tab>
                                                <Tab><span>Landing</span></Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>

                                <TabPanel className="row">
                                    {singleDemo.map((value, index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images" />
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>

                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {agencyDemo.map((value, index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images" />
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {busenessDemo.map((value, index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images" />
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {portfolioList.map((value, index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images" />
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {landingPage.map((value, index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images" />
                                                    <h3 className="title">{value.title}{value.label ? <span className="label-new"><span>{value.label}</span></span> : ''}</h3>
                                                    <p className="info">{value.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                     */}
                        {/* End Main Demo Area  */}

                        {/* Start Main Demo  */}
                        {/* <div className="home-demo-area bg_color--5 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <h2 className="title theme-gradient">Inner Pages</h2>
                                        <p className="description">Choose one of styles or cutomize easily your site following your ideas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {innerDemo.map((value, index) => (
                                    // Start Single Demo
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-demo">
                                            <a rel="noopener noreferrer" href={`/${value.url} `}>
                                                <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images" />
                                                <h3 className="title">{value.title}</h3>
                                            </a>
                                        </div>
                                    </div>
                                    // End Single Demo
                                ))}
                            </div>
                        </div>
                    </div>
                     */}
                        {/* End Main Demo  */}

                        {/* Start Feature Area  */}
                        {/* <div id="feature" className="service-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <span className="subtitle">Our MEE POONG Feature</span>
                                        <h2 className="title">Awesome Feature</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row service-main-wrapper">
                                {featureList.map((value, i) => (
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="service service__style--2 text-left">
                                            <div className="icon">
                                                {value.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{value.title}</h3>
                                                <p className="subtitle">{value.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    */}
                        {/* End Feature Area  */}

                        {/* Start Faq Area */}
                        {/* <div id="faq" className="pv-feaq-area bg_color--5 ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="section-title text-left pb--30">
                                        <span className="subtitle theme-gradient">Check out our FAQ section to see if we can help.</span>
                                        <h2 className="title">Do you have any Question</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        What is MEE POONG ? How does it work?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Welcome to MEE POONG React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!. It works too much faster loading speed and you can works too much comfortability.MEE POONG create your website so much faster, use to use and Well Documented Codes for your customization.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I run MEE POONG react template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>You can run MEE POONG easily.
                                                        First You'll need to have node and npm on your machine.
                                                        So Please open your command prompt then check your node -v and npm -v Version.
                                                        Goes To Your your command prompt: then
                                                        First: <strong className="theme-color">npm install</strong></p>
                                                    <p>At Last: <strong className="theme-color">npm run start</strong>. By the following way you can be run your project easily.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>


                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I get the customer support?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        After purchasing the product  need you any support you can be share with us with sending mail to <a className="theme-gradient" href="mailto:rainbowit10@gmail.com">rainbowit10@gmail.com</a>.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I get update regularly and For how long do I get updates?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, We will get update the MEE POONG. And you can get it any time. Next time we will comes with more feature.
                                                        You can be get update for unlimited times. Our dedicated team works for update.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I change any component as I like?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, You can change any component as you like. And By the way you can build your website which you are choose.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I build a complete project with this template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, Why not. You can build a project and complete website as you are like. More component are available include in this templete. And you can be use it following documentation.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     */}
                        {/* Start Faq Area */}


                        {/* Start Contact Map  */}
                        <div className="rn-contact-map-wrapper ptb--120 bg_color--5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center mb--50">
                                            <span className="subtitle">Office Location</span>
                                            <h2 className="title">Our Office Location</h2>
                                            {/* <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p> */}
                                        </div>
                                    </div>
                                    {/* Start Single Map  */}
                                    <div className="col-lg-12 mt_md--30 mt_sm--30">
                                        <div className="rn-contact-map-area position-relative">
                                            <div style={{ height: '400px', width: '100%' }}>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41637.865573848605!2d102.13279929822617!3d14.972775562611094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4326308b70cedb44!2sMEE%20POONG%20DEVELOPMENT!5e0!3m2!1sth!2sth!4v1629399401659!5m2!1sth!2sth" width="100%" height="450" Style="border:0;" allowfullscreen="" loading="lazy" title="MEE POONG MAP" />
                                                {/* <GoogleMapReact
                                                defaultCenter={this.props.center}
                                                defaultZoom={this.props.zoom}
                                                yesIWantToUseGoogleMapApiInternals
                                            >
                                                <AnyReactComponent
                                                    lat={14.9727756}
                                                    lng={102.1327993}
                                                    text="My Marker"
                                                />
                                            </GoogleMapReact> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Map  */}
                                </div>
                            </div>
                        </div>
                        {/* End Contact Map  */}

                        {/* Start Footer Area  */}
                        <footer className="pv-callto-action call-to-action-wrapper text-white-wrapper call-to-action ptb--120 bg_image bg_image--34" data-black-overlay="9">

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="inner text-center">
                                            <span>Make Your Site super faster and easy.</span>
                                            <h2 className="mt--20 theme-gradient font-700">Let's go to Contacts</h2>
                                            <div className="footer-btn mt--35">
                                                <a className="btn-default" href="https://www.facebook.com/meepoong"><span>Contacts Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        {/* End Footer Area  */}

                        <Slider></Slider>

                    </div>
                    {/* End Preview Main Wrapper */}
                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                </div>
            </>)
    }
}
export default Demo;