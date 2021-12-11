import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Table,Image } from 'react-bootstrap';
import logo from '../tmoLogo.png'
import vegLogo from '../vegLogo.png'
import nonVegLogo from '../nonVegLogo.png'

function AddOrder() {
    const [category, setcategory] = useState([]);
    const [item, setitem] = useState([]);

    useEffect(() => {
        get();
    }, []);

    const get = async () => {
        const categories = await axios.get("https://t-m-o.herokuapp.com/category");
        const items = await axios.get("https://t-m-o.herokuapp.com/items");
        if (categories.status === 200) {
            setcategory(categories.data);
        }
        if (items.status === 200) {
            setitem(items.data);
        }
    }
    return (
        <>
            <div>
                {!category.data ? <h1>loading...</h1> : category.data.map((cat, cIndex) => {
                    return (<>
                        <br />

                        <Table responsive="sm">


                            <thead>
                                <h3 key={cIndex}>{cat.name}</h3>
                            </thead>

                            <tbody>
                                <tr>
                                    <div>
                                        {item.data && item.data.map((product, pIndex) => {
                                            return (cat._id === product.category_id && <>
                                                <td>
                                                    <Image src={logo} style={{height:'40px'}} />
                                                </td>
                                                <td></td>
                                                <td>
                                                <p style={{fontSize:'15px'}}>{product.name}</p>
                                                </td>
                                                <td>
                                                {product.isVeg ?<Image src={vegLogo} style={{height:'15px'}}/>: <Image src={nonVegLogo} style={{height:'15px'}}/>}
                                                </td>

                                                <td style={{float:'right' , marginTop:'-50px'}}><p>{product.quantity_price[0].price}</p></td>

                                                <hr/>
                                            </>
                                            )
                                        })}
                                    </div>
                                </tr>
                            </tbody>
                        </Table>
                    </>
                    )
                })}
            </div>
        </>
    )
}

export default AddOrder