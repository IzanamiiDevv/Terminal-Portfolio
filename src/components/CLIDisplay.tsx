import React,{ useState } from "react";
import './CLI.css';

function CLIDisplay(props:any){
    return (
        <div className="cli">
            <h5>╭─(<span>C:\root</span>)-[~]</h5>
            <p>╰─➜ <span className="display">{props.text}</span></p>
            
        </div>
    )
}

export default CLIDisplay;