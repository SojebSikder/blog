import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import * as Constant from '../../config/constant'
import './style.css';

import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
import Auth from '../../api/Auth';
import { CustomSuccess, CustomError } from '../../components/messages/CustomMsg';


export default function Index() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')

    const [error_message, setError_message] = useState('')
    const [message, setMessage] = useState('')


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirm_password(e.target.value)
    }

    const handleRegister = () => {

        setMessage(null);
        setError_message(null);

        if (email == "" || username == "" || password == "" || confirm_password == "") {

            setError_message("Please enter all Required Fields.");
            return false;
        }

        if (password == confirm_password) {
            setMessage("Registering... Please wait!");
            // If password match then continue
            const data = new FormData();
            data.append('email', email);
            data.append('username', username);
            data.append('name', name);
            data.append('password', password);
            // data.append('_method', 'PATCH');

            Auth.register(data, (res) => {
                if (res.data.success == true) {
                    setMessage(res.data.message);
                } else {
                    setError_message(res.data.message);
                }

            }, (err) => {
                if (err) {
                    setError_message(err.response.data.message);
                }
            });

        } else {
            setError_message("Password failed to match.");
        }
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <Navbar />

            <div className="body text-center">
                <main className="form-signin">
                    <form>
                        <img
                            className="mb-4"
                            src={Constant.BLOG_URL + "logo.png"}
                            width="72"
                            height="57"
                            style={{ marginLeft: "7rem", }}
                        />
                        <h1 className="h3 mb-3 fw-normal">Sign up. It's free</h1>

                        {
                            error_message ? <CustomError msg={error_message} /> : null
                        }
                        {
                            message ? <CustomSuccess msg={message} /> : null
                        }

                        <div className="form-floating">
                            <input
                                type="name"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Ex: Sojeb Sikder..."
                                onChange={handleNameChange}
                            />
                            <label htmlFor="floatingInput">*Full Name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="username"
                                className="form-control"
                                id="floatingInputUsername"
                                placeholder="Ex: sojebsikder..."
                                onChange={handleUsernameChange}
                            />
                            <label htmlFor="floatingInputUsername">*Username</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInputEmail"
                                placeholder="name@example.com"
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="floatingInputEmail">*Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                            <label htmlFor="floatingPassword">*Password</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingConfirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleConfirmPasswordChange}
                            />
                            <label htmlFor="floatingConfirmPassword">*Confirm Password</label>
                        </div>

                        {/* <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div> */}

                        <button
                            className="w-100 btn btn-lg btn-success"
                            type="button"
                            onClick={handleRegister}
                        >
                            Sign up
                        </button>
                        <br />
                        <Link to="/login" style={{ margin: "10px 0px 10px 0px" }} className="w-100 btn btn-lg btn-primary">Sign in</Link>
                    </form>
                </main>
            </div>

            <Footer />

        </>
    )
}
