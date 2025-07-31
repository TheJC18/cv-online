import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  // Estado para controlar si está en modo oscuro
  const [isDark, setIsDark] = useState(false)

  // Efecto que se ejecuta al cargar el componente
  useEffect(() => {
    // 1. Buscar tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme')
    
    // 2. Detectar preferencia del sistema del usuario
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // 3. Aplicar tema: guardado > preferencia del sistema > modo claro por defecto
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Función para cambiar entre temas
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      // Activar modo oscuro
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      // Activar modo claro
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Manejar eventos táctiles para móviles
  const handleTouchStart = (e) => {
    e.preventDefault()
  }

  return (
    <button
      onClick={toggleTheme}
      onTouchStart={handleTouchStart}
      className={`
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        w-12 h-12 sm:w-16 sm:h-16 rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl
        backdrop-blur-lg border-2
        ${isDark 
          ? 'bg-slate-800/95 border-slate-600 hover:border-slate-500' 
          : 'bg-white/95 border-gray-300 hover:border-gray-400'
        }
        group ring-0 hover:ring-4 
        ${isDark ? 'hover:ring-blue-400/30' : 'hover:ring-orange-400/30'}
        touch-manipulation theme-toggle-mobile
      `}
      style={{ 
        // Animación de entrada: aparece después de 0.8s con efecto bounce
        animation: 'bounceIn 1s ease-out 0.8s both, themeFloat 4s ease-in-out 2s infinite'
      }}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      {/* Container para los iconos superpuestos */}
      <div className="relative w-5 h-5 sm:w-7 sm:h-7">
        
        {/* Icono del Sol - Visible en modo claro */}
        <Sun 
          className={`
            absolute inset-0 w-5 h-5 sm:w-7 sm:h-7
            transition-all duration-300 ease-in-out
            ${isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
            }
            text-gray-600 group-hover:text-gray-800 group-hover:drop-shadow-lg
          `}
        />
        
        {/* Icono de la Luna - Visible en modo oscuro */}
        <Moon 
          className={`
            absolute inset-0 w-5 h-5 sm:w-7 sm:h-7
            transition-all duration-300 ease-in-out
            ${isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
            }
            text-slate-300 group-hover:text-white group-hover:drop-shadow-lg
          `}
        />
      </div>
      
      {/* Efecto de resplandor sutil en hover */}
      <div className={`
        absolute inset-0 rounded-full
        transition-all duration-300
        ${isDark 
          ? 'bg-blue-400/10 group-hover:bg-blue-400/20' 
          : 'bg-orange-500/10 group-hover:bg-orange-500/20'
        }
        scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100
      `} />
    </button>
  )
}

export default ThemeToggle
