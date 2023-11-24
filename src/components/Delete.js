import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './AudioPlayer.css';

const Delete = () => {
  const [audioList, setAudioList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null); 
  const audioRef = useRef(null);

  useEffect(() => {
    axios.get('https://podcast-streaming-backend.onrender.com/audioroute/get-audio-list')
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

  

  const handleEdit = (audio) => { 
    setSelectedAudio(audio);
  };
  const handleDelete = (audioId) => {
    axios.delete(`https://podcast-streaming-backend.onrender.com/audioroute/delete-podcast/${audioId}`)
      .then((response) => {
        if (response.data) {
          axios.get('https://podcast-streaming-backend.onrender.com/audioroute/get-audio-list')
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
          </tr>
        </thead>
        <tbody>
          {audioList.map((audio, index) => (
            <tr key={index} className="playlist-item">
              <td>
                <span className="audio-title">{audio.name}</span>
              </td>
              <td>
                
                <button className="delete-btn" onClick={() => handleDelete(audio._id)}>
                  <FaTrash />
                </button>
              </td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Delete;