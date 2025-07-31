import { ChevronDown, Github, Linkedin, Mail, Heart, Code, Beer, Globe, Atom } from 'lucide-react'
import { useState, useEffect } from 'react'

const Main = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const fullText = "Creado con corazon y algunas cervezas utilizando react para conquistar el mundo un codigo a la vez."

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 40)
      
      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  const renderTextWithIcons = (text) => {
    const iconMap = {
      'corazon': <Heart key="heart" size={18} className="text-red-500 animate-pulse mx-1" style={{ animationDuration: '1s' }} />,
      'cervezas': <Beer key="beer" size={18} className="text-amber-600 animate-beer-sway mx-1" style={{ animationDuration: '2s' }}/>,
      'react': <Atom key="atom" size={18} className="text-cyan-400 animate-spin mx-1" style={{ animationDuration: '4s' }}/>,
      'mundo': <Globe key="globe" size={18} className="text-blue-500 animate-spin mx-1" style={{ animationDuration: '4s' }} />,
      'codigo': <Code key="code" size={18} className="text-green-400 animate-pulse mx-1" style={{ animationDuration: '1s' }} />
    }

    const words = text.split(' ')
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[.,]/g, '')
      if (iconMap[cleanWord]) {
        return (
          <span key={index}>
            {iconMap[cleanWord]}
            {word.includes('.') ? '.' : ''}
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }
      return <span key={index}>{word}{index < words.length - 1 ? ' ' : ''}</span>
    })
  }

  const scrollToNext = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <MapPin size={16} />
              <span>Madrid, España - Disponible para trabajar</span>
            </div>

            <h1 
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Hola, soy{' '}
              <span className="gradient-text block animate-gradient bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-300% bg-clip-text">
                Jolber Chirinos
              </span>
            </h1>

            <h2 
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center lg:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Desarrollador Full Stack apasionado por crear experiencias digitales increíbles
            </h2>

            <div 
              className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 mb-8 text-center lg:text-left min-h-[3rem]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <span className="inline-flex items-center justify-center lg:justify-start gap-1 flex-wrap">
                {renderTextWithIcons(displayedText)}
                {currentIndex < fullText.length && (
                  <span className="animate-pulse text-primary-600">|</span>
                )}
              </span>
            </div>

            {/* Social Links */}
            <div 
              className="flex justify-center lg:justify-start space-x-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              {[
                { icon: Github, href: 'https://github.com/TheJC18', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/jolber-chirinos18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:JolberChirinos@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Imagen/Avatar */}
          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Gif de programador */}
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <img 
                  src="/programmer.gif" 
                  alt="Programador trabajando" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Elementos decorativos */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-60"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="1200"
              />
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-60"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="1400"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1800"
        >
          <button
            onClick={scrollToNext}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 animate-bounce hover:scale-110"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Main