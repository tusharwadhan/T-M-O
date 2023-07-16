import { React, useState, useEffect } from 'react'
import { Table, Spinner, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import {url} from '../config.js'

const deleteOrder = async (id) => {

    if (window.confirm("are you sure you want to delete this order ?")) {
        const obj = { "id": id }
        const response = await axios.delete(`${url}/order`, {data:obj});
        if (response.status === 200) {
            const data = response.data;
            if (data.status === true) {
                toast(data.message);
            }
            else {
                toast(data.message);
            }
        }
        else {
            toast("server error!");
        }
    }
}

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Delete this order
    </Tooltip>
);

//getting data for table 1
const TableData1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setInterval(() => {
            getOrder();
        }, 5000);
    }, []);

    const getOrder = async () => {
        const response = await axios.get(`${url}/order?table_no=1`);
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if (data.status === false) {
        return (data.message);
    }
    if (data.data === undefined) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /></Button>
        )
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="outline-dark" onClick={() => deleteOrder(items._id)} style={{ fontSize: '10px' }}>Del</Button>
                                    </OverlayTrigger>
                                </td>
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
        setInterval(() => {
            getOrder();
        }, 3000);
    }, []);

    const getOrder = async () => {
        const response = await axios.get(`${url}/order?table_no=2`);
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if (data.status === false) {
        return (data.message);
    }
    if (data.data === undefined) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /></Button>
        )
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="outline-dark" onClick={() => deleteOrder(items._id)} style={{ fontSize: '10px' }}>Del</Button>
                                    </OverlayTrigger>
                                </td>
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
        setInterval(() => {
            getOrder();
        }, 3000);
    }, []);

    const getOrder = async () => {
        const response = await axios.get(`${url}/order?table_no=3`);
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if (data.status === false) {
        return (data.message);
    }
    if (data.data === undefined) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /></Button>
        )
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="outline-dark" onClick={() => deleteOrder(items._id)} style={{ fontSize: '10px' }}>Del</Button>
                                    </OverlayTrigger>
                                </td>
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
        setInterval(() => {
            getOrder();
        }, 3000);
    }, []);

    const getOrder = async () => {
        const response = await axios.get(`${url}/order?table_no=4`);
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if (data.status === false) {
        return (data.message);
    }
    if (data.data === undefined) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /></Button>
        )
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="outline-dark" onClick={() => deleteOrder(items._id)} style={{ fontSize: '10px' }}>Del</Button>
                                    </OverlayTrigger>
                                </td>
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
        setInterval(() => {
            getOrder();
        }, 3000);
    }, []);

    const getOrder = async () => {
        const response = await axios.get(`${url}/order?table_no=5`);
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if (data.status === false) {
        return (data.message);
    }
    if (data.data === undefined) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /></Button>
        )
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="outline-dark" onClick={() => deleteOrder(items._id)} style={{ fontSize: '10px' }}>Del</Button>
                                    </OverlayTrigger>
                                </td>
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
        setInterval(() => {
            getOrder();
        }, 3000);
    }, []);

    const getOrder = async () => {
        const response = await axios.get(`${url}/order?table_no=6`);
        if (response.status === 200) {
            setData(response.data);
        }
    }
    if (data.status === false) {
        return (data.message);
    }
    if (data.data === undefined) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            </Button>
        )
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.quantity_price.type}</td>
                                <td>{items.quantity_price.price}</td>
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="outline-dark" onClick={() => deleteOrder(items._id)} style={{ fontSize: '10px' }}>Del</Button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        );

                    })}
                </tbody>
            </Table>
        </>
    )
}

export { TableData1 }
export { TableData2 }
export { TableData3 }
export { TableData4 }
export { TableData5 }
export { TableData6 }