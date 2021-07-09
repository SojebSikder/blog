import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

// Components
import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';
import Row from './Row';

export default function Index() {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <Link
                            style={{ margin: " 20px 50px 50px 50px", }}
                            className="btn btn-primary"
                            to="/write"
                        >
                            Write something?
                        </Link>
                    </div>
                    {/* Display blogs */}
                    <Row />
                </div>
            </div>
            <Footer />

        </>
    )
}
