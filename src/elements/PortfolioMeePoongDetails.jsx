import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiClock, FiPhone, FiShoppingBag } from "react-icons/fi";
import Header from "../component/header/Header";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import MetaTags from 'react-meta-tags';

// const SocialShare = [
//     {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
//     {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
//     {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
//     {Social: <FaTwitter /> , link: 'https://twitter.com/'},
// ]

class PortfolioMeePoongDetails extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='COMPANY PROFILE - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์' />
                <MetaTags>
                    <title>{`COMPANY PROFILE - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`}</title>

                    <meta property="og:title" content={`COMPANY PROFILE - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                    <meta property="og:description" content={`Coder | Designer | Thinker | Blogger | Marketer`} />
                    <meta property="og:image" content={`https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/assets%2Fshow.png?alt=media&token=0fd2c8ae-119b-4d40-9acc-ab43864d27b5`} />

                    <meta name="twitter:title" content={`COMPANY PROFILE - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                    <meta name="twitter:description" content={`Coder | Designer | Thinker | Blogger | Marketer`} />
                    <meta name="twitter:image" content={`https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/assets%2Fshow.png?alt=media&token=0fd2c8ae-119b-4d40-9acc-ab43864d27b5`} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="og:site_name" content={`COMPANY PROFILE - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                    <meta name="twitter:image:alt" content={`COMPANY PROFILE - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์`} />
                </MetaTags>


                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 pb_md--100 pb_sm--100  bg_image bg_image--4" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">เกี่ยวกับเรา</h2>
                                    <p>COMPANY PROFILE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="row row--35 mb--50">
                                        <div className="col-lg-6">
                                            <div className="inner">
                                                <div className="section-title">
                                                    <h2 className="title">บริษัท มีพุง จำกัด</h2>
                                                    <p className="description mt--30">เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต</p>
                                                    <p className="description">เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ</p>
                                                </div>
                                                {/* <div className="portfolio-view-list d-flex flex-wrap">
                                                    <div className="port-view">
                                                        <span>Branch</span>
                                                        <h4>Ability</h4>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Project Types</span>
                                                        <h4>Website</h4>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Program</span>
                                                        <h4>View Project</h4>
                                                    </div>
                                                </div>
                                                <div className="portfolio-details-btn mt--30">
                                                    <a className="btn-default btn-border" href="/portfolio">Launch The Site</a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div className="inner">
                                                    <div className="section-title">
                                                        <h4 className="title">ที่อยู่ที่ติดต่อ</h4>
                                                        <p className="description mt--30">เลขที่ 46/3 ถนนราชนิกูล ตำบลในเมือง อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา 30000</p>
                                                        <ul className="list-style--1">
                                                            <li><a href="mailto: meepoonggroup@gmail.com"><FiMail /> meepoonggroup@gmail.com</a></li>
                                                            <li><a href="mailto: contact@meepoong"><FiMail /> contact@meepoong</a></li>
                                                            <li><a href="tel:+6682-216-3528"><FiPhone /> 082-216-3528</a>, <a href="tel:+6662-341-3535">062-341-3535</a>, <a href="tel:+6663-082-8384">063-082-8384</a></li>
                                                            <li><a href="https://fb.com/meepoong" className="theme-gradient"><FaFacebookF /> Mee Poong Group - รับทำเว็บไซต์ กราฟิกดีไซน์ </a></li>
                                                            <li><FiClock /> วันจันทร์ - วันศุกร์ เวลา 09:30 น. - 18:30 น.</li>
                                                            <li><FiShoppingBag /> ผู้ให้บริการรับทำเว็บไซต์ และการตลาดออนไลน์ครบวงจร</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="portfolio-thumb-inner">
                                        <div className="thumb mb--30">
                                            <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/239929791_239306744861232_2117039252498631200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=TM6WqbcBss4AX9K_WTN&tn=QCgWFSeZYS36fObH&_nc_ht=scontent.fbkk9-2.fna&oh=378692a39e23c445edfdd67099049f14&oe=61230EE9" alt="Mee Poong Web Portfolio Images" />
                                        </div>

                                        <div className="thumb">
                                            <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/240106457_239306714861235_721740848896298711_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=UuL1w08b1vEAX_aCapG&tn=QCgWFSeZYS36fObH&_nc_ht=scontent.fbkk13-1.fna&oh=4c1e1126c1d0a13f4882a4d53b4a5627&oe=61245C3A" alt="Mee Poong SEO Portfolio Images" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Related Work</span>
                                    <h2 className="title">Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/#portfolio-details">
                                            <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/239929791_239306744861232_2117039252498631200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=TM6WqbcBss4AX9K_WTN&tn=QCgWFSeZYS36fObH&_nc_ht=scontent.fbkk9-2.fna&oh=378692a39e23c445edfdd67099049f14&oe=61230EE9" alt="Mee Poong Web Design Portfolio-images" />
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/#portfolio-details">WEBSITE DESIGN</a></h4>
                                        <span className="category">Design สุดล้ำไม่ซ้ำใคร</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/#portfolio-details">
                                            <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/240106457_239306714861235_721740848896298711_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=UuL1w08b1vEAX_aCapG&tn=QCgWFSeZYS36fObH&_nc_ht=scontent.fbkk13-1.fna&oh=4c1e1126c1d0a13f4882a4d53b4a5627&oe=61245C3A" alt="Mee Poong SEO Portfolio-images" />
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/#portfolio-details">MARKETING ONLINE</a></h4>
                                        <span className="category">การตลาดระยะยาวด้วย SEO</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/#portfolio-details">
                                            <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/240112004_239306828194557_5584467663913646955_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=YnpQvs4qwLEAX_4QTdH&_nc_ht=scontent.fbkk13-1.fna&oh=833105d9b2b5a0134ff9d8beb8e5adea&oe=61243D0B" alt="Mee Poong Consult Portfolio-images" />
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/#portfolio-details">CONSULT ONLINE</a></h4>
                                        <span className="category">เราคือผู้เชี่ยวชาญในโลกออนไลน์</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/#portfolio-details">
                                            <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/238494693_239306791527894_2162771022370414389_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=88HOuWsBETAAX8ZXyxr&tn=QCgWFSeZYS36fObH&_nc_ht=scontent.fbkk9-2.fna&oh=7e1f20661565277f49464b4028cd94dd&oe=6122BDD9" alt="Mee Poong Service Portfolio-images" />
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/#portfolio-details">MAKE SERVICE MIND</a></h4>
                                        <span className="category">ตอบแชทครบจบในที่เดียว</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}


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

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* <Footer /> */}


            </React.Fragment>
        )
    }
}
export default PortfolioMeePoongDetails;
