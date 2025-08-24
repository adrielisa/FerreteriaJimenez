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
                <a class="navbar-brand logo ms-auto" href="#hero">Ferretería Jiménez</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#productos">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#ubicacion">Ubicación</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#opiniones">Opiniones</a>
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
                <h3>Ferretería Jiménez</h3>
                <div class="footer-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#productos">Productos</a>
                    <a href="#ubicacion">Ubicación</a>
                    <a href="#opiniones">Opiniones</a>
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

// Componente Botón CTA (Call to Action) - Para WhatsApp
function CTAButtonComponent(text = "Quiero cotizar", variant = "primary") {
    return `
        <button class="cta-button cta-button--${variant}" id="cta-main" onclick="openWhatsApp()">
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
