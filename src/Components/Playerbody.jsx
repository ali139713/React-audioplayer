import "./Playerbody.css";
import React, { Component } from 'react';
import Logo from './Logo';
import Player from './Player';

class Playerbody extends Component{

    render(){
        return(
            <div className="playerbody">
                <Logo/>
                <Player/>

            </div>
        );
    }
}
export default Playerbody;

