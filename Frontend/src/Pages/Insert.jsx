import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {message} from "antd"
const Insert = () => {

    const[input,setInput] = useState({});

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = 'https://coffeshop-expx.onrender.com/coffeeshop/coffeeinsert';
        try {
            await axios.post(api,input);
            message.success("data inserted success");
        } catch (error) {
            message.error(error.response.data.msg);
        }
    }

  return (
    <div>
      {/* <h1>Insert Coffees</h1> */}
      <Form id='form' >
        <center><b>Insert Coffee Details</b></center>
        <br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter coffee name" 
        name='coffeename' value={input.coffeename} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="description" placeholder="Write description" 
        name='description' value={input.description} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Enter price" 
        name='price' value={input.price} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Enter discount %" 
        name='discount' value={input.discount} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter coffee image url" 
        name='imageurl' value={input.imageurl} onChange={handleInput}
        />
      </Form.Group>
      
      <Button  style={{width:'100%',backgroundColor:'#4D9385',border:'none',padding:'10px'}} onClick={handleSubmit}>
        Submit
      </Button>
      <br />
      <p></p>
    </Form>
    </div>
  )
}

export default Insert
