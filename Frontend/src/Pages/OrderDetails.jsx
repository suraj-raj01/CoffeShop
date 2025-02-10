import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {addOrderData} from "../Redux/Slice"

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const[mydata,setMydata] = useState({})
  const loadData=async()=>{
    let api = 'https://coffeshop-expx.onrender.com/coffeeshop/details'
    try {
      const response = await axios.post(api,{_id:id});
      setMydata(response.data);
    } catch (error) {
      message.error(error.response.data.msg)
    }
  }


  let price = Number(mydata.price*mydata.discount/100);
  let newPrice = Number((mydata.price-price))

  useEffect(()=>{
    loadData();
  },[])
  
  const addItem=(id,name,desc,price,discount,img)=>{
      dispatch(
        addOrderData({
          _id:id,
          coffee_name:name,
          description:desc,
          price:price,
          discount:discount,
          image_url:img,
          qnty:1
        })
      )
    }

  const payment=(myid)=>{
    navigate(`/payment/${myid}`)
  }

  return (
    <div>
      <h1>Order Details</h1>
      <div id="details">
        <div id="box">
          <img src={mydata.image_url} alt="" width='100%'/>
        </div>

        <div id="contents">
            <h2 style={{color:'#4D9385'}}>{mydata.coffee_name}</h2>
            <b>Description : </b>
            <p>{mydata.description}</p>
            <br />
            <h5 style={{textDecoration:'line-through'}}>Price : {mydata.price}{".00 ₹"}</h5>
            <b style={{color:'red'}}>Discount : {mydata.discount}{" %"}</b>
            <p></p>
            <h5>New Price : {newPrice.toFixed(2)}{" -/ ₹"}</h5>
            <br />  
            <p></p>
            
            <div id="details-btns">
            <Button style={{backgroundColor:'#4D9385',border:'none',padding:'8px 20px'}}
            onClick={()=>{payment(mydata._id)}}
            >Payment</Button>
            <Button style={{backgroundColor:'#4D9385',border:'none',padding:'8px 20px'}}
            onClick={()=>{addItem(
              mydata._id,
              mydata.coffee_name,
              mydata.description,
              newPrice,
              mydata.discount,
              mydata.image_url
            )}}
            >Add Item</Button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default OrderDetails

