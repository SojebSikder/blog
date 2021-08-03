import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../../components/partials/navbar/Navbar'

import Button from '../../../components/button';

export default function Index() {

    

    useEffect(() => {

    }, [])

    return (
        <>
            <Navbar />
            <div className="container">


                <div className="d-flex justify-content-center">

                    <div className="col">

                        <div style={{ marginTop: "2rem", }}></div>

                        <div className="row justify-content-between">
                            <div className="col">
                                <h1>My Stories</h1>
                            </div>

                            <div className="col">
                                {/* <Link
                                    className="btn btn-primary"
                                    to="/write"
                                >
                                    Write Story
                                </Link> */}
                                <Button
                                    isLink="true"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    to="/write"
                                >
                                    Write Story
                                </Button>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div>
                                <h1>My Stories</h1>
                            </div>

                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Write Story
                                </button>
                            </div>

                        </div> */}


                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="drafts-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#drafts"
                                    type="button"
                                    role="tab"
                                    aria-controls="drafts"
                                    aria-selected="true"
                                    style={{
                                        color: "#10b981",
                                    }}
                                >
                                    Drafts
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="published-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#published"
                                    type="button"
                                    role="tab"
                                    aria-controls="published"
                                    aria-selected="false"
                                    style={{
                                        color: "#10b981",
                                    }}
                                >
                                    Published
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="Responses-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#Responses"
                                    type="button"
                                    role="tab"
                                    aria-controls="Responses"
                                    aria-selected="false"
                                    style={{
                                        color: "#10b981",
                                    }}
                                >
                                    Responses
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="drafts"
                                role="tabpanel"
                                aria-labelledby="drafts-tab"
                            >
                                Drafts

                            </div>

                            <div
                                className="tab-pane fade"
                                id="published"
                                role="tabpanel"
                                aria-labelledby="published-tab"
                            >
                                Published
                            </div>

                            <div
                                className="tab-pane fade"
                                id="Responses"
                                role="tabpanel"
                                aria-labelledby="Responses-tab"
                            >
                                Responses
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
