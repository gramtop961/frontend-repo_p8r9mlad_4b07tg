import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Vision from './components/Vision'
import Taglines from './components/Taglines'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">Eigi</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-gray-900">How it works</a>
            <a href="#vision" className="hover:text-gray-900">Vision</a>
            <a href="#cta" className="hover:text-gray-900">Join</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Vision />
        <Taglines />
        <div id="cta">
          <CTA />
        </div>
      </main>

      <footer className="py-8 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Eigi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
