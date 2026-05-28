// components/TranscriptionCard.jsx
export default function TranscriptionCard({ record, onDelete }) {
  const date = new Date(record.createdAt).toLocaleString()

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5
      hover:border-purple-200 transition-all duration-200 group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 mt-0.5"/>
          <span className="text-xs text-gray-400 font-mono">{date}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-50
            text-purple-700 font-medium">{record.provider}</span>
        </div>
        <button
          onClick={() => onDelete(record._id)}
          className="opacity-0 group-hover:opacity-100 text-xs text-red-400
            hover:text-red-600 transition-opacity">
          Delete
        </button>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{record.text}</p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => navigator.clipboard.writeText(record.text)}
          className="text-xs text-purple-600 hover:underline">
          Copy text
        </button>
      </div>
    </div>
  )
}