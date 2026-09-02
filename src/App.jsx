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
      const versPageLegale = window.location.hash === '#mentions-legales'
      setPage(versPageLegale ? 'legal' : 'home')
      if (versPageLegale) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Gère nous-mêmes le scroll vers les ancres (#services, #contact, etc.)
  // plutôt que de compter sur le navigateur : ça évite le bug où le premier
  // clic "rate" sa cible (souvent causé par un décalage de mise en page
  // pendant le chargement de la police, qui perturbe le scroll natif).
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return

      const hash = link.getAttribute('href')
      if (hash === '#' || hash === '#mentions-legales') return // logo et page légale gérés ailleurs

      const target = document.querySelector(hash)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', hash)
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
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