import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddOrder from '../comps/AddOrder'
import AddProduct from '../comps/AddProduct'

function Popup(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.table ?
                        <>
                            <h2>Add Order</h2>
                            <p style={{ fontSize: '13px' }} className='text-muted'>{`table no. ${props.table}`}</p>
                        </>:
                        <h2>Add Product</h2>
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: '450px', overflow: 'auto' }}>

                {props.table ?<AddOrder table={props.table} />:<AddProduct/>}
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Done</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Popup