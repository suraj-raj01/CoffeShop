import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const[input,setInput] = useState({});

    const handleInput=(e)=>{
       let name = e.target.name;
       let value = e.target.value;
       setInput((values)=>({...values,[name]:value}));
       console.log(input);
    }

    const handleSubmit=async(e)=>{
       e.preventDefault();
       let api = 'http://localhost:8080/user/login';
       try {
        const response = await axios.post(api,input);
        console.log(response.data);
        if(response.data.password=="admin123"){
          navigate("/admindashboard")
        }else{
        localStorage.setItem("name",response.data.name);
        localStorage.setItem("email",response.data.email);
        localStorage.setItem("mobile",response.data.mobile);
        localStorage.setItem("password",response.data.password);
        navigate("/userdashboard")
        }
       } catch (error) {
          message.error(error.response.data.msg)
       }
    }

    const Register=()=>{
        navigate("/register");
    }

  return (
    <div>
      {/* <h1>Login Form</h1> */}
      <Form id='form' style={{
        width:'420px',margin:'50px auto',padding:'20px',borderRadius:'10px'
      }}>
        <center><h4>Login Form</h4></center>
        <br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" 
        name='email' value={input.email} onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter password" 
        name='password' value={input.password} onChange={handleInput}
        />
      </Form.Group>

      <p style={{textAlign:'end',cursor:'pointer'}}><b>forgott password</b></p>
      
      <Button  style={{width:'100%',backgroundColor:'#4D9385',border:'none',padding:'10px'}} onClick={handleSubmit}>
        LogIn
      </Button>
      <br />
      <br />
      <div style={{textAlign:'center',cursor:'pointer'}}>
      <b onClick={Register}>SignUp or Register</b>
      </div>
      <p></p>
    </Form>
    </div>
  )
}

export default Login
