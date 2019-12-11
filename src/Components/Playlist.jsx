import "./Playlist.css";
import React, { Component } from 'react';
import Addsong from './Addsong';
import Songlist from './Songlist';
import Divider from './Divider';
import AudioSingleton from '../Audio/Audio';


class Playlist extends Component {
   
   handleChange=(event)=>{
    const files = Array.from(event.target.files);
    this.props.onSongChange(files);
    
   }
    


    handleOnClick = (obj) => {
       
        const song=obj.song;
        const songIndex=obj.songIndex;
        
        
        const reader = new FileReader();
       
        
        this.props.onSongDuration(song.duration);
        console.log(song.duration)
        this.props.onNameChange(song.name);
        this.props.onNextSong(songIndex);
       
       
        reader.readAsDataURL(song);
       
        reader.onload = () => {
            const audioPlayer = AudioSingleton.getInstance();
           
            audioPlayer.setSong(reader.result);
            
            
            
          
            audioPlayer.playSong();
    }
    }
      

 

    render() {
        const  selectedSongs  = this.props.Songs;
      
        return (
            <div className="playlist">
                <Addsong onSongsSelect={this.handleChange}  />
                <Divider />
                {selectedSongs.length > 0 && <Songlist songs={selectedSongs} onClick={this.handleOnClick}  />}

            </div>
        );
    }
}
export default Playlist;