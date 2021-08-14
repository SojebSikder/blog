import React from 'react'
import { Link } from "react-router-dom";

import DataUtil from '../../../../util/Data';

export default function StoryCard(props) {
    return (
        <div>
            <main>
                <div className="mt-4 dark:bg-gray-800">
                    <div className="flex mb-4 transition-all duration-500 ease-in-out rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="ml-3">
                            <h3 className="text-lg text-gray-700 dark:text-gray-100">
                                <Link to={props.link}
                                    className=""
                                >
                                    {props.title}
                                </Link>
                                {props.children}
                            </h3>
                            <p className="mt-3 text-sm font-bold text-gray-600 dark:text-gray-200">
                                {DataUtil.date(props.date)}
                            </p>
                        </div>
                    </div>
                    <div className="grid mt-4 place-content-center"></div>
                    <div>
                    </div>
                </div>
            </main>
        </div>
    )
}
