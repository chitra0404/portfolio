import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm deeply passionate about coding and constantly exploring
    the ever-evolving world of programming. It's a bit like falling down the
    rabbit hole, but in the best way possible!
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and java. </b>
              </i>
              <br />
              <br />
    You can usually find me tinkering with <span className="purple">C++</span>,{" "}
    <span className="purple">JavaScript</span>, and <span className="purple">java</span>,
    crafting cool projects and chasing those "aha" moments.
    <br />
              <br />
              My playground? That'd be the realms of <span className="purple">Web Technologies</span> and
    <span className="purple"> Product Development</span>. I'm always on the lookout for
    opportunities to turn ideas into digital reality.
    <br />
    <br />
    So, if you're ready to embark on a journey of innovation and creativity,
    let's connect and make some magic happen! 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chitra0404"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;