import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Items from "./items";
import Sidebar from "./sidebar";

@inject("CarStore")
@observer
class Feed extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const car = this.car.value;
    this.props.CarStore.addCar(car);
    this.car.value = "";
  };

  render() {
    const { CarStore } = this.props;
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <Items />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
