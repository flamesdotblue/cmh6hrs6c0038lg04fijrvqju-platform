import React from 'react'
import Header from './components/Header'
import Sections from './components/Sections'
import Gallery from './components/Gallery'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div style={{ scrollBehavior: 'smooth' }} className="min-h-screen bg-[#0B1B3B] text-[#F5F1E6] antialiased">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0B1B3B] via-[#0B1B3B] to-[#1a1a1a]" />
      <div className="fixed inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(1200px 400px at 20% 0%, rgba(201,162,39,0.25), transparent), radial-gradient(800px 300px at 80% 10%, rgba(108,26,26,0.25), transparent)' }} />
      <Header />
      <Sections />
      <Gallery />
      <ContactFooter />
    </div>
  )
}
