import { useState } from 'react'

export default function Navbar({ onSearch }) {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch(q)
  }

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-20 border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">Recipiemaker</div>
        <form onSubmit={submit} className="flex gap-2">
          <input
            aria-label="search"
            className="px-3 py-2 border rounded w-64"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search recipes (e.g., chicken, pasta)"
          />
          <button className="px-3 py-2 bg-blue-600 text-white rounded">Search</button>
        </form>
      </div>
    </nav>
  )
}
