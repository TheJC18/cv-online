import { Code, Heart, Globe, Award, Coffee, Target } from 'lucide-react'

const About = () => {
  
  const values = [
    {
      icon: Heart,
      color: 'text-red-800',
      description: 'Amor genuino por la tecnología y el desarrollo'
    },
    {
      icon: Award,
      color: 'text-yellow-600',
      description: 'Comprometido con la excelencia y el crecimiento profesional'
    },
    {
      icon: Target,
      color: 'text-blue-500',
      description: 'Compromiso con la calidad y la excelencia'
    },
    {
      icon: Globe,
      color: 'text-green-500',
      description: 'Siempre buscando soluciones creativas'
    },
    {
      icon: Coffee,
      color: 'text-amber-600',
      description: 'Determinación para superar cualquier desafío'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre <span className="gradient-text bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Mí</span>
          </h2>
        </div>

        {/* Contenido Principal - Layout mejorado */}
        <div 
          className="max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 lg:p-12 shadow-xl border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl">
            <div 
              className="flex items-center mb-8"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mr-6 hover:scale-110 transition-transform duration-300">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Mi Historia</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Historia Principal */}
              <div 
                className="lg:col-span-2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  <p>
                    Todo comenzó con un sueño: <strong>crear videojuegos como los que me apasionaban</strong>. 
                    Pero fue ese primer "Hola Mundo" en una consola en blanco y negro lo que realmente 
                    cambió mi vida. Esas pequeñas cosas, esos momentos mágicos donde el código cobra vida, 
                    me llevaron a descubrir mi verdadera vocación.
                  </p>
                  <p>
                    Mi formación fue una mezcla entre <strong>educación formal universitaria</strong> y 
                    el autodidactismo a través de YouTube, Udemy y tutoriales. Aunque la universidad 
                    me dio las bases, reconozco que el <strong>70% de lo que sé hoy</strong> lo he 
                    aprendido explorando por mi cuenta. El proyecto que realmente me enamoró de la 
                    programación fue un <strong>sistema completo de gestión deportiva</strong>: desde 
                    fichas de jugadores y estadísticas hasta la parte financiera del club.
                  </p>
                  <p>
                    Como <strong>desarrollador full-stack</strong>, actualmente trabajo con 
                    Laravel desarrollando APIs y WebServices para integrar las herramientas existentes 
                    de mi empresa. Pero mi proyecto más especial fue crear la <strong>invitación digital 
                    para mi boda en Vue</strong>, que se convirtió en un sistema completo de gestión 
                    de invitados y asistencia. Mi próximo gran desafío es <strong>migrar hacia Python 
                    e incursionar en el mundo de la IA</strong>, empezando desde cero pero con mucha determinación.
                  </p>
                </div>
              </div>

              {/* Values en columna lateral */}
              <div 
                className="lg:col-span-1"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Mis Valores</h4>
                <div className="space-y-4">
                  {values.map((value, index) => {
                    const Icon = value.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl hover:from-primary-100 hover:to-purple-100 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300 hover:shadow-md"
                      >
                        <Icon className={`${value.color} flex-shrink-0`} size={20} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {value.description}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
