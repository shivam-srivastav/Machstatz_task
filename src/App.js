import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Component/Navbar/Navbar";
import PlanetList from "./Component/PlanetList/PlanetList.js";
import FavouriteList from "./Component/FavouriteList/FavouriteList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {/* <Route path=""> */}
          {/* </Route> */}
          <Route path="/" exact>
            <PlanetList />
          </Route>
          <Route path="/favourite" exact>
            <FavouriteList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
