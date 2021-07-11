import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Markdown from '../../components/markdown/Markdown';
import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
// config
import * as Constant from '../../config/constant';
// action
import { showBlog } from "../../store/actions/BlogActions";
import DataUtil from '../../util/Data';

import './style.css';
import Blog from '../../api/Blog';

function View(props) {

    // const [blog, setBlog] = useState({});

    const updateUi = () => {
        // Blog.showByUserAndName(props.match.params.username, props.match.params.blogname)
        //     .then(response => {
        //         setBlog(response.data.data);
        //     }).catch(error => {

        //     });

        props.showBlog(props.match.params.username, props.match.params.blogname);
    }

    useEffect(() => {
        updateUi();
        // props.showBlog(props.match.params.username, props.match.params.blogname);
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
                            <div className="content card" style={{
                                // width: "18rem" 
                            }}>

                                {
                                    props.blog.image == null ? "" :
                                        <img src={Constant.BLOG_URL + props.blog.image}
                                            className="cover-image card-img-top"
                                            alt={props.blog.title}
                                        />
                                }
                                <div className="card-body">
                                    <h5 className="title card-title">{props.blog.title}</h5>

                                    <div>
                                        <img
                                            src={Constant.PROFILE_URL + props.blog}
                                            className="card-img-top"
                                            alt={props.blog.title}
                                        />
                                    </div>

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
