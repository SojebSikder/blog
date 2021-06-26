import React, { useEffect } from 'react'

// Components
import ReduxExample from './ReduxExample';
import Container from '../../../../components/elements/Container';
import Navbar from '../../partials/Navbar';;

export default function Index() {

    return (
        <>
            <Navbar />
            <div className="col-xs-6 col-md-6 col-sm">
                Dashboard
            </div>
        </>
    )
}
