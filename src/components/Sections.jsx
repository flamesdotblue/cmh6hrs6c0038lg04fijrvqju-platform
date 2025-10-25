import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
}

export default function Sections() {
  return (
    <section className="relative" id="about">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fadeUp} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E6]">About Madhav Fashion</h2>
            <p className="mt-6 text-[#F5F1E6]/80">
              Rooted in the textile capital of Surat, Madhav Fashion has refined premium embroidery for over a decade. Our atelier blends traditional Indian craftsmanship—zari, zardozi, aari, resham—with modern silhouettes and impeccable finishing.
            </p>
            <p className="mt-4 text-[#F5F1E6]/80">
              We meticulously craft women’s couture ensembles and regal sherwanis, ensuring every motif, stitch, and embellishment reflects royal sophistication and enduring artistry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
              <img alt="Gold thread embroidery close-up" className="h-48 w-full object-cover" src={encodeURI('https://image.pollinations.ai/prompt/macro%20shot%20of%20gold%20zari%20embroidery%20on%20ivory%20fabric%2C%20royal%20studio%20lighting%2C%20photorealistic')} />
            </div>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
              <img alt="Rich maroon velvet with beadwork" className="h-48 w-full object-cover" src={encodeURI('https://image.pollinations.ai/prompt/maroon%20velvet%20sherwani%20with%20intricate%20hand%20beadwork%2C%20royal%20studio%20lighting%2C%20photorealistic')} />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden ring-1 ring-white/10">
              <img alt="Royal blue anarkali with gold motifs" className="h-64 w-full object-cover" src={encodeURI('https://image.pollinations.ai/prompt/royal%20blue%20anarkali%20dress%20with%20gold%20embroidery%2C%20royal%20studio%20lighting%2C%20photorealistic')} />
            </div>
          </div>
        </motion.div>

        <motion.div id="process" {...fadeUp} viewport={{ once: true }} className="mt-20">
          <h3 className="font-serif text-2xl md:text-3xl text-[#F5F1E6]">Our Crafting Process</h3>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { title: 'Design & Concept', desc: 'We translate client inspirations into refined motifs and patterns that honor heritage and fit modern silhouettes.' },
              { title: 'Material Selection', desc: 'Curated fabrics and embellishments—zari, crystals, beads—chosen for richness, durability, and finish.' },
              { title: 'Hand Embroidery', desc: 'Master artisans execute intricate techniques with precision and consistency at scale.' },
              { title: 'Finishing & QC', desc: 'Each piece is finished, pressed, and inspected to meet premium export-grade standards.' },
            ].map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#6C1A1A] mb-4" />
                <p className="font-medium text-[#F5F1E6]">{step.title}</p>
                <p className="text-sm text-[#F5F1E6]/75 mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div id="testimonials" {...fadeUp} viewport={{ once: true }} className="mt-20">
          <h3 className="font-serif text-2xl md:text-3xl text-[#F5F1E6]">Kind Words</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { q: 'Exquisite workmanship and reliable timelines—perfect for our bridal collections.', a: 'Creative Director, Couture House' },
              { q: 'The sherwani detailing is regal and consistent across batches.', a: 'Menswear Buyer, Luxury Retail' },
              { q: 'A trusted partner for premium embroidery with museum-grade finish.', a: 'Independent Designer, Mumbai' },
            ].map((t, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                <div className="flex items-center gap-1 text-[#C9A227]">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-[#F5F1E6]/90">“{t.q}”</p>
                <cite className="mt-2 block text-sm text-[#F5F1E6]/60">— {t.a}</cite>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
