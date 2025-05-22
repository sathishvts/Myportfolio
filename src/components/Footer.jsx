import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-center text-lg-start mb-3 mb-lg-0">
            <p className="mb-0">© 2023 My Portfolio. All rights reserved.</p>
          </Col>
          <Col lg={4} className="text-center mb-3 mb-lg-0">
            <div className="social-links">
              <a href="#"><i className="bi bi-github"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </Col>
          <Col lg={4} className="text-center text-lg-end">
            <Link to="home" smooth={true} duration={500} className="back-to-top">
              <i className="bi bi-arrow-up-circle"></i> Back to Top
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;