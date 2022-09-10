import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { toast } from 'react-toastify';
import GetInventory from '../comps/getInventory'
import Popup from './Popup';

function Inventory() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                <>
                    <ButtonGroup aria-label="Basic example" style={{ margin: '10px' }}>
                        <Button variant="outline-dark" onClick={()=>toast("This feature is coming soon") }>Edit Inventory</Button>
                        <Button variant="outline-dark" onClick={() => setShow(true)}>Add Product</Button>
                    </ButtonGroup>
                    <br />
                    <br />
                    <GetInventory />
                </>
            </div>

            <Popup
                show={show}
                onHide={() => setShow(false)}
            />
        </>
    )
}

export default Inventory
