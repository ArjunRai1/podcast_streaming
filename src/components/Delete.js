import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { FaPlay, FaPause, FaTrash, FaEdit } from 'react-icons/fa';
import './AudioPlayer.css';

const Delete = () => {
  const [audioList, setAudioList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const [selectedAudio, setSelectedAudio] = useState(null); 
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

  const handleEdit = (audio) => { 
    setSelectedAudio(audio);
  };
  const handleDelete = (audioId) => {
    Axios.delete(`http://localhost:4000/audioroute/delete-podcast/${audioId}`)
      .then((response) => {
        if (response.data) {
          Axios.get('http://localhost:4000/audioroute/get-audio-list')
            .then((response) => {
              setAudioList(response.data);
              alert('Audio successfully deleted');
            })
            .catch((error) => console.error('Error fetching audio list:', error));
        } else {
          console.error('Error deleting audio: Response data is null');
        }
      })
      .catch((error) => console.error('Error deleting audio:', error));
  };



  

  

  return (
    <div className="audio-player-container">
      <h2>Audio Playlist</h2>
      <table className="playlist">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
            <th>Play/Pause</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {audioList.map((audio, index) => (
            <tr key={index} className="playlist-item">
              <td>
                <span className="audio-title">{audio.name}</span>
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(audio)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(audio._id)}>
                  <FaTrash />
                </button>
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
    </div>
  );

};

export default Delete;