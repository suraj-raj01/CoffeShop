import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import {message} from "antd"

const UserDashboard = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");

    const loadData=()=>{
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setMobile(localStorage.getItem("mobile"));
        setPassword(localStorage.getItem("password"));
    }

    useEffect(()=>{
        loadData();
    })

    const logout=()=>{
        localStorage.clear();
        message.success("Logout Success !!")
        navigate("/home")
    }

  return (
    <div>
        <h1>UserDashboard</h1>
        <div id="details">
            <div id="box1">
                <Button variant='danger' onClick={logout}>LogOut</Button>
                <br /><br /><br />
                <h3>Welcome Mr. {name}</h3><br />
                <h5>Name : {name}</h5>
                <h5>Email : {email}</h5>
                <h5>Mobile : {mobile}</h5>
                <h5>Password : {password}</h5>
                <br />
            </div>
            <div id="contents">
                <h1>WELCOME {name}</h1>
            </div>
        </div>
    </div>
  )
}

export default UserDashboard