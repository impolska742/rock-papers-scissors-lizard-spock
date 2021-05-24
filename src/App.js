import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Error from "./Error";
import Rules from "./Rules";
import Footer from "./Footer";
import Game from "./Game";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/rules">
              <Rules />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
