import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Markdown from '../../components/markdown/Markdown';
// config
import * as Constant from '../../config/constant';
// action
import { listBlogs } from "../../store/actions/BlogActions";
import DataUtil from '../../util/Data';

import './style.css';

function Row(props) {

    useEffect(() => {
        props.listBlogs();
    }, [])
    // console.log(props.blogs)
    return (

        <>
            {props.blogs.map((blog) => {
                return (
                    <div key={blog.id}>
                        <div className="d-flex justify-content-center">
                            <div className="card" style={{
                                // width: "18rem" 
                                // width: "50%",
                                width: "80%",
                            }}>

                                {
                                    blog.image == null ? "" :
                                        <img
                                            style={{
                                                width: "200px",
                                                margin: "0 auto",
                                            }}
                                            src={Constant.BLOG_URL + blog.image}
                                            className="card-img-top"
                                            alt={blog.title}
                                        />
                                }
                                <div className="card-body">
                                    <h5 className="title card-title">{blog.title}</h5>

                                    {/* <p className="card-text">{blog.body}</p> */}
                                    <Markdown>
                                        {DataUtil.textShorten(blog.body, 400)}
                                    </Markdown>
                                    <br />

                                    <Link
                                        to={"/blog/" + blog.user.username + "/" + blog.name}
                                        className="btn btn-primary"
                                    >
                                        Read more
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                )
            })}

        </>
    )
}



const mapStateToProps = (state, ownProps) => {

    return {
        blogs: state.blog.blogs
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        listBlogs: (page) => dispatch(listBlogs(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
