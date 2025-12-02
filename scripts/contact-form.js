/**
 * ARGO'S PACK - Contact Form Module
 * Maneja el envío del formulario de contacto
 */

(function() {
    'use strict';

    function initContactForm() {
        const contactForm = document.querySelector('.contact__form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const messageValue = contactForm.querySelector('#message').value || '';
            
            const recipient = 'Lucas.Minervini@outlook.com';
            
            // Get translated subject from i18n if available
            let subject = 'Mensaje de Contacto desde ARGO\'S PACK';
            if (window.i18n) {
                subject = window.i18n.getTranslation('contact.form.subject');
            }
            
            const encodedSubject = encodeURIComponent(subject);
            const body = encodeURIComponent(messageValue);

            const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${body}`;
            
            window.location.href = mailtoLink;
            
            // Get translated success message
            let successMessage = 'Se abrirá tu cliente de correo para enviar el mensaje. ¡Gracias por contactarnos!';
            if (window.i18n) {
                successMessage = window.i18n.getTranslation('contact.form.success');
            }
            
            alert(successMessage);
            
            contactForm.reset();
        });
    }

    // Update Contact Form Subject (for i18n)
    window.updateContactFormSubject = function(subject) {
        // This function is called by i18n.js when language changes
        // The subject is already updated in the form submission handler
    };

    // Exportar función para uso global
    window.initContactForm = initContactForm;

})();

