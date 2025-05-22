import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import '../assets/styles/Contact.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <AnimatedSection>
              <h2 className="section-title text-center mb-5">Get In Touch</h2>
            </AnimatedSection>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <AnimatedSection delay={0.2}>
              <h3 className="contact-subtitle mb-4">Contact Information</h3>
              <p className="contact-text mb-4">
                Feel free to reach out to me for any questions or opportunities. I'll get
                back to you as soon as possible.
              </p>
              <div className="contact-info">
                <div className="info-item mb-3">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Chennai, India</span>
                </div>
                <div className="info-item mb-3">
                  <i className="bi bi-envelope-fill"></i>
                  <span>Sathish@gmail.com</span>
                </div>
                <div className="info-item mb-3">
                  <i className="bi bi-phone-fill"></i>
                  <span>+91 63445 66598</span>
                </div>
              </div>
            </AnimatedSection>
          </Col>
          <Col lg={6}>
            <AnimatedSection delay={0.4}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;