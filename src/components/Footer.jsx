import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/TheJC18',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jolber-chirinos18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:JolberChirinos@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Educación', href: '#education' },
    { name: 'Contacto', href: '#contact' }
  ]

  const techStack = [
    'React', 'Laravel', 'Vue', 'Flutter', 'PHP', 'MySQL'
  ]

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logow.webp"
                alt="JC Logo"
                className="w-12 h-12 rounded-lg shadow-lg object-contain bg-gradient-to-r from-primary-600 to-purple-600 hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl font-bold">Jolber Chirinos</h3>
                <p className="text-primary-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Programador venezolano en Madrid, especializado en crear soluciones digitales innovadoras 
              que transforman ideas en realidad y conectan el mundo a través de la tecnología.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-110"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Jolber Chirinos. Todos los derechos reservados.
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group hover:scale-110"
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
              <span className="text-sm font-medium">Volver arriba</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600"></div>
    </footer>
  )
}
export default Footer