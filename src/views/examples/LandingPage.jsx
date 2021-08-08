import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter";
import CodeIcon from "@material-ui/icons/Code";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import Covid19Page from "./Covid19Page";
function LandingPage() {
  const [product] = useState([
    {
      icon: (
        <PeopleAltRoundedIcon
          Style={{
            fontSize: "88px",
          }}
        />
      ),
      title: "WHO ARE WE?",
      description:
        "เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต",
    },
    {
      icon: (
        <LocalAirportIcon
          Style={{
            fontSize: "88px",
          }}
        />
      ),
      title: "OUR MISSION?",
      description:
        "เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ",
    },
  ]);
  const [infoList] = useState([
    {
      icon: <CodeIcon />,
      title: "Code",
      description:
        "สร้างรากฐานที่มั่นคงทางเทคโนโลยี เพื่อตอบโจทย์ความต้องการของธุรกิจคุณ",
      link: "#pablo",
    },
    {
      icon: <FavoriteBorderIcon />,
      title: "Consult",
      description:
        "ให้คำปรึกษาจากผู้เชี่ยวชาญด้านการเปลี่ยนแปลงธุรกิจสู่ดิจิตัลอย่างรอบด้าน",
      link: "#pablo",
    },
    {
      icon: <ChatBubbleIcon />,
      title: "Communication",
      description:
        "เพิ่มขีดความสามารถด้วยการสื่อสารที่มีประสิทธิภาพ เพื่อพัฒนาทุกโซลูชั่นของคุณให้ดีเยี่ยม",
      link: "#pablo",
    },
  ]);
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <Covid19Page />
      {mapProduct()}
      <div className="section  text-center">
        <Container className="m-py-6">
          <Row>{mapInfoList()}</Row>
        </Container>
      </div>

      <div className="section section-dark text-center">
        <Container>

          {headerAboutUs()}
          {/* <Row>
            <Col md={{ size: 4, offset: 4, order: 4 }}>
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {aboutUsImg(
                      require("assets/img/faces/clem-onojeghuo-3.jpg").default
                    )}
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Warayut Taekrathok </CardTitle>
                      <h6 className="card-category">Consulting</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Teamwork is so important that it is virtually impossible for
                    you to reach the heights of your capabilities or make the
                    money that you want without becoming very good at it.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/ChunWarayut"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={
                        require("assets/img/faces/joe-gardner-2.jpg").default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Nattavee Tantragool</CardTitle>
                      <h6 className="card-category">Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    A group becomes a team when each member is sure enough of
                    himself and his contribution to praise the skill of the
                    others. No one can whistle a symphony. It takes an orchestra
                    to play it.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/devilzeros"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/tata.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Sunaina Chaiyapan</CardTitle>
                      <h6 className="card-category">Junior Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    The strength of the team is each individual member. The
                    strength of each member is the team. If you can laugh
                    together, you can work together, silence isn’t golden, it’s
                    deadly.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/ItmeTaTa/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/yaranan.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Yuranan Prachuapsuk</CardTitle>
                      <h6 className="card-category">Head of Youtube Video Production</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    If you want to go fast, go alone, if you want to go far, go
                    as a team. There is no right or wrong decision in this
                    world. Every decision can always lead us to new learning.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/ningnong.yuranan"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/anchisa.jpeg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Anchisa Piankarn</CardTitle>
                      <h6 className="card-category">Head of Marketing</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Always be hungry in what you wanna do
                    make plans, take risk, work hard, play hard and have no regrets

                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/profile.php?id=100051367160916"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/Chattarika.png").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Chattarika Tosanguan</CardTitle>
                      <h6 className="card-category">Marketing</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    They say every piece of chocolate you eat shortens your life by 2 minutes.  I did the math.  Seems I died in  2000.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/chtrka"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/Rungpraw.jpeg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Rungpraw Phiwsaard</CardTitle>
                      <h6 className="card-category">Marketing</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    I weighed myself today.  <br /> It is clear I am too small for my weight.<br /> &nbsp;
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.facebook.com/warp.rungpraw"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );

  function mapProduct() {
    return product.map(({ title, description, icon }, index) => {
      return (
        <div className={`section${index ? "-dark" : ""} m-py-10 text-center`}>
          <Container>{productContet(title, description, icon)}</Container>
        </div>
      );
    });
  }

  function headerAboutUs() {
    return <h2 className="title">Let's know about us</h2>;
  }

  // function aboutUsImg(img) {
  //   return <img alt="..." src={img} />;
  // }

  function infoBlog(icon, title, description, link) {
    return (
      <Col md="4">
        <div className="info">
          {infoIcon(icon)}
          {infoContent(title, description, link)}
        </div>
      </Col>
    );
  }

  function infoIcon(icon) {
    return <div className="icon icon-info">{icon}</div>;
  }
  function mapInfoList() {
    return infoList.map(({ icon, title, description, link }) => (
      <>{infoBlog(icon, title, description, link)}</>
    ));
  }
  function infoContent(title, description, link) {
    return (
      <div className="description">
        {infoTitle(title)}
        {infoDescription(description)}
        {infoButton(link)}
      </div>
    );
  }

  function infoButton(href) {
    return (
      <Button className="btn-link" color="info" href={href}>
        See more
      </Button>
    );
  }

  function infoDescription(description) {
    return <p className="description">{description}</p>;
  }

  function infoTitle(title) {
    return <h4 className="info-title">{title}</h4>;
  }

  function productContet(title, description, icon) {
    return (
      <div className="container">
        {infoIcon(icon)}
        {productTitle(title)}
        {productDescription(description)}
      </div>
    );
  }

  function productTitle(title) {
    return <h2 className="title">{title}</h2>;
  }
  function productDescription(description) {
    return <h5 className="description">{description}</h5>;
  }
}

export default LandingPage;
