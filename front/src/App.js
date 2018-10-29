import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// C
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Switch from "react-router-dom/Switch";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
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
