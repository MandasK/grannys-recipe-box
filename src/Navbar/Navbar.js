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
      <Nav.Link className="dashlink" href="/Recipe/New">Add a New Recipe</Nav.Link>
      <Nav.Link className="dashlinkBox" href="/Recipe/MyRecipeBox">My Recipe Box</Nav.Link>
    </Nav>
    <Form className="dashForm" inline>
      <FormControl className="dashcontrol" type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="navButton" variant="custom">Search</Button>
    </Form>
    <Nav className="mr-auto">
    <Nav.Link className="navButtonLogout" onClick={handleLogout} variant="custom" href="/">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar