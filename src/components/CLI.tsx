import React,{ useState } from "react";
import './CLI.css';

function CommandLineInterFace(props:any){
    const [input , setInput] = useState('')
    return (
        <div className="cli">
            <h5>(<span>C:\root</span>)-[-]</h5>
            <label form="inp">➜ </label>
            <input type="text" onChange={(e)=>{
                setInput(e.target.value);
            }} onKeyDown={(e)=>{
                if(e.key.toLowerCase() == 'enter'){
                    props.command(input);
                    setInput('');
                }
            }} value={input} id="inp"/>
        </div>
    )
}

export default CommandLineInterFace;