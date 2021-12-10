import { React, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify';

function AddOrder() {
    const [category, setcategory] = useState([]);

    useEffect(() => {
        get();
    }, []);
    const clicked = (e) =>{
        if(e === "Select Category") return;
        console.log(e);
        toast("dish name will be here");
    }

    const get = async () => {
        const categories = await axios.get("https://t-m-o.herokuapp.com/category");
        // const items = await axios.get("https://t-m-o.herokuapp.com/items");
        if (categories.status === 200) {
            setcategory(categories.data);
        }
    }
    return (
        <>
        <div>
            <Form style={{width:'170px'}}>
                <Form.Group controlId="category" onChange={()=>clicked(document.getElementById('category').value)}>
                    <Form.Select defaultValue="Choose...">
                        <option >Select Category</option>
                        {!category.data ?<option value={null}>loading...</option>
                        : category.data.map((item, index) => {
                            return (<option key={index} value={item._id}>{item.name}</option>)
                        })}
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
        </>
    )
}

// function Items(){
//     return(
//         <div>
//             <h1>hello there</h1>
//         </div>
//     )
// }

export default AddOrder