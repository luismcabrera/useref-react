import React, { useState, useRef, useEffect } from 'react'

const RenderApp = () => {
    const [text, setText] = useState("");
    
    // render1 ref=1
    // render2 ref=2
    const rendersRef = useRef(1); 
    
    // render 1 ref =1
    // render 2 ref =2
    useEffect(() => {
        rendersRef.current++;
        // render 1 ref++ = 2
        // render 2 ref++ = 3
    })

    return (
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* render 1 ref=1 */}
            {/* render 2 ref=2 */}
            <h1>Renders: {rendersRef.current} </h1>
        </div>
    )
}

export default RenderApp
