import React,{ useState } from "react";
import './CLI.css';

function CommandLineInterFace(props:any){
    const [input , setInput] = useState('')
    return (
        <div className="cli">
            <h3>Type Some Input</h3>
            <input type="text" onChange={(e)=>{
                setInput(e.target.value);
            }} onKeyDown={(e)=>{
                if(e.key.toLowerCase() == 'enter'){
                    props.command(input);
                    setInput('');
                }
            }} value={input}/>
        </div>
    )
}

export default CommandLineInterFace;