// components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('audioFile', file);
    formData.append('title', title);

    try {
      await axios.post('http://localhost:4000/audio/upload', formData);
      console.log('Audio uploaded successfully');
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
