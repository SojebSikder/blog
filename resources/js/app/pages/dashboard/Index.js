import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

// Components
import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
import Row from './Row';

import Button from '../../components/button/index';

export default function Index() {

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {/* <div className=""> */}
                <div className="d-flex justify-content-center">
                    {localStorage.getItem('token') == null ? null : (
                        <Button
                            isLink="true"
                            to="/write"
                            style={{
                                margin: "20px 50px 50px 50px",
                                textDecoration: "none"
                            }}
                        >
                            Write something
                        </Button>
                    )}

                </div>
                {/* Display blogs */}
                <Row />
                {/* </div> */}
            </div>
            <Footer />

        </>
    )
}
