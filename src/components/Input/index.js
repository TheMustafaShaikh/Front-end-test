import React from "react";
import "./style.css"

const Input = ({type, onChangeMethod, value,label}) => {
    return (
        <div className="main-input">
            <p className="label">{label}</p>
            <input className="input-custom" type={type} onChange={onChangeMethod} value={value} />      
        </div>
    );
}

export default Input;