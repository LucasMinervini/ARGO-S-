# 🐾 ARGO'S PACK - Landing Page MVP

> Landing page de Producto Mínimo Viable (MVP) para ARGO'S PACK, marca de productos premium para mascotas.

---

## 📋 Descripción

Esta landing page actúa como un catálogo visual y persuasivo que redirige a los usuarios a plataformas de terceros (como Mercado Libre) para realizar sus compras. El diseño es minimalista, profesional y completamente responsive, con efectos visuales modernos y animaciones sutiles que mejoran la experiencia del usuario.

---

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- **HTML Semántico**: Estructura accesible y SEO-friendly
- **CSS Moderno**: Utilizando variables CSS, Flexbox y Grid
- **Paleta de Colores de Marca**: Verde oscuro, negro y blanco según identidad ARGO'S PACK

### 🎭 Efectos Visuales
- **Background Animado**: Imagen de fondo con efectos de zoom suave (Ken Burns)
- **Luces Dinámicas**: Efectos de luz radial que se mueven sobre el background
- **Brillo Deslizante**: Efecto de brillo que cruza la imagen diagonalmente
- **Overlays Consistentes**: Efectos de glow y overlays uniformes en todas las secciones
- **Animaciones Suaves**: Transiciones y animaciones CSS optimizadas

### ⚡ Rendimiento
- **JavaScript Mínimo**: Solo para interactividad esencial (lazy loading, smooth scroll, menú móvil)
- **Optimización de Rendimiento**: Lazy loading de imágenes y animaciones suaves
- **Sin Dependencias**: Código vanilla, sin librerías externas

---

## 📁 Estructura del Proyecto

```
ArgosWeb/
├── index.html              # Estructura HTML principal
├── script.js               # JavaScript deprecado (modularizado)
├── README.md               # Documentación del proyecto
├── mejoras.md              # Plan de mejoras del proyecto
│
├── scripts/                # Módulos JavaScript organizados por funcionalidad
│   ├── main.js             # Archivo principal que inicializa todos los módulos
│   ├── lazy-loading.js     # Carga diferida de imágenes
│   ├── navigation.js       # Menú móvil y navegación
│   ├── smooth-scroll.js    # Scroll suave para enlaces de ancla
│   ├── header-scroll.js    # Efecto de scroll en el header
│   ├── scroll-animations.js # Animaciones al hacer scroll (Fade In)
│   ├── image-scroll-reveal.js # Efecto de scroll reveal para imágenes
│   ├── product-gallery.js  # Cambio de imágenes en la galería de productos
│   ├── contact-form.js     # Manejo del formulario de contacto
│   └── lightbox.js         # Funcionalidad del lightbox para imágenes
│
├── styles/                 # Módulos CSS organizados por componente
│   ├── main.css            # Archivo principal que importa todos los módulos
│   ├── variables.css       # Variables CSS (colores, tipografía, espaciado)
│   ├── reset.css           # Reset y estilos base
│   ├── utilities.css       # Clases utilitarias y helpers
│   ├── background.css      # Fondo animado con efectos visuales
│   ├── header.css          # Header y navegación
│   ├── hero.css            # Sección Hero
│   ├── buttons.css         # Estilos de botones
│   ├── benefits.css        # Sección de beneficios
│   ├── products.css        # Productos y category cards
│   ├── gallery.css         # Layout de galería de productos
│   ├── more-products.css   # Sección de más productos con animaciones
│   ├── contact.css         # Formulario de contacto
│   ├── lightbox.css        # Componente lightbox
│   ├── footer.css          # Footer
│   ├── whatsapp.css        # Botón flotante de WhatsApp
│   ├── responsive.css      # Media queries responsive
│   └── lazy-loading.css    # Estilos para lazy loading
│
└── Utils/                  # Assets organizados por funcionalidad
    ├── branding/           # Logos y elementos de marca
    │   ├── logo-header.png
    │   └── logo-footer.png
    │
    ├── background/         # Imágenes de fondo
    │   └── pngtree-abstract-dark-green-background-...
    │
    ├── hero/               # Sección Hero/Banner principal
    │   └── hero-main.jpg
    │
    ├── products/           # Productos principales
    │   ├── leash-black.jpg
    │   ├── leash-white.jpg
    │   ├── feeders.jpg
    │   ├── hygiene.jpg
    │   ├── clothing.jpg
    │   └── carrier-gallery/    # Galería del transportador
    │       ├── carrier-view-1.jpg
    │       ├── carrier-view-2.jpg
    │       ├── carrier-view-3.jpg
    │       ├── carrier-view-4.jpg
    │       ├── carrier-view-5.jpg
    │       └── carrier-view-6.jpg
    │
    ├── more-products/       # Productos adicionales
    │   ├── toys.jpg
    │   ├── beds.jpg
    │   └── training.jpg
    │
    └── README.md           # Guía de uso de assets
```

### 📂 Organización de Assets

Los assets están organizados por **funcionalidad** (Feature-Based Organization) en lugar de por tipo de archivo, facilitando el mantenimiento y escalabilidad:

- **`branding/`**: Logos y elementos de identidad visual
- **`background/`**: Imágenes de fondo con efectos animados
- **`hero/`**: Imágenes de la sección principal/banner
- **`products/`**: Imágenes de productos principales con subcarpetas para galerías
- **`more-products/`**: Imágenes de productos adicionales

Para más detalles sobre la estructura y convenciones de nombres, consulta `Utils/README.md`.

---

## 🚀 Inicio Rápido

### Uso Básico

1. Abre `index.html` en tu navegador
2. No se requiere servidor local, funciona directamente desde el archivo

### Desarrollo Local

Puedes usar cualquier servidor HTTP simple:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

---

## 📝 Secciones de la Landing Page

1. **Header/Navegación**: Logo y menú de navegación con enlaces ancla
2. **Hero Section**: Propuesta de valor principal y CTAs con efectos visuales
3. **Beneficios**: Razones para elegir ARGO'S PACK
4. **Productos**: Catálogo de productos con CTAs a Mercado Libre
5. **Más Productos**: Productos adicionales con efectos de pelotitas rebotando
6. **Footer**: Información de contacto y enlaces legales

---

## 🎯 Personalización

### Actualizar URLs de Productos

Edita los enlaces en `index.html` dentro de cada `.product__card`:

```html
<a href="TU_URL_DE_MERCADO_LIBRE" target="_blank" rel="noopener noreferrer" class="btn btn--cta">
    ¡Comprar en Mercado Libre!
</a>
```

### Modificar Colores

Los colores están definidos como variables CSS en `styles/variables.css`:

```css
:root {
    --color-primary-dark: #0d2818;
    --color-primary: #1a4d2e;
    --color-accent: #52b788;
    /* ... más colores ... */
}
```

### Agregar/Modificar Productos

Cada producto sigue esta estructura en `index.html`:

```html
<article class="product__card">
    <div class="product__image">
        <img src="Utils/products/nombre-producto.jpg" alt="Descripción" class="product__img" loading="lazy">
    </div>
    <div class="product__content">
        <h3 class="product__name">Nombre del Producto</h3>
        <ul class="product__benefits">
            <li>Beneficio 1</li>
            <li>Beneficio 2</li>
        </ul>
        <a href="URL_COMPRA" class="btn btn--cta">¡Comprar en Mercado Libre!</a>
    </div>
</article>
```

### 📸 Gestión de Imágenes

Las imágenes están organizadas por sección funcional en `Utils/`:

- **Header/Footer**: `Utils/branding/logo-header.png` o `logo-footer.png`
- **Hero Section**: `Utils/hero/hero-main.jpg`
- **Background**: `Utils/background/pngtree-abstract-dark-green-background-...`
- **Productos**: `Utils/products/[nombre-producto].jpg`
- **Galerías**: `Utils/products/[producto]-gallery/[vista].jpg`
- **Más Productos**: `Utils/more-products/[nombre-producto].jpg`

**Convenciones de nombres**:
- Formato: `kebab-case` (minúsculas con guiones)
- Descriptivo: El nombre indica el producto y su uso
- Ejemplos: `leash-black.jpg`, `carrier-view-1.jpg`, `toys.jpg`

Para más información, consulta `Utils/README.md`.

---

## 🎨 Efectos Visuales Implementados

### Background Animado

El background principal incluye varios efectos visuales:

- **Zoom Suave (Ken Burns)**: Animación de zoom sutil con cambios de brillo y contraste
- **Luces Dinámicas**: Efectos de luz radial que se mueven sobre la imagen
- **Brillo Deslizante**: Efecto de brillo que cruza la imagen diagonalmente
- **Gradientes Animados**: Gradientes que rotan y se mueven suavemente

### Efectos por Sección

Todas las secciones comparten efectos visuales consistentes:

- **Overlays Sutiles**: Gradientes lineales y radiales para mejorar legibilidad
- **Efectos de Glow**: Luces radiales animadas con `mix-blend-mode: overlay`
- **Patrón de Grid**: Patrón SVG sutil para textura adicional
- **Animaciones Coordinadas**: Todas las secciones usan las mismas animaciones para consistencia

---

## 🌐 Compatibilidad de Navegadores

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)

---

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

---

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones, Arquitectura Modular
- **JavaScript**: Vanilla JS, ES6+
- **Sin Dependencias**: Código puro, sin librerías externas

## 🏗️ Arquitectura Modular

El proyecto utiliza una arquitectura modular tanto para CSS como para JavaScript para mejorar la mantenibilidad y organización del código:

### Arquitectura CSS Modular

- **Separación por Componentes**: Cada componente tiene su propio archivo CSS
- **Variables Centralizadas**: Todas las variables CSS están en `styles/variables.css`
- **Importación Unificada**: Todos los módulos se importan a través de `styles/main.css`
- **Fácil Mantenimiento**: Cada módulo puede ser editado independientemente sin afectar otros componentes

### Arquitectura JavaScript Modular

- **Separación por Funcionalidad**: Cada funcionalidad tiene su propio archivo JavaScript
- **Inicialización Centralizada**: Todos los módulos se inicializan desde `scripts/main.js`
- **Carga Ordenada**: Los módulos se cargan en el orden correcto a través de `index.html`
- **Fácil Mantenimiento**: Cada módulo puede ser editado independientemente sin afectar otros componentes

Para más detalles sobre la modularización, consulta `mejoras.md`.

---

## 📄 Licencia

© 2024 ARGO'S PACK. Todos los derechos reservados.

---

## 📞 Contacto

Para más información sobre ARGO'S PACK:

- **Email**: contacto@argospack.com
- **Teléfono**: +54 11 1234-5678

---

## ⚠️ Nota Importante

Esta es una landing page MVP. Las URLs de compra y la información de contacto deben ser actualizadas con los datos reales antes de publicar.

---

**Desarrollado con ❤️ para ARGO'S PACK**
