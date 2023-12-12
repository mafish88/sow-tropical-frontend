import { useState } from "react";
import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
// this is the function to handle the submit of the form to add a new plant to the database and the page
export default function PlantsCard(props) {
  const { plants, setPlants, plant, genus, species, propagation } = props;

  function updateFeed(plantId, type) {
    const currentDate = new Date();
    fetch(`https://final-project-mf.nn.r.appspot.com/plants/${plantId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // this is the body of the request for (req.body)
        type,
        dateUpdated: currentDate,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedPlants = plants.map((plant) => {
          if (plant._id === plantId) {
            return { ...plant, feed: { ...plant.feed, [type]: currentDate } };
          }
          return plant;
        });
        setPlants(updatedPlants);
      })
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

  const cardStyle = {
    border: "2px solid green",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  // create function to send type of feed to backend
  // function needs to receive dynamicly the type of feed

  const [watered, setWatered] = useState(false);
  const [fertilized, setFertilized] = useState(false);
  return (
    <div className="plant-card">
      <Card style={cardStyle}>
        <CardBody>
          {/* {Image && (
            <Image src={Image} alt={`${species} plant`} style={{ borderRadius: "8px", marginBottom: "10px" }} />
          )} */}
          <CardTitle className="text-center" style={{ fontSize: 17 }}>
            Species: {species}
          </CardTitle>
          <CardText className="text-center" style={{ fontSize: 17 }}>
            Genus: {genus}
          </CardText>
          <CardText className="text-center" style={{ fontSize: 17 }}>
            Propagation: {propagation}
          </CardText>
          <div className="d-flex justify-content-center mt-2">
            <Button
              variant="primary"
              style={{ fontSize: 14, borderRadius: "8px", marginRight: "10px" }}
              onClick={() => setFertilized(true)}
            >
              Fertilize
            </Button>
            <Button
              variant="primary"
              style={{ fontSize: 14, borderRadius: "8px" }}
              onClick={() => setWatered(true)}
            >
              Water
            </Button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            {fertilized && (
              <>
                <p style={{ fontSize: 14, marginLeft: "10px" }}>Fertilized!</p>
              </>
            )}
            {watered && (
              <>
                <p style={{ fontSize: 14, marginLeft: "10px" }}>Watered!</p>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
