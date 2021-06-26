import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// config
import * as Constant from '../../../config/constant';
// action
import { listBlogs } from "../../../store/actions/BlogActions";

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
                            <div className="card" style={{ width: "18rem" }}>

                                {blog.image == null ? "" : <img src={Constant.BLOG_URL + blog.image} className="card-img-top" alt={blog.title} />}
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.body}</p>
                                    <Link to={"/blog/" + blog.id} className="btn btn-primary">Read more</Link>
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
