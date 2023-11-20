// models/Audio.js
const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  title: String, // Add other fields as needed
  audioFile: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model('Audio', audioSchema);
