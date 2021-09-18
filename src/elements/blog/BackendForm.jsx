import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2'

import * as loadingData from "./loading.json";
import * as successData from "./success.json";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import { database, storage } from '../../firebase';

import Editor from '@react-page/editor';

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
import '@react-page/editor/lib/index.css';

// The rich text area plugin
import slate from '@react-page/plugins-slate';
// image
import image from '@react-page/plugins-image';

// Stylesheets for the rich text area plugin
// uncomment this
import '@react-page/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
import '@react-page/plugins-image/lib/index.css';

// Define which plugins we want to use.
const cellPlugins = [slate(), image];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const BackendForm = () => {

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  const blogsRef = database.ref('/blogs');
  const blogStorageRef = storage.ref('/blogs-files')

  const [title, setTitle] = useState([])
  const [image, setImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [detail, setDetail] = useState(null)
  const [description, setDescription] = useState(null)
  const [sending, setSending] = useState('0%')

  const history = useHistory()

  const handleAddNews = async (e) => {
    e.preventDefault();
    if (!title || !detail || !image || !description)
      return Swal.fire({
        title: 'ใส่ข้อมูลให้ครบนะจ๊ะ',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
    setLoading(false)
    setSuccess(false)

    const data = {
      title,
      detail,
      description,
      image: null
    }

    if (imageFile) {
      const uploadTask = blogStorageRef.child(imageFile.name).put(imageFile, { contentType: imageFile.type });

      uploadTask.on('state_changed', async (snapshot) => {
        console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
        setSending(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%')
      });


      uploadTask.then((snapshot) => {
        blogsRef.push({ ...data, image: snapshot.downloadURL })
        history.push('blog')
      });

    } else {
      await blogsRef.push(data)
      history.push('blog')
    }

  }

  const handleFileSubmit = (event) => {
    const file = event.target.files[0];
    setImageFile(file)
    setImage(file.name)
  }

  const showImage = () => imageFile ? URL.createObjectURL(imageFile) : 'https://i.stack.imgur.com/y9DpT.jpg'
  return (
    <>
      {
        !success ? (
          <FadeIn>
            <div style={{ display: "flex" }}>
              <h1>publishing {sending}</h1>
              {!loading ? (
                <Lottie options={defaultOptions} height={140} width={140} />
              ) : (
                <Lottie options={defaultOptions2} height={140} width={140} />
              )}
            </div>
          </FadeIn>
        ) : ((
          <div className="contact-form--1 pt-5">
            <div className="container">
              <div className="row row--35">
                <div className="col-lg-12 order-2 order-lg-1">
                  <div className="section-title text-left mb--50">
                    <span className="subtitle">Update News</span>
                    <h2 className="title">เพิ่มเลยเพิ่มเลยย</h2>
                  </div>
                  <div className="form-wrapper">
                    <form>
                      <center>
                        <div className="AppBody col-lg-6">
                          <div className="App-images">
                            <img
                              className="App-image"
                              src={showImage()}
                              alt=""
                            />
                          </div>
                          <label htmlFor="file">
                            <input id="file" type="file" class="file" data-preview-file-type="text" onChange={handleFileSubmit} />
                          </label>

                        </div>
                      </center>
                      <label htmlFor="name">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value)
                          }}
                          placeholder="หัวเรื่อง"
                        />
                      </label>

                      <label htmlFor="description">
                        <textarea
                          type="text"
                          id="description"
                          name="description"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          placeholder="รายละเอียด"
                        />
                      </label>

                      <label htmlFor="detail">
                        <h3>เนื้อหา</h3>
                        <Editor
                          id="detail"
                          name="detail"
                          placeholder="เนื้อหา"
                          cellPlugins={cellPlugins}
                          value={detail}
                          onChange={setDetail}
                        />
                      </label>
                      <button
                        className="btn-default"
                        type="submit"
                        value="submit"
                        name="submit"
                        id="mc-embedded-subscribe"
                        onClick={handleAddNews}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        )
      }
    </>
  );
}
export default BackendForm;
