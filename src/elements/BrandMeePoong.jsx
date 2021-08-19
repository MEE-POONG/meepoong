import React, { Component } from "react";

const logoList = [
    {
        imageUrl: 'https://yt3.ggpht.com/ytc/AKedOLS3y0rIVRGx8vjlAQOxFGq7Xl4D4vUCHDwY37-WPQ=s88-c-k-c0x00ffffff-no-rj',
        title: 'OKD CHANNEL',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLXlxzqPIh2p9b4t-gUdfOaAHd1buM89boj5K3DFSGVJLY0-wnlm2mTxZA18HvCC3Y0_bAqz6JcNAV8t_6d9lqU8xWRu0lQldYZuC6Wr8nelYOu1ZqxCnLw8kZlPFSf9E9inP63jHhDlbuGilo9RcDVu=s1788-no?authuser=0',
        title: 'MEE POONG STUDIO',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLX98Dk31MPiDUnIozy-gV2FbpJV0sVIZrhYPVcnR2NdWEAsbWzzEbmJCilkKElacJ67hWvSMruAGJ8Fv13H6GvZ9ddunNL5fj2DAhcnNULsMe1Qg8t6JZknAQaKD_5abcPC2GVqBRzmGnqfeJYgIa77=s1788-no?authuser=0',
        title: 'MEE POONG BEAUTY',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLU8ZGXxQut22z2KP8U9NFY8hXt8bA2LC1TDSB-9YUIbsc5LMAgKi_MNk97CmX66yZSAHtdnwHR9tcsKUc6zLYCksXdY_zNrXuPHhxn3I4jcIwQ0LjTzrO0uO3Pr7kZWTt_Y2UFY1GA_wHFRowpIkejp=s1788-no?authuser=0',
        title: 'MEE POONG MUSIC',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLWkFR3BSVtfVXZNkndAAlI9cG-mxhRCnF4cEfsEOVZMFduxEyKdK9q0enhBKR2dp6V3nguZF2rgwlkN_czE5bS7wNsCfpmzsTXXluuApY_bf4sbdByp3Aq0dVhO1-CIxlCFU3aK1D1UGsW14IId4uUw=w612-h792-no?authuser=0',
        title: 'MEE POONG FAMILY',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLXCX5s8a0HQCFmJ4Sh_i-U83y2FscvkDG-G7dF96TPHcn8V-8SRm5opUWQbSZVHC8T-0TzXLEQjAec0wXTeEAlSqQFioA6Zike6zU_4YbwkqnTrx22J16o_cnfMQero9byfJXr3tf9ZePjIYzeXgiLY=s1788-no?authuser=0',
        title: 'LOTTERY 666',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLUK-Iw5ghzc5bEdAOvc-Wu7MxOk_VzFwa22w_Sc3cGhjunYxmNpatvQYGEplgCC5adRR3mAvoHf39ptWTccFtttwAF5_dhepM6rRbCdUmGYuqrvyiOWAUyQu5_rM1uMgebmno4dKiR2pATRQ4w_Twro=s1788-no?authuser=0',
        title: 'MEE POONG WEDDING',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLWetbSzWmdMphl6LzOl1tmyHf6lb8FV6_pJtNJ4354xVVCzI4jlEGhuOrDTJGGRrVfNky7iVS-SI4x2u8cZEotTrvpzG_rggoiyCIxVaFCwoDUCquJAul2Oexx_pRNXqAWf586Hm7txRDLe9XIiK1X3=s1788-no?authuser=0',
        title: 'มีพุงมีเรื่องเล่า',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLUObuE4AmQaCY-V1PBgRScqwLNL1OIsGmKJybIczUJv36-1nov2DgdlSyVnZcGT0G7a8J6xZbgpvHsmTD8nh73ouDEwkyE0Fsc6Holj7fkaezghkXkUASxJk31OWd6NJClrJpwyG7EKDQhpLd2Zs8Ka=s800-no?authuser=0',
        title: 'จั๋งดุ๋งพระแท้ 666',
    },
]

class BrandMeePoong extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="brand-style-2">
                    {logoList.map((val, i) => (
                        <li>
                            <img src={val.imageUrl} alt={val.title} />
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandMeePoong;