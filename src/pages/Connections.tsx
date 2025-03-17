import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Connections: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Lépj kapcsolatba velunk!</h1>
          <p>
            Emailben telefonon és ezen a felületen is kapcsolatban tudsz lépni
            hogy pontosabban tudjunk egyeztetni az elvégezendő munkáról.
          </p>
          <p>
            {" "}
            <MdEmail /> info@geoagro.com
          </p>
          <p className="fst-italic" color="grey">
            <FaPhone />
            +36 20 354 1552
          </p>
          <Row className="d-flex flex-row justify-content-between mt-5">
            <Col className="">
              <h3 className="fs-5">Ügyfélszolgálat</h3>
              <p className="text-justify">
                Csapatunk éjjel-nappal rendelkezésre áll, hogy megválaszolják
                aggályait vagy kérdéseit.
              </p>
            </Col>
            <Col className="">
              <h3 className="fs-5">Visszajelzések</h3>
              <p className="text-justify">
                Nagyra értékeljük visszajelzését, és folyamatosan dolgozunk, a
                szolgáltatásaink fejlesztésén. Az ön visszajelzése és fontos a
                fejlődésünkben.
              </p>
            </Col>
            <Col className="">
              <h3 className="fs-5">Technikai támogatás</h3>
              <p className="text-justify">
                Ha bármilyen technikai problémája van, kérjük, lépjen
                kapcsolatba velünk, és mi segítünk megoldani azt.
              </p>
            </Col>
          </Row>
        </Col>
        {/* Form collum */}
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Vedd fel a kapcsolatot</Card.Title>
              <Card.Text>Bármikor el tudsz minket érni</Card.Text>
              <Form>
                <Row className="d-flex flex-row justify-content-between mb-3">
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Label>Vezetéknév</Form.Label>
                      <Form.Control type="text" placeholder="Vezetéknév" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lastName">
                      <Form.Label>Keresztnév</Form.Label>
                      <Form.Control type="text" placeholder="Keresztnév" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email cím</Form.Label>
                  <Form.Control type="email" placeholder="Email cím" />
                </Form.Group>

                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Telefonszám</Form.Label>
                  <Form.Control type="tel" placeholder="Telefonszám" />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Üzenet</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Add meg az üzeneted"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="m-auto d-block"
                >
                  Kapcsolat felvétele
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Connections;
