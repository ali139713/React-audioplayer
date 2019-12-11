import "./Nextsongtitle.css";
import React, { Component } from 'react';

class Nextsongtitle extends Component{

    render(){
       const nextSongName=this.props.nextSongName;
        return(
        <div className="nextsongtitle">{nextSongName}</div>
        );
    }
}
export default Nextsongtitle;

