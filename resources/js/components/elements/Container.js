import React from 'react'

/**
 * Container Element
 * @param {*} props 
 * @returns 
 */
export default function Container(props) {
    return (
        <>
            <div
                className={"container " + props.className}
            >
                {props.children}
            </div>
        </>
    )
}

Container.defaultProps = {
    className: "container",
};