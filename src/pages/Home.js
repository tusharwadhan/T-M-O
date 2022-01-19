import { React, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableData1, TableData2, TableData3, TableData4, TableData5, TableData6 } from "../comps/getOrder"
import Popup from './Popup';
import axios from 'axios';
import { toast } from 'react-toastify';

function Home() {
    const [show, setShow] = useState(false);
    const [load1, setLoad1] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [load3, setLoad3] = useState(false);
    const [load4, setLoad4] = useState(false);
    const [load5, setLoad5] = useState(false);
    const [load6, setLoad6] = useState(false);
    const [table, setTable] = useState();

    const receipt = ()=>{
        toast('This feature is coming soon');
    }

    const finish = async(table)=>{
    
        const obj = {"table_no":table}
        const response = await axios.post("https://t-m-o.herokuapp.com/orderfinish", obj);
        if(response.status === 200){
            const data = response.data;
            if(data.status === true){
                switch (table) {
                    case 1:setLoad1(false); break;
                    case 2:setLoad2(false); break;
                    case 3:setLoad3(false); break;
                    case 4:setLoad4(false); break;
                    case 5:setLoad5(false); break;
                    case 6:setLoad6(false); break;
                    default:
                }
                toast(data.message);
            }
            else{
                switch (table) {
                    case 1:setLoad1(false); break;
                    case 2:setLoad2(false); break;
                    case 3:setLoad3(false); break;
                    case 4:setLoad4(false); break;
                    case 5:setLoad5(false); break;
                    case 6:setLoad6(false); break;
                    default:
                }
                toast(data.message);
            }
        }
        else{
            switch (table) {
                case 1:setLoad1(false); break;
                case 2:setLoad2(false); break;
                case 3:setLoad3(false); break;
                case 4:setLoad4(false); break;
                case 5:setLoad5(false); break;
                case 6:setLoad6(false); break;
                default:
            }
            toast('server error!');
        }
    }

    return (
        <>
            <br />
            <div className='container'>
                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 01
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(1); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData1 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green' onClick={()=>receipt()} >Receipt</Button>
                        {!load1 ?<Button variant="outline-success" className='btn-right green' onClick={()=>{setLoad1(true); finish(1)}}>Pay Bill</Button>
                        :<Button variant="outline-success" className='btn-right green' disabled>loading...</Button>}
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 02
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(2); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData2 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green' onClick={()=>receipt()}>Receipt</Button>
                        {!load2 ?<Button variant="outline-success" className='btn-right green' onClick={()=>{setLoad2(true); finish(2)}}>Pay Bill</Button>
                        :<Button variant="outline-success" className='btn-right green' disabled>loading...</Button>}
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 03
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(3); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData3 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green' onClick={()=>receipt()}>Receipt</Button>
                        {!load3 ?<Button variant="outline-success" className='btn-right green' onClick={()=>{setLoad3(true); finish(3)}}>Pay Bill</Button>
                        :<Button variant="outline-success" className='btn-right green' disabled>loading...</Button>}
                    </Card.Footer>
                </Card>

                <br />

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 04
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(4); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData4 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green' onClick={()=>receipt()}>Receipt</Button>
                        {!load4 ?<Button variant="outline-success" className='btn-right green' onClick={()=>{setLoad4(true); finish(4)}}>Pay Bill</Button>
                        :<Button variant="outline-success" className='btn-right green' disabled>loading...</Button>}
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 05
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(5); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData5 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green' onClick={()=>receipt()}>Receipt</Button>
                        {!load5 ?<Button variant="outline-success" className='btn-right green' onClick={()=>{setLoad5(true); finish(5)}}>Pay Bill</Button>
                        :<Button variant="outline-success" className='btn-right green' disabled>loading...</Button>}
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 06
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(6); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData6 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green' onClick={()=>receipt()}>Receipt</Button>
                        {!load6 ?<Button variant="outline-success" className='btn-right green' onClick={()=>{setLoad6(true); finish(6)}}>Pay Bill</Button>
                        :<Button variant="outline-success" className='btn-right green' disabled>loading...</Button>}
                    </Card.Footer>
                </Card>
            </div>

            <Popup
                table={table}
                show={show}
                onHide={() => setShow(false)}
            />
        </>
    )
}

export default Home
