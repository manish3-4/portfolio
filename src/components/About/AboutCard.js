import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manish Kumar </span>
            from <span className="purple"> Punjab, India.</span>
            <br />
            I am currently a student in Lovely professional University.
            <br />
            I am pursuing B.tech in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Always go with the flow and never give up on your dreams.
          </p>
          <footer className="blockquote-footer">Manish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
