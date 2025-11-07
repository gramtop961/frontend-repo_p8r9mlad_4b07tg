import React from 'react'

const taglines = [
  'Ancient Wisdom. Modern Leadership.',
  'Lead with Story. Unite with Purpose.',
  'From Council Fire to Cloud — The Future of Collective Leadership.',
]

const Taglines = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tagline Options</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {taglines.map((t) => (
            <div key={t} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-gray-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Taglines
