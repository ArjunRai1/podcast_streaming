import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { FaPlay, FaPause } from 'react-icons/fa';
import './UserLanding.css';

const UserLanding = () => {
  const [audioList, setAudioList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
 
  const audioRef = useRef(null);

  useEffect(() => {
    
    Axios.get('http://localhost:4000/audioroute/get-audio-list')
      .then((response) => setAudioList(response.data))
      .catch((error) => console.error('Error fetching audio list:', error));
  }, []);

  const handlePlayPause = (audioUrl) => {
    if (audioUrl === currentAudio) {
      
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    } else {
      setCurrentAudio(audioUrl);
      setIsPlaying(true);
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };

  

  return (
    <div className="audio-player-container">
      <h2>Audio Playlist</h2>
      <div className="card-container">
        {audioList.map((audio, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <div className="card-title">{audio.name}</div>
             
              <div className="card-description">{audio.description}</div>
              <button className="play-pause-btn" onClick={() => handlePlayPause(audio.url)}>
                {isPlaying && currentAudio === audio.url ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>
            </div>
          </div>
        ))}
      </div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default UserLanding;
