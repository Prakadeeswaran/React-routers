import React from "react";

const Car = function({ match }) {
  console.log("Pramas", match);
  return (
    <div>
      <h1> Welcome to car {match.params.carname}</h1>
      <h3> This is car </h3>
    </div>
  );
};

export default Car;
