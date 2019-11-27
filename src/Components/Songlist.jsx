import "./Songlist.css";
import React from 'react';


const SongItem = ({ song, onClick }) => {
    return (
        <li className='song-item' onClick={() => {
            onClick(song)
        }}>{song.name}</li>
    );
}

const Songlist = ({ songs, onClick }) => {
    return (
        <div className='song-list'>
            <ul>
                {
                    songs.map((song, index) => {
                        return (

                            <SongItem onClick={onClick} className='song-item' key={index} song={song} />

                        );
                    })

                }
            </ul>
        </div>
    );
}
export default Songlist;

