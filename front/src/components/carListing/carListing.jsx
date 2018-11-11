import React, {Component} from 'react';

import CarInfo from './carInfo';
import CarImage from './carImage';

class CarListing extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <CarInfo />
                    </div>
                    <div className="col-sm-6">
                        <CarImage/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarListing;