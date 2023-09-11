import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";

import "./css/stylesHome.css"

const NavBar = () => {
  const navigate = useNavigate();

  const NavNavigation = (element:string) => {
    navigate("/home");
    document.getElementById(element)?.scrollIntoView();
  }

  return (
    <Navbar expand="lg" className="navBarBackground" sticky="top" variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="customNav" justify={true} fill={true}>
            <Nav.Link onClick={() => NavNavigation("recent")}>RECENT PROJECTS</Nav.Link>
            <Nav.Link onClick={() => navigate("/projects")}>ALL PROJECTS</Nav.Link>
            <Navbar.Brand onClick={() => NavNavigation("about")}>MATTHEW JUNG</Navbar.Brand>
            <Nav.Link onClick={() => NavNavigation("experience")}>EXPERIENCE</Nav.Link>
            <Nav.Link onClick={() => NavNavigation("contact")}>CONTACT</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;