'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3m15.364 6.364l-12.728-12.728M6.343 17.657l12.728-12.728" />
      </svg>
    ),
    title: 'Beauty',
    description: 'Unmatched visual appeal with perfect proportions',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Dazzle',
    description: 'Extraordinary light performance from every angle',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Brilliance',
    description: '100 facets working in perfect harmony',
  },
]

export default function Brilliance() {
  return (
    <section id="brilliance" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">
              GSI Certified Brilliance
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Proven Superiority of the<br />
              <span className="text-gold-500">100-Facet</span> Centurion Diamond
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The Centurion Diamond is cut with twice as many facets as the normal stone, making it shine unlike any other. Featuring 100 precisely engineered facets, every Centurion Diamond carries a radiant inner fire that captures light and transforms it into exceptional brilliance.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://pikaso.cdnpk.net/private/production/5246692775/render.jpg?token=exp=1787961600~hmac=f2fbcd03cf97a39125c0cd4603d1ebd1e4a7f9f41bbe7792bfe6fbece7f50668"
                alt="Centurion Diamond 100-facet close-up"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-surface border border-border rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-gold-500 text-sm font-medium mb-2">100 Facets</p>
              <p className="text-3xl font-bold">2x More</p>
              <p className="text-gray-400 text-sm">Than Standard Cut</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
