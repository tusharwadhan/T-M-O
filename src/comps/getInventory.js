import { React, useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Button, Container, ListGroup, Image } from 'react-bootstrap'
import axios from 'axios'
import logo from '../tmoLogo.png'
import vegLogo from '../vegLogo.png'
import nonVegLogo from '../nonVegLogo.png'
import {url} from '../config.js'

function GetInventory() {
    const [items, setItem] = useState([]);
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        setInterval(() => {
            getCategory();
        }, 5000);
    }, []);

    const getCategory = async () => {
        const item = await axios.get(`${url}/items`);
        const category = await axios.get(`${url}/category`);
        if (category.status === 200) {
            setCategory(category.data);
        }
        if (item.status === 200) {
            setItem(item.data);
        }
    }

    if (categories.status === false) {
        return (categories.message);
    }
    if (categories.data === undefined) {
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
        <>
            <Container style={{ width: '80%' }}>
                <ListGroup style={{ width: '100%' }}>
                    {categories.data && categories.data.map((cat, cIndex) => {
                        return (
                            <>
                                <ListGroup.Item key={cIndex}>
                                    <h2 style={{ float: 'left' }}>{cat.name}</h2>
                                    <br />
                                    <hr style={{ height: '3px', marginTop: '25px' }} />
                                    {items.data && items.data.map((product, pIndex) => {
                                        return (
                                            cat._id === product.category_id &&
                                            <>
                                                <br />
                                                <Image src={logo} style={{ height: '70px', float: 'left' }} />
                                                <p style={{ textAlign: 'left',marginLeft:'80px' , marginTop:'13px' ,fontSize:'20px' }}>
                                                    {`TMO ${product.name} `}
                                                    {product.isVeg ?<Image src={vegLogo} style={{ height: '20px' }} />:<Image src={nonVegLogo} style={{ height: '20px' }} />}
                                                </p>
                                                <p className="text-muted" style={{ textAlign: 'left',marginLeft:'80px' , marginTop:'-20px' }}>Coocked with Love</p>
                                                <p style={{ textAlign:'right' ,fontSize:'20px' , marginTop:'-62px'}}>{`Rs. ${product.quantity_price[0].price}.00`}</p>
                                                <p className="text-muted" style={{ textAlign:'right', marginTop:'-20px'}}>10% Off</p>
                                                <hr style={{ height: '2px' }}/>
                                            </>
                                        )
                                    })}
                                </ListGroup.Item>
                                <br />
                            </>
                        )
                    })}
                </ListGroup>
            </Container>
        </>
    )
}

export default GetInventory