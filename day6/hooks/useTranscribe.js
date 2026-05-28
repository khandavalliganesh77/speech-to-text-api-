// hooks/useTranscribe.js
import { useState } from 'react'
import axios from 'axios'

export function useTranscribe() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const transcribe = async (audioBlob) => {
    setLoading(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append('audio', audioBlob, 'audio.webm')

      const { data } = await axios.post('/api/transcribe', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      setText(data.text)
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return { text, loading, error, transcribe }
}