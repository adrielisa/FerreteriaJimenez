// Funcionalidad principal
document.addEventListener('DOMContentLoaded', function() {
    // Render components
    renderComponents();
    
    // Variable para detectar móviles
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Manejar el menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    // Función para obtener la altura real del navbar con mejor precisión
    function getRealNavbarHeight() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return 70;
        
        // Obtener el estilo computado para mayor precisión
        const computedStyle = window.getComputedStyle(navbar);
        const height = navbar.getBoundingClientRect().height;
        const paddingTop = parseFloat(computedStyle.paddingTop);
        const paddingBottom = parseFloat(computedStyle.paddingBottom);
        
        // Retornar altura total incluyendo padding
        return Math.ceil(height + paddingTop + paddingBottom);
    }
    
    // Función SIMPLIFICADA para scroll - SIN complicaciones
    function scrollToSection(targetId) {
        const target = document.getElementById(targetId.replace('#', ''));
        if (!target) return;
        
        // Detectar móvil de forma simple
        const isMobile = window.innerWidth <= 768;
        
        // Offset súper agresivo para móviles
        const offset = isMobile ? 150 : 80;
        
        // Scroll directo sin delays ni complicaciones
        const scrollPosition = target.offsetTop - offset;
        
        window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
        });
    }
    
    // Event listener SIMPLIFICADO para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Cerrar menú móvil si está abierto
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const navbarToggler = document.querySelector('.navbar-toggler');
            
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
                // Esperar que se cierre y hacer scroll
                setTimeout(() => {
                    scrollToSection(targetId);
                }, 350);
            } else {
                // Hacer scroll inmediatamente
                scrollToSection(targetId);
            }
        });
    });
    
    // Intersection Observer mejorado para highlighting de navegación
    let observerOptions;
    
    function updateObserverOptions() {
        const navbarHeight = getRealNavbarHeight();
        const isMobile = window.innerWidth <= 768;
        const topMargin = navbarHeight + (isMobile ? 40 : 20);
        
        observerOptions = {
            threshold: [0.1, 0.3, 0.5],
            rootMargin: `-${topMargin}px 0px -60% 0px`
        };
    }
    
    // Inicializar observer options
    updateObserverOptions();
    
    const observer = new IntersectionObserver((entries) => {
        let maxIntersection = 0;
        let activeSection = null;
        
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
                maxIntersection = entry.intersectionRatio;
                activeSection = entry.target;
            }
        });
        
        if (activeSection) {
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section nav link
            const activeLink = document.querySelector(`a[href="#${activeSection.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
    
    // Actualizar observer cuando cambie el tamaño de ventana
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Desconectar observer actual
            observer.disconnect();
            
            // Actualizar opciones
            updateObserverOptions();
            
            // Recrear observer con nuevas opciones
            const newObserver = new IntersectionObserver((entries) => {
                let maxIntersection = 0;
                let activeSection = null;
                
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
                        maxIntersection = entry.intersectionRatio;
                        activeSection = entry.target;
                    }
                });
                
                if (activeSection) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    const activeLink = document.querySelector(`a[href="#${activeSection.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            }, observerOptions);
            
            // Re-observar todas las secciones
            document.querySelectorAll('section[id]').forEach(section => {
                newObserver.observe(section);
            });
        }, 250);
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
