import "./Playlist.css";
import React, { Component } from 'react';
import Addsong from './Addsong';
import Songlist from './Songlist';
import Divider from './Divider';
import AudioSingleton from '../Audio/Audio'


class Playlist extends Component {
    state = {
        selectedSongs: [],
    }

    handleOnClick = song => {
        const reader = new FileReader();
        reader.readAsDataURL(song);
        reader.onload = () => {
            const audioPlayer = AudioSingleton.getInstance();
            audioPlayer.setSong(reader.result);
            audioPlayer.playSong();
        }
    }

    onSongsSelect = event => {
        const files = Array.from(event.target.files);

        this.setState({ selectedSongs: files });
    };

    render() {
        const { selectedSongs } = this.state;
        return (
            <div className="playlist">
                <Addsong onSongsSelect={this.onSongsSelect} />
                <Divider />
                {selectedSongs.length > 0 && <Songlist songs={selectedSongs} onClick={this.handleOnClick} />}

            </div>
        );
    }
}
export default Playlist;

