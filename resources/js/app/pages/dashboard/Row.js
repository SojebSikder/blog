import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

// Components
import Markdown from '../../components/markdown/Markdown';
import Spinner from '../../components/spinner'
// config
import * as Constant from '../../config/constant';
// action
import { listBlogs } from "../../store/actions/BlogActions";
import DataUtil from '../../util/Data';

import Button from '../../components/button';
import './style.css';

function Row(props) {

    useEffect(() => {
        props.listBlogs();
    }, [])

    if (props.spinner == true) {
        return (
            <>
                <div className="d-flex justify-content-center" style={{ height: "500px" }}>
                    <Spinner />
                </div>

            </>
        );
    } else {
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
                                        <br />

                                        <Button
                                            isLink="true"
                                            to={"/blog/" + blog.user.username + "/" + blog.name}
                                            className="btn btn-primary"
                                            // style={{
                                            //     textDecoration: "none"
                                            // }}
                                            style={{
                                                textDecoration: "none"
                                            }}
                                        >
                                            Read more
                                        </Button>


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
}



const mapStateToProps = (state, ownProps) => {

    return {
        blogs: state.blog.blogs,
        spinner: state.blog.spinner
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        listBlogs: (page) => dispatch(listBlogs(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
