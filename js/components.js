// Componente Header
function HeaderComponent() {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
            <div class="container">
                <button class="navbar-toggler hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a class="navbar-brand logo ms-auto" href="index.html">Ferreterías Jiménez</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="nosotros.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="productos.html">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

// Componente Footer
function FooterComponent() {
    return `
        <div class="container">
            <div class="footer-content">
                <h3>Ferreterías Jiménez</h3>
                <div class="footer-links">
                    <a href="contacto.html">Contacto</a>
                    <a href="nosotros.html">Acerca de</a>
                    <a href="productos.html">Productos</a>
                </div>
                <div class="social-links mt-3">
                    <a href="#" class="social-link" aria-label="Facebook">
                        <img src="assets/facebook.png" alt="Facebook" class="social-icon">
                    </a>
                    <a href="#" class="social-link" aria-label="WhatsApp">
                        <img src="assets/WhatsApp.png" alt="WhatsApp" class="social-icon">
                    </a>
                    <a href="#" class="social-link" aria-label="Instagram">
                        <img src="assets/Instagram.png" alt="Instagram" class="social-icon">
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Componente Botón CTA (Call to Action)
function CTAButtonComponent(text = "Quiero cotizar", variant = "primary") {
    return `
        <button class="cta-button cta-button--${variant}" id="cta-main">
            ${text}
        </button>
    `;
}

// Función para renderizar componentes
function renderComponents() {
    // Renderizar Header
    const headerElement = document.getElementById('header-component');
    if (headerElement) {
        headerElement.innerHTML = HeaderComponent();
    }
    
    // Renderizar Footer
    const footerElement = document.getElementById('footer-component');
    if (footerElement) {
        footerElement.innerHTML = FooterComponent();
    }
    
    // Renderizar Botón CTA
    const ctaElement = document.getElementById('cta-button');
    if (ctaElement) {
        ctaElement.innerHTML = CTAButtonComponent();
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderComponents);
