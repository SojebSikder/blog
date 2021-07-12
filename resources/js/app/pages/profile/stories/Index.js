import React from 'react'
import Navbar from '../../../components/partials/navbar/Navbar'

export default function Index() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="d-flex">
                    <div className="flex-row">
                        <h1 style={{ display: "inline" }}>My Stories</h1>
                        <button
                            className="btn btn-primary"
                        >
                            Write Story
                        </button>
                    </div>
                </div>



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

        </>
    )
}
