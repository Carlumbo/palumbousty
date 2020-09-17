import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Registration from "./components/auth/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* can use :blah for random routes*/}
          <Route path="/checkout">
            <Header />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/buy">
            <h1>Buy Wholesale</h1>
            <Registration />
          </Route>
          <Route path="/sell">
            <h1>Sell Wholesale</h1>
            <Registration />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* this is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
