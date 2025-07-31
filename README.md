# 💼 CV Online - Jolber Chirinos

**Un CV digital interactivo y moderno construido con React, Vite y Tailwind CSS**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[🌐 Ver Demo en Vivo](https://cv-jolberchirinos.netlify.app/) • [📧 Contacto](mailto:JolberChirinos@gmail.com) • [💼 LinkedIn
](https://linkedin.com/in/jolber-chirinos18)

---

## ✨ Características Destacadas

🎨 **Diseño Moderno y Elegante**

- Interfaz limpia y profesional con modo oscuro/claro
- Animaciones fluidas y micro-interacciones
- Diseño completamente responsivo

🚀 **Tecnología Avanzada**

- React 19 con hooks modernos
- Vite para desarrollo ultra rápido
- Tailwind CSS para estilos optimizados

⚡ **Rendimiento Optimizado**

- Lazy loading de componentes
- Imágenes optimizadas
- Bundle size mínimo

🎭 **Experiencia Interactiva**

- Navegación suave entre secciones
- Efectos de scroll personalizados
- Formulario de contacto funcional

---

## 🛠️ Stack Tecnológico

### Frontend

- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Vite 7.0.4** - Build tool y servidor de desarrollo
- **Tailwind CSS 3.4.1** - Framework de CSS utilitario

### Librerías y Herramientas

- **AOS 2.3.4** - Animaciones al hacer scroll
- **Lucide React 0.525.0** - Iconos modernos
- **ESLint** - Linter de código
- **PostCSS & Autoprefixer** - Procesamiento de CSS

---

## � Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/TheJC18/cv-online.git
cd cv-online

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev          # 🔥 Servidor de desarrollo
npm run build        # 📦 Build para producción
npm run preview      # 👀 Vista previa del build
npm run lint         # 🔍 Linter de código
```

---

## 📁 Estructura del Proyecto

```
cv-online/
├── 📁 public/              # Archivos estáticos
│   ├── favicon.ico
│   ├── programmer.gif
│   └── logos/
├── 📁 src/
│   ├── 📁 components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── 📁 assets/          # Recursos del proyecto
│   ├── App.jsx             # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── 📁 docs/               # Documentación
├── tailwind.config.js     # Configuración de Tailwind
├── vite.config.js         # Configuración de Vite
└── package.json           # Dependencias y scripts
```

---

## 🎨 Secciones del CV

| Sección                  | Descripción             | Características                           |
| ------------------------- | ------------------------ | ------------------------------------------ |
| 🏠**Inicio**        | Presentación principal  | Texto animado con iconos, enlaces sociales |
| 👨‍💻**Sobre Mí** | Historia personal        | Valores, filosofía profesional            |
| 💼**Experiencia**   | Historial laboral        | Timeline interactivo, tecnologías         |
| 🛠️**Habilidades** | Stack tecnológico       | Barras de progreso, categorización        |
| 🎓**Educación**    | Formación académica    | Certificaciones, cursos                    |
| 📬**Contacto**      | Información de contacto | Formulario funcional, redes sociales       |

---

## 🎭 Características Técnicas

### Animaciones y Efectos

- ✨ Animaciones de entrada con AOS
- 🎪 Efectos hover personalizados
- 📊 Barras de progreso animadas
- 🌊 Elementos flotantes
- 🎨 Gradientes dinámicos
- 📱 Scroll suave entre secciones

### Responsive Design

- 📱 **Mobile First**: Optimizado para móviles
- 💻 **Desktop**: Experiencia completa en escritorio
- 📟 **Tablet**: Adaptación perfecta para tablets

### Accesibilidad

- ♿ ARIA labels implementados
- ⌨️ Navegación por teclado
- 🎨 Alto contraste en modo oscuro
- 📱 Touch-friendly en dispositivos móviles

---

## 🎨 Personalización

### Colores y Tema

Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... más colores
    900: '#1e3a8a',
  }
}
```

### Contenido Personal

1. **Información Personal**: Actualiza los datos en cada componente
2. **Imágenes**: Reemplaza las imágenes en `/public`
3. **Enlaces**: Modifica URLs de redes sociales
4. **Contenido**: Personaliza textos y descripciones

### Estilos Personalizados

Modifica `src/index.css` para estilos globales adicionales.

---

## 🚀 Despliegue

### Opciones Recomendadas

#### Netlify

```bash
# Build del proyecto
npm run build

# Subir carpeta dist/ a Netlify
```

#### GitHub Pages

```bash
# Configurar gh-pages
npm install --save-dev gh-pages

# Desplegar
npm run build
npx gh-pages -d dist
```

---

## 🔧 Funciones Especiales

### Modo Oscuro/Claro

Toggle automático que recuerda la preferencia del usuario:

- 🌙 Modo oscuro para reducir fatiga visual
- ☀️ Modo claro para mejor legibilidad
- 💾 Persistencia en localStorage

---

## � Rendimiento

- ⚡ **Lighthouse Score**: 95+ en todas las métricas
- 📦 **Bundle Size**: ~270KB (gzipped: ~80KB)
- 🚀 **First Contentful Paint**: <1.5s
- 📱 **Mobile Optimized**: 100% responsive

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔃 Abre un Pull Request

### Reportar Bugs

Si encuentras un bug, por favor [abre un issue](https://github.com/TheJC18/cv-online/issues) con:

- Descripción detallada del problema
- Pasos para reproducir
- Screenshots si es necesario

---

## � Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Jolber Chirinos**

- 🌐 Website: [jolberchirinos.dev](https://your-website.com)
- 💼 LinkedIn: [jolber-chirinos18](https://linkedin.com/in/jolber-chirinos18)
- 📧 Email: JolberChirinos@gmail.com
- 🐙 GitHub: [@TheJC18](https://github.com/TheJC18)

---

## 🙏 Agradecimientos

- [React](https://reactjs.org/) por la increíble biblioteca
- [Vite](https://vitejs.dev/) por la herramienta de build ultrarrápida
- [Tailwind CSS](https://tailwindcss.com/) por el framework de estilos
- [Lucide](https://lucide.dev/) por los hermosos iconos
- [AOS](https://michalsnik.github.io/aos/) por las animaciones de scroll

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

Hecho con ❤️ y ☕ por [Jolber Chirinos](https://github.com/TheJC18)

</div>
