import "./Logo.css";
import React, { Component } from 'react';

class Logo extends Component{

    render(){
        return(
            <div className="logo">
                 <img src="data:image/jpeg;base64,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"></img>
            </div>
        );
    }
}
export default Logo;

