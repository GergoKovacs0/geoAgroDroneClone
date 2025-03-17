import React from "react";
import Service from "../types/Service";
import { Container } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";

import services from "../mockServices";

const Services: React.FC = () => {
  return (
    <Container className="d-flex flex-wrap justify-content-around">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </Container>
  );
};

export default Services;
