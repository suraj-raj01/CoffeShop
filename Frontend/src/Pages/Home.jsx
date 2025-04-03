import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Outlet, Link, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/home")
  },[])

  return (
    <div>
      {/* <div id="hero">
        <div id="bgimage">
          <img
            src="https://wallpaperaccess.com/full/2402088.jpg"
            alt=""
            height="100%"
          />
        </div>
        <div id="contents">
            <h2>About Coffee</h2>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia ipsam a corrupti reiciendis optio facere laboriosam rem corporis, repellat consequuntur debitis cum et veniam dignissimos quasi error nesciunt accusamus <br /> temporibus maxime consectetur minima! Dicta reiciendis necessitatibus rerum ratione, hic, ipsa doloribus ea esse earum est repellat harum repudiandae accusamus ab consequatur. Doloremque dolore necessitatibus ut veniam alias vel, tenetur, repudiandae quia voluptatem sed nesciunt <br /> sit corporis. Aperiam consequatur ducimus deserunt inventore! Illo, excepturi, facere esse quod asperiores earum dignissimos id nam veritatis iure tempora. Quo tempora, voluptatem dolores, corporis ab alias omnis eos ad exercitationem totam voluptates fugit quaerat.</p>
        </div>
      </div> */} <br />
      <div id="category">
        <div id="box1">
            <h1>Categories</h1>
            <Nav id="nav">
                <Nav.Link as={Link} to='arabica'> 
                <Button >Arabica Coffee</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='robusta'> 
                <Button>Robusta Coffee</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='bourbon'> 
                <Button >Bourbon Coffee</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='blackcoffee'> 
                <Button>Black Coffee</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='coldcoffee'> 
                <Button>Cold Coffee</Button>
                </Nav.Link>
                <Nav.Link as={Link} to='arabica'> 
                <Button>Arabica Coffee</Button>
                </Nav.Link>
            </Nav>
        </div>
        <div id="box2">
            <Outlet/>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home;
