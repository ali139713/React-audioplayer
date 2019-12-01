import "./Playerbody.css";
import React, { Component } from 'react';
import Logo from './Logo';
import Player from './Player';

class Playerbody extends Component{

    render(){

        const selectedSongs=this.props.Songs;
        const songname=this.props.songname;
        console.log({songname})
       
        return(
            <div className="playerbody">
                <Logo/>
                <Player Songs={selectedSongs} songname={songname}/>

            </div>
        );
    }
}
export default Playerbody;

