import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function PlantsCard(props) {
  return (
    <Card className="plants-card">
      <CardBody>
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardText>{props.scientificName}</CardText>
        <CardText>{props.description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>




  )
  
   
}