import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header/";
import Main from "../Main";

export default function Routes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:id" exact component={Main} />
      </Switch>
    </div>
  );
}
