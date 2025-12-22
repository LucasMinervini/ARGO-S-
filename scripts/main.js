/**
 * ARGO'S PACK - Main Script
 * Inicializa todos los módulos de la aplicación
 */

(function() {
    'use strict';

    // ============================================
    // Inicialización cuando el DOM esté listo
    // ============================================
    function init() {
        // Esperar a que el DOM esté completamente cargado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Inicializar todas las funcionalidades
        const modules = [
            { name: 'LazyLoading', fn: window.initLazyLoading },
            { name: 'MobileMenu', fn: window.initMobileMenu },
            { name: 'SmoothScroll', fn: window.initSmoothScroll },
            { name: 'HeaderScroll', fn: window.initHeaderScroll },
            { name: 'ScrollAnimations', fn: window.initScrollAnimations },
            { name: 'ImageScrollReveal', fn: window.initImageScrollReveal },
            { name: 'ProductGallery', fn: window.initProductGallery },
            { name: 'ContactForm', fn: window.initContactForm },
            { name: 'Lightbox', fn: window.initLightbox }
        ];

        modules.forEach(({ name, fn }) => {
            if (fn) {
                try {
                    fn();
                } catch (error) {
                    console.error(`Failed to initialize ${name}:`, error);
                }
            }
        });
    }

    // Iniciar la aplicación
    init();

})();

