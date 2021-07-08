import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import Auth from '../../api/Auth';


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

            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Blog</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
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



                            <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li>

                            {localStorage.getItem('token') == null ? null : (
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {localStorage.getItem('username')}
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/profile">{user.name}</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
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
            </nav>
        </>
    )
}

export default withRouter(Navbar);