import React, { useEffect } from 'react'
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

    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <img src={Constant.BLOG_URL + "/logo.png"} className="card-img-top" alt="logo.png" />
                <div className="card-body">
                    <h5 className="card-title">What is django</h5>
                    <p className="card-text">Django is a web framework written in python.</p>
                    <Link to="/" className="btn btn-primary">Read more</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    console.log(state.blog.blogs);
    return {
        blogs: state.blog.blogs
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        listBlogs: (page) => dispatch(listBlogs(page)),
        //setPostDefaults: () => dispatch(setPostDefaults())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Row);
