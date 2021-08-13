import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// action
import { showDraft } from "../../../store/actions/BlogActions";
// components
import Spinner from '../../../components/spinner';

export const Drafts = (props) => {
    const updateUi = () => {
        props.showDraft();
    }
    useEffect(() => {
        updateUi();
    }, [])

    if (props.spinner == true) {
        return (
            <>
                <div className="d-flex justify-content-center"
                    style={{ height: "500px" }}
                >
                    <Spinner />
                </div>
                {/* <Footer /> */}
            </>

        );
    }
    return (
        <div>
            <h1>Drafts</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    spinner: state.blog.spinner,
    draft: state.blog.draft,
})

const mapDispatchToProps = (dispatch) => {
    return {
        showDraft: () => dispatch(showDraft()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drafts)
