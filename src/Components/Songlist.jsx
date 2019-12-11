import "./Songlist.css";
import React from 'react';


const SongItem = ({ song, onClick, songIndex }) => {
    const obj={songIndex:songIndex , song:song}
    return (
        <li className='song-item' onClick={() => {
            onClick(obj );
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

                            <SongItem onClick={onClick} className='song-item' key={index} song={song} songIndex={index}/>
                               
                        );
                    })

                }
            </ul>
        </div>
    );
}
export default Songlist;