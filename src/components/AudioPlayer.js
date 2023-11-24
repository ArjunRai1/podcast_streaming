import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { FaPlay, FaPause } from 'react-icons/fa';
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [audioList, setAudioList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);


  useEffect(() => {

    Axios.get('https://podcast-streaming-backend.onrender.com/audioroute/get-audio-list')
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

            </tr>
          ))}
        </tbody>
      </table>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default AudioPlayer;
