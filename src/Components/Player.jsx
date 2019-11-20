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
        return(
            <div className="player">
                <Songtitle/>
                <Songslider/>
                <Time/>
                <div className="Row">
                    <Button icon='previous' onClick={this.handleOnClick} />
                    <Button icon='forward' onClick={this.handleOnClick} />
                    <Button icon='play' onClick={this.handleOnClick} />
                    <Button icon='forward' onClick={this.handleOnClick} />
                    <Button icon='next' onClick={this.handleOnClick} />
                    </div>

                    <Volumeslider/>
                    <Nextsongtitle/>
            </div>
        );
    }
}
export default Player;

