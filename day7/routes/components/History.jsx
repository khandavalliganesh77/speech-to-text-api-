// components/History.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function History() {
  const [records, setRecords] = useState([])

  useEffect(() => { fetchHistory() }, [])

  const fetchHistory = async () => {
    const { data } = await axios.get('/api/history')
    setRecords(data)
  }

  const deleteRecord = async (id) => {
    await axios.delete(`/api/history/${id}`)
    setRecords(prev => prev.filter(r => r._id !== id))
  }

  return (
     <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">History</h2>
      {records.map(r => (
        <div key={r._id} className="bg-white border rounded-lg p-4 mb-3 flex gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500">{new Date(r.createdAt).toLocaleString()}</p>
            <p className="mt-1 text-gray-800">{r.text}</p>
          </div>
          <button onClick={() => deleteRecord(r._id)}
            className="text-red-500 text-sm hover:underline self-start">
            Delete
          </button>
        </div>
      ))}
    </div>
  )
} <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">History</h2>
      {records.map(r => (
        <div key={r._id} className="bg-white border rounded-lg p-4 mb-3 flex gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500">{new Date(r.createdAt).toLocaleString()}</p>
            <p className="mt-1 text-gray-800">{r.text}</p>
          </div>
          <button onClick={() => deleteRecord(r._id)}
            className="text-red-500 text-sm hover:underline self-start">
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}