import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductFeature from "./features";
import LoginPage from "./features/Product/pages/LoginPage";
import PrivateRoute from "./components/Common/PrivateRoute";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/login'>
              <LoginPage />
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
