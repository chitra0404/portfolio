import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
 import viniyo from "../../assets/viniyo.png";
 import habla from "../../assets/habla.png";
import crm from "../../assets/crm.png";
import kalvi from "../../assets/kalvi.png";


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
               imgPath={habla}
              isBlog={false}
              title="Habla"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/chitra0404/habla-client"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={kalvi}
              isBlog={false}
              title="Kalvi"
              description="School Management system website is built using reactjs,bootstrap 5,nodejs mongodb. In this website admin can able to add student teacher and mointoring daily activities "
              ghLink="https://github.com/chitra0404/School-Management-frontend"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={viniyo}
              isBlog={false}
              title="viniyo"
              description="food delivery website is built using complete Mern Stack with razorpay payment.In this website customer able to order food"
              ghLink="https://github.com/chitra0404/food-delivery-website"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="crm"
              description="customer management system website used to manage the customer details,product details and staff details."
              ghLink="https://github.com/chitra0404/crm-frontend"
              demoLink="https://crm-frontend-three-beige.vercel.app/"
            />
          </Col>


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;