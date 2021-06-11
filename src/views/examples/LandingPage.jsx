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

function LandingPage() {
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
      <div className="section mt-1 text-center">
        <Container>
          {product()}
          <br />
          <br />
        </Container>
      </div>
      <div className="section-dark mt-1  text-center">
        <Container>
          {product2()}
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
      <div className="section  text-center">
        <Container>
          <Row>{mapInfoList()}</Row>
        </Container>
      </div>

      <div className="section section-dark text-center">
        <Container>
          {headerAboutUs()}
          <Row>
            <Col md="4">
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
                      <h6 className="card-category">Developer</h6>
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
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );

  function headerAboutUs() {
    return <h2 className="title">Let's know about us</h2>;
  }

  function aboutUsImg(img) {
    return <img alt="..." src={img} />;
  }

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

  function product() {
    return (
      <div className="container">
        {productTitle()}
        {productDescription()}
        <br />
        {/* {productButton()} */}
      </div>
    );
  }
  function product2() {
    return (
      <div className="container">
        {productTitle2()}
        {productDescription2()}
        <br />
      </div>
    );
  }
  function productDescription() {
    return (
      <h5 className="description">
        เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริง
        เพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณ
        และก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่อง
        เพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์
        <br />
        เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต
      </h5>
    );
  }

  function productTitle() {
    return <h2 className="title">WHO ARE WE?</h2>;
  }
  function productDescription2() {
    return (
      <h5 className="description">
        เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร
        และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร
        ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ
        นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business)
        ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight)
        เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization
        ได้อย่างมีประสิทธิภาพ
      </h5>
    );
  }

  function productTitle2() {
    return (
      <h2 className="title pt-5">
        <div className="pt-5">OUR MISSION</div>
      </h2>
    );
  }
}

export default LandingPage;
