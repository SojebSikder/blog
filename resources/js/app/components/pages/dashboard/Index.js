import React, { useEffect } from 'react'

// Components
import Navbar from '../../partials/Navbar';;
import Row from './Row';

export default function Index() {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <h1>Dashboard</h1>

                    <Row />
                </div>
            </div>

        </>
    )
}
