import React from 'react'

export const CustomError = (props) => {
    return (
        <div>
            <div className="alert alert-danger">{props.msg}</div>
        </div>
    )
}
