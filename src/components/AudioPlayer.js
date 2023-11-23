import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { FaPlay, FaPause } from 'react-icons/fa';
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [audioList, setAudioList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [volume, setVolume] = useState(0.5);
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

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  

  return (
    <div className="audio-player-container">
      <h2>Audio Playlist</h2>
      <table className="playlist table-striped">
        <tbody>
          {audioList.map((audio, index) => (
            <tr key={index} className="playlist-item">
              <td>
                <span className="audio-title">{audio.name}</span>
              </td>
              <td>
                <button className="play-pause-btn" onClick={() => handlePlayPause(audio.url)}>
                  {isPlaying && currentAudio === audio.url ? <FaPause /> : <FaPlay />}
                </button>
              </td>
              <td>
                <div className="volume-control">
                  <label htmlFor={`volume-${index}`}>Volume:</label>
                  <input
                    type="range"
                    id={`volume-${index}`}
                    name={`volume-${index}`}
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default AudioPlayer;
