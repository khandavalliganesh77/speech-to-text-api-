// server/index.js — final complete version
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./db')
const transcribeRoute = require('./routes/transcribe')
const historyRoute = require('./routes/history')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', transcribeRoute)
app.use('/api', historyRoute)

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: err.message })
})

app.listen(process.env.PORT || 5000, () =>
  console.log('Server ready'))