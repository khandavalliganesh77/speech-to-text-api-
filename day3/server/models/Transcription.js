const mongoose = require('mongoose')

const transcriptionSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  text:     { type: String, required: true },
  provider: { type: String, enum: ['google', 'openai', 'mozilla'] },
  duration: Number,
  createdAt:{ type: Date, default: Date.now }
})

module.exports = mongoose.model('Transcription', transcriptionSchema)