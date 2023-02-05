import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductFeature from "./features";
import PrivateRoute from "./components/Common/PrivateRoute";
import Header from "./components/Layout/Header";
import LandingPage from "./components/Layout/LandingPage";

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/login'>
              <LandingPage />
            </Route>

            <PrivateRoute path='/products'>
              <ProductFeature />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </>


  );
}

export default App;
