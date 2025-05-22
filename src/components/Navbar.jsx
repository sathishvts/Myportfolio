import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../assets/styles/Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="home" smooth={true} duration={500}>
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;