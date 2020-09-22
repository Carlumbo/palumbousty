import React from "react";
import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./container/Header";
import axios from "axios";
import Home from "./container/Home";
import SignUp from "./container/Signup";
import ProductList from "./container/ProductList";
import Dashboard from "./container/Dashboard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
        }
      })
      .catch((error) => {
        console.log("Check Login Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
    console.log(this.state.user);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* can use :blah for random routes*/}
            <Route path="/checkout">
              <Header user={this.state} handleLogout={this.handleLogout} />
              <h1>Checkout Page</h1>
            </Route>
            <Route
              exact
              path="/buy"
              render={(props) => (
                <div>
                  <Header
                    {...props}
                    user={this.state}
                    handleLogout={this.handleLogout}
                  />
                  <SignUp
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                </div>
              )}
            ></Route>
            <Route path="/products">
              <Header
                handleLogout={this.handleLogout}
                user={this.state.user}
                loggedInStatus={this.state.loggedInStatus}
              />

              <ProductList loggedInStatus={this.state.loggedInStatus} />
              <h1>Product Catalog</h1>
            </Route>
            <Route path="/dashboard">
              {console.log(this.state.loggedInStatus)}
              <Header
                handleLogout={this.handleLogout}
                user={this.state.user}
                loggedInStatus={this.state.loggedInStatus}
              />
              <Dashboard user={this} />
            </Route>
            {/* this is the default route */}
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Header
                    {...props}
                    user={this.state}
                    handleLogout={this.handleLogout}
                  />
                  <Home user={this.state} />
                </div>
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
