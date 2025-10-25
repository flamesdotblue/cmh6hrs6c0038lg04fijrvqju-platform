import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Crown } from 'lucide-react'

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E6]">Contact Us</h2>
            <p className="mt-4 text-[#F5F1E6]/80">Partner with us for premium embroidery for couture, weddings, retail collections, and exhibitions.</p>
            <div className="mt-6 space-y-3 text-[#F5F1E6]/85">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C9A227]" /> Surat, Gujarat, India</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#C9A227]" /> +91-XXXXXXXXXX</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#C9A227]" /> hello@madhavfashion.in</p>
            </div>
            <div className="mt-6">
              <iframe
                title="Madhav Fashion Surat Map"
                loading="lazy"
                className="w-full h-56 rounded-xl border border-white/10"
                src="https://www.google.com/maps?q=Surat%2C%20Gujarat%2C%20India&output=embed"
              />
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-[#F5F1E6]/70">Name</label>
                <input className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-[#F5F1E6] placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#C9A227]/50" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm text-[#F5F1E6]/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-[#F5F1E6] placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#C9A227]/50" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="text-sm text-[#F5F1E6]/70">Phone</label>
                <input className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-[#F5F1E6] placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#C9A227]/50" placeholder="Optional" />
              </div>
              <div>
                <label className="text-sm text-[#F5F1E6]/70">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-[#F5F1E6] placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#C9A227]/50" placeholder="Tell us about your requirements" required />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#F5F1E6]/60">We typically respond within 1 business day.</p>
                <button className="rounded-full bg-gradient-to-r from-[#C9A227] to-[#E6C55B] px-6 py-2 text-[#0B1B3B] font-medium hover:opacity-90 transition">Send Inquiry</button>
              </div>
            </div>
          </form>
        </motion.div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#F5F1E6]/70">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A227] to-[#6C1A1A] text-[#0B1B3B]"><Crown className="h-4 w-4" /></span>
            <span>Madhav Fashion • Surat</span>
          </div>
          <p>© {new Date().getFullYear()} Madhav Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
