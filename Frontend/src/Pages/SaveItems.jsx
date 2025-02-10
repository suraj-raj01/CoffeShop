import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import {useNavigate} from "react-router-dom"
import {qntyInc,qntyDec,dataDel} from "../Redux/Slice"
const SaveItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector(state=>state.addToOrders.orders);

  const incqnty=(id)=>{
    dispatch(
      qntyInc({
        _id:id
      })
    )
  }
  const decqnty=(id)=>{
    dispatch(
      qntyDec({
        _id:id
      })
    )
  }

  const removeItem=(id)=>{
    dispatch(
      dataDel({
        _id:id
      })
    )
  }

  const gotoPayment = () =>{
    navigate("/saveitempayment")
  }

  let grandTotal = 0;
  const res = Data.map((key)=>{
    const newPrice = Number(key.price*key.qnty);
    grandTotal+=Number(newPrice);
    return(
      <>
        <tr>
          <td>{key.coffee_name}</td>
          <td style={{width:'50%'}}>{key.description}</td>
          <td>{newPrice.toFixed(2)}{" -/ ₹"}</td>
          <td>{key.qnty}{""}</td>
          <td>
            <button onClick={()=>{decqnty(key._id)}}>-</button>
            <button onClick={()=>{incqnty(key._id)}}>+</button>
          </td>
          <td><button onClick={()=>{removeItem(key._id)}}>Remove</button></td>
        </tr>
      </>
    )
  })

  return (
    <div>
      <h1>Save Items</h1><br />
      <Table bordered striped hover responsive style={{width:'95%',margin:'auto'}}>
        <thead>
          <tr>
            <th style={{backgroundColor:'#4D9385',color:'white',textAlign:'center'}}>Coffee Name</th>
            <th style={{backgroundColor:'#4D9385',color:'white',textAlign:'center'}}>Description</th>
            <th style={{backgroundColor:'#4D9385',color:'white',textAlign:'center'}}>Coffee Price</th>
            <th style={{backgroundColor:'#4D9385',color:'white',textAlign:'center'}}>Quantity</th>
            <th style={{backgroundColor:'#4D9385',color:'white',textAlign:'center'}}>Update Quantity</th>
            <th style={{backgroundColor:'#4D9385',color:'white',textAlign:'center'}}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {res}
          <td></td>
          <td style={{fontWeight:'bold',padding:'10px',textAlign:'end',color:'#4D9385'}}>Grand Total : </td>
          <td style={{fontWeight:'bold',padding:'10px',color:'#4D9385'}}> {grandTotal.toFixed(2)} {" -/ ₹"}</td>
          <td></td>
          <td></td>
          <td></td>
        </tbody>
      </Table>
      <br />
      <div style={{
        width:'95%',
        margin:'auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <button onClick={gotoPayment}>Go to Payment</button>
      </div>
      <br /><br />
    </div>
  )
}

export default SaveItems
