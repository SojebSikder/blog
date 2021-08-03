import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Input Component
 * @param {*} param0 
 * @returns 
 */
export default function index({ ...rest }) {

    return (
        <input
            {...rest}
            className="border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />

        // <button
        //     {...rest}
        //     className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        // >
        //     {children}
        // </button>
    )

}
