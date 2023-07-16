import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import {url} from '../config.js'

function AddProduct() {
    const [categories, setCategory] = useState([]);
    const [category, setCat] = useState(undefined);
    const [isVeg, setIsVeg] = useState(true);

    const addItem = (name,first,second,third)=>{
        document.getElementById('ProductButton').innerText = "Loading..."
        document.getElementById('ProductButton').disabled = true

        if(name === undefined || name === ""){
            toast("please enter product name");
            document.getElementById('ProductButton').innerText = "Add Product"
            document.getElementById('ProductButton').disabled = false
            return;
        }
        if(category === undefined || category === "Select Category"){
            toast("please select category");
            document.getElementById('ProductButton').innerText = "Add Product"
            document.getElementById('ProductButton').disabled = false
            return;
        }
        if(first.firstQuantity === "" || first.firstPrice === ""){
            toast("please fill all fields properly");
            document.getElementById('ProductButton').innerText = "Add Product"
            document.getElementById('ProductButton').disabled = false
            return;
        }
        if(second.secondQuantity === "" && third.thirdQuantity === ""){
            if(second.secondPrice !== "" || third.thirdPrice !== ""){
                toast("please fill all fields properly");
                document.getElementById('ProductButton').innerText = "Add Product"
                document.getElementById('ProductButton').disabled = false
                return;
            }
            const obj = {
                "name":name,
                "category_id":category,
                "isVeg":isVeg,
                "quantity_price":[
                    {
                        "type":first.firstQuantity,
                        "price":first.firstPrice
                    }
                ]
            }
            insertProduct(obj);
            return;
        }
        if(second.secondQuantity !== "" && third.thirdQuantity === ""){
            if(second.secondPrice === "" || third.thirdPrice !== ""){
                toast("please fill all fields properly");
                document.getElementById('ProductButton').innerText = "Add Product"
                document.getElementById('ProductButton').disabled = false
                return;
            }
            const obj = {
                "name":name,
                "category_id":category,
                "isVeg":isVeg,
                "quantity_price":[
                    {
                        "type":first.firstQuantity,
                        "price":first.firstPrice
                    },
                    {
                        "type":second.secondQuantity,
                        "price":second.secondPrice
                    }
                ]
            }
            insertProduct(obj);
            return;
        }
        if(second.secondQuantity === "" && third.thirdQuantity !== ""){
            if(third.thirdPrice === "" || second.secondPrice !== ""){
                toast("please fill all fields properly");
                document.getElementById('ProductButton').innerText = "Add Product"
                document.getElementById('ProductButton').disabled = false
                return;
            }
            const obj = {
                "name":name,
                "category_id":category,
                "isVeg":isVeg,
                "quantity_price":[
                    {
                        "type":first.firstQuantity,
                        "price":first.firstPrice
                    },
                    {
                        "type":third.thirdQuantity,
                        "price":third.thirdPrice
                    }
                ]
            }
            insertProduct(obj);
            return;
        }
        if(second.secondQuantity !== "" && third.thirdQuantity !== ""){
            if(second.secondPrice === "" || third.thirdPrice === ""){
                toast("please fill all fields properly");
                document.getElementById('ProductButton').innerText = "Add Product"
                document.getElementById('ProductButton').disabled = false
                return;
            }
            const obj = {
                "name":name,
                "category_id":category,
                "isVeg":isVeg,
                "quantity_price":[
                    {
                        "type":first.firstQuantity,
                        "price":first.firstPrice
                    },
                    {
                        "type":second.secondQuantity,
                        "price":second.secondPrice
                    },
                    {
                        "type":third.thirdQuantity,
                        "price":third.thirdPrice
                    }
                ]
            }
            insertProduct(obj);
            return;
        }
    }

    const insertProduct = async(obj)=>{
        const arr = [obj];
        const response = await axios.post(`${url}/items`, arr);
        if(response.status === 200){
            const data = response.data;
            if(data.status === true){
                toast(data.message);
                document.getElementById('ProductButton').innerText = "Add Product"
                document.getElementById('ProductButton').disabled = false
                return;
            }
            toast(data.message);
            document.getElementById('ProductButton').innerText = "Add Product"
            document.getElementById('ProductButton').disabled = false
            return;
        }
        toast("server error!");
        document.getElementById('ProductButton').innerText = "Add Product"
        document.getElementById('ProductButton').disabled = false
        return;
    }

    const addCategory = async (name) => {
        document.getElementById('CatButton').innerText = "Loading..."
        document.getElementById('CatButton').disabled = true

        if (name === undefined || name === "") {
            toast("please enter name");
            document.getElementById('CatButton').innerText = "Add category"
            document.getElementById('CatButton').disabled = false
            return;
        }
        const obj = { "name": name }
        const response = await axios.post(`${url}/category`, obj);
        if (response.status === 200) {
            const data = response.data;
            if (data.status === true) {
                toast("category added successfully");
                document.getElementById('CatButton').innerText = "Add category"
                document.getElementById('CatButton').disabled = false
                getCategory();
            }
            else {
                document.getElementById('CatButton').innerText = "Add category"
                document.getElementById('CatButton').disabled = false
                toast("can't add category please try again later!");
            }
        }
        else {
            document.getElementById('CatButton').innerText = "Add category"
            document.getElementById('CatButton').disabled = false
            toast("server error");
        }
    }

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = async () => {
        const response = await axios.get(`${url}/category`);
        if (response.status === 200) {
            setCategory(response.data);
        }
    }

    return (
        <>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Add product">

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '30px' }}>
                        <div >
                            <br />
                            <p>Enter Name</p>
                            <input type='text' id='productName' placeholder='Enter product name' />
                        </div>
                        <div style={{ marginTop: '26px' }}>
                            <p>Veg/NonVeg</p>
                            <select id="isVeg" onChange={() => setIsVeg(document.getElementById('isVeg').value)}>
                                <option value={true}>Veg</option>
                                <option value={false}>NonVeg</option>
                            </select>
                        </div>
                        <div style={{ marginTop: '26px' }}>
                            <p>Category</p>
                            <select id="cat" onChange={() =>setCat(document.getElementById('cat').value)}>
                            <option value={undefined}>Select Category</option>
                                {!categories.data ?
                                <option key={'1'} value={undefined} disabled>loading...</option>
                                :
                                categories.data.map((cat,index)=>{
                                    return(
                                        <option key={index} value={cat._id}>{cat.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '30px' }}>
                        <div>
                            <h6>Add price 1st</h6>
                            <p className='text-muted' style={{ fontSize: '13px', marginTop: '-10px' }}>This field is required</p>
                            <input type='text' id='1stQuantity' placeholder='Quantity name' />
                            <br />
                            <br />
                            <input type='numeric' id='1stPrice' placeholder='Enter price' />
                        </div>
                        <div>
                            <h6>Add price 2nd</h6>
                            <p className='text-muted' style={{ fontSize: '13px', marginTop: '-10px' }}>Keep this field EMPTY<br /> if not required</p>
                            <input type='text' id='2ndQuantity' placeholder='Quantity name' />
                            <br />
                            <br />
                            <input type='numeric' id='2ndPrice' placeholder='Enter price' />
                        </div>
                        <div>
                            <h6>Add price 3rd</h6>
                            <p className='text-muted' style={{ fontSize: '13px', marginTop: '-10px' }}>Keep this field EMPTY<br /> if not required</p>
                            <input type='text' id='3rdQuantity' placeholder='Quantity name' />
                            <br />
                            <br />
                            <input type='numeric' id='3rdPrice' placeholder='Enter price' />
                        </div>
                    </div>
                    <hr/>
                    <div style={{marginLeft:'40%'}}>
                        <Button id='ProductButton' variant='outline-primary' onClick={
                            ()=>{
                                addItem(document.getElementById('productName').value,{
                                    "firstQuantity": document.getElementById('1stQuantity').value,
                                    "firstPrice": document.getElementById('1stPrice').value
                                },{
                                    "secondQuantity":document.getElementById('2ndQuantity').value,
                                    "secondPrice":document.getElementById('2ndPrice').value
                                },{
                                    "thirdQuantity":document.getElementById('3rdQuantity').value,
                                    "thirdPrice":document.getElementById('3rdPrice').value
                                });
                            }
                        }>Add Product</Button>
                    </div>
                </Tab>

                <Tab eventKey="profile" title="Add Category">
                    <h3>Enter Category name</h3>
                    <input type='text' id='catname' placeholder='Category name' />
                    <br />
                    <br />
                    <Button id='CatButton' variant='outline-primary' onClick={() => addCategory(document.getElementById('catname').value)}>Add category</Button>
                </Tab>
            </Tabs>

        </>
    )
}

export default AddProduct