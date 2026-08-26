import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Maintenance from './components/Maintenance'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Maintenance />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App