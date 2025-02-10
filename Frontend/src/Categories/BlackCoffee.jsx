import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import {addOrderData} from "../Redux/Slice"
import { useNavigate } from "react-router-dom";
const BlackCoffee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coffee = "Black coffee";
  const[mydata,setMydata] = useState([]);
  const[isVisible,setIsVisible] = useState(true);

  const loadData=async()=>{
    let api = 'http://localhost:8080/coffeeshop/blackcoffee'
    try {
      const response = await axios.post(api,{coffee:coffee});
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
        message.error(error.response.data.msg)
    }
  }

  useEffect(()=>{
    loadData();
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setIsVisible(false);
    },1000)
    setIsVisible(true);
  },[])


  const addItem=(id,name,desc,newPrice,discount,img)=>{
    dispatch(
      addOrderData({
        _id:id,
        coffee_name:name,
        description:desc,
        price:newPrice,
        discount:discount,
        image_url:img,
        qnty:1
      })
    )
  }

  const orderDetails=(id)=>{
    navigate(`/orderdetails/${id}`)
  }

  let res = mydata.map((key)=>{
    let discount = Number(key.price*0.05);
    let newPrice = Number(key.price-discount);
    return(
      <>
        <Card style={{ width: "32%" }}>
          <Card.Img
            variant="top"
            src={key.image_url}
            height='200px'
            onClick={()=>{orderDetails(key._id)}}
          />
          <Card.Body>
            <Card.Title style={{color:'#4D9385'}}>{key.coffee_name}</Card.Title>
            <Card.Text>
              {key.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <h6 style={{textDecoration:'line-through',fontWeight:'bold'}}>Price : {key.price}{".00 ₹"}</h6>
            <h6 style={{color:'red',fontWeight:'bold'}}>Discount : {key.discount}{" %"}</h6>
            </div>
            <h6 style={{color:'#4D9385',fontWeight:'bold'}}>New Price : {newPrice}{" /-"}</h6>
            <br />
            <div style={
              {
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
              }
            }>
            <Button style={{backgroundColor:'#4D9385',border:'none',textTransform:'capitalize'}}
            onClick={()=>{addItem(
              key._id,
              key.coffee_name,
              key.description,
              newPrice,
              key.discount,
              key.image_url
            )}}
            >Add Item</Button>
           <Button style={{backgroundColor:'white',color:'#4D9385', border:'none',textTransform:'capitalize',border:'1px solid '}}
           onClick={()=>{orderDetails(key._id)}}
           >
            Order Now</Button>
            </div>
          </Card.Body>
        </Card>
      
      </>
    )
  })

  return (
    <div>
      {/* <h1>BlackCoffee</h1> */} <br />
      {isVisible?(<img src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif" alt="" height='60px' />):(
        <div id="cards">
        {res}
    </div>
      )}
      
    </div>
  );
};

export default BlackCoffee;
