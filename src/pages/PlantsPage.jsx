import React, { useEffect } from "react";
import PlantsCard from "../components/PlantsCard";

import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";

// fetch data from api

function PlantsPage() {
const [plants, setPlants] = React.useState([]);

// this is the fetch request to the backend to GET the plants and sets the state of the plants
  useEffect(() => {
    fetch("https://final-project-mf.nn.r.appspot.com/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.log(error));
  }, []);

  function updateFeed(plantId, type) {
    const currentDate = new Date();
    fetch(`https://final-project-mf.nn.r.appspot.com/plants/${plantId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({            // this is the body of the request for (req.body)
        type,
        dateUpdated: currentDate,
      }),
    })
      .then((response) => response.json())
      .then(setPlants)
      .catch((error) => {
        console.error(error);
      });
  }
  
  function handleFertilize(plantId) {
    updateFeed(plantId, "fertilizer");
  }

  function handleWater(plantId) {
    updateFeed(plantId, "water");
  }
// this is the function to handle the submit of the form to add a new plant to the database and the page 
  function handleSubmit(event) {
    event.preventDefault();
    const plant = {
     name: event.target.species.value,
     scientificName: event.target.genus.value,
     description: event.target.propagation.value,
    }
   
// this is the fetch request to the backend to POST the new plant- my CRUD
    fetch("https://final-project-mf.nn.r.appspot.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPlants(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div style={{backgroundColor: "rgb(204, 253, 194)"}}>
      <h1>Tropical and Exotic Fruit Trees</h1>
      <div
        className="cards-container"
        style={{
          border: "3px solid #ddd",
          borderBlockStyle: "solid",
          borderRadius: "5px",
          padding: "25px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        
        {plants?.map((plant) => (
          <PlantsCard
            key={plant._id}
            species={plant.species || plant.name}
            genus={plant.genus || plant.scientificName}
            propagation={
              plant.pollination || plant.propergation || plant.description
            }
            feed={plant.feed}
            handleFertilize={() => handleFertilize(plant._id)}
            handleWater={() => handleWater(plant._id)}
            plantId={plant._id}
          />
        ))}
      </div>

      <div className="add-plant-container"> 
        <Row>
          <Form className="plant-form" onSubmit={handleSubmit}></Form>
        </Row>
      </div>
      <h1 className="text-center">Add Plant</h1>
      <Form className="plant-form" onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <Label for="species">Species:</Label>
          <Input
            type="text"
            id="species"
            name="species"
            placeholder="Enter species"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="genus">Genus:</Label>
          <Input
            type="text"
            id="genus"
            name="genus"
            placeholder="Enter genus"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="propagation">Propagation:</Label>
          <Input
            type="text"
            id="propagation"
            name="propagation"
            placeholder="Enter propagation method"
          />
        </FormGroup>
        <Button
          type="submit"
          color="success"
          className="mt-3 d-flex justify-content-center"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PlantsPage;
