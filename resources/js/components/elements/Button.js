import React from 'react'

/**
 * Button Element
 * @param {*} props 
 * @returns 
 */
export default function Button(props) {
    return (
        <>
            <button
                type={props.type}
                className={props.className}
                onClick={props.onClick}
            >
                {props.value}
            </button>
        </>
    )
}

Button.defaultProps = {
    type: 'button',
    value: '',
    className: 'btn btn-primary',
    onClick: () => { }
};