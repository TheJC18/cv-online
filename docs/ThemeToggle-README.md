# 🌙☀️ ThemeToggle Component - Documentación

## 📋 Descripción
Componente React que permite alternar entre modo claro y modo oscuro en toda la aplicación. Es un botón flotante que se posiciona en la esquina inferior derecha de la pantalla.

## 🚀 Características Principales

### 🎯 **Funcionalidad**
- **Cambio de tema**: Alterna entre modo claro y oscuro
- **Persistencia**: Guarda la preferencia del usuario en localStorage
- **Detección automática**: Respeta la preferencia del sistema operativo
- **Siempre visible**: Botón flotante accesible desde cualquier sección

### 🎨 **Diseño Visual**
- **Animación de entrada**: Aparece con efecto "bounce" después de 0.8 segundos
- **Flotación continua**: Sutil movimiento vertical para llamar la atención
- **Iconos animados**: Transición suave entre sol y luna con rotación
- **Efectos hover**: Escalado, sombras y resplandor al pasar el mouse

## 🔧 Funcionamiento Técnico

### **1. Estado y Inicialización**
```jsx
const [isDark, setIsDark] = useState(false)
```
- Controla si el tema actual es oscuro o claro

### **2. Detección de Preferencias (useEffect)**
```jsx
useEffect(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    // Activar modo oscuro
  } else {
    // Activar modo claro
  }
}, [])
```

**Prioridad de temas:**
1. **Preferencia guardada** (localStorage)
2. **Preferencia del sistema** (prefers-color-scheme)
3. **Modo claro por defecto**

### **3. Cambio de Tema (toggleTheme)**
```jsx
const toggleTheme = () => {
  const newTheme = !isDark
  setIsDark(newTheme)
  
  if (newTheme) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
```

**Proceso:**
1. Invierte el estado actual
2. Agrega/quita la clase 'dark' del elemento HTML
3. Guarda la nueva preferencia en localStorage

## 🎭 Sistema de Iconos

### **Sol (Modo Claro)**
- **Color normal**: `text-gray-600`
- **Color hover**: `text-gray-800` (más oscuro para indicar cambio a modo oscuro)
- **Animación**: Rota 90° y se escala a 0 cuando desaparece

### **Luna (Modo Oscuro)**
- **Color normal**: `text-slate-300`
- **Color hover**: `text-white` (más brillante para indicar cambio a modo claro)
- **Animación**: Rota -90° y se escala a 0 cuando desaparece

## 🌈 Colores y Efectos

### **Modo Claro**
- **Fondo**: `bg-white/95` (blanco semi-transparente)
- **Borde**: `border-gray-300` → `hover:border-gray-400`
- **Ring hover**: `hover:ring-orange-400/30`
- **Resplandor**: `bg-orange-500/10` → `hover:bg-orange-500/20`

### **Modo Oscuro**
- **Fondo**: `bg-slate-800/95` (gris oscuro semi-transparente)
- **Borde**: `border-slate-600` → `hover:border-slate-500`
- **Ring hover**: `hover:ring-blue-400/30`
- **Resplandor**: `bg-blue-400/10` → `hover:bg-blue-400/20`

## 🎬 Animaciones

### **Entrada (bounceIn)**
```css
animation: 'bounceIn 1s ease-out 0.8s both, themeFloat 4s ease-in-out 2s infinite'
```
- **bounceIn**: Aparece con efecto rebote después de 0.8s
- **themeFloat**: Flotación continua cada 4s (sube 8px y escala 1.05)

### **Interacciones**
- **Hover**: `hover:scale-110` (crece 10%)
- **Click**: `active:scale-95` (se encoge 5%)
- **Transiciones**: `transition-all duration-300 ease-in-out`

## 🔄 Integración con Tailwind CSS

El componente funciona con la configuración de Tailwind CSS:
```js
// tailwind.config.js
{
  darkMode: 'class', // Activa el modo oscuro por clase CSS
  // ... resto de configuración
}
```

Cuando se activa el modo oscuro, todas las clases `dark:` en la aplicación se aplican automáticamente.

## 🎯 Consejos de Uso

1. **Posicionamiento**: El botón está fijo con `z-50` para estar siempre visible
2. **Accesibilidad**: Incluye `aria-label` descriptivo
3. **Rendimiento**: Usa `localStorage` para evitar parpadeos al recargar
4. **UX**: Los colores del hover indican visualmente el cambio que ocurrirá

## 🚀 Resultado Final

Un botón flotante elegante que:
- ☀️ Muestra el sol en modo claro (hover → más oscuro)
- 🌙 Muestra la luna en modo oscuro (hover → más brillante)
- 💾 Recuerda la preferencia del usuario
- 🎨 Se integra perfectamente con el diseño general
- ⚡ Cambia todo el sitio web instantáneamente
