import React from "react";
import "./style.css";


const Button = ({content, emoji, onClickEvent}) => {
    return (
        <button onClick={onClickEvent} className="create-event-button">
            {emoji ? `${emoji} ${content}`:content}
        </button>
    );
}

export default Button;