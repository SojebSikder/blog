import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';

import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import { CustomSuccess, CustomError } from '../../components/messages/CustomMsg';

import BlogApi from '../../api/Blog';
import CategoryApi from '../../api/Category';
import LanguageApi from '../../api/Language';

import './style.css';
import DataUtil from '../../util/Data';



export default function Index() {

    const [categories, setCategories] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [textInput, setTextInput] = useState({
        title: '',
        name: '',
        keywords: '',
        category_id: '',
        language_id: '',
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

    const handleTitle = (event) => {
        setTextInput({
            ["title"]: event.target.value,
            ["name"]: DataUtil.replace(event.target.value, " ", "-").toLowerCase(),
        });
    }

    /**
     * Body element handle
     */
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
        data.append('body', body);
        data.append('name', textInput.name);
        data.append('keywords', textInput.keywords);
        if (image.name) {
            data.append('image', image, image.name);
        }

        data.append('published', textInput.publish == true ? 1 : 0);
        data.append('category_id', textInput.category_id == null ? "1" : textInput.category_id);
        data.append('language_id', textInput.language_id == null ? "1" : textInput.language_id);

        BlogApi.add(data, (res) => {
            setMessage('Posted successfully');
        }, (err) => {
            if (err) {
                setError_message(err.response.data.message);
            }
        });
    }

    const updateUi = () => {
        // Fetch category
        CategoryApi.getAll((res) => {
            setCategories(res.data.data);
        }, (err) => {
            if (err) {
                setError_message(err.response.data.message);
            }
        });
        // Fetch Language
        LanguageApi.getAll((res) => {
            setLanguages(res.data.data);
        }, (err) => {
            if (err) {
                setError_message(err.response.data.message);
            }
        });
    }

    useEffect(() => {
        updateUi();
    }, [])

    return (
        <>
            <Navbar />
            <div className="container">

                <div className="d-flex justify-content-center">
                    {/* Write to us */}
                    <div className="col">

                        {
                            error_message ? <CustomError msg={error_message} /> : null
                        }
                        {
                            message ? <CustomSuccess msg={message} /> : null
                        }

                        <div
                        // style={{ margin: "80px", }}
                        >

                            <button
                                style={{
                                    float: "right",
                                    marginTop: "20px",
                                }}
                                className="btn btn-outline-primary"
                                type="button"
                                onClick={handleAddBlog}
                            >
                                Publish
                            </button>

                            <div
                            // style={{ margin: "50px", }}
                            >
                                <label className="label"
                                    htmlFor="title"
                                >
                                    Title:
                                </label>
                                <input
                                    // className="label"
                                    className="form-control"
                                    type="text"
                                    id="title"
                                    placeholder="Title here"
                                    name="title"
                                    value={textInput.title}
                                    onChange={handleTitle}
                                />
                                <h6>{textInput.name}</h6>
                            </div>

                            <input
                                accept="image/*"
                                style={{ display: "none" }}
                                id="contained-button-file"
                                name="image"
                                value=""
                                onChange={onFileChange}
                                type="file"

                            />
                            <label
                                htmlFor="contained-button-file"
                                className="btn btn-primary"
                            >
                                Upload Featured Photo
                            </label>

                            <br />

                            <div
                                style={{ flexWrap: "nowrap", }}
                                className="row"
                            >
                                {/* language Dropdown */}

                                <div
                                    style={{
                                        width: "50%",
                                    }}
                                    className="form-floating"
                                >
                                    <select name="language_id"
                                        value={textInput.language_id}
                                        onChange={handleTextInput}
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {languages.map((language) => {
                                            return (
                                                <option key={language.id}
                                                    value={language.id}
                                                >
                                                    {language.title}
                                                </option>
                                            )
                                        })}

                                    </select>
                                </div>

                                {/* End language Dropdown */}

                                {/* Category Dropdown */}

                                <div
                                    style={{
                                        width: "50%",
                                    }}
                                    className="form-floating"
                                >
                                    <select name="category_id"
                                        value={textInput.category_id}
                                        onChange={handleTextInput}
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {categories.map((category) => {
                                            return (
                                                <option key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.title}
                                                </option>
                                            )
                                        })}

                                    </select>
                                </div>

                                {/* End Category Dropdown */}
                            </div>



                            <br />

                            <MarkdownEditor
                                value={body}
                                name="body"
                                onChange={onChange}
                            />

                            <div>
                                <label className="label"
                                    htmlFor="keywords"
                                >
                                    Keywords:
                                </label>
                                <input
                                    className="form-control"
                                    type="keywords"
                                    id="keywords"
                                    placeholder="Keywords here"
                                    value={textInput.keywords}
                                    onChange={handleTextInput}
                                />
                            </div>



                        </div>
                    </div>


                </div>

            </div>
            <Footer />
        </>
    )
}
