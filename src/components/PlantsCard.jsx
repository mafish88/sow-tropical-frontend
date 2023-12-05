import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

export default function PlantsCard(props) {
    console.log(props)
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.species}</CardTitle>
        <CardText>{props.genus}</CardText>
        <CardText>{props.pollination}</CardText>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
    </Card>





  )
  
   
}