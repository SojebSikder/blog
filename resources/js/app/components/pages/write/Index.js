import React from 'react'
import { Link } from "react-router-dom";

import Navbar from '../../partials/Navbar';
import Footer from '../../partials/footer/Footer';

export default function Index() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <div className="d-flex justify-content-center">
                       Write to us
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
