import React from 'react'
import { Modal , Button } from 'react-bootstrap'
import AddOrder from '../comps/AddOrder'

function Popup(props) {
    console.log(props.table);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height:'450px' , overflow:'auto'}}>

                <AddOrder />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Done</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Popup