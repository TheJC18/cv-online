import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Componentes
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out',
      once: true,
      mirror: false,
      offset: 100,
      delay: 100
    })
  }, [])

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />
      <main>
        <Main />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  )
}

export default App
