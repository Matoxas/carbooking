import React, {Component} from 'react';

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
                        <div className="col-xl-6 reservation--center">
                            {/*<button onClick={() => this.showCalendar()} className="btn btn-secondary">Select date from</button>*/}
                            Reserve car from
                            <ReservationDatePicker/>
                        </div>
                        <div className="col-xl-6 reservation--center">
                            {/*<button className="btn btn-secondary">Select date from</button>*/}
                            Reserve car until
                            <ReservationDatePicker/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarListing;