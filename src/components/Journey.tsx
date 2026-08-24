'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'From Rough',
    description: 'Only the top 20% of diamonds qualify as Centurions, and each must meet a strict minimum of F color and VS2 clarity to guarantee exceptional brilliance and light performance.',
  },
  {
    number: '02',
    title: 'To Polish',
    description: 'Our master cutters bring over half a century of craftsmanship, sculpting each stone with extraordinary precision. Every facet is meticulously positioned to achieve perfect proportion, polish, and symmetry.',
  },
  {
    number: '03',
    title: 'To Finish',
    description: 'The final masterpiece features 100 facets, delivering unparalleled sparkle and a brilliance that radiates from within.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">
            The Centurion Journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From rough stone to<br />
            <span className="text-gold-500">radiant brilliance</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every Centurion Diamond undergoes an uncompromising journey of precision and expertise.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Number */}
              <div className="text-8xl md:text-9xl font-bold text-border/30 group-hover:text-gold-500/20 transition-colors duration-500 mb-6">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-6 w-12 h-px bg-gradient-to-r from-gold-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
