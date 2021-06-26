import React, { useEffect, useState } from 'react'
import Navbar from '../../partials/Navbar';
import { Link } from "react-router-dom";
import * as Constant from '../../../config/constant'
import './style.css';


export default function Index() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <Navbar />

            <div className="body text-center">
                <main className="form-signin">
                    <form>
                        <img className="mb-4" src={Constant.BLOG_URL + "logo.png"} alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
                        <br />
                        <Link to="/register" style={{ margin: "10px 0px 10px 0px" }} className="w-100 btn btn-lg btn-success">Sign up</Link>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                </main>
            </div>

        </>
    )
}
