import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import Navbar from '../../components/partials/Navbar';
import Footer from '../../components/partials/footer/Footer';

import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import { CustomSuccess, CustomError } from '../../components/messages/CustomMsg';

import './style.css';



export default function Index() {

    const [textInput, setTextInput] = useState({
        title: '',
        name: '',
        keywords: '',
        category_id: '',
        published: '',
    });
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');

    const [error_message, setError_message] = useState('')
    const [message, setMessage] = useState('')

    const handleTextInput = (event) => {
        setTextInput({ ...textInput, [event.target.name]: event.target.value });
    };

    const onFileChange = (event) => {
        setImage(event.target.files[0]);
        // console.log(event.target.files[0]);
    };

    const onChange = (content) => {
        // console.log('onChange', content);
        setBody(content);
    }

    // Methods for handling add post
    const handleAddBlog = () => {

        setMessage(null);
        setError_message(null);

        if (textInput.title == "" || body == "") {

            setError_message("Please enter required field");
            return false;
        }

        const data = new FormData();

        data.append('title', textInput.title);
        data.append('body', textInput.body);
        data.append('name', textInput.name);
        data.append('keywords', textInput.keywords);
        if (image.name) {
            data.append('image', image, image.name);
        }

        data.append('published', textInput.publish == true ? 1 : 0);
        data.append('category_id', textInput.category_id == null ? "1" : textInput.category_id);

        BlogApi.add(data, (res) => {
            setMessage('Blog added successfully');
            reset();
        }, (err) => {
            if (err) {
                setError_message(err.response.data.message);
            }
        });
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <div className="d-flex justify-content-center">
                        {/* Write to us */}
                        <div className="col">

                            {
                                error_message ? <CustomError msg={error_message} /> : null
                            }
                            {
                                message ? <CustomSuccess msg={message} /> : null
                            }


                            <div style={{ margin: "80px", }}>

                                <div style={{ margin: "50px", }}>
                                    <label className="title"
                                        htmlFor="title"
                                    >
                                        Title:
                                    </label>
                                    <input
                                        className="title"
                                        type="text"
                                        id="title"
                                        placeholder="Title here"
                                    />
                                </div>

                                <MarkdownEditor
                                    value="some value"
                                    name="body"
                                    onChange={onChange}
                                />


                                <button
                                    style={{
                                        float: "right",
                                        marginTop: "10px",
                                    }}
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={handleAddBlog}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
