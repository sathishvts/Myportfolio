import { Container, Row, Col, Card } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";
import "../assets/styles/Projects.css";

import boyImage from "../assets/images/File.jpeg";
import project2 from "../assets/images/file1.jpeg";
import project3 from "../assets/images/file2.jpeg";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform built with React and Node.js",
    image: boyImage,
    tags: ["React", "Node.js"],
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for creatives",
    image: project2,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing daily tasks and projects",
    image: project3,
    tags: ["React", "Material UI"],
  },
];

const Projects = ({ id }) => {
  return (
    <section id={id} className="projects-section py-5">
      <Container>
        <Row>
          <Col>
            <AnimatedSection>
              <h2 className="section-title text-center mb-5">My Projects</h2>
            </AnimatedSection>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={project.title} className="mb-4">
              <AnimatedSection delay={0.2 + index * 0.2}>
                <Card className="project-card h-100">
                  {/* ✅ Render the image properly */}
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    
                    <a
                      href="https://github.com/sathishvts/Frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View on GitHub
                    </a>
                  </Card.Footer>
                </Card>
              </AnimatedSection>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
