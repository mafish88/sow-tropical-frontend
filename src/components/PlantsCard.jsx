// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardText,
//   Button,
//   Spinner,
// } from "reactstrap";

// const style = {
//   card: {
//     width: "300px",
//     height: "300px",
//     margin: "20px",
//     borderRadius: "20px",
//     backgroundColor: "#fff",
//     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
//   },
// };

// export default function PlantsCard(props) {
//   const { species, genus, pollination } = props;

//   return (
//     <div className="plant-card">
//       <Card style={style.card}>
//         <CardBody>
//           <CardTitle
//             className="text-center"
//             style={{ fontSize: 24, fontWeight: "bold" }}
//           >
//             {species}
//           </CardTitle>
//           <CardText
//             className="text-center"
//             style={{ fontSize: 18, fontWeight: "bold" }}
//           >
//             Genus: {genus}
//           </CardText>
//           <CardText className="text-center" style={{ fontSize: 16 }}>
//             Pollination: {pollination}
//           </CardText>
//           <div className="d-flex justify-content-center">
//             <Button variant="primary" style={{ fontSize: 16 }}>
//               <Spinner animation="border" size="sm" />
//               Fertilizer
//             </Button>
//           </div>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }


import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Spinner } from 'reactstrap';

export default function PlantsCard(props) {
  const { species, genus, pollination } = props;

  return (
    <div className="plant-card">
      <Card style={{ border: 'none', borderRadius: 10 }}>
        <CardBody>
          <CardTitle className="text-center" style={{ fontSize: 24, fontWeight: 'bold' }}>
            {species}
          </CardTitle>
          <CardText className="text-center" style={{ fontSize: 18, fontWeight: 'bold' }}>
            Genus: {genus}
          </CardText>
          <CardText className="text-center" style={{ fontSize: 16 }}>
            Pollination: {pollination}
          </CardText>
          <div className="d-flex justify-content-center">
            <Button variant="primary" style={{ fontSize: 16 }}>
              <Spinner animation="border" size="sm" />
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
