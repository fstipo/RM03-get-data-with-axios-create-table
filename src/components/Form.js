import React, { useState, useEffect } from 'react'
import TableComp from './TableComp';
import PageNotFound from '../pages/not-found/PageNotFound';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import popover from './PopOver';

import { getData, formatData } from '../utils/utils';

const Form = () => {
    const [url, setUrl] = useState("");
    const [urlId, setURLId] = useState("");
    const [data, setData] = useState("");
    const [showErrorPage, setErrorPage] = useState(false);



    useEffect(() => {
        setErrorPage(false);
        console.log(formatData(data.changedAt));
        console.dir(data);
    }, [data])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        getData(url, urlId).then(data => setData(data))
            .catch(err => console.log(err.message));
        if (data) {
            setErrorPage(true);
        } else {
            setErrorPage(false);
        }
    }

    const onClearUrlHandler = (e) => {
        e.target.previousElementSibling.value = "";
        setUrl("");
    }

    const onClearIdHandler = (e) => {
        e.target.previousElementSibling.value = "";
        setURLId("");
    }

    const focusIdHandler = (e) => {
        console.log("Focus on ID")
        console.dir(e.target);
        document.querySelector("#id").focus();

    }

    return (
        <>
            <div className='mt-1 text-center card p-3' >
                <h3 className='p-2 display-5'>Test your API</h3>
                <div className='card m-1 p-3'>
                    <form action='https://example.com' onSubmit={onSubmitHandler}>
                        <div className='form-grid'>
                            <div className='flow'>
                                <input className='me-2' id='url' type="url" size="45" placeholder='URL:&nbsp; https://example.com' name='url' list='defaultURLs' pattern="https://.*" required autoFocus onChange={(e) => setUrl(e.target.value)} />
                                <i className="col-1 bi bi-x-circle-fill" onClick={onClearUrlHandler}></i>
                                <datalist id="defaultURLs">
                                    <option value="https://es-demo.azurewebsites.net/v1/People/" label="ES Demo"></option>
                                    <option value="https://jsonplaceholder.typicode.com/posts/" label="JSON Placeholder - Posts (id=1-100)"></option>
                                    <option value="https://jsonplaceholder.typicode.com/comments/" label="JSON Placeholder - Comments (id=1-500)"></option>
                                    <option value="https://jsonplaceholder.typicode.com/albums/" label="JSON Placeholder - Albums (id=1-100)"></option>
                                    <option value="https://jsonplaceholder.typicode.com/photos/" label="JSON Placeholder - Photos (id=1-5000)"></option>
                                    <option value="https://jsonplaceholder.typicode.com/todos/" label="JSON Placeholder - Todos (maxId=200)"></option>
                                </datalist>
                            </div>

                            <div className='flow'>
                                <input className='me-2 url-id' id="id" type="number" placeholder='id' onChange={(e) => setURLId(e.target.value)} />
                                <i className="bi bi-x-circle-fill" onClick={onClearIdHandler}></i>
                                <small className='mx-5 text-start fw-bold'>Without id you will get all data</small>
                            </div>
                            <div className='flow'>
                                <label className='ms-2'>history</label>
                                <OverlayTrigger trigger="click" placement="right" overlay={popover} >
                                    <input className='ms-2 history' type="checkbox" onClick={focusIdHandler}></input>
                                </OverlayTrigger>
                            </div>
                            <button className='btn btn-dark text-uppercase url-btn'>Get data</button>
                        </div>
                    </form >

                </div >
            </div >
            {!showErrorPage && data ? <TableComp dataList={data} /> : null}
            {showErrorPage && < PageNotFound />}

        </>
    )
}

export default Form

