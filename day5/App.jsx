// src/App.jsx
import { useState } from 'react'
import Recorder from './components/Recorder'
import Uploader from './components/Uploader'

export default function App() {
  const [transcription, setTranscription] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Speech to Text</h1>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <Uploader onResult={setTranscription} setLoading={setLoading} />
        <Recorder onResult={setTranscription} setLoading={setLoading} />
      </div>
      {loading && <p className="text-blue-500">Transcribing...</p>}
      {transcription && (
        <div className="bg-white rounded-xl p-4 border">
          <h2 className="font-semibold mb-2">Transcription</h2>
          <p className="text-gray-700">{transcription}</p>
        </div>
      )}
    </div>
  )
}