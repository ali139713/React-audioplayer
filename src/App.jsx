import React, { Component } from 'react';
import './App.css';
import Playerbody from './Components/Playerbody';
import Playlist from './Components/Playlist';



class App extends Component {
 
   
    

    state = {
      selectedSongs: [],
  };



  onUpdateState=(selectedSongs)=>{
    this.setState({selectedSongs});

  }
  
  

  render() {
        const selectedSongs=this.state.selectedSongs;
        console.log({selectedSongs})
    return (
    <div className="app">
      
           <Playerbody  Songs={selectedSongs}/>
           <Playlist Songs={selectedSongs}  onSongChange={this.onUpdateState}/>
  
   </div>
    

       
    );
  }
}
export default App;
