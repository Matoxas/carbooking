import React from 'react';
import Calendar from "react-calendar";

const reservationDatePicker = () => {
    return (
        <Calendar className="reservation--center" format='DD/MM/YYYY' date='4-12-2014' />
    )
};

export default reservationDatePicker;