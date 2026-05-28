// components/Toast.jsx — lightweight notification
import { useEffect } from 'react'

export default function Toast({ message, type = 'error', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  const colors = {
    error: 'bg-red-50 border-red-200 text-red-700',
    success: 'bg-green-50 border-green-200 text-green-700',
    info: 'bg-blue-50 border-blue-200 text-blue-700',
  }

  return (
    <div className=`animate-slide-up fixed bottom-6 right-6 z-50
      border rounded-xl px-4 py-3 text-sm font-medium
      flex items-center gap-2 ${colors[type]}`>
      {message}
      <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100">✕</button>
    </div>
  )
}