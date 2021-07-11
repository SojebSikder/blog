import React from 'react'
import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';

export default function Index(props) {
    return (
        <>
            <Navbar />
            <div className="container">

                Profile Page of {props.match.params.username}

            </div>

        </>
    )
}
