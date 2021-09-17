import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { Button } from "react-bootstrap";

import { database, storage } from '../../firebase';


const BackendForm = () => {
  const blogsRef = database.ref('/blogs');
  const blogStorageRef = storage.ref('/blogs-files')

  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])
  const [imageFile, setImageFile] = useState([])
  const [message, setMessage] = useState([])

  const history = useHistory()

  // useEffect(() => {

  //   blogsRef.on('value', (snapshot) => {
  //     const title = snapshot.val();
  //     setTitle({ title });
  //   });

  // }, [])
  const handleAddUser = async (e) => {
    e.preventDefault();
    await blogsRef.push({
      title,
      message,
      image
    })

    const uploadTask = await blogStorageRef.child(imageFile.name).put(imageFile, { contentType: imageFile.type });

    await uploadTask.on('state_changed', (snapshot) => {
      console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
    });

    await uploadTask.then((snapshot) => {
      blogsRef.child('images').push(snapshot.downloadURL);
    });

    history.push('blog')
  }

  const handleFileSubmit = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    setImageFile(file)
    setImage(file.name)
    const uploadTask = blogStorageRef.child(file.name).put(file, { contentType: file.type });

    uploadTask.on('state_changed', (snapshot) => {
      console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
    });

    uploadTask.then((snapshot) => {
      blogsRef.child('images').push(snapshot.downloadURL);
    });
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
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                    placeholder="Title *"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    placeholder="รูปภาพ *"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
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
                  onClick={handleAddUser}
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

                      <div className="AppBody">

                        <input id="input-id" type="file" class="file" data-preview-file-type="text" onChange={handleFileSubmit} />

                        <div className="App-images">
                          <img
                            className="App-image"
                            src={URL.createObjectURL(imageFile)}
                            alt=""
                          />
                        </div>
                      </div>

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
export default BackendForm;
