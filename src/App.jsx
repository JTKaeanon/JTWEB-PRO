import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Maintenance from './components/Maintenance'
import Parrainage from './components/Parrainage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [prefilledSubject, setPrefilledSubject] = useState(null)

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Maintenance />
        <Parrainage onCtaClick={() => setPrefilledSubject('parrainage')} />
        <Contact prefilledSubject={prefilledSubject} />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App