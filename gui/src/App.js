import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import "./Styles/App.css";
import A611fcbcc9c7951bd963228ae from "./Pages/611fcbcc9c7951bd963228ae";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path={["/", "/home"]} component={Home} exact />
          <Route path="/cards" component={Cards} exact />
          <Route path="/" component={A611fcbcc9c7951bd963228ae} />
        </Switch>
      </Router>
    </div>
  );
}
