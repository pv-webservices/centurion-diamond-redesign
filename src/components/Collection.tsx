'use client'

import { motion } from 'framer-motion'

const collectionItems = [
  {
    image: "https://pikaso.cdnpk.net/private/production/5246698158/render.jpg?token=exp=1787961600~hmac=7fcc3a07be791b1b4a6f256072ca9e9ba87c3b1f2602a5a5a87aafc03cb898a7",
    title: 'Engagement Rings',
    category: 'Bridal Collection',
  },
  {
    image: "https://pikaso.cdnpk.net/private/production/5246754296/render.jpg?token=exp=1787961600~hmac=a531e5ceca6be6a82163a5dd2dd5ef46aa12ba671b0149c97caed51db2d260e6",
    title: 'Diamond Necklaces',
    category: 'Fine Jewelry',
  },
  {
    image: "https://pikaso.cdnpk.net/private/production/5246756194/render.jpg?token=exp=1787961600~hmac=3a94e996379b66b607a01ad54a186e42c7acb9363ea93b6ecd51c4ef8042f7af",
    title: 'Diamond Earrings',
    category: 'Luxury Accessories',
  },
  {
    image: "https://pikaso.cdnpk.net/private/production/5246699737/render.jpg?token=exp=1787961600~hmac=5f764cfe561ab3ad692887e956803ca8594463c2dd1f15939a73c83a72d460e2",
    title: 'Complete Collection',
    category: 'Full Range',
  },
]

export default function Collection() {
  return (
    <section id="collection" className="py-32 bg-background">
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
            Glimpse Of Collection
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Future of<br />
            <span className="text-gold-500">Diamond Brilliance</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            With its revolutionary 100-facet architecture, the Centurion Diamond represents the next evolution in diamond cutting. A perfect harmony of innovation, craftsmanship, and beauty.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {collectionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold-500 text-sm font-medium mb-2">{item.category}</p>
                <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-gold-500 transition-colors">
                  {item.title}
                </h3>
                <motion.div
                  className="inline-flex items-center gap-2 text-white font-medium"
                  whileHover={{ x: 8 }}
                >
                  Explore Collection
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
