import React, { Component } from "react";
import BrandMeePoong from "./BrandMeePoong";
import { FaFacebookF } from "react-icons/fa";

const teamList = [
    // {
    //     url: 'https://www.facebook.com/cm.cmyn.9',
    //     imageUrl: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.6435-1/p200x200/215933623_501498271111973_6101425420043792778_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5EL_x_QxNsMAX9g06Rj&_nc_ht=scontent.fbkk8-3.fna&oh=52ae0095a5b22dfc58664f42a2bcc736&oe=613FE7F5',
    //     title: 'Pijitra Deelai',
    //     designation: 'Management Consultant',
    // },
    {
        url: 'https://www.facebook.com/devilzeros',
        imageUrl: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/68461704_2513115438772562_2730521043205619712_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Z_iPmu3BsXAAX_LgsAV&_nc_ht=scontent.fbkk12-2.fna&oh=dd3ee82001dc4bb8cb86d92f5768cdc7&oe=614002A7',
        title: 'นายณัฐวีษ์ ตันตระกูล',
        designation: 'Full Stack Developer',
    },
    {
        url: 'https://www.facebook.com/ItmeTaTa',
        imageUrl: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.6435-9/151381376_5457049621002854_9108305648091294537_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QgPsMWUI5osAX_hZfWZ&_nc_ht=scontent.fbkk8-2.fna&oh=1cef15472a5989912856e52625a85a61&oe=614196C5',
        title: 'นางสาวสุนัยนา ไชยพาน',
        designation: 'Full Stack Developer',
    },
    {
        url: 'https://www.facebook.com/itthikorn.insuk',
        imageUrl: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.6435-9/119199467_1778353962304886_5951879774264164232_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=ZEd4BPIK5TgAX_NkKO3&_nc_ht=scontent.fbkk8-3.fna&oh=2b6f2797de07c0486d252ab80c56988b&oe=61409CD8',
        title: 'นายอิทธิกร อินทร์สุข',
        designation: 'Full Stack Developer',
    },
    {
        url: 'https://www.facebook.com/ningnong.yuranan',
        imageUrl: 'https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/238620174_2216832911790235_1037787705840527436_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=fs0xuXoOPjgAX8-U3-X&_nc_ht=scontent.fbkk12-4.fna&oh=88b12013949fe173c1b528a3ddb52516&oe=6141C3BD',
        title: 'นายยุรนันท์ ประจวบสุข',
        designation: 'Head of YouTube Video Production',
    },
    {
        url: 'https://www.facebook.com/Chef.Anchisa',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLVe2Kyhe4RZ0QkAoVZ6CEUBEKx38DMHHhIA36_0GjDlTGSeZcgrhiM6GZDo-jP9FFG-iUfIc2t7nFmioA2FW-wqDEC1U1mS1sBipvrN3X9DGbQJWq-TCO4-SNWQNQJQJhcmxWDzpeBVdKBX21jOnpbm=w1342-h1788-no?authuser=0',
        title: 'นางสาวอัญชิสา เพียรการ',
        designation: 'Head of Marketing',
    },
    {
        url: 'https://www.facebook.com/chtrka',
        imageUrl: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/161999141_471834877497011_5413005616748864985_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=eiTB9TjgQVUAX-7WI4I&_nc_ht=scontent.fbkk12-2.fna&oh=f54748d75e5b6d4e92c35a90bd45cb35&oe=6141E0F0',
        title: 'นางสาวฉัตรฑริกา โตสงวน',
        designation: 'Marketing',
    },
    {
        url: 'https://www.facebook.com/warp.rungpraw',
        imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLUvHOcgOVv9gnZ0_N5bUtEUTVYlCbJlUfgHmaSLZGe2aoshtP718XmG8LAIKd-zyB9C9nOn6Xaf34VG8ENJJRw0qmy37AjrUFzKcSBKuLyw4u_1ZMr1XiFDwxRP5gDCO4dancKcgixVBHtD5sDTFrKb=w1342-h1788-no?authuser=0',
        title: 'นางสาวรุ้งแพรว ผิวสอาด',
        designation: 'Marketing',
    },
    {
        url: 'https://www.facebook.com/Kampee.Bc24',
        imageUrl: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.6435-9/94390405_2946532035433389_2451895996339191808_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=GRusuisdp8oAX-0o9_F&_nc_ht=scontent.fbkk9-2.fna&oh=556d264eb5f9a97fdb74d9958246271e&oe=6140D5B4',
        title: 'นายคัมภีร์ อังกระโทก',
        designation: 'Creative and Graphic Designer',
    },
    {
        url: 'https://www.facebook.com/kanticha.noey',
        imageUrl: 'https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/62427446_989886487885210_173101943831396352_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0b0YwZUrsGAAX8zSP5r&_nc_ht=scontent.fbkk12-3.fna&oh=8f6863ece81d6f8f07d7346822b39e35&oe=6142E8AC',
        title: 'นางสาวกันธิชา กวาวปัญญา',
        designation: 'Creative and Graphic Designer',
    },
    {
        url: 'https://www.facebook.com/suntisuk.buntunm.3',
        imageUrl: 'https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/115744920_2666901713557330_6261032546117379599_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PAC7NMNb-AAAX93xtmt&tn=QCgWFSeZYS36fObH&_nc_ht=scontent.fbkk13-2.fna&oh=f2787b8c231c2e00884efb97433e1fe1&oe=6141AF07',
        title: 'นายพีระ บุญเต็ม',
        designation: 'Creative and Graphic Designer',
    },
    {
        url: 'https://www.facebook.com/areena.mm',
        imageUrl: 'https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/84032651_2830346373721079_7449088005693767680_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=kLxk7bx1K_AAX-0ycrF&_nc_oc=AQkLymkLZPUvDgiV6H1BkHI_SLtl_P1wwSq03_QPATaoNy8WJtIpSAHFGJ1x6RPir3Q&_nc_ht=scontent.fbkk12-3.fna&oh=127f3c6f0b0b5057951b173e88297b0e&oe=61427F69',
        title: 'นางสาวศศิประภา โหมดใหม่',
        designation: 'Creative and Graphic Designer',
    },
    {
        url: 'https://www.facebook.com/kanjana.thungkrathok',
        imageUrl: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/162919560_3984194004966290_1566585091118488529_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u7cWZP6glX4AX-YeOwE&_nc_ht=scontent.fbkk13-1.fna&oh=8e4c73cb393a2c8d8ea735f96c7b296b&oe=613F757A',
        title: 'นางสาวกาญจนา ทุ่งกระโทก',
        designation: 'Content Creator',
    },
]

class SkilledTeam extends Component {
    render() {
        return (
            <React.Fragment>

                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--25">
                                    <span className="subtitle">Our Team Member</span>
                                    <h2 className="title">Our Team Member</h2>
                                    <p className="description">พวกเราเป็นของคนรุ่นใหม่ที่ มุ่งเน้นการพัฒนาระบบซอฟท์แวร์ การออกแบบความรู้การตลาดออนไลน์ และบริการเว็บไซต์ครบวงจร เรามุ่งมั่น ค้นคว้า วิจัย เทคโนโลยีใหม่ๆ เพื่อพัฒนาบริการของเราให้เกิดผลลัพธ์ที่ดีให้กับลูกค้า ด้วยทีมงานรุ่นใหม่ เราตั้งใจทำงานหนัก เพื่อสร้างความมั่นใจให้ท่าน ว่าท่านจะได้รับบริการ ที่เหนือความคาดหมาย</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            {/* Start Single Team  */}
                            {teamList.map((val, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="team">
                                        <div className="thumbnail">
                                            <img className="w-100" style={{ height: '500px', objectFit: 'cover' }} src={val.imageUrl} alt={val.title} />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">{val.title}</h4>
                                            <p className="designation">{val.designation}</p>
                                        </div>
                                        <ul className="social-icon" >
                                            <li><a href={val.url}><FaFacebookF /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            {/* End Single Team  */}

                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Brand Area */}
                <div id="brand-top-clients" className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Top Clients</span>
                                    <h2 className="title">We Worked With Brands</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandMeePoong />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

            </React.Fragment>
        )
    }
}
export default SkilledTeam