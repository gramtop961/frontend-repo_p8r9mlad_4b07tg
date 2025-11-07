import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 bg-indigo-700 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold">Join the Eigi movement</h3>
        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          Reimagine how leadership inspires, communicates, and connects.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-indigo-700 font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-indigo-500 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
