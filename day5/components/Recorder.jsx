// components/Recorder.jsx
import { useState, useRef } from 'react'
import axios from 'axios'

export default function Recorder({ onResult, setLoading }) {
  const [recording, setRecording] = useState(false)
  const mediaRef = useRef(null)
  const chunksRef = useRef([])

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRef.current = new MediaRecorder(stream)
    chunksRef.current = []
    mediaRef.current.ondataavailable = e => chunksRef.current.push(e.data)
    mediaRef.current.start()
    setRecording(true)
  }

  const stop = () => {
    mediaRef.current.stop()
    setRecording(false)
    mediaRef.current.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
      const formData = new FormData()
      formData.append('audio', blob, 'recording.webm')
      setLoading(true)
      const { data } = await axios.post('/api/transcribe', formData)
      onResult(data.text)
      setLoading(false)
       }
  }

  return (
    <div className="bg-white rounded-xl p-4 border">
      <h2 className="font-semibold mb-3">Record Audio</h2>
      <button onClick={recording ? stop : start}
        className={`px-4 py-2 rounded-lg text-white font-medium
          ${recording ? 'bg-red-500' : 'bg-blue-600'}`}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {recording && <span className="ml-3 text-red-500 animate-pulse">● Live</span>}
    </div>
  )
}