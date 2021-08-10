import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// action
import { showUserByUsername } from "../../../store/actions/UserActions";

export const About = (props) => {
    useEffect(() => {
        props.showUserByUsername(props.match.params.username);
    }, [])

    return (
        <>
            <main className="col-span-12 md:col-span-9 md:px-4">
                <div>
                    <div className="readme-content dark:bg-gray-800">
                        <div className="markdown">
                            {/* <h1>{props.user.about_me}</h1> */}
                            <h1>{props.user.about_me}</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

const mapStateToProps = (state) => ({
    spinner: state.user.spinner,
    user: state.user.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        showUserByUsername: (id) => dispatch(showUserByUsername(id)),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(About)
