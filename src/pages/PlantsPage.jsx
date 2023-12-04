import React from 'react';
import PlantsCard from '../components/PlantsCard';

// fetch data from api 


  
const plants = []
function PlantsPage() {
  return (
    <div>
      <h1>Tropical and Exotic Fruit Trees</h1>
      <div className="cards-container">
        {plants.map((plants) => (
          <PlantsCard
            key={plants.id}
           
            name={plants.name}
            scientificName={plants.scientificName}
            description={plants.description}
          />
        ))}
      </div>
    </div>

  );
};

fetch('http://localhost:5001/plants')
  .then((response) => response.json())
  .then((data) => console.log(data));
export default PlantsPage;




