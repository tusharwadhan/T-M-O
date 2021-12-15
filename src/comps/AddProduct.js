import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dropdown, ButtonGroup, Tabs, Tab } from 'react-bootstrap'

function AddProduct() {
    const [categories, setCategory] = useState([]);
    const [category, setCat] = useState([]);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/category");
        if (response.status === 200) {
            setCategory(response.data);
        }
    }

    return (
        <>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Add product">

                    <div>
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                                Select Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {!categories.data ?
                                    <Dropdown.Item disabled>Loading...</Dropdown.Item> :
                                    categories.data.map((cat, index) => {
                                        return (
                                            <Dropdown.Item key={index} onClick={() => { setCat(cat._id); console.log(category) }}>{cat.name}</Dropdown.Item>
                                        )
                                    })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <br/>
                        <br/>
                        <p>Enter Name</p>
                        <input type='text' placeholder='Enter product name' />
                        <br/>
                        <br/>
                        <p>Veg/NonVeg</p>
                        <input type='text' placeholder='Enter product name' />
                    </div>

                </Tab>
                <Tab eventKey="profile" title="Add Category">
                    <h1>hi</h1>
                </Tab>
            </Tabs>


        </>
    )
}

export default AddProduct