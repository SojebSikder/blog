import React from 'react'
import './style.css';

export default function index() {
    return (
        <>
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
