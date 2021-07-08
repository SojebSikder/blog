import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Markdown from '../../../../styles/Markdown';
import Navbar from '../../partials/Navbar';
import Footer from '../../partials/footer/Footer';
// config
import * as Constant from '../../../config/constant';
// action
import { showBlog } from "../../../store/actions/BlogActions";
import DataUtil from '../../../util/Data';

function View(props) {

    useEffect(() => {
        props.showBlog(props.match.params.username, props.match.params.blogname);
    }, [])
    // console.log(props.blogs)
    return (

        <>
            <Navbar />
            <div className="container">
                <div className="">
                    {/* Display blogs */}
                    <div key={props.blog.id}>
                        <div className="d-flex justify-content-center">
                            <div className="card" style={{
                                // width: "18rem" 
                                width: "50%",
                            }}>

                                {
                                    props.blog.image == null ? "" :
                                        <img src={Constant.BLOG_URL + props.blog.image}
                                            className="card-img-top"
                                            alt={blog.title}
                                        />
                                }
                                <div className="card-body">
                                    <h5 className="card-title">{props.blog.title}</h5>

                                    <Markdown>
                                        {props.blog.body}
                                    </Markdown>

                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}



const mapStateToProps = (state, ownProps) => {

    return {
        blog: state.blog.blog
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        showBlog: (username, blog_name) => dispatch(showBlog(username, blog_name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
