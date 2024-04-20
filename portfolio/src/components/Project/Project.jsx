import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
// import viniyo from "";
// import habla from "../../Assets/Projects/emotion.png";
import crm from "../../assets/crm.png";
// import kalvi from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={habla}
              isBlog={false}
              title="Habla"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={kalvi}
              isBlog={false}
              title="Kalvi"
              description="School Management system website is built using reactjs,bootstrap 5,nodejs mongodb. In this website admin can able to add student teacher and mointoring daily activities "
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={viniyo}
              isBlog={false}
              title="viniyo"
              description="food delivery website is built using complete Mern Stack with razorpay payment.In this website customer able to order food"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="crm"
              description="customer management system website used to manage the customer details,product details and staff details."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;