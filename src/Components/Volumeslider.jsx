import "./Volumeslider.css";
import React, { Component } from 'react';

class Volumeslider extends Component{

    render(){
        return(
            <input id="volumeSlider" className="volume-slider" type="range" min="0" max="100" step="1" />
        );
    }
}
export default Volumeslider;

