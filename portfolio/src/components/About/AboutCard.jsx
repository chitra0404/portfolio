import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am  <span className="purple">Chitra </span>
            from <span className="purple"> pondicherry, India.</span>
            <br />
            I am currently looking for job .
            <br />
            I have completed B.Tech in Information Technology at RGCET 
            pondicherry
            <br />
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight />Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Linguistic learning
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "No matter what happens, use it as an experience to grow from"{" "}
          </p>
          <footer className="blockquote-footer">Chitra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;