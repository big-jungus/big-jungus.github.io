import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";

import "./css/stylesHome.css"

type Props = {
  index: number;
  updateIndex: (index: number) => void;
}

const NavBar = ({
    index,
    updateIndex
  }: Props) => {
  const navigate = useNavigate();

  function onClick () {
    updateIndex(index);
    navigate("/projects")
  }

  return (
    <Navbar expand="lg" className="navBarBackground" sticky="top" variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="customNav" justify={true} fill={true}>
            <Nav.Link href="#recent" onClick={() => navigate("/home#recent")}>RECENT PROJECTS</Nav.Link>
            <Nav.Link href="projects" onClick={() => onClick}>ALL PROJECTS</Nav.Link>
            <Navbar.Brand href="#about" onClick={() => navigate("/home#about")}>MATTHEW JUNG</Navbar.Brand>
            <Nav.Link href="#experience" onClick={() => navigate("/home#experience")}>EXPERIENCE</Nav.Link>
            <Nav.Link href="#contact" onClick={() => navigate("/home#contact")}>CONTACT</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;