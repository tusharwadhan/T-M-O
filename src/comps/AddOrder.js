import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Table, Image, Button } from 'react-bootstrap';
import logo from '../tmoLogo.png'
import vegLogo from '../vegLogo.png'
import nonVegLogo from '../nonVegLogo.png'
import { toast } from 'react-toastify';

function AddOrder(props) {
    const [category, setcategory] = useState([]);
    const [item, setitem] = useState([]);

    const insert = async (quantityId , isVeg , itemId) =>{

        if(quantityId === undefined){
            toast("please select price!");
            return;
        }
        if(isVeg === undefined || props.table === undefined || itemId === undefined){
            toast("something went wrong please try again later!");
            return;
        }

        toast("adding order");
        const obj = [{
            "item_id":itemId,
            "isVeg":isVeg,
            "table_no":props.table,
            "quantity_id":quantityId
        }]

        const response = await axios.post("https://t-m-o.herokuapp.com/order", obj);
        if(response.status === 200){
            const data = response.data;
            if(data.status === true){
                toast(data.message);
            }
            else{
                toast(data.message);
            }
        }
        else{
            toast("server error.. try again later!");
        }
    }

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
                        <br key={cIndex}/>

                        <Table responsive="sm" key={cIndex}>


                            <thead key={cIndex}>
                                <h3 >{cat.name}</h3>
                            </thead>

                            <tbody key={cIndex}>
                                <tr >
                                    <div>
                                        {item.data && item.data.map((product, pIndex) => {

                                            let quantity;
                                            const setQuantity = (q) =>{
                                                quantity = q;
                                            }


                                            return (cat._id === product.category_id && <>
                                                <td key={pIndex}>
                                                    <Image src={logo} style={{ height: '40px' }} />
                                                </td>
                                                <td key={pIndex}></td>
                                                <td key={pIndex}>
                                                    <p style={{ fontSize: '15px' }}>{product.name}</p>
                                                </td>
                                                <td key={pIndex}>
                                                    {product.isVeg ? <Image src={vegLogo} style={{ height: '15px' }} /> : <Image src={nonVegLogo} style={{ height: '15px' }} />}
                                                </td>
                                                
                                                <td style={{float:'center' ,marginLeft:'-100px'}}>
                                                <div style={{display:'block',textAlign:'center'}}>
                                                <form key={pIndex}  style={{marginTop:'-50px'}}>
                                                    <td>
                                                    {product.quantity_price[2] && <>
                                                        <input type="radio" 
                                                            name="same"
                                                            value="1"
                                                            onClick={()=>setQuantity(product.quantity_price[2]._id)}/> {product.quantity_price[2].type}<p>{`Rs. ${product.quantity_price[2].price} ||`}</p>
                                                    </>
                                                    }
                                                    </td>
                                                    <td>
                                                    {product.quantity_price[1] && <>
                                                        <input type="radio" 
                                                            name="same"
                                                            value="2" 
                                                            onClick={()=>setQuantity(product.quantity_price[1]._id)}/> {product.quantity_price[1].type} <p>{`Rs. ${product.quantity_price[1].price} ||`}</p>
                                                    </>
                                                    }
                                                    </td>
                                                    <td>
                                                    {product.quantity_price[0] && <>
                                                        <input type="radio"
                                                            name="same"
                                                            value="3"
                                                            onClick={()=>setQuantity(product.quantity_price[0]._id)}/> {product.quantity_price[0].type}<p>{`Rs. ${product.quantity_price[0].price}`}</p>
                                                        </>
                                                    }
                                                    </td>
                                                    
                                                </form>
                                                </div>
                                                </td>

                                                    <td style={{float:'right'}}>
                                                <Button variant="outline-primary" style={{float:'right' ,marginTop:'-60px' , marginLeft:'280px'}} onClick={()=>insert(quantity , product.isVeg , product._id)}>add</Button>
                                                </td>
                                                <hr />
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