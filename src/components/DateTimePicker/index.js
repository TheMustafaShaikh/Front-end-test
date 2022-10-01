import React from "react";
import DateTimePicker from 'react-datetime-picker';
import "./style.css";
const DateTimePickerInput = ({label, onChange, value}) => {
    return (
        <div>
        <p className="date-label">{label}</p>
        <DateTimePicker onChange={onChange} value={value} className='date-picker'/>
      </div>
    );
} 

export default DateTimePickerInput;