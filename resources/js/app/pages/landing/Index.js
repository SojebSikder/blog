import React from 'react'
import Button from "../../../components/elements/Button";

export default function Index() {
    const handleAlert = () => {
        alert("Hello World")
    }
    return (
        <div>
            Welcome to Blog
            <Button value="Hello World" onClick={handleAlert} />
        </div>
    )
}
