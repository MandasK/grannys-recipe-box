import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"

const NavBar = (props) => {

  const handleLogout = () => {
    sessionStorage.clear();
      localStorage.clear();
  }

   const handleOnClick = (event) => {

    sessionStorage.removeItem('text') 
    sessionStorage.removeItem('recipeImage')
    
  }

    return(
        <Navbar inline className="dashNav" expand="sm">
        <Navbar.Brand className="dashBrand" href="/Dashboard">
        <img className="NavbarLogo" src={require("../birdforlogo.png")} alt="birdlogo" width="50"
        height="50" />{' '}
        Granny's Recipe Box
        </Navbar.Brand>
  <Navbar.Toggle className="dashToggle" aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="dashCollapse" id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="dashlink" onClick={handleOnClick} href="/Recipes/New">Add a New Recipe</Nav.Link>
      </Nav>
    <Nav className="mr-auto">
    <Nav.Link className="dashlinkBox" href={`/Recipes/MyRecipeBox/${sessionStorage.activeUserID}`}>My Recipe Box</Nav.Link>
    <Nav.Link className="navButtonLogout" onClick={handleLogout} variant="custom" href="/">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar