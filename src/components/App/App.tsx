import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";

import "../../styles/constants.scss";

const App = (): React.ReactElement => (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <Home levelsCompleted={12} />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default App;
