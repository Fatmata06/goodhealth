import React from 'react'
import './Navbare.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// import Typewriter from 'typewriter-effect/dist/core';
import {  FaUserAlt } from 'react-icons/fa';



function Navbare() {
  return (
    <div className="">
           <Navbar expand="lg" className="">
    <Container>
      <Navbar.Brand href="/">GoodHealth</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link style={{ paddingLeft:'50%'}} className="buttonnav">
        <Link to="/praticiens">  <Button  variant="primary" >You are praticien? </Button> </Link>

        <Link to="/Inscription">  <Button  variant="primary" ><i className="classes you have"><FaUserAlt /></i>Sign in </Button> </Link>
        </Nav.Link>
        <Nav.Link className="buttonnav">
        <Link to="/Sign">  <Button variant="secondary">Sign Up</Button></Link>
        </Nav.Link>

        
      </Navbar.Collapse>
    </Container>
  </Navbar> 

    </div>

    // <div style={{backgroundImage: "url(/Rectangle.png)"}}></div>
  
 

  
  )
}

export default Navbare;