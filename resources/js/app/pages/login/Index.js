import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import * as Constant from '../../config/constant'
import './style.css';

import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
import Auth from '../../api/Auth';
import { CustomSuccess, CustomError } from '../../components/messages/CustomMsg';


export default function Index(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error_message, setError_message] = useState('')
    const [message, setMessage] = useState('')


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {

        setMessage(null);
        setError_message(null);

        if (email == "" || password == "") {

            setError_message("Please enter login credentials");
            return false;
        }

        const data = {
            email: email,
            password: password,
        }
        Auth.login(data, (res) => {
            if (res.data.success == true) {
                setMessage("Login Successfully");
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.user.username);
                localStorage.setItem("userType", res.data.user.user_type);
                props.history.push("/profile");
            } else {
                setError_message("Something went wrong");
            }
        }, (err) => {
            if (err) {
                setError_message(err.response.data.message);
            }

        });
    }


    return (
        <>
            <Navbar />

            <div className="body text-center">
                <main className="form-signin">

                    <form>
                        <img className="mb-4" src={Constant.BLOG_URL + "logo.png"} alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        {
                            error_message ? <CustomError msg={error_message} /> : null
                        }
                        {
                            message ? <CustomSuccess msg={message} /> : null
                        }
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        {/* <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div> */}
                        
                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign in
                        </button>
                        <br />
                        <Link to="/register" style={{ margin: "10px 0px 10px 0px" }} className="w-100 btn btn-lg btn-success">Sign up</Link>
                    </form>
                </main>
            </div>

            <Footer />

        </>
    )
}
