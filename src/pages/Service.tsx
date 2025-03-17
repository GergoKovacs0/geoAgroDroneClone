import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Service from "../types/Service";
import services from "../mockServices";

const ServicePage: React.FC = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const serv = services.find((service) => service.id === Number(serviceId));
    setService(serv || null);
  }, [serviceId]);

  return (
    <Container className="mb-5">
      <h1 className="mb-5">{service?.name}</h1>
      <Row>
        <Col>
          <img
            src={service?.img}
            alt={service?.name}
            className="w-100 img-fluid rounded"
          />
        </Col>
        <Col>
          <p>{service?.description}</p>
          <table className="table">
            <thead>
              <tr>
                <th>Föld terület mérete</th>
                <th>Ár</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10 hektár</td>
                <td>{service?.price.priceFor10} Ft</td>
              </tr>
              <tr>
                <td>20 hektár</td>
                <td>{service?.price.priceFor20} Ft</td>
              </tr>
              <tr>
                <td>50 hektár</td>
                <td>{service?.price.priceFor50} Ft</td>
              </tr>
              <tr>
                <td>100 hektár</td>
                <td>{service?.price.priceFor100} Ft</td>
              </tr>
              <tr>
                <td>200+ hektár</td>
                <td>{service?.price.priceForMoreThan200} Ft</td>
              </tr>
            </tbody>
          </table>
          <p className="fst-italic">Kiszállási díj: {service?.price.showUpPrice} Ft</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicePage;
