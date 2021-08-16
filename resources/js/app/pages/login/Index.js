import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import * as Constant from '../../config/constant'
import './style.css';
// api
import Auth from '../../api/Auth';
// Components
import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
import Button from '../../components/button';
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
                // localStorage.setItem("username", res.data.user.username);
                // localStorage.setItem("userType", res.data.user.user_type);
                props.history.push("/");
            } else {
                setError_message("Something went wrong :(");
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


            {/* <div className="body text-center"> */}
            <div>
                <main className="form-signin">

                    <form>
                        <img
                            className="mb-4"
                            src={Constant.BLOG_URL + "logo.png"}
                            width="72"
                            height="57"
                            style={{ marginLeft: "7rem", }}
                        />
                        <div className="flex items-center">
                            <h1 className="h3 mb-3 fw-normal"
                                style={{ marginLeft: "4rem", }}
                            >
                                Please sign in
                            </h1>
                        </div>


                        {
                            error_message ? <CustomError msg={error_message} /> : null
                        }
                        {
                            message ? <CustomSuccess msg={message} /> : null
                        }


                        {/* <div className="min-h-screen bg-gray-100 flex items-center">
                            <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                                <div className="py-12 p-10 bg-white rounded-xl">
                                    <div className="mb-6">
                                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Name</label>
                                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your name" />
                                    </div>
                                    <div className="">
                                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Email</label>
                                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="@email" />
                                    </div>
                                    <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">forget password</span>
                                    <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">LOGIN</button>
                                </div>
                            </div>
                        </div> */}


                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Username</label>
                            <input type="text"
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                                placeholder="Username or email"
                                onChange={handleEmailChange}
                                style={{ width: "19rem" }}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Password</label>
                            <input
                                type="text"
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                style={{ width: "19rem" }}
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
                            onClick={handleLogin}
                        >
                            LOGIN
                        </button>

                        <Link
                            to="/register"
                            style={{ margin: "10px 0px 10px 0px" }}
                            className="w-100 btn btn-lg btn-success"
                        >
                            REGISTER
                        </Link>
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                            to="/forgot-password"
                        >
                            Forgot Password?
                        </Link>



                        {/* <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div> */}


                        {/* <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div> */}

                        {/* <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div> */}


                        {/* <button
                            className="w-100 btn btn-lg btn-primary"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign in
                        </button>
                        <br />
                        <Link to="/register" style={{ margin: "10px 0px 10px 0px" }} className="w-100 btn btn-lg btn-success">Sign up</Link>
                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a> */}

                    </form>
                </main>
            </div>

            <Footer />

        </>
    )
}
