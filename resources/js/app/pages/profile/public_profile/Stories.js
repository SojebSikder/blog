import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// action
import { showUserByUsername } from "../../../store/actions/UserActions";
import StoryCard from './components/StoryCard';
// components
import Spinner from '../../../components/spinner';

export const Stories = (props) => {

    useEffect(() => {
        props.showUserByUsername(props.match.params.username);
    }, [])


    if (props.userStoriesSpinner == true) {
        return (
            <>
                <div className="d-flex justify-content-center" style={{ height: "500px" }}>
                    <Spinner />
                </div>

            </>
        );
    } else {
        return (
            <>
                <main className="col-span-12 md:col-span-9 md:px-4">
                    <div>
                        <div className="readme-content dark:bg-gray-800">
                            <div className="markdown">

                                {props.user.blogs.length == 0 ? "Empty" : props.user.blogs.map((blog) => {
                                    return (
                                        <div key={blog.id}>

                                            <StoryCard
                                                title={blog.title}
                                                date={blog.created_at}
                                                link={"/blog/" + props.match.params.username + "/" + blog.name}
                                            />

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
}

const mapStateToProps = (state) => ({
    userStoriesSpinner: state.user.userStoriesSpinner,
    user: state.user.userStories
})

const mapDispatchToProps = (dispatch) => {
    return {
        showUserByUsername: (id) => dispatch(showUserByUsername(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories)
