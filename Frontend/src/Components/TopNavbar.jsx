import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TopNavbar = () => {
  const Data = useSelector(state=>state.addToOrders.orders);
  let count = Data.length;

  return (
    <div>
      <Navbar expand="lg" className="" id="navbar">
        <Container>
          <Navbar.Brand as={Link} to="home" style={{fontWeight:'bold',color:'#4D9385'}}>Coffee Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" , backgroundColor:'white',textAlign:'center'}}
              navbarScroll
            >
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="home/arabica">Arabica coffee</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="home/robusta">Robusta coffee</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="home/bourbon">Bourbon coffee</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="home/coldcoffee">Cold coffee</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="home/blackcoffee">Black coffee</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <Nav.Link as={Link} to="service">Services</Nav.Link>
            </Nav>
            <Nav style={{backgroundColor:'white',padding:'10px',marginTop:'-10px'}}>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
              /> */}

            </Form>
              <Nav.Link as={Link} to="search" style={{marginRight:'-5px'}}>
              <i class="fas fa-magnifying-glass"  style={{color:'#4D9385',fontSize:'20px'}}></i>
              </Nav.Link>
              <Nav.Link as={Link} to="login" style={{marginLeft:'10px'}}>
              <i class="far fa-circle-user" style={{color:'#4D9385',fontSize:'20px'}}></i>
              </Nav.Link>
              <Nav.Link as={Link} to="saveitem" style={{marginLeft:'0px',marginRight:'-30px'}}>
              <i class="fas fa-cart-shopping" style={{color:'#4D9385',fontSize:'18px'}}></i>
              <sup style={{
                fontWeight: "bold",
                fontSize: "12px",
                marginLeft: "3px",
                backgroundColor: "#4D9385",
                color: "white",
                borderRadius: "50px",
                padding: "2px 6px",
              }}>{count}</sup>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
