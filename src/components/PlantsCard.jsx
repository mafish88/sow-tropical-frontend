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
    <div className="plant-card">
      <Card style={{border: "3px soild grey" ,borderRadius: 10 }}>
        <CardBody>
          <CardTitle
            className="text-center"
            style={{ fontSize: 24, fontWeight: "bold" }}
          >
           Species: {species}
          </CardTitle>
          <CardText
            className="text-center"
            style={{ fontSize: 18, fontWeight: "bold" }}
          >
            Genus: {genus}
          </CardText>
          <CardText className="text-center" style={{ fontSize: 16 }}>
            Propragation: {pollination}
          </CardText>
          <div className="d-flex justify-content-center">
            <Button variant="primary" style={{ fontSize: 16 }}>
              
              
              Fertilizer
            </Button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="primary" style={{ fontSize: 16 }}>
              Watering
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
