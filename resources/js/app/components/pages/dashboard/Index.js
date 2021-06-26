import React, { useEffect } from 'react'

// Components
import ReduxExample from './ReduxExample';
import Container from '../../../../components/elements/Container';
import Navbar from '../../partials/Navbar';;
import Sidebar from '../../partials/Sidebar';

export default function Index() {

    return (
        <>
            <Navbar />
            {/* <Sidebar /> */}
            <Container>
                Dashboard
                <ReduxExample />
            </Container>
        </>
    )
}
