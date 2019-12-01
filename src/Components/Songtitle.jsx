import "./Songtitle.css";
import React, { Component } from 'react';

class Songtitle extends Component{

    render(){
        const songname=this.props.songname;
        return(
        <div className="songTitle">{songname}</div>
        );
    }
}
export default Songtitle;

