import React from 'react'
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className="page-404-container">
            <h1 className='header-title'>404</h1>
            <div className='cloak__wrapper'>
                <div className='cloak__container'>
                    <div className='cloak'></div>
                </div>
            </div>
            <div className='info'>
                <h2>We can't fetch the data</h2>
                <p>Try another URL or another ID. Thank you</p>
                <a href="https://jhey.dev" target="_blank" rel="noreferrer noopener">Home</a>
            </div>
        </div>
    )
}

export default PageNotFound