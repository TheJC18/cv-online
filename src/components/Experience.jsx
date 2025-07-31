import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'

const Experience = () => {
  // Función para calcular la duración entre dos fechas
  const calculateDuration = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    let result = '';
    if (years > 0) {
      result += `${years} año${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (result) result += ' ';
      result += `${months} mes${months > 1 ? 'es' : ''}`;
    }
    
    return result || '1 mes';
  };

  // Función para formatear fecha en español
  const formatDate = (date) => {
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    const d = new Date(date);
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  // Función para calcular experiencia total
  const calculateTotalExperience = () => {
    const experiences = [
      { start: '2020-03-01', end: '2020-11-30' },
      { start: '2021-02-01', end: '2021-08-31' },
      { start: '2022-08-01', end: '2023-01-31' },
      { start: '2023-02-01', end: '2023-10-31' },
      { start: '2023-10-01', end: null } // Actualidad
    ];
    
    let totalMonths = 0;
    experiences.forEach(exp => {
      const start = new Date(exp.start);
      const end = exp.end ? new Date(exp.end) : new Date();
      const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      totalMonths += months;
    });
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let result = '';
    if (years > 0) {
      result += `${years} año${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (result) result += ' ';
      result += `${months} mes${months > 1 ? 'es' : ''}`;
    }
    
    return result;
  };

  const experiences = [
    {
      id: 1,
      company: "GRUPOR RUIZ",
      position: "Desarrollador Fullstack",
      location: "Madrid, España",
      startDate: "2023-10-01",
      endDate: null, // Actualidad
      type: "Tiempo completo",
      description: "Desarrollo de sistemas empresariales utilizando tecnologías modernas y metodologías ágiles.",
      achievements: [
        "Desarrollo de sistemas utilizando PHP y Laravel",
        "Desarrollo de API'S para integración de servicios",
        "Desarrollo de FrontEnd con Vue.JS, HTML, CSS",
        "Administrador de base de datos en MySQL y SQL Server",
        "Despliegue de aplicaciones en Servidores IIS"
      ],
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "SQL Server", "HTML", "CSS", "IIS"]
    },
    {
      id: 2,
      company: "MOBIUS GROUP",
      position: "Desarrollador Fullstack",
      location: "Madrid, España",
      startDate: "2023-02-01",
      endDate: "2023-10-31",
      type: "Tiempo completo",
      description: "Desarrollo integral de aplicaciones web y administración de bases de datos en entorno empresarial.",
      achievements: [
        "Desarrollo de sistemas utilizando PHP y Laravel",
        "Desarrollo de API'S RESTful",
        "Desarrollo de FrontEnd con Vue.JS, HTML, CSS",
        "Administrador de base de datos en MySQL y SQL Server",
        "Despliegue de aplicaciones en Servidores IIS"
      ],
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "SQL Server", "HTML", "CSS", "IIS"]
    },
    {
      id: 3,
      company: "IBER TMS",
      position: "Desarrollador Back-end y Desarrollador de APPS",
      location: "Madrid, España",
      startDate: "2022-08-01",
      endDate: "2023-01-31",
      type: "Tiempo completo",
      description: "Especialización en desarrollo backend y aplicaciones móviles con Flutter.",
      achievements: [
        "Desarrollo de sistemas utilizando PHP, Laravel, MySQL",
        "Desarrollo de API'S para aplicaciones móviles",
        "Desarrollo de APPS con Flutter y Dart",
        "Administrador de base de datos en MySQL y Firebase",
        "Integración de servicios backend con aplicaciones móviles"
      ],
      technologies: ["PHP", "Laravel", "Flutter", "Dart", "MySQL", "Firebase", "API Development"]
    },
    {
      id: 4,
      company: "FREELANCER",
      position: "Desarrollador Full Stack",
      location: "Remoto",
      startDate: "2021-02-01",
      endDate: "2021-08-31",
      type: "Freelance",
      description: "Proyectos independientes de desarrollo web y móvil para diversos clientes.",
      achievements: [
        "Desarrollo de sistemas utilizando PHP, Java, Laravel, MySQL",
        "Desarrollo de API'S personalizadas",
        "Maquetación HTML5, CSS3, Bootstrap",
        "Desarrollo de APPS con Flutter y Dart",
        "Manejo de datos XML y JSON",
        "Administrador de base de datos en MySQL y PostgreSQL"
      ],
      technologies: ["PHP", "Java", "Laravel", "Flutter", "Dart", "MySQL", "PostgreSQL", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      id: 5,
      company: "AILANTHUS SISTEMS",
      position: "Desarrollador Full Stack",
      location: "Barquisimeto, Venezuela",
      startDate: "2020-03-01",
      endDate: "2020-11-30",
      type: "Tiempo completo",
      description: "Mi primera experiencia profesional como Desarrollador, enfocado en desarrollo web y soporte técnico.",
      achievements: [
        "Desarrollo de sistemas utilizando PHP, Laravel, MySQL",
        "Maquetación HTML5, CSS3, Bootstrap",
        "Soporte técnico a clientes",
        "Solución de incidencias",
        "Manejo de datos XML y JSON",
        "Administrador de base de datos en MySQL y Firebase"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Firebase", "HTML5", "CSS3", "Bootstrap", "XML", "JSON"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <span className="font-semibold text-primary-600">{calculateTotalExperience()}</span> desarrollando soluciones tecnológicas en empresas de Venezuela y España
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-400 to-purple-400"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10 hover:scale-125 transition-transform duration-300"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={400 + index * 200}
                ></div>

                {/* Content card */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-slate-700 hover:scale-105"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="1000"
                    data-aos-delay={600 + index * 200}
                  >
                    {/* Company and period */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.company}</h3>
                        <p className="text-primary-600 font-semibold">{exp.position}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Location and duration */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>
                          {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Actualidad'}
                        </span>
                      </div>
                      <div className="text-primary-600 font-medium">
                        ({calculateDuration(exp.startDate, exp.endDate)})
                      </div>
                    </div>

                    {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tareas realizadas:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                          >
                            <ChevronRight size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium border border-primary-200 dark:border-slate-600 hover:scale-105 transition-transform duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div 
          className="mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 transition-colors duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 
            className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >Resumen de Experiencia</h3>
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div 
              className="text-center"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experiencia Total</h4>
              <p className="text-2xl font-bold text-primary-600">{calculateTotalExperience()}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">de desarrollo profesional</p>
            </div>
            <div 
              className="text-center"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Países</h4>
              <p className="text-2xl font-bold text-green-600">2</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Venezuela y España</p>
            </div>
            <div 
              className="text-center"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Calendar className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Empresas</h4>
              <p className="text-2xl font-bold text-purple-600">{experiences.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">organizaciones diferentes</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
            <h3 
              className="text-2xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >¿Interesado en mi experiencia?</h3>
            <p 
              className="text-lg opacity-90 mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              Estoy disponible para nuevas oportunidades profesionales en Madrid, España
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              Contactar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience