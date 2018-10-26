import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Switch from "react-router-dom/Switch";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="margin-top">
            <Navbar />
            <Switch>
              <Route path="/" component={Index} exact />
              <Route path="/feed" component={Feed} exact />
              <Route component={Index} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
