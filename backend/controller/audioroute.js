// routes/audio.js
const express = require('express');
const router = express.Router();
const Audio = require('../models/Audio');

router.get("/audio", async (req, res) => {
  try {
    const audioList = await Audio.find();
    res.status(200).json(audioList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get("/audio/:id", async (req, res) => {
  try {
    const audio = await Audio.findById(req.params.id);
    if (!audio) {
      return res.status(404).json({ message: 'Audio not found' });
    }

    // Send the audio buffer as a stream
    res.set('Content-Type', audio.audioFile.contentType);
    res.status(200).send(audio.audioFile.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
