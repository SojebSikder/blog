import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// action
import { showBlog } from "../../store/actions/BlogActions";
import { showUser } from "../../store/actions/UserActions";

import Navbar from '../../components/partials/navbar/Navbar';
import Footer from '../../components/partials/footer/Footer';


export const Index = (props) => {
    useEffect(() => {
        props.showBlog("sojebsikder", "what-is-django");
        props.showUser("1");
    }, [])
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>{props.blog.title}</h1>
                <h1>{props.user.name}</h1>

                <div className="grid grid-cols-12">
                    <aside className="col-span-12 mb-5 md:mb-0 md:col-span-3">
                        <div className="rounded w-72 md:w-full">
                            <div className="object-cover w-full h-auto overflow-hidden rounded">
                                <img src="https://res.cloudinary.com/techdiary-dev/image/fetch/c_scale,f_auto,q_auto,w_300/https://lh3.googleusercontent.com/a-/AOh14GgvGj-kvMMSh1w0CMDyR4qpNSLSId5XTXmz4fhVqQ%3Ds96-c"
                                    alt="sojebsikder" crop="scale" width="300" fetchformat="auto" quality="auto"
                                    loading="lazy" className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="flex items-center text-2xl dark:text-gray-200">
                                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-green-500"></span>

                                Sojeb Sikder
                            </h2> <p className="text-gray-600 dark:text-gray-400">@sojebsikder</p>
                            <p className="mt-2 dark:text-gray-300">

                            </p>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center mb-2">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-400">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                                <a target="_blank" href="http://www.github.com/sojebsikder"
                                    className="text-gray-800 dark:text-gray-400">sojebsikder</a>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-base font-bold text-gray-800 dark:text-gray-400">
                                আমার অন্যান্য সোশাল লিংকসমুহ
                            </h3>
                            <div className="flex space-x-2">

                            </div>
                        </div>
                    </aside>

                    <main className="col-span-12 md:col-span-9 md:px-4">
                        <div className="min-h-screen p-4 bg-white rounded shadow dark:bg-gray-800 dark:text-white">
                            <div className="flex mb-4 border-b">
                                <a href="/sojebsikder" className="active-tab nuxt-link-active" aria-current="page">
                                    <div className="flex items-center pb-2 mr-3 cursor-pointer profile-tab-button">
                                        <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 text-gray-800 dark:text-gray-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>প্রোফাইল</span></div></a>
                                <a href="/sojebsikder/diaries" className="">
                                    <div className="flex items-center pb-2 border-b-2 border-transparent cursor-pointer profile-tab-button">
                                        <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 text-gray-800 dark:text-gray-300">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                            </path>
                                        </svg>
                                        <span>ডায়েরি</span>
                                    </div>
                                </a>
                            </div>

                            <main className="col-span-12 md:col-span-9 md:px-4">
                                <div>
                                    <div className="readme-content dark:bg-gray-800">
                                        <div className="markdown">
                                            <h1>Hello, I am Sojeb Sikder</h1>
                                        </div>
                                    </div>
                                </div>
                            </main>

                        </div>
                    </main>

                </div>

            </div>

        </>
    )
}

const mapStateToProps = (state, ownProps) => ({

    blog: state.blog.blog,
    user: state.user.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        showBlog: (username, blog_name) => dispatch(showBlog(username, blog_name)),
        showUser: (id) => dispatch(showUser(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)