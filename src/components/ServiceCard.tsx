import React, { use } from "react";
import Service from "../types/Service";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  return (
    <Card className="align-items-center w-25">
      <Card.Img src={service.img} alt={service.name} />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/service/${service.id}`)}
        >
          Árak
        </button>
      </Card.Footer>
    </Card>
  );
};

export default ServiceCard;
