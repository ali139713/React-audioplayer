import "./Player.css";
import React, { Component } from 'react';
import fontawesome from 'react-fontawesome';
import Songtitle from './Songtitle';
import Songslider from './Songslider';
import Time from './Time';
import Button from './Button';
import Volumeslider from './Volumeslider';
import Nextsongtitle from './Nextsongtitle';
import AudioSingleton from '../Audio/Audio';

class Player extends Component{


    handleOnClick = event => {
        const {name} = event.target;
        const {song}=this.props.Songs;

        switch(name){
            case 'play':
               
                  
            
             
                break;
            case 'previous':
                //previous logic
                break;
             case 'forward':
                 //forward logic
                 break;
             case 'next':
                 //next logic
                 break;   
                
        };
    };

    render(){
        const songname=this.props.songname;
        const nextSongName=this.props.nextSongName;
       
       
        return(
            <div className="player">
                <Songtitle songname={songname}/>
                <Songslider/>
                <Time />
                <div className="Row">
                    <Button icon='step-backward' onClick={this.handleOnClick} />
                    <Button icon='backward' onClick={this.handleOnClick} />
                    <Button icon='play' onClick={this.handleOnClick} />
                    <Button icon='forward' onClick={this.handleOnClick} />
                    <Button icon='step-forward' onClick={this.handleOnClick} />
                    </div>

                    <Volumeslider/>
                    <Nextsongtitle nextSongName={nextSongName}/>
            </div>
        );
    }
}
export default Player;

