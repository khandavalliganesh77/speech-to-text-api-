// routes/transcribe.js
const express = require('express')
const multer = require('multer')
const { transcribeWithWhisper } = require('../services/openai')
const Transcription = require('../models/Transcription')

const router = express.Router()
const upload = multer.diskStorage({ /* same as Day 2 */ })

router.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const text = await transcribeWithWhisper(req.file.path)
    const saved = await Transcription.create({
      filename: req.file.filename,
      text,
      provider: 'openai'
    })
    res.json({ text, id: saved._id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
