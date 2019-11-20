import "./Playlist.css";
import React, { Component } from 'react';
import Addsong from './Addsong';
import Songlist from './Songlist';
import Divider from './Divider';
import AudioSingleton from '../Audio/Audio'


class Playlist extends Component{
   
    
        
    state = {
        selectedSongs: [],
    }
    

        
    
    
    handleOnClick=event=>{
        const {selectedSongs}=this.state;
        const audio = AudioSingleton.getInstance();
        let currentTarget = event.currentTarget;
        let songIndex = Number(currentTarget.getAttribute('song-index'));
       audio.srcObject=selectedSongs[songIndex];
       audio.play();
        


       
        {console.log(selectedSongs)};   
      
    }
  
    onSongsSelect = event => {
        let files = Array.from(event.target.files);
        
        this.setState({ selectedSongs: files });
    }; 

    render(){
        const {selectedSongs} = this.state;
        return(
            <div className="playlist">
                <Addsong onSongsSelect={this.onSongsSelect}/>
                <Divider/>
                { selectedSongs.length > 0 && <Songlist songs={selectedSongs} onClick={this.handleOnClick}/> }
                
            </div>
        );
    }
}
export default Playlist;

