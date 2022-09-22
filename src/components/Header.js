import React from 'react'

const Header = (props) => {
    return (
        <header className='mt-3 text-center card'>
            <h1 className='p-3 mb-0'>{props.text}</h1>
        </header>
    )
}

export default Header