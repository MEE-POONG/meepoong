import React, { Component } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';


class Header extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render() {


        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        const { color = 'default-color' } = this.props;

        return (
            <header className={`header-area header--fixed formobile-menu header--transparent ${color}`}>
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
                                <li><a href="/#covid-19">Covid 19</a></li>
                                <li><a href="/#who-are-we">WHO ARE WE</a></li>
                                <li><a href="/#mission">MISSION</a></li>
                                <li><a href="/#brand-top-clients">BRAND</a></li>
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
        )
    }
}
export default Header;