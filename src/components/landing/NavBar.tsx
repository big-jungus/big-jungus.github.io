import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./css/stylesHome.css"

type Props = {
  getProjects: boolean,
  setProjects: (flag:boolean) => void
}

const NavBar = ({
    getProjects,
    setProjects
  }: Props) => {

    function NavNavigation (id:string) {
      
      setProjects(false);
      document.getElementById(id)?.scrollIntoView();
    }

    function ToggleProjects(){
      if (getProjects){
        setProjects(false)
      }else{
        setProjects(true)
      }
    }


  return (
    <Navbar expand="lg" className="navBarBackground" sticky="top" variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="customNav" justify={true} fill={true}>
            <Nav.Link onClick={() => NavNavigation("recent")}>RECENT PROJECTS</Nav.Link>
            <Nav.Link onClick={() => ToggleProjects()}>ALL PROJECTS</Nav.Link>
            <Navbar.Brand onClick={() => NavNavigation("about")}>MATTHEW JUNG</Navbar.Brand>
            <Nav.Link onClick={() => NavNavigation("experience")}>EXPERIENCE</Nav.Link>
            <Nav.Link onClick={() => NavNavigation("contact")}>CONTACT</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;