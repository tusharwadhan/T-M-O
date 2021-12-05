import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TableData1,TableData2,TableData3,TableData4,TableData5,TableData6} from "../comps/getOrder"

function click(){
    console.log("hello there");
}

function Home() {

    return (
        <>
            <br />
            <div className='container'>
                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 01
                        <Button variant="primary" className='btn-right' onClick={()=>click()}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData1 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className='btn-left green'>Receipt</Button>
                        <Button variant="primary" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 02
                        <Button variant="primary" className='btn-right'>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData2 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className='btn-left green'>Receipt</Button>
                        <Button variant="primary" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 03
                        <Button variant="primary" className='btn-right'>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData3 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className='btn-left green'>Receipt</Button>
                        <Button variant="primary" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <br/>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 04
                        <Button variant="primary" className='btn-right'>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData4 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className='btn-left green'>Receipt</Button>
                        <Button variant="primary" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 05
                        <Button variant="primary" className='btn-right'>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData5 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className='btn-left green'>Receipt</Button>
                        <Button variant="primary" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 06
                        <Button variant="primary" className='btn-right'>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData6 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className='btn-left green'>Receipt</Button>
                        <Button variant="primary" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}

export default Home
