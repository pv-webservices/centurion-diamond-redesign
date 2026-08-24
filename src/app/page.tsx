import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Brilliance from '@/components/Brilliance'
import Cuts from '@/components/Cuts'
import Collection from '@/components/Collection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Journey />
      <Brilliance />
      <Cuts />
      <Collection />
      <Footer />
    </main>
  )
}
