import React, { useState, useRef, useEffect } from "react";
import './CLI.css';

function CommandLineInterFace(props:any) {
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (props.focus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.focus]);

    return (
        <div className="cli">
            <h5>╭─(<span>C:\root\{props.location}</span>)-[~]</h5>
            <label htmlFor="inp">╰─➜ </label>
            <input
                type="text"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key.toLowerCase() === 'enter') {
                        props.command(input);
                        setInput('');
                    }
                }}
                value={input}
                id="inp"
                ref={inputRef}
            />
        </div>
    )
}

export default CommandLineInterFace;
