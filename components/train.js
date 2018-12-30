import React from "react";

const Train = ({ match }) => {
  return (
    <div>
      <h1> Welcome to train {match.params.trainname}</h1>
      <h3> This is train </h3>
    </div>
  );
};

export default Train;
