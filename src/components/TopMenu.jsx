import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-regular-svg-icons';

const TopMenu=()=>{
 const MyData=useSelector((state)=>state.addCart.cart);
 console.log(MyData);
 const DataCount= MyData.length;
 const navigate= useNavigate();

 const [searchData, setSearchData]= useState("");


 const myCart=()=>{
  navigate("/mycart");
 }

 const handleSearch=()=>{
   navigate(`searchproduct/${searchData}`);
 }


  return(
        <>
        <div id="topmenu">
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"  style={{margin:"0"}}  >
      <Container>
        <Navbar.Brand href="#home"> 
           <img src={logo} style={{borderRadius:"50%", width:"10rem"}} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link  as={Link}  to="services">Services</Nav.Link>
            <Nav.Link as={Link}  to="offer">Sale</Nav.Link>
            <Nav.Link as={Link}  to="blog">Blog</Nav.Link> 
            <Nav.Link as={Link}  to="shop"> Filter </Nav.Link>  

           {/* MEN Dropdown */}
           <NavDropdown title="MEN" id="men-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/men">Shop All</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Boots">Boots</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Formals">Formals</NavDropdown.Item>
                </NavDropdown>

                {/* WOMEN Dropdown */}
                <NavDropdown title="WOMEN" id="women-nav-dropdown">
                  <NavDropdown.Item as={Link} to="women">Shop All</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Heels">Heels</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Sandals">Sandals</NavDropdown.Item>
                </NavDropdown>

          </Nav>
          <Nav>
          <Nav.Link href="#deets">
              <input type="text" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} />
            </Nav.Link>
            <Nav.Link href="#deets">
            <IoSearch onClick={handleSearch} />
            </Nav.Link>
            <Nav.Link href="#deets">
            <FaUser />
            </Nav.Link>
            <Nav.Link  href="#memes">
            <a href='#' onClick={myCart}>
            <FaShoppingCart />
            </a>
            
             {DataCount<=0?"": 
             <span style={{padding:"2px", marginLeft:"5px", border:"2px solid grey", backgroundColor:"lightblue"}}> {DataCount}</span> }
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
        </>
    )
}

export default TopMenu;


