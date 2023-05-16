import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Surya Kanta Nag </span>
            from <span className="purple"> Kolkata, West Bengal, India.</span>
            I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects
            <br />
            <br/>I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.<br/>
            <br/>If I need to define myself in one sentence that would be a family personweb-designer, a sports fanatic, photography enthusiast, and tech-obsessedill
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing & Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In order to succeed, we must first believe that we can."{" "}
          </p>
          <footer className="blockquote-footer">Surya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
