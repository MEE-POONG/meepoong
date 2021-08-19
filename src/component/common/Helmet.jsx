import PropTypes from "prop-types";
import React, { Component } from "react";
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageTitle} || MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์ </title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta property="og:image" content="%PUBLIC_URL%/show.png" />
                    <meta property="og:url" content="https://www.meepoong.com" />
                    <meta property="og:url" content="https://www.meepoong.co.th" />

                    <meta name="twitter:title" content="MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" />
                    <meta name="twitter:description" content="Coder | Designer | Thinker | Blogger | Marketer" />
                    <meta name="twitter:image" content="%PUBLIC_URL%/show.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@meepoonggroup" />
                    <meta property="og:site_name" content="MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" />
                    <meta name="twitter:image:alt" content="MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" />

                    <meta property="fb:app_id" content="108066501318591" />
                    <meta property="fb:pages" content="108066501318591" />
                    <meta name="facebook-domain-verification" content="tyb9roc6tpgvz6btuuqarrakgvbiky" />
                    <meta name="facebook-domain-verification" content="41vxrhwx8fexm6h92elgm2lrssbiv3" />
                </Helmet>
            </React.Fragment>
        )
    }
}
PageHelmet.propTypes = {
    title: PropTypes.string
};
export default PageHelmet;
