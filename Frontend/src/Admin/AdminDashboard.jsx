import React from 'react'
import { Outlet, Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/esm/Button';
const AdminDashboard = () => {
  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <div id="category">
        <div id="box1">
            <h1>Admin Dashboard</h1>
            <Nav id="nav">
                <Nav.Link as={Link} to='insert'> 
                <Button >Insert Form</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='recentactivity'> 
                <Button>Recent Activity</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='useractivity'> 
                <Button >Customer Details</Button>
                </Nav.Link>
                {/* <Nav.Link as={Link} to='#'> 
                <Button>Black Coffee</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='#'> 
                <Button>Black Coffee</Button>
                </Nav.Link> */}
                <br /><br /><br />
            </Nav>
        </div>
        <div id="box2" style={{alignItems:'start',padding:'45px 0px'}}>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
