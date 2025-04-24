import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, This is <span className="purple">Manish Kumar </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            Currently, I am a student in Lovely professional University and
            pursuing B.tech in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, I also like to 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch biography movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Always go with the flow of time and never give up <br />on your dreams.
          </p>
          <footer className="blockquote-footer">Manish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
