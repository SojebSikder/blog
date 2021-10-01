// external imports
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from 'moment';

// enternal imports
// Components
import Markdown from '../../components/markdown/Markdown';
import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
import Spinner from '../../components/spinner'
import Button from '../../components/button';

// config
import Config from '../../config/app_config';
import * as Constant from '../../config/constant';
// action
import { showBlog } from "../../store/actions/BlogActions";
import { listFavorites, addFavorites } from "../../store/actions/FavoriteActions";
import DataUtil from '../../util/Data';
import { toggleFollow } from '../../store/actions/FollowActions';

import './style.css';


function View(props) {

    // const setMeta = () => {
    //     Header.title(props.blog.title + " - " + Config.getAppName());
    //     Header.setMeta('description', props.blog.body);
    //     Header.setMeta('keywords', props.blog.keyword);
    // }

    const handleAddFavorite = (blogId) => {
        const data = {
            blog_id: blogId
        };

        props.addFavorites(data);
        updateUi();
    }

    const toggleFollow = (userId) => {
        const data = {
            user_id: userId
        }

        props.toggleFollow(data);
        updateUi();
    }


    const updateUi = () => {
        props.showBlog(props.match.params.username, props.match.params.blogname);
    }

    useEffect(() => {
        updateUi();
        window.scrollTo(0, 0);
    }, [])


    if (props.spinner == true) {
        return (
            <>
                <Navbar />
                <div className="d-flex justify-content-center" style={{ height: "500px" }}>
                    <Spinner />
                </div>
                {/* <Footer /> */}
            </>

        );
    } else {
        return (

            <>
                <Navbar />
                <Helmet>
                    <title>{props.blog.title + " - " + Config.getAppName()}</title>
                    <meta name="description" content={props.blog.body} />
                    <meta name="keywords" content={props.blog.keywords} />

                    <meta property="og:url" content={Config.getBaseUrl() + props.location.pathname} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={props.blog.title + " - " + Config.getAppName()} />
                    <meta property="og:description" content={props.blog.body} />
                    <meta property="og:image" content="https://www.your-domain.com/path/image.jpg" />
                </Helmet>
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
                                                style={{ display: "inline", }}
                                            />
                                    }
                                    <div className="card-body">
                                        <h5 className="title card-title">{props.blog.title}</h5>

                                        <div>
                                            {/* Author Profile photo */}

                                            {props.blog.user == null ? (
                                                <img
                                                    src={Constant.PROFILE_URL + "logo.png"}
                                                    className="profile-min card-img-top"
                                                    style={{ display: "inline", }}

                                                />
                                            ) : (
                                                <>
                                                    {/* Profile image */}
                                                    <Link to={"/user/" + props.blog.user.username}>
                                                        <img
                                                            src={Constant.PROFILE_URL + props.blog.user.image}
                                                            className="profile-min card-img-top"
                                                            alt={props.blog.user.username}
                                                            style={{ display: "inline", }}
                                                        />
                                                    </Link>

                                                    {/* Profile username */}
                                                    <Link
                                                        style={{
                                                            margin: "10px",
                                                            textDecoration: "none",
                                                            fontSize: "14px",
                                                        }}
                                                        to={"/user/" + props.blog.user.username}
                                                    >
                                                        {props.blog.user.username}
                                                    </Link>
                                                    {/* Relative time */}
                                                    <span
                                                        style={{
                                                            margin: "10px",
                                                            textDecoration: "none",
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        <a>
                                                            <p style={{ display: "inline", }}>
                                                                <span style={{ margin: "0 7px", }}>·</span>
                                                                {moment(props.blog.created_at, "YYYYMMDD").fromNow()}
                                                            </p>
                                                            <p style={{ display: "inline", }}>
                                                                <span style={{ margin: "0 7px", }}>·</span>
                                                                {DataUtil.date(props.blog.created_at)}
                                                            </p>
                                                        </a>
                                                    </span>
                                                    {/* Reading time */}
                                                    <span
                                                        style={{
                                                            margin: "10px",
                                                            textDecoration: "none",
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        <a>
                                                            <p style={{ display: "inline", }}>
                                                                <span style={{ margin: "0 7px", }}>·</span>
                                                                {DataUtil.readingTime(props.blog.body)} min read
                                                            </p>
                                                        </a>
                                                    </span>
                                                </>
                                            )}
                                            {/* Toggle Follow Button */}
                                            <Button
                                                style={{
                                                    textDecoration: "none"
                                                }}
                                                onClick={() => toggleFollow(props.blog.user_id)}
                                            >
                                                Follow
                                            </Button>

                                            {/* Bookmark */}
                                            <span style={{ marginRight: "1rem" }}></span>

                                            {props.blog.is_bookmark == true ? (
                                                <button
                                                    title="bookmark"
                                                    className="focus:outline-none"
                                                    onClick={() => handleAddFavorite(props.blog.id)}
                                                >
                                                    <svg viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 text-green-600 fill-current">
                                                        <path d="M1.83354 1.28697C1.52462 1.63079 1.35107 2.0971 1.35107 2.58333V17.25L7.11647 14.0417L12.8819 17.25V2.58333C12.8819 2.0971 12.7083 1.63079 12.3994 1.28697C12.0905 0.943154 11.6715 0.75 11.2346 0.75H2.99833C2.56145 0.75 2.14246 0.943154 1.83354 1.28697Z"
                                                            strokeLinecap="round" strokeLinejoin="round" className="stroke-current">
                                                        </path>
                                                    </svg>
                                                </button>
                                            ) : (
                                                <button
                                                    title="bookmark"
                                                    className="focus:outline-none"
                                                    onClick={() => handleAddFavorite(props.blog.id)}
                                                >
                                                    <svg viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 text-dark-secondary">
                                                        <path d="M1.83354 1.28697C1.52462 1.63079 1.35107 2.0971 1.35107 2.58333V17.25L7.11647 14.0417L12.8819 17.25V2.58333C12.8819 2.0971 12.7083 1.63079 12.3994 1.28697C12.0905 0.943154 11.6715 0.75 11.2346 0.75H2.99833C2.56145 0.75 2.14246 0.943154 1.83354 1.28697Z"
                                                            strokeLinecap="round" strokeLinejoin="round" className="stroke-current">
                                                        </path>
                                                    </svg>
                                                </button>
                                            )}




                                            <span style={{ marginRight: "1rem" }}></span>
                                            {/* End Bookmark */}

                                            {/* Share kit */}
                                            <div
                                                style={{ display: "inline", }}
                                                className="dropdown"
                                            >
                                                <a className="btn btn-secondary dropdown-toggle"
                                                    href="#" role="button"
                                                    id="dropdownMenuLink"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Share
                                                </a>

                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li>
                                                        <a className="dropdown-item"
                                                            target="_blank"
                                                            // href="https://twitter.com/intent/tweet?text=Hello%20world"
                                                            href={"https://twitter.com/intent/tweet?url=" + Config.getBaseUrl() + props.location.pathname}
                                                        >
                                                            Twitter
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item"
                                                            target="_blank"
                                                            href={"https://www.facebook.com/sharer/sharer.php?u=" + Config.getBaseUrl() + props.location.pathname}>
                                                            Facebook
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={DataUtil.copyText(Config.getBaseUrl() + props.location.pathname)}
                                                        >
                                                            Copy link
                                                        </button>
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* End Share Kit */}

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

                {/* <Footer /> */}

            </>
        )
    }
}



const mapStateToProps = (state, ownProps) => {

    return {
        spinner: state.blog.spinner,
        blog: state.blog.blog,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        showBlog: (username, blog_name) => dispatch(showBlog(username, blog_name)),
        // listFavorites: (page) => dispatch(listFavorites(page)),
        addFavorites: (data) => dispatch(addFavorites(data)),

        toggleFollow: (data) => dispatch(toggleFollow(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
// export default View;
