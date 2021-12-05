import { React, useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap'
import axios from 'axios'

function GetInventory() {
    const [data,setData] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        const response = await axios.get("https://t-m-o.herokuapp.com/items");
        if (response.status === 200) {
            setData(response.data);
        }
    }

    if(data.status === false){
        return(data.message);
    }
    const isveg = (val)=>{
        if(val === true)return ("Veg");
        else return ("Non_Veg");
    }

    return (
        <>
        {data.data && data.data.map((item,index)=>{
            const type = (val,i)=>{
                if(val === undefined)return ("--");
                return item.quantity_price[i].type;
            }
            const price = (val,i)=>{
                if(val === undefined)return ("--");
                return item.quantity_price[i].price;
            }

            return(<Table responsive="sm" key='index'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Veg/NonVeg</th>
                    <th>{type(item.quantity_price[0],0)}</th>
                    <th>{type(item.quantity_price[1],1)}</th>
                    <th>{type(item.quantity_price[2],2)}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{isveg(item.isVeg)}</td>
                    <td>{price(item.quantity_price[0],0)}</td>
                    <td>{price(item.quantity_price[1],1)}</td>
                    <td>{price(item.quantity_price[2],2)}</td>
                </tr>
            </tbody>
        </Table>)
            
        })}
        </>
    )
}

export default GetInventory