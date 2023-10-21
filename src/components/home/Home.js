import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
// import Typewriter from 'typewriter-effect/dist/core';
import { FaSearch, FaUserAlt } from 'react-icons/fa';



function Home() {
  return (
    <div className="page">

    <div className="bg">
           <Navbar expand="lg" className="">
    <Container>
      <Navbar.Brand href="/">GoodHealth</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link style={{ paddingLeft:'50%'}}className="">
        <Link to="/praticiens">  <Button  variant="primary" >Are you praticien? </Button> </Link>

        <Link to="/Inscription">  <Button  type="submit" variant="primary" ><i className="classes you have"><FaUserAlt /></i>S'inscrire </Button> </Link>{' '}
       
        
        <Link to="/Sign"> <Button type="submit" variant="secondary">Se connecter</Button></Link>

        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar> 

<div class="citation"> <h4 >“Le plus pauvre n'échangerait pas sa santé pour de l'argent, <br/>
mais le plus riche donnerait tout son argent pour la santé.”</h4></div>
  <Form className="form-inline d-flex ">
      

  <div className="form-group mb-2">
    <input type="search"  class="form-control" id="staticEmail2"placeholder="Search praticien"/>
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <input type="search" class="form-control" id="inputPassword2" placeholder="choisir la localité"/>
  </div>
  <Button type="submit"  class="btn btn-primary btn btn-sm"><i className="classes you have"><FaSearch /></i>Search</Button>
  
</Form> 

  
    </div>
    </div>

    // <div style={{backgroundImage: "url(/Rectangle.png)"}}></div>
  
 

  
  )
}

export default Home