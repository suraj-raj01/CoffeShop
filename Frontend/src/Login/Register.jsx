import { message } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const[input,setInput] = useState({});

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput((values)=>({...values,[name]:value}))
    console.log(input);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api = 'http://localhost:8080/user/register'
    try {
      const response = await axios.post(api,input);
      setInput(response.data);
      message.success("User Registration Success!!");
      navigate("/login");
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  const Login=()=>{
    navigate("/login")
  }

  return (
    <div>
      {/* <h1>Register Page</h1> */}
      <Form id='form' style={{
        width:'420px',margin:'50px auto',padding:'20px',borderRadius:'10px'
      }}>
        <center><h4>Registration Form</h4></center>
        <br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter your name" 
        name='name' value={input.name} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="description" placeholder="Enter email" 
        name='email' value={input.email} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Mobile No." 
        name='mobile' value={input.mobile} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter your password" 
        name='password' value={input.password} onChange={handleInput}
        />
      </Form.Group>
      
      <Button  style={{width:'100%',backgroundColor:'#4D9385',border:'none',padding:'10px'}} onClick={handleSubmit}>
      Register
      </Button>
      <br /><br />
      <div style={{textAlign:'center',cursor:'pointer'}}>
      <b onClick={Login}>SignIn or LogIn</b>
      </div>
    </Form>
    </div>
  )
}

export default Register
