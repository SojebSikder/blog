import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// action
import { showDraft } from "../../../store/actions/BlogActions";
// components
import StoryCard from '../public_profile/components/StoryCard';
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
        <>
            {/* <h1>Drafts</h1> */}

            <main className="col-span-12 md:col-span-9 md:px-4">
                <div>
                    <div className="readme-content dark:bg-gray-800">
                        <div className="markdown">

                            {props.draft.map((blog) => {
                                return (
                                    <div key={blog.id}>

                                        <StoryCard
                                            title={blog.title}
                                            date={blog.created_at}
                                            link="#"
                                        // link={"/blog/" + blog.user.username + "/" + blog.name}
                                        >
                                            <span style={{ marginLeft: "20px", }}></span>
                                            <Link to={"/edit/" + blog.id}
                                                className="font-bold text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit
                                            </Link>
                                            <span style={{ marginLeft: "20px", }}></span>

                                            <a href="#"
                                                className="mr-2 text-sm font-bold text-red-400 hover:underline">
                                                Delete
                                            </a>

                                        </StoryCard>


                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </main>

        </>
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
