# ARGO'S PACK - Landing Page MVP

Landing page de Producto Mínimo Viable (MVP) para ARGO'S PACK, marca de productos premium para mascotas.

## 📋 Descripción

Esta landing page actúa como un catálogo visual y persuasivo que redirige a los usuarios a plataformas de terceros (como Mercado Libre) para realizar sus compras. El diseño es minimalista, profesional y completamente responsive.

## 🎨 Características

- **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- **HTML Semántico**: Estructura accesible y SEO-friendly
- **CSS Moderno**: Utilizando variables CSS, Flexbox y Grid
- **JavaScript Mínimo**: Solo para interactividad esencial (lazy loading, smooth scroll, menú móvil)
- **Paleta de Colores de Marca**: Verde oscuro, negro y blanco según identidad ARGO'S PACK
- **Optimización de Rendimiento**: Lazy loading de imágenes y animaciones suaves

## 📁 Estructura del Proyecto

```
ArgosWeb/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
├── README.md           # Documentación
├── AGENTS.MD           # Reglas de desarrollo
│
└── Utils/              # Assets organizados por funcionalidad
    ├── branding/       # Logos y elementos de marca
    │   ├── logo-header.png
    │   └── logo-footer.png
    │
    ├── hero/          # Sección Hero/Banner principal
    │   └── hero-main.jpg
    │
    ├── products/      # Productos principales
    │   ├── leash-black.jpg
    │   ├── leash-white.jpg
    │   ├── feeders.jpg
    │   ├── hygiene.jpg
    │   ├── clothing.jpg
    │   └── carrier-gallery/  # Galería del transportador
    │       ├── carrier-view-1.jpg
    │       ├── carrier-view-2.jpg
    │       ├── carrier-view-3.jpg
    │       ├── carrier-view-4.jpg
    │       ├── carrier-view-5.jpg
    │       └── carrier-view-6.jpg
    │
    ├── more-products/ # Productos adicionales
    │   ├── toys.jpg
    │   ├── beds.jpg
    │   └── training.jpg
    │
    ├── README.md      # Guía de uso de assets
    │
    └── [LEGACY]      # Carpetas originales (backup)
        ├── JPG/      # Imágenes originales
        ├── PNG/      # Logos originales
        ├── SVG/      # Vectores originales
        └── PDF/      # PDFs originales
```

### 📂 Organización de Assets

Los assets están organizados por **funcionalidad** (Feature-Based Organization) en lugar de por tipo de archivo, facilitando el mantenimiento y escalabilidad:

- **`branding/`**: Logos y elementos de identidad visual
- **`hero/`**: Imágenes de la sección principal/banner
- **`products/`**: Imágenes de productos principales con subcarpetas para galerías
- **`more-products/`**: Imágenes de productos adicionales

Para más detalles sobre la estructura y convenciones de nombres, consulta `Utils/README.md`.

## 🚀 Uso

1. Abre `index.html` en tu navegador
2. No se requiere servidor local, funciona directamente desde el archivo

### Para Desarrollo Local

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

## 📝 Secciones de la Landing Page

1. **Header/Navegación**: Logo y menú de navegación con enlaces ancla
2. **Hero Section**: Propuesta de valor principal y CTAs
3. **Beneficios**: Razones para elegir ARGO'S PACK
4. **Productos**: Catálogo de productos con CTAs a Mercado Libre
5. **Testimonios**: Reseñas de clientes para generar confianza
6. **Footer**: Información de contacto y enlaces legales

## 🎯 Personalización

### Actualizar URLs de Productos

Edita los enlaces en `index.html` dentro de cada `.product__card`:

```html
<a href="TU_URL_DE_MERCADO_LIBRE" target="_blank" rel="noopener noreferrer" class="btn btn--cta">
    ¡Comprar en Mercado Libre!
</a>
```

### Modificar Colores

Los colores están definidos como variables CSS en `styles.css`:

```css
:root {
    --color-primary-dark: #1a4d2e;
    --color-accent: #40916c;
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
- **Productos**: `Utils/products/[nombre-producto].jpg`
- **Galerías**: `Utils/products/[producto]-gallery/[vista].jpg`
- **Más Productos**: `Utils/more-products/[nombre-producto].jpg`

**Convenciones de nombres**:
- Formato: `kebab-case` (minúsculas con guiones)
- Descriptivo: El nombre indica el producto y su uso
- Ejemplos: `leash-black.jpg`, `carrier-view-1.jpg`, `toys.jpg`

Para más información, consulta `Utils/README.md`.

## 🌐 Compatibilidad de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (Variables, Flexbox, Grid)
- JavaScript (Vanilla JS, ES6+)
- Sin dependencias externas

## 📄 Licencia

© 2024 ARGO'S PACK. Todos los derechos reservados.

## 📞 Contacto

Para más información sobre ARGO'S PACK:
- Email: contacto@argospack.com
- Teléfono: +54 11 1234-5678

---

**Nota**: Esta es una landing page MVP. Las URLs de compra y la información de contacto deben ser actualizadas con los datos reales antes de publicar.

