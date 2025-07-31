import React, { useState, useEffect } from 'react'
import { Menu, X, Home, User, Briefcase, Code, GraduationCap, Mail } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar cambios en el tema
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    // Verificar tema inicial
    checkTheme()
    
    // Observar cambios en la clase 'dark' del documento
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  // Cerrar menú móvil cuando se cambia el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Sobre mí', href: '#about', icon: User },
    { name: 'Experiencia', href: '#experience', icon: Briefcase },
    { name: 'Habilidades', href: '#skills', icon: Code },
    { name: 'Educación', href: '#education', icon: GraduationCap },
    { name: 'Contacto', href: '#contact', icon: Mail },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-slate-700' 
          : 'bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm'
      }`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
            <div
            className="cursor-pointer flex items-center"
            onClick={() => scrollToSection('#home')}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            >
              <img
                src={isDark ? "/logow.webp" : "/logob.webp"}
                alt="Logo"
                className="h-10 w-auto sm:h-12 lg:h-14 transition-all duration-300 hover:scale-110"
              />
            </div>

          {/* Desktop Navigation */}
          <div 
            className="hidden lg:flex items-center space-x-8 xl:space-x-10"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800' 
                      : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/20 dark:hover:bg-slate-800/20'
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={600 + index * 100}
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-sm xl:text-base">{item.name}</span>
                </button>
              )
            })}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`p-2 rounded-lg transition-all duration-200 group ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800' 
                      : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/20 dark:hover:bg-slate-800/20'
                  }`}
                  title={item.name}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800' 
                : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/20 dark:hover:bg-slate-800/20'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-lg mt-2 border border-gray-200 dark:border-slate-700">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
