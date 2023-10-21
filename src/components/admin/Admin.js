import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Admin() {
  return (
    <div className="page">

    <div className="bg">
           
        <Link to="/admin/Medecin">  <Button  variant="primary" >Gestion des medecins </Button> </Link>
        <Link to="#">  <Button  variant="primary" >Gestion des patients </Button> </Link>
        <Link to="/Admin">  <Button  variant="primary" >Gestion des rendez-vous </Button> </Link>
        
    </div>
    </div>
  
   )
}

export default Admin;