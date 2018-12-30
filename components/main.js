import React from "react";
import Car from "./car";
import Bus from "./bus";
import Train from "./train";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/bus/:busname" component={Bus} />
        <Route path="/car/:carname" exact component={Car} />
        <Route path="/train/:trainname" exact component={Train} />
      </Switch>
    </React.Fragment>
  );
};

export default Main;
