import React from 'react'

export default function CustomError(props) {
    return (
        <div>
            <div className="alert alert-danger">{props.msg}</div>
        </div>
    )
}
