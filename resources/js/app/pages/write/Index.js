import React from 'react'
import { Link } from "react-router-dom";

import Navbar from '../../components/partials/Navbar';
import Footer from '../../components/partials/footer/Footer';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-es-EU';



export default function Index() {

    const onChange = (content) => {
        console.log('onChange', content);
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <div className="d-flex justify-content-center">
                        Write to us

                        <ReactSummernote
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
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
