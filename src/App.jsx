import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Maintenance from './components/Maintenance'
import Parrainage from './components/Parrainage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MentionsLegales from './components/MentionsLegales'

function App() {
  const [prefilledSubject, setPrefilledSubject] = useState(null)
  const [page, setPage] = useState(
    window.location.hash === '#mentions-legales' ? 'legal' : 'home'
  )

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash === '#mentions-legales' ? 'legal' : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const retourAuSite = () => {
    window.location.hash = ''
    setPage('home')
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        {page === 'legal' ? (
          <MentionsLegales onRetour={retourAuSite} />
        ) : (
          <>
            <Hero />
            <Services />
            <Maintenance />
            <Parrainage onCtaClick={() => setPrefilledSubject('parrainage')} />
            <Contact prefilledSubject={prefilledSubject} />
            <About />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App