/**
 * ARGO'S PACK - Landing Page Script
 * JavaScript mínimo para interactividad y mejoras de UX
 */

(function() {
    'use strict';

    // ============================================
    // Lazy Loading de Imágenes
    // ============================================
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback para navegadores sin soporte a IntersectionObserver
            lazyImages.forEach(img => {
                img.classList.add('loaded');
            });
        }
    }

    // ============================================
    // Navegación Móvil (Toggle Menu)
    // ============================================
    function initMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav__link');

        if (!navToggle || !navMenu) return;

        // Toggle del menú
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // Smooth Scroll para Enlaces de Ancla
    // ============================================
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Ignorar enlaces vacíos o solo "#"
                if (href === '#' || href === '') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // Efecto de Scroll en Header
    // ============================================
    function initHeaderScroll() {
        const header = document.getElementById('header');
        let lastScroll = 0;
        const scrollThreshold = 50; // Píxeles de scroll antes de activar el efecto

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });

        // Verificar el estado inicial al cargar la página
        if (window.pageYOffset > scrollThreshold) {
            header.classList.add('scrolled');
        }
    }

    // ============================================
    // Animaciones al Hacer Scroll (Fade In)
    // ============================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.product__card, .benefit__card, .testimonial__card');

        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                animationObserver.observe(element);
            });
        }
    }

    // ============================================
    // Scroll Reveal Effect for Images
    // ============================================
    function initImageScrollReveal() {
        // Select all images that should have scroll reveal effect
        // Exclude logos in header/footer and hero image (already visible)
        const imagesToAnimate = document.querySelectorAll(
            '.product__img, .more-product__img, .product__main-img, .product__thumbnail img'
        );

        if (!imagesToAnimate.length) return;

        // Add initial class to all images
        imagesToAnimate.forEach(img => {
            img.classList.add('scroll-reveal-img');
        });

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add revealed class when image enters viewport
                        entry.target.classList.add('revealed');
                    } else {
                        // Optional: Remove revealed class when scrolling up (uncomment if needed)
                        // entry.target.classList.remove('revealed');
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -100px 0px'
            });

            imagesToAnimate.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            imagesToAnimate.forEach(img => {
                img.classList.add('revealed');
            });
        }
    }

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
        initLazyLoading();
        initMobileMenu();
        initSmoothScroll();
        initHeaderScroll();
        initScrollAnimations();
        initImageScrollReveal();
        initProductGallery();
    }

    // ============================================
    // Product Gallery Image Switcher
    // ============================================
    function initProductGallery() {
        const thumbnails = document.querySelectorAll('.product__thumbnail');
        const mainImage = document.getElementById('main-product-image');

        if (!thumbnails.length || !mainImage) return;

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const newImageSrc = thumbnail.getAttribute('data-image');
                if (newImageSrc && mainImage) {
                    // Update main image
                    mainImage.src = newImageSrc;
                    
                    // Update active state
                    thumbnails.forEach(thumb => thumb.classList.remove('active'));
                    thumbnail.classList.add('active');
                }
            });
        });
    }

    // Iniciar la aplicación
    init();

})();

