import { React, useEffect, useState } from 'react'
import { Table, Spinner ,Button} from 'react-bootstrap'
import axios from 'axios'
import {url} from '../config.js'

function GetTransactions() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getTrans();
    }, []);

    const getTrans = async () => {
        const response = await axios.get(`${url}/transactions`);
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
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        )
    }
    return (
        <div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Date</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data && data.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.date}</td>
                                <td>{item.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default GetTransactions