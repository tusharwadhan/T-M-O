import { React, useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Button, Container, ListGroup, Image } from 'react-bootstrap'
import axios from 'axios'
import logo from '../tmoLogo.png'
import vegLogo from '../vegLogo.png'
import nonVegLogo from '../nonVegLogo.png'

function GetInventory() {
    const [items, setItem] = useState([]);
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        const item = await axios.get("https://t-m-o.herokuapp.com/items");
        const category = await axios.get("https://t-m-o.herokuapp.com/category");
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
                                    <h3 style={{ float: 'left' }}>{cat.name}</h3>
                                    <br />
                                    <hr style={{ height: '3px', marginTop: '20px' }} />
                                    {items.data && items.data.map((product, pIndex) => {
                                        return (
                                            cat._id === product.category_id &&
                                            <>
                                                <br />
                                                <Image src={logo} style={{ height: '50px', float: 'left' }} />
                                                <p style={{ textAlign: 'left',marginLeft:'60px' , marginTop:'10px' }}>
                                                    {`${product.name} `}
                                                    {product.isVeg ?<Image src={vegLogo} style={{ height: '15px' }} />:<Image src={nonVegLogo} style={{ height: '15px' }} />}
                                                </p>
                                                {!product.quantity_price[0] === undefined && <p>{product.quantity_price[0].price}</p>}
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