import React from 'react'
import Table from "react-bootstrap/Table"

const TableComp = ({ dataList }) => {

    return (
        <div className='card mt-1 p-3'>
            <Table striped bordered hover className='p-2'>
                <thead>
                    <tr key="0">
                        {dataList && Array.isArray(dataList) ?
                            Object.keys(dataList[0]).map((el, index) => <th className='text-center' key={index + 1}>{el}</th>) : Object.entries(dataList).map(([key, value]) => <th className='text-center' key={key + 2}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(dataList) ? dataList.map((el, index, arr) => <tr key={index + 1}>
                        {Object.entries(el).map(([key, value], index) => <td key={index + 1}> {value}</td>)}
                    </tr>) : <tr>{Object.entries(dataList).map(([key, value]) =>
                        <td key={key + 1}>{value}</td>)}</tr>}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComp