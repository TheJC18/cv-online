import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el mensaje para email
    const subject = `Mensaje de ${formData.name} - CV Jolber Chirinos`;
    const body = `Hola Jolber,

${formData.message}

Saludos,
${formData.name}
${formData.email}`;

    // Abrir cliente de email
    const mailtoUrl = `mailto:JolberChirinos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
    
    // Mostrar mensaje de éxito
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'JolberChirinos@gmail.com',
      href: 'mailto:JolberChirinos@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 622130388',
      href: 'tel:+34622130388',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Madrid, España',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      href: 'https://github.com/TheJC18',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/jolber-chirinos',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div 
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div>
              <h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Redes Sociales */}
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Sígueme
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 text-gray-700 dark:text-gray-300 ${social.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

          {/* Estado de disponibilidad */}
          <div 
            className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1600"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <h4 className="font-semibold text-green-800 dark:text-green-300">
                ¿Buscas a alguien para impulsar tu próximo proyecto? ¡Estoy listo para nuevos retos!
              </h4>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div 
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              Envíame un mensaje
            </h3>
            
            {showSuccess ? (
              <div 
                className="text-center py-8"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                  ¡Perfecto!
                </h4>
                <p className="text-green-600 dark:text-green-400">
                  Se abrió tu cliente de email. Solo envía el mensaje desde allí.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="1200"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1600"
                >
                  <Send className="h-5 w-5 mr-2 hover:scale-110 transition-transform duration-300" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
