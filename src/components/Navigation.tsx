import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import services from "../mockServices";

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getCurrentTitle = () => {
    if (currentPath.includes("/service/")) {
      const serviceId = currentPath.split("/")[2];
      const service = services.find((service) => service.id === +serviceId);
      return service ? <h1>{service.name}</h1> : null;
    }

    switch (currentPath) {
      case "/":
        return (
          <>
            <h1 className="display-4">Üdvözöljük az GeoAgroDrone oldalán!</h1>
            <p className="lead">
              Precíziós mezőgazdaság a legmodernebb dróntechnológiával.
            </p>
          </>
        );
      case "/about-us":
        return <h1>Rólunk</h1>;
      case "/references":
        return <h1>Referenciáink</h1>;
      case "/services":
        return <h1>Szolgáltatások</h1>;
      case "/connections":
        return <h1>Elérhetőségeink</h1>;
      default:
        return null;
    }
  };

  return (
    <header className="mb-5">
      <Navbar
        expand="lg"
        className="d-flex justify-content-between mb-4 pe-4 ps-4"
      >
        <Navbar.Brand href="/">GeoAgroDrone</Navbar.Brand>

        <Nav className="text-white">
          <Nav.Link href="/services">Szolgáltatások</Nav.Link>
          <Nav.Link href="/connections">Elérhetőségeink</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="d-flex flex-column justify-content-center align-items-center h-75">
        {getCurrentTitle()}
      </Container>
    </header>
  );
};

export default Navigation;
