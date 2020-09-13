import React, { useState, useRef } from 'react';

const MediaPlayer = () => {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const video = videoRef.current;
        isPlaying ? video.pause() : video.play();
        setIsPlaying(!isPlaying);
    }
    

    return (
        <div>
            <video width="400" ref={videoRef} onClick={handlePlay}>
                <source src="videos/planet.mp4" type="video/mp4"/>
            </video>
            <button onClick={handlePlay}>
                { isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}

export default MediaPlayer
