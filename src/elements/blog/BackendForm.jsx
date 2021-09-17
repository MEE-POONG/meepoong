import React, { Component, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { Button } from "react-bootstrap";
import TutorialDataService from "../../services/tutorial.service";


class BackendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnImg: "",
      rnNews: "",
      rnMessage: "",
    };
  }

  render() {
    const [rnName, setrnName] = useState("");
    const [rnImg, setrnImg] = useState("");
    const [rnMessage, setrnMessage] = useState("");

    const handleAddUser = () => {
          // const firestore = []
          // let data ={
          //   Name:rnName,
          //   Img:rnImg,
          //   Message:rnMessage,
          // }
          // firestore.push(data);
          // const ss = TutorialDataService.getAll()
          // console.log(ss);
      
    }
    return (
      <div className="contact-form--1 pt-5">
        <div className="container">
          <div className="row row--35">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <span className="subtitle">Update News</span>
                <h2 className="title">เพิ่มเลยเพิ่มเลยย</h2>
              </div>
              <div className="form-wrapper">
                <form>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={rnName}
                      onChange={(e) => {
                        setrnName(e.target.value);
                      }}
                      placeholder="Title *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={rnImg}
                      onChange={(e) => {
                        setrnImg(e.target.value);
                      }}
                      placeholder="รูปภาพ *"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={rnMessage}
                      onChange={(e) => {
                        setrnMessage(e.target.value);
                      }}
                      placeholder="เนื้อหา"
                    />
                  </label>
                  <button
                    className="btn-default"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                    onClick={()=>{handleAddUser()}}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              {/* Start Faq Area */}
              <div id="faq" className="pv-feaq-area bg_color--5 ptb--120">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="section-title text-left pb--30">
                        <span className="subtitle theme-gradient">
                          ข่าวทั้งหมด
                        </span>
                        <h2 className="title">ลบ/แก้ไข </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="faq-area">
                        <Accordion
                          className="accodion-style--1"
                          preExpanded={"0"}
                        >
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                หัวข้อข่าว
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Welcome to Imroz React Creative Agency, React
                                Portfolio and Corporate Multi Purpose Template
                                Built With React JS. NO jQuery!. It works too
                                much faster loading speed and you can works too
                                much comfortability.Imroz create your website so
                                much faster, use to use and Well Documented
                                Codes for your customization.
                              </p>
                              <Button className="btn-default">แก้ไข</Button>
                              <Button className="btn-default btn-dark">
                                ลบ
                              </Button>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                หัวข้อข่าว
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Welcome to Imroz React Creative Agency, React
                                Portfolio and Corporate Multi Purpose Template
                                Built With React JS. NO jQuery!. It works too
                                much faster loading speed and you can works too
                                much comfortability.Imroz create your website so
                                much faster, use to use and Well Documented
                                Codes for your customization.
                              </p>
                              <Button className="btn-default">แก้ไข</Button>
                              <Button className="btn-default btn-dark">
                                ลบ
                              </Button>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Faq Area */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BackendForm;
