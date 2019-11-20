import "./Songslider.css";
import React, { Component } from 'react';

class Songslider extends Component{

    render(){
        return(
           
                 <input id="songSlider" className="song-slider" type="range" min="0" step="1"  />
                   );
    }
}
export default Songslider;

