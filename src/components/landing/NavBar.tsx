import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

import "./css/stylesHome.css"

const NavBar = () => {
    const navigate = useNavigate();

    function scrollToSection(id: string) {
        navigate("/");
        // Give the page time to mount before scrolling
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
    }

    return (
        <Navbar expand={true} className="navBarBackground" sticky="top" variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="customNav" justify={true} fill={true}>
                    <Navbar.Brand onClick={() => { navigate("/"); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50); }}>MJ</Navbar.Brand>
                    <Nav.Link onClick={() => window.open("Matthew Jung - Resume.pdf", "_blank")}>RESUME</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection("recent")}>WORK</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection("contact")}>CONTACT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
