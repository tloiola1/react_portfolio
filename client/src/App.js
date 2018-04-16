import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
</Router>;

export default App;
