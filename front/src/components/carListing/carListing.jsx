import React, {Component} from 'react';
import Calendar from 'react-calendar';

import CarInfo from './carInfo';
import CarImage from './carImage';
import ReservationDatePicker from './reservationDatePicker';

class CarListing extends Component {
    render() {
        return (
            <div className="main">
                <div className="container card">
                    <div className="row">
                        <div className="col-xl-5">
                            <CarInfo/>
                        </div>
                        <div className="col-xs-7">
                            <CarImage/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <ReservationDatePicker/>
                        </div>
                        <div className="col-xl-4">
                            <ReservationDatePicker/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarListing;