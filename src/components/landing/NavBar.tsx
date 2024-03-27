import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./css/stylesHome.css"

type Props = {
  getProjects: boolean,
  setProjects: (flag:boolean) => void
}

const NavBar = ({
    setProjects
  }: Props) => {

    function NavNavigation (id:string) {
      
      setProjects(false);
      document.getElementById(id)?.scrollIntoView();
    }

  return (
    <Navbar expand={true} className="navBarBackground" sticky="top" variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="customNav" justify={true} fill={true}>
          <Navbar.Brand onClick={() => NavNavigation("about")}>MJ</Navbar.Brand>
          <Nav.Link onClick={() => window.open("/portfolio/Matthew Jung - Resume.pdf", "_blank")}>RESUME</Nav.Link>
          <Nav.Link onClick={() => NavNavigation("recent")}>PROJECTS</Nav.Link>
          <Nav.Link onClick={() => NavNavigation("experience")}>EXPERIENCE</Nav.Link>
          <Nav.Link onClick={() => NavNavigation("contact")}>CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;