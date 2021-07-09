import React from 'react'
import { Link } from "react-router-dom";

import Navbar from '../../components/partials/Navbar';
import Footer from '../../components/partials/footer/Footer';

import MarkdownEditor from '../../components/markdown/MarkdownEditor';

import './style.css';



export default function Index() {

    const onChange = (content) => {
        // console.log('onChange', content);
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <div className="d-flex justify-content-center">
                        {/* Write to us */}
                        <div className="col">
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


                                {/* <ReactSummernote
                                    value="Default value"
                                    options={{
                                        lang: 'ru-RU',
                                        height: 350,
                                        dialogsInBody: true,
                                        toolbar: [
                                            ['style', ['style']],
                                            ['font', ['bold', 'underline', 'clear']],
                                            ['fontname', ['fontname']],
                                            ['para', ['ul', 'ol', 'paragraph']],
                                            // ['table', ['table']],
                                            ['insert', ['link', 'picture', 'video']],
                                            ['view', ['fullscreen', 'codeview']]
                                        ]
                                    }}
                                    onChange={onChange}
                                /> */}

                                <MarkdownEditor onChange={onChange} />


                                <button
                                    style={{
                                        float: "right",
                                        marginTop: "10px",
                                    }}
                                    className="btn btn-outline-primary"
                                    type="button"
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
