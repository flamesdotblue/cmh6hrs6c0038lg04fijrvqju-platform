import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: "Regal Maroon Sherwani",
    img: 'https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20regal%20maroon%20sherwani%20with%20gold%20zardozi%20and%20aari%20embroidery%2C%20photorealistic%2C%20luxury%20Indian%20menswear',
  },
  {
    title: "Ivory Bridal Lehenga",
    img: 'https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20ivory%20bridal%20lehenga%20with%20fine%20zari%20and%20pearl%20embellishments%2C%20photorealistic%2C%20luxury%20Indian%20couture',
  },
  {
    title: "Royal Blue Anarkali",
    img: 'https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20royal%20blue%20anarkali%20dress%20with%20floral%20gold%20embroidery%2C%20photorealistic%2C%20elegant%20studio%20shot',
  },
  {
    title: "Handcrafted Dupatta Detail",
    img: 'https://image.pollinations.ai/prompt/ultra%20detailed%20macro%20shot%20of%20hand%20embroidery%20zardozi%20zari%20on%20silk%2C%20royal%20studio%20lighting%2C%20photorealistic',
  },
  {
    title: "Emerald Sherwani Motifs",
    img: 'https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20emerald%20green%20sherwani%20with%20antique%20gold%20motifs%20and%20beadwork%2C%20photorealistic',
  },
  {
    title: "Maroon Bridal Set",
    img: 'https://image.pollinations.ai/prompt/royal%20studio%20lighting%2C%20maroon%20bridal%20lehenga%20set%20with%20heavy%20embroidery%20and%20mirror%20work%2C%20photorealistic',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E6]">Our Work</h2>
          <p className="text-sm text-[#F5F1E6]/70">Hover to reveal details</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.figure key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={item.img} alt={item.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <p className="text-sm tracking-wide text-[#C9A227]">Madhav Fashion</p>
                <p className="font-medium text-[#F5F1E6]">{item.title}</p>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
