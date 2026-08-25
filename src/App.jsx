import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Maintenance from './components/Maintenance'
import Parrainage from './components/Parrainage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <main className="flex-grow">
        
        {/* 1. L'Accroche */}
        <Hero />
        
        {/* 2. L'Offre commerciale  */}
        <Services />
        <Maintenance />
        
        {/* 3. Section Parrainage */}
        {/* <Parrainage /> */}

        {/* 4. Le formulaire de contact avancé  */}
        <Contact />

        {/* 5. About */}
        <About />

      </main>
      <Footer />
    </div>
  )
}

export default App