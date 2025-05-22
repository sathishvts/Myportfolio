import { Container, Row, Col, Button } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import '../assets/styles/Hero.css';

const Hero = ({ id }) => {
  return (
    <section id={id} className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-text">
            <AnimatedSection delay={0.2}>
              <h1 className="hero-title">Hi, I'm Sathish</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <h2 className="hero-subtitle">Frontend Developer</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <p className="hero-description">
                I build exceptional digital experiences with modern technologies.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <Button 
                variant="primary" 
                size="lg" 
                className="hero-button"
                href="#contact"
              >
                Contact Me
              </Button>
            </AnimatedSection>
          </Col>
          <Col lg={6} className="hero-image-col">
            <AnimatedSection delay={1}>
              <div className="hero-image"></div>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
