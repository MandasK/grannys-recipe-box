import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap';
import "./Navbar.css"

const NavBar = (props) => {

  const handleLogout = () => {
    props.clearUser();
    ;
  }

    return(
        <Navbar className="dashNav" expand="sm">
        <Navbar.Brand className="dashBrand" href="/Dashboard">
        <img className="NavbarLogo" src={require("../birdforlogo.png")} width="50"
        height="50" />{' '}
        Granny's Recipe Box
        </Navbar.Brand>
  <Navbar.Toggle className="dashToggle" aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="dashCollapse" id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="dashlink" onClick={e => sessionStorage.removeItem('text')} href="/Recipes/New">Add a New Recipe</Nav.Link>
      <Nav.Link className="dashlinkBox" href={`/Recipes/MyRecipeBox/${sessionStorage.activeUserID}`}>My Recipe Box</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
    <Nav.Link className="navButtonLogout" onClick={handleLogout} variant="custom" href="/">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar