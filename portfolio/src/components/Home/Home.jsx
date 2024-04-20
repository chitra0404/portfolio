import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    
    <section>
      
      <Container fluid className="home-section" id="home" >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Hello   {" "}
              
        

             
                I'M
                <strong className="main-name"> CHITRA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}> 
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
             </Col>
             <Home2 />
          </Row>
        </Container>
      </Container>
     
    </section>

  );
}

export default Home;