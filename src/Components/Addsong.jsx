import "./Addsong.css";
import React from 'react';


const Addsong = ({onSongsSelect}) => {
    return (
        <div className="song">
                <input type="file" id="fileInput"  multiple onChange={onSongsSelect}></input>
                <label htmlFor="fileInput">Upload</label>
        </div>
    );
};
export default Addsong;

