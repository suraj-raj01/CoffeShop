import React, { useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { message } from "antd";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addOrderData} from "../Redux/Slice"

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Coffee, setcoffeename] = useState("");
  const [mydata, setMydata] = useState([]);
  const[isVisible,setIsVisible] = useState(true);

  const setCoffe = async (e) => {
    let coffeName = e.target.value;
    setcoffeename(coffeName);
    let api = "http://localhost:8080/coffeeshop/searchcoffee";
    try {
      const response = await axios.post(api, { Coffee: Coffee });
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      message.error(error);
    }
  };

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

  const res = mydata.map((key) => {
    let discount = Number(key.price*0.05);
    let newPrice = Number(key.price-discount);
    return (
      <>
        <Card style={{ width: "25%", marginTop:'10px'}}>
          <Card.Img
            variant="top"
            src={key.image_url}
            height="200px"
            onClick={() => {
              orderDetails(key._id);
            }}
          />
          <Card.Body>
            <Card.Title style={{ color: "#4D9385" }}>
              {key.coffee_name}
            </Card.Title>
            <Card.Text>{key.description}</Card.Text>
          </Card.Body>
          <Card.Body>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h6
                style={{ textDecoration: "line-through", fontWeight: "bold" }}
              >
                Price : {key.price}
                {".00 ₹"}
              </h6>
              <h6 style={{ color: "red", fontWeight: "bold" }}>
                Discount : {key.discount}
                {" %"}
              </h6>
            </div>
            <h6 style={{ color: "#4D9385", fontWeight: "bold" }}>
              New Price : {newPrice}
              {" /-"}
            </h6>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#4D9385",
                  border: "none",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  addItem(
                    key._id,
                    key.coffee_name,
                    key.description,
                    newPrice,
                    key.discount,
                    key.image_url
                  );
                }}
              >
                Add Item
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#4D9385",
                  border: "none",
                  textTransform: "capitalize",
                  border: "1px solid ",
                }}
                onClick={() => {
                  orderDetails(key._id);
                }}
              >
                Order Now
              </Button>
            </div>
          </Card.Body>
        </Card>
        
      </>
    );
  });

  return (
    <div>
      <h1>Search</h1>
      <Form className="d-flex" id="search">
        <Form.Control
          type="search"
          placeholder="Search here..."
          className="me-1"
          aria-label="Search"
          name="search"
          value={Coffee}
          onChange={setCoffe}
        />
        <Button
          style={{ backgroundColor: "#4D9385", border: "1px solid #4D9385" }}
        >
          Search
        </Button>
      </Form>
      <div id="searchitem">
        {res}
      </div>
      <br />
    </div>
  );
};

export default Search;
