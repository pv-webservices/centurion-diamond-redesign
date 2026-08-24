'use client'

import { motion } from 'framer-motion'

const cuts = [
  { name: 'Round', description: 'The classic brilliant cut, enhanced with 100 facets' },
  { name: 'Princess', description: 'Square corners with maximum sparkle' },
  { name: 'Cushion', description: 'Romantic pillow-shaped brilliance' },
  { name: 'Oval', description: 'Elongated elegance with exceptional fire' },
  { name: 'Emerald', description: 'Step-cut sophistication meets 100-facet innovation' },
  { name: 'Pear', description: 'Teardrop perfection with radiant ends' },
]

export default function Cuts() {
  return (
    <section id="cuts" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">
            The Centurion Cuts
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Precision Cuts,<br />
            <span className="text-gold-500">Elevated Brilliance</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Centurion Diamonds are available in iconic shapes—each enhanced with additional facets to maximize brilliance and light performance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuts.map((cut, index) => (
            <motion.div
              key={cut.name}
              className="group relative bg-background border border-border rounded-2xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(224, 160, 69, 0.3)' }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-gold-500 transition-colors">
                  {cut.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {cut.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
