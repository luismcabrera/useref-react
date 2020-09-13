import React, { useState, useRef } from 'react'

const FocusApp = () => {
    const [text, setText] = useState("");
    const inputRef = useRef();

    const handleFocus = () => {
        const input = inputRef.current;
        // console.log(input.value);
        // input.value = "Valor mutado";

        input.focus();

        // const input = document.getElementById("input");
        // console.log(input.value);
        // input.value = "Texto mutado";
        // input.focus();
    }
    
    return (
        <div>
            <input 
                ref={inputRef}
                // id="input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleFocus}>
                Focus
            </button>
        </div>
    )
}

export default FocusApp
