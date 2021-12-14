import React from 'react'
import { Button , ButtonGroup } from 'react-bootstrap'
import GetInventory from '../comps/getInventory'

function Inventory() {
    return (
        <div>
            <>
                <ButtonGroup aria-label="Basic example" style={{margin:'10px' }}>
                    <Button variant="outline-dark">Edit Inventory</Button>
                    <Button variant="outline-dark">Add Product</Button>
                </ButtonGroup>
                <br />
                <br />
                <GetInventory />
            </>
        </div>
    )
}

export default Inventory
