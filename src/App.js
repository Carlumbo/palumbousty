import React from "react";
import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./container/Home";
import SignUp from "./container/Signup";
import ProductList from "./container/ProductList";
import LoginPage from "./components/LoginPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* can use :blah for random routes*/}
            <Route path="/checkout">
              <Header />
              <h1>Checkout Page</h1>
            </Route>
            <Route
              exact
              path="/buy"
              render={(props) => (
                <SignUp {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            ></Route>
            {/*<Route path="/sell">
            <h1>Sell Wholesale</h1>
            <Registration />
          </Route>
*/}
            <Route path="/products">
              <Header />
              <h1>Product Catalog</h1>
              <ProductList />
            </Route>
            <Route path="/login">
              <Header />
              <LoginPage />
            </Route>
            {/* this is the default route */}
            <Route exact path="/">
              <Header loggedInStatus={this.state.loggedInStatus} />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
