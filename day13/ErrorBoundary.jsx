// components/ErrorBoundary.jsx
import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false, message: '' }

  static getDerivedStateFromError(err) {
    return { hasError: true, message: err.message }
  }

  componentDidCatch(err, info) {
    console.error('[ErrorBoundary]', err, info)
  }

  render() {
    if (this.state.hasError) return (
      <div className="p-6 bg-red-50 rounded-xl border border-red-100 text-center">
        <p className="text-red-700 font-medium">Something went wrong</p>
        <p className="text-sm text-red-500 mt-1">{this.state.message}</p>
        <button onClick={() => this.setState({ hasError: false })}
          className="mt-4 text-sm text-red-600 underline">Try again</button>
      </div>
    )
    return this.props.children
  }
}

// Wrap in App.jsx: <ErrorBoundary><App /></ErrorBoundary>