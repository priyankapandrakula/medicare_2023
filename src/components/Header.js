import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link, useNavigate } from "@reach/router";
import { useCart } from "react-use-cart";
import {Button} from 'react-bootstrap';

const Header = () => {
  const [session, SetSession] = useState(sessionStorage.getItem("name"));
  const navigate=useNavigate();
  const navmenu = () => {
    if (session === null) {
      return (
        <>
        <Link to="/sign-in" className={`nav-link `}>
          Sign in
        </Link>
        <Link
            to="/cart"
            className={` d-flex align-items-center`}
          >
            <BiCart size="2rem" />
            {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
            <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span>
          </Link>
          <Link className='btn btn-success' style={{padding:"6px",margin:"0px 19px"}} to='/admin_login'>
          Admin Login
          </Link>
        </>
      );
    }
    else {
      return (
        <>
          <Link to="home" className={`nav-link `}>
            Signed in As:<strong> {session}</strong>
          </Link>
          <Link
            to="/cart"
            className={` d-flex align-items-center`}
          >
            <BiCart size="2rem" />
            {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px',color:'black' }}>{totalItems}</span>}
            <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span>
          </Link>
          <button 
           onClick={()=>{
            sessionStorage.removeItem("name");
            navigate("/sign-in");
        }}
          className={`mx-3 btn btn-danger `}>
            <VscAccount size="1.8rem" />
            &nbsp;Logout
          </button>
        </>
      );
    }
  }
  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar collapseOnSelect expand="md"
      variant={'light'}
      className={'texy border-bottom'}
      style={{ width: '100%', position: 'fixed', zIndex: 100 ,top:"0px", color:'black',   background: "cadetblue"}}
    >
      <Container>
        <Link to="/home">
          <Navbar.Brand className={'text-success'} style={{fontFamily:'fantasy'}}>
            Medicare
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navmenu()
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;