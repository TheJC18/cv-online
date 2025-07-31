import { Code, Database, Globe, Smartphone, Cloud, Cog, Star, BookOpen } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3", level: 85, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨", featured: true },
        { name: "Vue.js", level: 85, icon: "💚", featured: true },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "JavaScript", level: 80, icon: "📜" },
        { name: "TypeScript", level: 65, icon: "📘" },
        { name: "Bootstrap", level: 75, icon: "🅱️" },
        { name: "Responsive Design", level: 85, icon: "📱" }
      ]
    },
    {
      icon: Database,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", level: 85, icon: "🐘" },
        { name: "Laravel", level: 90, icon: "🚀", featured: true },
        { name: "Node.js", level: 40, icon: "💚", learning: true },
        { name: "Python", level: 35, icon: "🐍", learning: true },
        { name: "API REST", level: 85, icon: "🔗" },
        { name: "GraphQL", level: 50, icon: "📊" },
        { name: "Java", level: 65, icon: "☕" },
        { name: "IIS Server", level: 70, icon: "🌐" }
      ]
    },
    {
      icon: Globe,
      title: "Bases de Datos",
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MySQL", level: 90, icon: "🗄️", featured: true },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "PostgreSQL", level: 70, icon: "🐘" },
        { name: "SQL Server", level: 65, icon: "💾" },
        { name: "MongoDB", level: 55, icon: "🍃" },
        { name: "Database Design", level: 80, icon: "📐" }
      ]
    },
    {
      icon: Cloud,
      title: "Desarrollo Móvil & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Flutter", level: 75, icon: "📱" },
        { name: "Dart", level: 70, icon: "🎯" },
        { name: "Git/GitHub", level: 85, icon: "🐙" },
        { name: "Google Cloud", level: 45, icon: "☁️" },
        { name: "AWS", level: 40, icon: "🟠" },
        { name: "Testing (PHPUnit/Jest)", level: 70, icon: "🧪" }
      ]
    }
  ]

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Laravel", icon: "🚀" },
    { name: "MySQL Workbench", icon: "🗄️" },
    { name: "Firebase Console", icon: "🔥" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "Flutter", icon: "📱" },
    { name: "Android Studio", icon: "🤖" },
    { name: "Postman", icon: "📮" },
    { name: "Composer", icon: "🎼" },
    { name: "NPM", icon: "📦" },
    { name: "Vue DevTools", icon: "💚" }
  ]

  const methodologies = [
    { name: "Scrum", icon: "🏃‍♂️", description: "Desarrollo ágil con sprints" },
    { name: "Kanban", icon: "📋", description: "Gestión visual de tareas" },
    { name: "Full-Stack Development", icon: "🎯", description: "4 años de experiencia completa" },
    { name: "Web Applications", icon: "🌐", description: "Especialización en sistemas web" }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Tecnologías y herramientas que domino para crear soluciones excepcionales
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-700 dark:to-slate-600 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={categoryIndex * 200}
              >
                {/* Category Header */}
                <div 
                  className="flex items-center space-x-3 mb-6"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay={400 + categoryIndex * 200}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                          {skill.learning && (
                            <div className="flex items-center space-x-1">
                              <BookOpen className="w-4 h-4 text-blue-500" />
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                                Aprendiendo
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {skill.featured && (
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          )}
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white opacity-30 transform skew-x-12"></div>
                          {skill.learning && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tools Section */}
        <div 
          className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-200 dark:border-transparent shadow-lg transition-colors duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Herramientas y <span className="gradient-text">Tecnologías</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="bg-gray-50 dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-200 dark:border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <span className="text-gray-900 dark:text-white font-medium text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies Section */}
        <div 
          className="mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Metodologías y <span className="gradient-text">Experiencia</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <div
                key={method.name}
                className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={400 + index * 100}
              >
                <div className="text-3xl mb-3">{method.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Habilidades <span className="gradient-text">Profesionales</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Full-Stack Developer", 
                description: "4 años de experiencia en desarrollo web completo",
                icon: "🎯" 
              },
              { 
                title: "Resolución de Problemas", 
                description: "Enfoque analítico para encontrar soluciones efectivas",
                icon: "🧩" 
              },
              { 
                title: "Aprendizaje Continuo", 
                description: "Siempre explorando nuevas tecnologías como Node.js y Python",
                icon: "📚" 
              },
              { 
                title: "Trabajo en Equipo", 
                description: "Experiencia con metodologías ágiles y versionado colaborativo",
                icon: "🤝" 
              },
              { 
                title: "Especialista en Web", 
                description: "Enfoque principal en aplicaciones web robustas y escalables",
                icon: "🌐" 
              },
              { 
                title: "API Development", 
                description: "Especialista en creación de APIs RESTful y servicios web",
                icon: "🔗" 
              }
            ].map((skill, index) => (
              <div
                key={skill.title}
                className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + index * 100}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
