import React from "react";

const Bus = ({ match }) => {
  return (
    <div>
      <h1> Welcome to bus {match.params.busname}</h1>
      <h3> This is bus </h3>
    </div>
  );
};

export default Bus;
