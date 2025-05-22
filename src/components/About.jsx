import { Container, Row, Col } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import '../assets/styles/About.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section py-5">
      <Container>
        <Row>
          <Col>
            <AnimatedSection>
              <h2 className="section-title text-center mb-5">About Me</h2>
            </AnimatedSection>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <AnimatedSection delay={0.2}>
              <div className="about-image"></div>
            </AnimatedSection>
          </Col>
          <Col md={6}>
            <AnimatedSection delay={0.4}>
              <h3 className="about-subtitle">Who am I?</h3>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <p className="about-text">
                I'm a passionate frontend developer with 2 years of experience creating
                responsive and user-friendly web applications. I specialize in React,
                JavaScript, and modern CSS frameworks.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <div className="about-info">
                <div className="info-item">
                  <span>Name:</span> Sathish
                </div>
                <div className="info-item">
                  <span>Email:</span> Sathish@gmail.com
                </div>
                <div className="info-item">
                  <span>From:</span> Thiruvannmalai,Tamil Nadu
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <button className="btn btn-primary mt-3">Download </button>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;