import "./Button.css";
import React, { Component } from 'react';

const Button = ({icon, onClick}) => { // fa-play, fa-pause, 
    return (
        <button name={icon} onClick={onClick}>
            <i className={`fas fa-${icon}`} />
        </button>
    )
}
export default Button;

