import React, { useEffect } from 'react'

// Components
import Navbar from '../../partials/Navbar';
import Footer from '../../partials/footer/Footer';
import Row from './Row';

export default function Index() {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    {/* Display blogs */}
                    <Row />
                </div>
            </div>
            <Footer />

        </>
    )
}
