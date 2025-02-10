import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Payment Heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Proceed to Pay</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <a href="#">terms & conditions</a>
        <br />
        <br />
        {/* <span>I'M NOT A ROBOT</span> &nbsp;&nbsp; <input type="checkbox" style={{width:'20px', height:'20px'}}/>   */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:'#4D9385',border:'none'}}>Proceed</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({});
  const [modalShow, setModalShow] = React.useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let api = "https://coffeshop-expx.onrender.com/customer/customerdata";
  //   try {
  //     const response = await axios.post(api, input);
  //     message.success(response.data);
  //   } catch (error) {
  //     message.error(error);
  //   }
  // };

  const [mydata, setMydata] = useState({});

  const loadData = async () => {
    const api = "https://coffeshop-expx.onrender.com/coffeeshop/showitembyid";
    try {
      const response = await axios.post(api, {id:id});
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const billgen=()=>{
    handleShow();
  }


  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    message.success("Your Order has been success!!")
    navigate("/home") 
  }
  const handleShow = () => setShow(true);


  const [optionVal,setOptionVal] = useState("")
  const handleOption=async(e)=>{

    let api = "https://coffeshop-expx.onrender.com/customer/customerdata";
    try {
      const response = await axios.post(api, input);
      // message.success(response.data);
    } catch (error) {
      message.error(error);
    }

    let val = e.target.value;
    setOptionVal(val);
    if(val=="upi"){
      message.info(`Payment Option is : ${val.toUpperCase()}`);
    }
    if(val=="card"){
      message.info(`Payment Option is : DEBIT / CREDIT ${val.toUpperCase()}`);
    }
    if(val=="netbank"){
      message.info(`Payment Option is : ${val.toUpperCase()}`);
    }
    if(val=="gpay"){
      message.info(`Payment Option is : ${val.toUpperCase()}`);
    }
  }



  return (
    <div>
      {/* <h1>Payments</h1> */}
      <div id="details">
        <div id="box">
          <Form
            id="form"
            style={{
              width: "420px",
              margin: "50px auto",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <center>
              <b>Customer Details</b>
            </center>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter customer name"
                name="customername"
                value={input.customername}
                onChange={handleInput}
                required
                id="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="description"
                placeholder="Customer email"
                name="customeremail"
                value={input.customeremail}
                onChange={handleInput}
                required
                id="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="number"
                placeholder="Customer mobile"
                name="customermobile"
                value={input.customermobile}
                onChange={handleInput}
                required
                id="mobile"
              />
            </Form.Group>

            {/* <Button
              style={{
                width: "100%",
                backgroundColor: "#4D9385",
                border: "none",
                padding: "10px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button> */}
            <br />
            <p></p>
          </Form>
        </div>
        <div id="contents">
          <h1>Payment Option</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 30px",
            }}
          >
            <b>UPI METHOD</b> <input type="radio" name="pay" value="upi" onChange={handleOption} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 30px",
            }}
          >
            <b>Debit / Credit Card</b> <input type="radio" name="pay" value="card" onChange={handleOption} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 30px",
            }}
          >
            <b>Net Banking</b> <input type="radio" name="pay" value="netbank" onChange={handleOption} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 30px",
            }}
          >
            <b>GPay</b> <input type="radio" name="pay" value="gpay" onChange={handleOption} />
          </div>

          <div style={{padding:'10px 30px'}}>
            <Button
            style={{
              marginTop:'5px',
              width: "100%",
              backgroundColor: "#4D9385",
              border: "none",
              padding: "10px 0px"
            }}
            onClick={() => setModalShow(true)}
          >
            Submit
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onClick={billgen}
          />
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Coffee Name " {mydata.coffee_name} "</h4>
          <h5 style={{textDecoration:'line-through',color:'red'}}>Price : {mydata.price}{".00 ₹"}</h5>
          <h5>Discount : {mydata.discount}{" %"}</h5>
          <h5>New Price : {mydata.price-(mydata.discount/100)*mydata.price}{" -/ ₹"}</h5>
          <br />
          <h5>Payment Option : {optionVal.toUpperCase()}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Conform
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payment;
