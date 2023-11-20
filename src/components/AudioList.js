// components/AudioList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AudioList = () => {
  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    fetchAudioList();
  }, []);

  const fetchAudioList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/audio');
      setAudioList(response.data);
    } catch (error) {
      console.error('Error fetching audio list:', error);
    }
  };

  return (
    <div>
      <h2>Uploaded Audios</h2>
      <ul>
        {audioList.map((audio) => (
          <li key={audio._id}>{audio.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
