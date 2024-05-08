import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex" }}>
          <Button
            variant="primary"
            href={props.ghfrontLink}
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "gitfront"}
          </Button>
          <Button
            variant="primary"
            href={props.ghbackLink}
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "gitBack"}
          </Button>
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
