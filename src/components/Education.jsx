import { GraduationCap, Calendar, MapPin, Award, BookOpen, FileText } from 'lucide-react'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Técnico Superior en Informática",
      institution: "Instituto Universitario Jesús Obrero (I.U.J.O)",
      location: "Barquisimeto, Venezuela",
      period: "2016 - 2020",
      description: "Formación técnica especializada en desarrollo de software, programación y administración de sistemas informáticos.",
      grade: "Graduado",
      type: "university"
    },
    {
      id: 2,
      degree: "Bachiller en Ciencias",
      institution: "Unidad Educativa Creación Barrio el Oeste",
      location: "Barquisimeto, Venezuela",
      period: "2011 - 2016",
      description: "Educación secundaria con énfasis en ciencias básicas, proporcionando una base sólida para estudios superiores en tecnología.",
      grade: "Graduado",
      type: "certification"
    }
  ]

  const certifications = [
    "PHP & Laravel Framework",
    "Vue.js Frontend Development",
    "MySQL Database Administration",
    "Flutter Mobile Development",
    "Firebase Backend Services",
    "API Development & Integration"
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'university':
        return GraduationCap
      case 'certification':
        return FileText
      case 'course':
        return BookOpen
      default:
        return GraduationCap
    }
  }

  const getColor = (type) => {
    switch (type) {
      case 'university':
        return 'from-blue-500 to-cyan-500'
      case 'certification':
        return 'from-green-500 to-emerald-500'
      case 'course':
        return 'from-purple-500 to-violet-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mi <span className="gradient-text">Educación</span>
          </h2>
          <p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Formación académica y certificaciones que respaldan mi experiencia profesional
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => {
            const Icon = getIcon(edu.type)
            const colorClass = getColor(edu.type)
            
            return (
              <div
                key={edu.id}
                className="relative mb-12"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay={400 + index * 200}
              >
                {/* Timeline Line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-300 to-purple-300 opacity-50"></div>
                )}

                {/* Timeline Icon */}
                <div
                  className={`absolute left-4 top-8 w-8 h-8 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg z-10 hover:scale-125 transition-transform duration-300`}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={600 + index * 200}
                >
                  <Icon size={16} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="ml-20">
                  <div
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-700 dark:to-slate-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-slate-600 hover:scale-105"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay={800 + index * 200}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                          <div className="flex items-center space-x-1">
                            <GraduationCap size={16} />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.grade && (
                          <div className={`flex items-center space-x-1 bg-gradient-to-r ${colorClass} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                            <Award size={16} />
                            <span>{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <div
          className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-transparent shadow-lg transition-colors duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div 
            className="text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Certificaciones Adicionales
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Certificaciones que validan mis conocimientos especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="bg-gray-50 dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-200 dark:border-white/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center mb-3">
                  <FileText className="text-primary-600 dark:text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                  {cert}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <blockquote 
            className="text-2xl font-light text-gray-600 dark:text-gray-300 italic max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            "La educación es el arma más poderosa que puedes usar para cambiar el mundo."
          </blockquote>
          <cite 
            className="block mt-4 text-gray-500 dark:text-gray-400 font-medium"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >— Nelson Mandela</cite>
        </div>
      </div>
    </section>
  )
}

export default Education
