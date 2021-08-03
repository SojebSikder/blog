import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Button Component
 * @param {*} param0 
 * @returns 
 */
export default function index({ isLink, to, children, ...rest }) {
    /**
     * isLink = true // Uses link otherwise uses button
     */
    if (isLink == "true") {
        return (
            <Link
                {...rest}
                className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
                to={to}
            >
                {children}
            </Link>
        )
    } else {
        return (
            <button
                {...rest}
                className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
            >
                {children}
            </button>
        )
    }
}
