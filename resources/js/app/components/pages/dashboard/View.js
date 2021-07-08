import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Markdown from '../../../../styles/Markdown';
// config
import * as Constant from '../../../config/constant';
// action
import { showBlog } from "../../../store/actions/BlogActions";
import DataUtil from '../../../util/Data';

function View(props) {

    useEffect(() => {
        props.showBlog(props.match.params.id);
    }, [])
    // console.log(props.blogs)
    return (

        <>
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

                            {/* <p className="card-text">{blog.body}</p> */}

                            <Markdown>
                                {props.blog.body}
                            </Markdown>

                            {/* <Link
                                to={"/blog/" + props.blogs.user.username + "/" + props.blogs.id}
                                className="btn btn-primary"
                            >
                                Read more
                            </Link> */}

                        </div>
                    </div>
                </div>
                <br />
            </div>
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
        showBlog: (page) => dispatch(showBlog(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
