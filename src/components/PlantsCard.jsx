import React from "react";
import {
  
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  //Spinner,
} from "reactstrap";

export default function PlantsCard(props) {
  const { species, genus, pollination } = props;

  return (
    <div className="cards-container">
      <Card style={{ border: "2px soild green", borderRadius: 2 }}>
        <CardBody>
          <CardTitle className="text-center" style={{ fontSize: 15 }}>
            Species: {species}
          </CardTitle>
          <CardText className="text-center" style={{ fontSize: 15 }}>
            Genus: {genus}
          </CardText>
          <CardText className="text-center" style={{ fontSize: 15 }}>
            Propragation: {pollination}
          </CardText>
          <div className="d-flex justify-content-center">
            <Button variant="primary" style={{ fontSize: 12 }}>
              Fertilizer
            </Button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="primary" style={{ fontSize: 12 }}>
              Watering
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
