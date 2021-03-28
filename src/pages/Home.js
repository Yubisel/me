import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  Button,
} from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container className="pt-5">
        <Row className="no-gutters">
          <Col md="4" className="pr-md-2">
            <Card className="shadow-xs">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title className="mb-0">
                  Ing. Yubisel Vega Alvarez
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
            </Card>
          </Col>
          <Col md="8" className="pl-md-2">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link target="_blank" href="mailto:yubiselv@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className="mr-2"
                  ></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="lg"
                    className="mr-2"
                  ></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="mr-2"
                  ></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                <FontAwesomeIcon
                    icon={faGitlab}
                    size="lg"
                    className="mr-2"
                  ></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="mr-2"
                  ></FontAwesomeIcon>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Curriculum Vitae</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  yubiselv@gmail.com
                </ListGroupItem>
                <ListGroupItem>
                  +598 93 303 307
                </ListGroupItem>
                <ListGroupItem>
                  https://github.com/yubisel
                </ListGroupItem>
                <ListGroupItem>
                  https://gitlab.com/yubisel
                </ListGroupItem>
                <ListGroupItem>
                  https://www.linkedin.com/in/yubisel
                </ListGroupItem>
              </ListGroup>
              {/* <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>ads</Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
