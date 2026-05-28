// components/TranscriptionResult.jsx
export default function TranscriptionResult({ text, loading, error }) {
  if (loading) return (
    <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl">
      <div className="animate-spin h-5 w-5 border-2 border-blue-600 rounded-full border-t-transparent"/>
      <span className="text-blue-700">Generating transcription...</span>
    </div>
  )

  if (error) return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
      Error: {error}
    </div>
  )

  if (!text) return null

  return (
    <div className="bg-white rounded-xl border p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Transcription</h3>
        <button onClick={() => navigator.clipboard.writeText(text)}
          className="text-sm text-blue-600 hover:underline">Copy</button>
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  )
}