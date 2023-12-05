import React, { useEffect } from 'react';
import PlantsCard from '../components/PlantsCard';


// fetch data from api



function PlantsPage() {

  const [plants, setPlants] = React.useState([]);

  useEffect(() => {
  fetch ("https://final-project-mf.nn.r.appspot.com/plants")
  .then((response) => response.json())
   .then((data) => setPlants(data))
    .catch((error) => console.log(error));
  },[])

 function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const scientificName = event.target.scientificName.value;
        const description = event.target.description.value;
        const plant = { name, scientificName, description };
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
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

  return (
    <div>
      <h1>Tropical and Exotic Fruit Trees</h1>
      <div className="cards-container">
        {plants?.map((plants) => (
          
          <PlantsCard
            key={plants._id}

            species={plants.species}
            genus={plants.genus}
            pollination={plants.pollination}
          />
        ))}
      </div>
      <div>
            <h1>Add Plant</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="species">Species</label>
                <input type="text" id="species" />
                <label htmlFor="genus">Genus</label>
                <input type="text" id="genus" />
                <label htmlFor="pollination">Pollination</label>
                <input type="text" id="pollination" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

  );
};

export default PlantsPage;




