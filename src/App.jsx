import React, { Component } from 'react';
import './App.css';
import Playerbody from './Components/Playerbody';
import Playlist from './Components/Playlist';



class App extends Component {
 

    state = { songName:'', selectedSongs:[]};
     

    

  

  onUpdateState=(selectedSongs)=>{
    this.setState({selectedSongs:selectedSongs});

  }

  compareName=(songname)=>{
     if(this.selectedSongs===songname)
    
     this.setState({songName:songname});
     
    
 
   
  }
  
  

  render() {
        const selectedSongs=this.state.selectedSongs;
        const songName= this.state.songName;
        console.log({songName}); 
       
    return (
    <div className="app">
      
           <Playerbody  Songs={selectedSongs} songname={songName}/>
           <Playlist Songs={selectedSongs}   onSongChange={this.onUpdateState}  onNameChange={this.compareName}/>
  
   </div>
    

       
    );
  }
}
export default App;
