import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import apna_bank from "../../Assets/Projects/apna_bank.png";
import LPU_BUDDY from "../../Assets/Projects/lpu_buddy.png";
import s2t from "../../Assets/Projects/s2t.png";
import ai_chatbot from "../../Assets/Projects/ai-chatbot.png";
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
              imgPath={apna_bank}
              isBlog={false}
              title="Apna bank"
              description="Apna Bank is a modern, user-centric banking application designed to simplify financial management and empower users with seamless banking services. Built with React, the app focuses on delivering a secure, efficient, and intuitive platform for individuals and businesses to handle their finances with ease."
              ghLink="https://github.com/manish3-4/Apna-Bank"
              demoLink="https://apnabank-4qir.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s2t}
              isBlog={false}
              title="Speech-To-Text"
              description="This Speech-to-Text application, built with Next.js, converts spoken words into real-time text using the Web Speech API. It features a responsive UI, editable transcripts, and seamless voice recognition. Ideal for quick dictation, note-taking, or accessibility needs, the app runs entirely in the browser with no external dependencies."
              ghLink="https://github.com/manish3-4/SpeechToText"
              demoLink="https://speech22text.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai_chatbot}
              isBlog={false}
              title="Ai-Chatbot"
              description="This AI Chatbot, developed using Next.js, offers real-time conversational experiences powered by natural language processing. It understands user queries, responds contextually, and delivers an interactive chat interface. Designed for scalability and responsiveness, it serves as a smart assistant for websites, support systems, or personal productivity tools—all running efficiently in the browser."
              ghLink="https://github.com/manish3-4/Ai_Chatbot_backend"
              demoLink="https://myfriendbuddy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
