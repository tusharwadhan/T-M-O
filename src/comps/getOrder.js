import { React, useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

//getting data for table 1
const TableData1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/order?table_no=1");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if(data.status === false){
        return(data.message);
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                            </tr>
                        );
                        
                    })}
                </tbody>
            </Table>
        </>
    )
}

// getting data for tale 2
const TableData2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/order?table_no=2");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if(data.status === false){
        return(data.message);
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                            </tr>
                        );
                        
                    })}
                </tbody>
            </Table>
        </>
    )
}

// getting data for tale 3
const TableData3 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/order?table_no=3");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if(data.status === false){
        return(data.message);
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                            </tr>
                        );
                        
                    })}
                </tbody>
            </Table>
        </>
    )
}

// getting data for tale 4
const TableData4 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/order?table_no=4");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if(data.status === false){
        return(data.message);
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                            </tr>
                        );
                        
                    })}
                </tbody>
            </Table>
        </>
    )
}

// getting data for tale 5
const TableData5 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/order?table_no=5");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if(data.status === false){
        return(data.message);
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                            </tr>
                        );
                        
                    })}
                </tbody>
            </Table>
        </>
    )
}

// getting data for tale 6
const TableData6 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/order?table_no=6");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if(data.status === false){
        return(data.message);
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                            </tr>
                        );
                        
                    })}
                </tbody>
            </Table>
        </>
    )
}

export {TableData1}
export {TableData2}
export {TableData3}
export {TableData4}
export {TableData5}
export {TableData6}