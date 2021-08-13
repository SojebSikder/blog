import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
// config
import * as Constant from '../../../config/constant';
import Auth from '../../../api/Auth';

import Input from '../../input';
import { Dropdown, DropdownTrig, DropdownContent, DropdownItem } from './Dropdown';
import './style.css';
import { Helmet } from 'react-helmet';
import Config from '../../../config/app_config';


function Navbar(props) {
    const [user, setUser] = useState('');

    const logout = () => {
        Auth.logout((res) => {
            props.history.push('/login');
        }, (err) => {

        });
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            Auth.getUserByToken((res) => {
                setUser(res.data.data);
            }, (err) => {

            });
        }

    }, [])

    return (
        <>
            <Helmet>
                <title>{Config.getAppName()}</title>
                <meta name="description" content={Config.getAppSlogan()} />
                <meta name="keywords" content={Config.getAppName()} />
            </Helmet>

            <nav
                className="navbar navbar-expand-lg navbar-dark sticky-top bg-green-500"
                style={{
                    color: "white",
                    // backgroundColor: "#e3f2fd",
                }}
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Blog</Link>
                    <form className="d-flex">
                        <input
                            className="me-2 w-full h-full px-3 rounded-lg focus:outline-none"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{
                                color: "black",
                                width: "30vw",
                                height: "40px",
                            }}
                        />
                        {/* <Input
                        className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        /> */}

                    </form>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* <div
                        className="collapse justify-content-center navbar-collapse"
                        id="navbarSupportedContent"
                    > */}
                    <div
                        className="collapse justify-content-end navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li> */}

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </Link>
                                </li>

                                {localStorage.getItem('token') == null ? (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                ) : null}

                                {localStorage.getItem('token') == null ? (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                ) : null}


                                {/* <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                                </li> */}



                                {localStorage.getItem('token') == null ? null : (
                                    <li
                                        className="nav-item dropdown"
                                    >
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                className="profile-min"
                                                src={Constant.BLOG_URL + "logo.png"} alt="" />
                                        </Link>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                            style={{ left: "-100px", }}
                                        >
                                            <li>
                                                <div className="row">

                                                    <div className="col">
                                                        <Link
                                                            className="dropdown-item"
                                                            to={"/user/" + user.username}
                                                        >
                                                            {user.name}
                                                            <br />
                                                            {localStorage.getItem('username')}
                                                        </Link>
                                                    </div>
                                                </div>

                                            </li>
                                            <hr />


                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="/write"
                                                >
                                                    Write Story
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to={"/me/stories"}
                                                >
                                                    My Stories
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                )}


                            </ul>
                        </div>

                    </div>
                </div>
            </nav >
        </>
    )
}

export default withRouter(Navbar);