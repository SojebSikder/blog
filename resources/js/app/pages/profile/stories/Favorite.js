import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// action
import { listFavorites } from "../../../store/actions/FavoriteActions";
// api
import FavoriteApi from '../../../api/Favorite';
// components
import StoryCard from '../public_profile/components/StoryCard';
import Spinner from '../../../components/spinner';
import { CustomSuccess, CustomError } from '../../../components/messages/CustomMsg';


export const Favorite = (props) => {

    const [error_message, setError_message] = useState('')
    const [message, setMessage] = useState('')

    const deleteById = (id) => {
        setMessage(null);
        setError_message(null);

        var bool = confirm('Are you sure to delete (this cannot be undone)');

        if (bool) {
            FavoriteApi.deleteById(id)
                .then((res) => {
                    setMessage('Deleted Blog Successfully');
                    updateUi();
                }).catch((err) => {
                    if (err) {
                        setError_message(err.response.data.message);
                    }
                });
        }
    }

    const updateUi = () => {
        props.listFavorites(1);
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
                    {
                        error_message ? <CustomError msg={error_message} /> : null
                    }
                    {
                        message ? <CustomSuccess msg={message} /> : null
                    }
                    <div className="readme-content dark:bg-gray-800">
                        <div className="markdown">

                            {props.favorites.length == 0 ? "Empty" : props.favorites.map((blog) => {
                                return (
                                    <div key={blog.id}>

                                        <StoryCard
                                            title={blog.blogs.title}
                                            date={blog.blogs.created_at}
                                            link={"/blog/" + blog.user.username + "/" + blog.blogs.name}
                                        >
                                            <span style={{ marginLeft: "20px", }}></span>
                                            <button onClick={() => deleteById(blog.id)}
                                                className="mr-2 text-sm font-bold text-red-400 hover:underline">
                                                Delete
                                            </button>

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
    spinner: state.favorite.spinner,
    favorites: state.favorite.favorites,
})

const mapDispatchToProps = (dispatch) => {
    return {
        listFavorites: (page) => dispatch(listFavorites(page)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
