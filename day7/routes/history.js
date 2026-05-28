// routes/history.js
const express = require('express')
const Transcription = require('../models/Transcription')

const router = express.Router()

// GET all transcriptions
router.get('/history', async (req, res) => {
  try {
    const records = await Transcription.find()
      .sort({ createdAt: -1 })
      .limit(20)
    res.json(records)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE a transcription
router.delete('/history/:id', async (req, res) => {
  await Transcription.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
})

module.exports = router