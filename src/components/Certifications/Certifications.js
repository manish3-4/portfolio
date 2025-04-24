import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";

import fullstack from '../../Assets/certificates/cipherSchools/full-stack.pdf'
import reactcer from '../../Assets/certificates/cipherSchools/react-js.pdf'
import dsaCipher from '../../Assets/certificates/cipherSchools/Manish Kumar_certificate_DSA.pdf'
import gfgdsa from '../../Assets/certificates/GFG/certificate/gfg certificate.pdf'
import nptelhacking from '../../Assets/certificates/nptel/Ethical Hacking.pdf'
import genai from '../../Assets/certificates/GenAI/Coursera (Build AI Apps with ChatGPT, Dall-E, and GPT-4).pdf'
import daa from '../../Assets/certificates/Daa/Coursera (Dynamic Programming, Greedy Algorithms).pdf'
import hackinflix from '../../Assets/certificates/HackingFlix/CCW HackingFlix.pdf'

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Certifications = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certicates {"&"} Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {/* fullstack */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={fullstack}>
                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={fullstack}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>
        {/* react */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={reactcer}>
                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={reactcer}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>
        {/* cipherDSA */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={dsaCipher}>
                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={dsaCipher}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>
       {/* gfg */}
       <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={gfgdsa}>
                <Page pageNumber={1} scale={width > 786 ? 0.4 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={gfgdsa}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>

        {/* nptelhacking */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={nptelhacking}>
                <Page pageNumber={1} scale={width > 786 ? 0.2 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={nptelhacking}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>

        {/* GenAI */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={genai}>
                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={genai}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>

        {/* Daa */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={daa}>
                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={daa}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>

        {/* hackingflix */}
        <Col md={1} className="tech-icons">
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={1} className="tech-icons">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                justifyItems: "center",
              }}
            >
              <Document file={hackinflix}>
                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.2} />
              </Document>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>        
        <Button
          variant="primary"
          href={hackinflix}
          target="_blank"
          style={{ maxWidth: "250px", marginTop:"-50px"}}
        >
          <AiOutlineDownload />
          &nbsp; Download
        </Button>
        </Row>
        </Col>


        </Row>
      </Container>
    </Container>
  );
};

export default Certifications;
