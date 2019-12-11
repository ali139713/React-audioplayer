import React, { Component } from 'react';
import './App.css';
import Playerbody from './Components/Playerbody';
import Playlist from './Components/Playlist';



class App extends Component {
 

    state = { songName:'', selectedSongs:[], nextSongName:'', duration: null, finalDuration: null };
     

    

  

  onUpdateState=(selectedSongs)=>{
    this.setState({selectedSongs:selectedSongs});

  }

  compareName=(songname)=>{
    
    
     this.setState({songName:songname});
     }

     nextSong=(songindex)=>{

      if(songindex+1<this.state.selectedSongs.length){
       this.setState({nextSongName:this.state.selectedSongs[songindex+1].name});
      }
      else{
        this.setState({nextSongName:"No song"});
      }
     }

     convertTime=(val)=>{
      const min = Math.floor(val / 60);
      const sec = val % 60;
      const minn = (min < 10) ? "0" + min : min;
      const secc = (sec < 10) ? "0" + sec : sec;
      return (minn + ":" + secc)

     }

  
     showDuration=(songduration)=>{
        const time = (Math.floor(songduration));
        debugger
        this.setState({duration:time});
      
        this.setDuration();
        console.log(songduration)
    }

    setDuration=()=>{
        const durationTime=this.convertTime(this.state.duration);
       
        this.setState({finalDuration:durationTime});
        
    }
  

  render() {
        const selectedSongs=this.state.selectedSongs;
        const songName= this.state.songName;
        const nextSongName=this.state.nextSongName;
        const duration = this.state.duration;
        console.log({duration})
       
       
        
        
               


       
    return (
    <div className="app">
      
           <Playerbody  Songs={selectedSongs} songname={songName} nextSongName={nextSongName} />
           <Playlist Songs={selectedSongs}   onSongChange={this.onUpdateState}  onNameChange={this.compareName} onNextSong={this.nextSong} onSongDuration={this.showDuration}/>
  
   </div>
    

       
    );
  }
}
export default App;
