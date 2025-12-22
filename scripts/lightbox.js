/**
 * ARGO'S PACK - Lightbox Module
 * Maneja la funcionalidad del lightbox para imágenes
 */

(function() {
    'use strict';

    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        const lightboxImg = lightbox.querySelector('.lightbox__img');
        const lightboxClose = lightbox.querySelector('.lightbox__close');

        if (!lightboxImg || !lightboxClose) return;

        // Select all product images that should open in the lightbox
        const productImages = document.querySelectorAll('.products__grid img, .more-products__grid img');

        productImages.forEach(img => {
            img.style.cursor = 'zoom-in'; // Add a visual cue
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightbox.setAttribute('aria-hidden', 'false');
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Product image';
                originalOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                // Focus the close button for keyboard users
                lightboxClose.focus();
            });
        });

        // Close lightbox function
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = originalOverflow; // Restore original
        };

        lightboxClose.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) { // Close when clicking outside the image
                closeLightbox();
            }
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // Exportar función para uso global
    window.initLightbox = initLightbox;

})();

