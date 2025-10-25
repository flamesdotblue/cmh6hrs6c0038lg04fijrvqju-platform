import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Play, Pause } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.volume = 0.2
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <header id="home" className="relative">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2021/11/23/audio_9e8f1a4c19.mp3?filename=indian-instrumental-110247.mp3"
        loop
        preload="none"
      />
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/0 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A227] to-[#6C1A1A] text-[#0B1B3B]">
              <Crown className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-wide text-[#F5F1E6]">Madhav Fashion</p>
              <p className="text-xs text-[#C9A227]/80">Royal Embroidery • Surat</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[#F5F1E6]/90 hover:text-[#C9A227] transition-colors">
                {link.label}
              </a>
            ))}
            <button onClick={toggleAudio} className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 px-4 py-2 text-sm text-[#C9A227] hover:bg-[#C9A227]/10 transition-colors">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />} Ambience
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleAudio} className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 px-3 py-2 text-sm text-[#C9A227] hover:bg-[#C9A227]/10 transition-colors">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(1000px 400px at 70% 0%, rgba(201,162,39,0.20), transparent)' }} />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#F5F1E6]">
              Where Royal Threads Meet
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#E6C55B]"> Timeless Craft</span>
            </h1>
            <p className="mt-6 text-[#F5F1E6]/80 max-w-xl">
              For over a decade in Surat, Madhav Fashion has mastered the art of embroidery for women’s couture and men’s sherwanis, weaving heritage with modern elegance.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#gallery" className="rounded-full bg-gradient-to-r from-[#C9A227] to-[#E6C55B] px-6 py-3 text-[#0B1B3B] font-medium hover:opacity-90 transition">Explore Gallery</a>
              <a href="#contact" className="rounded-full border border-[#C9A227]/50 px-6 py-3 text-[#C9A227] hover:bg-[#C9A227]/10 transition">Contact Us</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
              <img
                alt="Royal sherwani embroidery in studio lighting"
                className="h-full w-full object-cover"
                src={encodeURI('https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20close-up%20of%20luxury%20hand%20embroidery%20on%20men%27s%20sherwani%2C%20deep%20gold%20threads%2C%20rich%20maroon%20silk%2C%20royal%20blue%20accents%2C%20ultra%20detailed%2C%20photorealistic%2C%20Indian%20heritage%20fashion')} />
            </div>
            <div className="hidden md:block absolute -left-8 -bottom-8 w-40 h-40 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-xl">
              <img
                alt="Ivory lehenga with intricate zari work"
                className="h-full w-full object-cover"
                src={encodeURI('https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20ivory%20lehenga%20with%20intricate%20zari%20embroidery%2C%20pearlescent%20beads%2C%20gold%20accents%2C%20photorealistic%2C%20luxury%20Indian%20couture')} />
            </div>
          </motion.div>
        </div>
      </section>
    </header>
  )
}
