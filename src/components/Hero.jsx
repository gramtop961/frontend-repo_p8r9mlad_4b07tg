import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-indigo-700 text-sm font-medium">
          Eigi Platform
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Lead with Wisdom. Unite with Purpose. Empower with Technology.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          Where ancient leadership meets modern communication — the Eigi platform helps visionary leaders guide their communities with clarity, unity, and strength.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#how-it-works"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition"
          >
            See how it works
          </a>
          <a
            href="#vision"
            className="rounded-lg bg-white px-6 py-3 text-indigo-700 font-semibold ring-1 ring-indigo-200 hover:ring-indigo-300 transition"
          >
            Our vision
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
