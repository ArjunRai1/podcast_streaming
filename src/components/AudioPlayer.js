// components/AudioPlayer.js
import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioUrl) {
      audio.src = audioUrl;
    }
  }, [audioUrl]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default AudioPlayer;
