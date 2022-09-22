import React from 'react'

const Form = () => {
    return (
        <div className='mt-1 text-center card' >
            <h3 className='p-2 display-5'>Test your API</h3>
            <div className='card m-3'>

                <div className='form-grid p-4 '>
                    <div className='flow text-left'>
                        <label className='me-2' >URL:</label>
                        <input type="url" size="30" placeholder='https://example.com' />
                    </div>
                    <div className='flow'>
                        <label className='me-2'>ID:</label>
                        <input size="6" type="number" placeholder='id' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form