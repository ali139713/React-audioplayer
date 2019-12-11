import "./Playerbody.css";
import React, { Component } from 'react';
import Logo from './Logo';
import Player from './Player';

class Playerbody extends Component{

    render(){

        const selectedSongs=this.props.Songs;
        const songname=this.props.songname;
        const nextSongName=this.props.nextSongName;
       
        
        return(
            <div className="playerbody">
                <Logo/>
                <Player Songs={selectedSongs} songname={songname} nextSongName={nextSongName} />

            </div>
        );
    }
}
export default Playerbody;

