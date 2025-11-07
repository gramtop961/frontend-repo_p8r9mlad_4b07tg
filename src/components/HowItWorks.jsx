import React from 'react'

const steps = [
  {
    title: 'Craft powerful messages',
    description:
      'Honor your values and mission with messages that resonate — just like a tribal leader addressing their people.',
  },
  {
    title: 'Reach every member instantly',
    description:
      'Deliver urgent updates and guidance where it matters most with our real-time notification system.',
  },
  {
    title: 'Foster unity and trust',
    description:
      'Communicate with authenticity rooted in shared purpose and clarity to strengthen your community.',
  },
  {
    title: 'Bridge the past and the future',
    description:
      'Combine timeless wisdom with modern digital reach to lead with vision and precision.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          How It Works
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Transform leadership communication into something meaningful and human.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
