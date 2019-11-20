import "./Time.css";
import React, { Component } from 'react';
import Currenttime from './Currenttime';
import Duration from './Duration';

const Time =()=>{

    
        return(
            <div className="time">
             <Currenttime/>
            <Duration/>
            </div>
        );
    };

export default Time;

