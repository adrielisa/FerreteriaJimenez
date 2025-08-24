// Funcionalidad principal
document.addEventListener('DOMContentLoaded', function() {
    // Render components
    renderComponents();
    
    // Manejar el menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    // Smooth scroll para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar el menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });
    
    // Highlight active section in navigation
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section nav link
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
});

// Función para abrir WhatsApp con mensaje precargado
function openWhatsApp() {
    const phoneNumber = "529981265802"; 
    const message = "¡Hola! Me interesa cotizar ¿Podrían ayudarme?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappURL, '_blank');
}

// Función para cambiar el variant del botón CTA
function changeCTAVariant(variant) {
    const ctaElement = document.getElementById('cta-button');
    if (ctaElement) {
        ctaElement.innerHTML = CTAButtonComponent('Quiero cotizar', variant);
    }
}
