// components/Uploader.jsx
import { useRef } from 'react'
import axios from 'axios'

export default function Uploader({ onResult, setLoading }) {
  const fileRef = useRef()

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const formData = new FormData()
    formData.append('audio', file)
    setLoading(true)
    try {
      const { data } = await axios.post('/api/transcribe', formData)
      onResult(data.text)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
     <div className="bg-white rounded-xl p-4 border">
      <h2 className="font-semibold mb-3">Upload Audio File</h2>
      <input ref={fileRef} type="file" accept="audio/*"
        className="hidden" onChange={handleUpload} />
      <button onClick={() => fileRef.current.click()}
        className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
        Choose File
      </button>
    </div>
  )
}