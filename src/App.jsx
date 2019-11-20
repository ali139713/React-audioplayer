import React, { Component } from 'react';
import './App.css';
import Playerbody from './Components/Playerbody';
import Playlist from './Components/Playlist';



class App extends Component {

  render() {

    return (
    <div className="app">
      
           <Playerbody/>
           <Playlist/>
  
   </div>
    

       
    );
  }
}
export default App;
