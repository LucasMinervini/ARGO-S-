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
        if (window.initLazyLoading) initLazyLoading();
        if (window.initMobileMenu) initMobileMenu();
        if (window.initSmoothScroll) initSmoothScroll();
        if (window.initHeaderScroll) initHeaderScroll();
        if (window.initScrollAnimations) initScrollAnimations();
        if (window.initImageScrollReveal) initImageScrollReveal();
        if (window.initProductGallery) initProductGallery();
        if (window.initContactForm) initContactForm();
        if (window.initLightbox) initLightbox();
    }

    // Iniciar la aplicación
    init();

})();

