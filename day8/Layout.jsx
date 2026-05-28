// components/Layout.jsx — shared page shell
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4
        flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
          VoiceScript
        </h1>
        <span className="text-xs text-gray-400">Speech-to-Text App</span>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}