<<<<<<< HEAD
import React from "react";
import carListing from './carListing';

const Feed = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <div>
            </div>
=======
import React, { Component } from "react";
import { inject, observer } from "mobx-react";

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
      <div className="feed">
        <div className="main">
          <div className="container padding-top">
            <div className="row">
              <div className="col-md">
                <h2>You Have {CarStore.carsCount} Cars</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <input
                    type="text"
                    placeholder="enter car name"
                    ref={input => (this.car = input)}
                  />
                  <button>Submit</button>
                </form>
              </div>
              <div className="col-md">
                <ul>
                  {CarStore.cars.map(car => (
                    <li key={car}>{car}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
>>>>>>> ea8f325ae09cd8dc7a0d376cbe458056575bac14
        </div>
      </div>
    );
  }
}

export default Feed;
