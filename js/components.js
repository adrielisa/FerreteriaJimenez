// Componente Header
function HeaderComponent() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h1 class="logo">Ferreterías Jiménez</h1>
            </div>
        </nav>
    `;
}

// Componente Footer
function FooterComponent() {
    return `
        <div class="footer-content">
            <h3>Ferreterías Jiménez</h3>
            <div class="footer-links">
                <a href="contacto.html">Contacto</a>
                <a href="nosotros.html">Acerca de</a>
                <a href="productos.html">Productos</a>
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

// Componente Grid de Marcas
function BrandsGridComponent() {
    const brands = [
        { name: "TRUPER", color: "#ff6b35", logo: "truper-logo.png" },
        { name: "PRETUL", color: "#ffa500", logo: "pretul-logo.png" },
        { name: "VOLTECK", color: "#4a5568", logo: "volteck-logo.png" },
        { name: "FOSET", color: "#2b6cb0", logo: "foset-logo.png" },
        { name: "FIERO", color: "#1a1a1a", logo: "fiero-logo.png" },
        { name: "HERMEX", color: "#dc2626", logo: "hermex-logo.png" }
    ];

    return `
        <div class="brands-container">
            ${brands.map(brand => `
                <div class="brand-item" style="background-color: ${brand.color}">
                    <img src="images/brands/${brand.logo}" alt="${brand.name}" class="brand-logo">
                    <span class="brand-name">${brand.name}</span>
                </div>
            `).join('')}
        </div>
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
    
    // Renderizar Grid de Marcas
    const brandsElement = document.getElementById('brands-grid');
    if (brandsElement) {
        brandsElement.innerHTML = BrandsGridComponent();
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderComponents);
