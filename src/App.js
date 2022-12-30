import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductFeature from "./features";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/products'>
            <ProductFeature />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
