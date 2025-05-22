import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import '../assets/styles/Skills.css';

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'UI/UX Design', level: 75 },
];

const Skills = ({ id }) => {
  return (
    <section id={id} className="skills-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <AnimatedSection>
              <h2 className="section-title text-center mb-5">My Skills</h2>
            </AnimatedSection>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <AnimatedSection delay={0.2}>
              <h3 className="skills-subtitle mb-4">Technical Skills</h3>
              <p className="skills-text">
                I've worked with a variety of technologies in the web development world.
                Here are some of my core skills:
              </p>
            </AnimatedSection>
          </Col>
          <Col lg={6}>
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={0.2 + index * 0.1}>
                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar
                    now={skill.level}
                    className="skill-progress"
                    aria-label={`${skill.name} proficiency`}
                  />
                </div>
              </AnimatedSection>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
