# Plan de Mejoras para ARGO'S PACK Landing Page

A continuación se detallan una serie de mejoras para optimizar y enriquecer la landing page de ARGO'S PACK.

## Mejoras de Estructura y SEO

1.  **Meta Tags y Open Graph:**
    *   Añadir meta tags de Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) y de Twitter Cards (`twitter:card`, `twitter:site`) para mejorar la visibilidad y el formato al compartir en redes sociales.
    *   Añadir un `favicon.ico` y otros iconos para diferentes dispositivos (`apple-touch-icon`, etc.).

2.  **Schema.org (Datos Estructurados):**
    *   Implementar Schema.org para productos (`Product`) y para la organización (`Organization`) para mejorar el SEO y cómo los motores de búsqueda entienden el contenido.

3.  **Performance:**
    *   **Optimización de Imágenes:** Comprimir las imágenes del proyecto para reducir su tamaño y mejorar los tiempos de carga.
    *   **Minificación de CSS y JS:** Crear versiones minificadas de `styles.css` y `script.js` y usarlas en producción para reducir el tamaño de los ficheros.

## Mejoras de Funcionalidad y UX

1.  **Formulario de Contacto Interactivo:**
    *   Añadir validación en tiempo real al formulario de contacto.
    *   **Completado (parcial):** Se ha implementado un mensaje de éxito/error mediante un `alert` y la funcionalidad de envío de correo electrónico a través del protocolo `mailto: Lucas.Minervini@outlook.com`. Es importante destacar que una solución más robusta para el envío de correos directos desde el sitio web requeriría una implementación de backend.

2.  **Galería de Productos Avanzada:**
    *   **Completado:** Se ha añadido un modo "lightbox" a la galería de productos para ver las imágenes en tamaño completo.

3.  **Internacionalización (i18n):**
    *   Preparar el proyecto para una futura traducción a otros idiomas, extrayendo los textos a un fichero JSON.

## Mejoras de Código y Mantenibilidad

1.  **Modularización del CSS:**
    *   **✅ Completado:** Se ha separado el CSS en ficheros más pequeños y específicos por componente (header, hero, products, etc.) organizados en la carpeta `styles/`. Todos los módulos se importan a través de `styles/main.css`:
        *   `variables.css` - Variables CSS (colores, tipografía, espaciado)
        *   `reset.css` - Reset y estilos base
        *   `utilities.css` - Clases utilitarias y helpers
        *   `background.css` - Fondo animado con efectos visuales
        *   `header.css` - Header y navegación
        *   `hero.css` - Sección Hero
        *   `buttons.css` - Estilos de botones
        *   `benefits.css` - Sección de beneficios
        *   `products.css` - Productos y category cards
        *   `gallery.css` - Layout de galería de productos
        *   `more-products.css` - Sección de más productos con animaciones
        *   `contact.css` - Formulario de contacto
        *   `lightbox.css` - Componente lightbox
        *   `footer.css` - Footer
        *   `whatsapp.css` - Botón flotante de WhatsApp
        *   `responsive.css` - Media queries responsive
        *   `lazy-loading.css` - Estilos para lazy loading
        *   `main.css` - Archivo principal que importa todos los módulos

2.  **Modularización del JavaScript:**
    *   **✅ Completado:** Se ha separado el JavaScript en módulos específicos por funcionalidad organizados en la carpeta `scripts/`. Todos los módulos se cargan a través de `index.html` y se inicializan desde `scripts/main.js`:
        *   `lazy-loading.js` - Carga diferida de imágenes
        *   `navigation.js` - Menú móvil y navegación
        *   `smooth-scroll.js` - Scroll suave para enlaces de ancla
        *   `header-scroll.js` - Efecto de scroll en el header
        *   `scroll-animations.js` - Animaciones al hacer scroll (Fade In)
        *   `image-scroll-reveal.js` - Efecto de scroll reveal para imágenes
        *   `product-gallery.js` - Cambio de imágenes en la galería de productos
        *   `contact-form.js` - Manejo del formulario de contacto
        *   `lightbox.js` - Funcionalidad del lightbox para imágenes
        *   `main.js` - Archivo principal que inicializa todos los módulos

3.  **Build Process:**
    *   Introducir una herramienta de build como Gulp o Webpack para automatizar tareas como la minificación, optimización de imágenes y la concatenación de ficheros.
