import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import LPU_BUDDY from "../../Assets/Projects/SignIn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LPU_BUDDY}
              isBlog={false}
              title="LPU BUDDY"
              description="LPU Buddy is an innovative buy-and-sell platform tailored for the Lovely Professional University (LPU) community. Built using Node.js and Express, the app provides a seamless and secure marketplace for students, faculty, and staff to trade goods and services within the campus ecosystem."
              ghLink="https://github.com/manish3-4/LPU_BUDDY"
              demoLink="https://lpu-buddy.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Apna bank"
              description="Apna Bank is a modern, user-centric banking application designed to simplify financial management and empower users with seamless banking services. Built with React, the app focuses on delivering a secure, efficient, and intuitive platform for individuals and businesses to handle their finances with ease."
              ghLink="https://github.com/manish3-4/Apna-Bank"
              demoLink="https://apnabank-4qir.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
