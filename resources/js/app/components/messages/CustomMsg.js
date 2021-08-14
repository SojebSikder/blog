import React, { useState, useEffect } from 'react'

export const CustomError = (props) => {

    const [status, setStatus] = useState('');
    useEffect(() => {
        setStatus('show');
    }, [])

    return (
        // <div>
        //     <div className="alert alert-danger">{props.msg}</div>
        // </div>
        <div className={"alert alert-danger alert-dismissible fade " + status} role="alert">
            {props.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
export const CustomSuccess = (props) => {
    return (
        // <div>
        //     <div className="alert alert-success">{props.msg}</div>
        // </div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            {props.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}


{/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}