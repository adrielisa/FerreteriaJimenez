// Funcionalidad principal
document.addEventListener('DOMContentLoaded', function() {
    
    // Manejar el menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            // Aquí puedes agregar la lógica para mostrar/ocultar el menú
        });
    }
    
    // Manejar el botón de cotización
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'cta-main') {
            handleCTAClick();
        }
    });
    
});

// Función para manejar el click del botón CTA
function handleCTAClick() {
    // Aquí puedes agregar la lógica para la cotización
    console.log('Botón de cotización clickeado');
    
    // Ejemplo: cambiar el estado del botón
    const button = document.getElementById('cta-main');
    if (button) {
        button.textContent = 'Procesando...';
        button.classList.add('cta-button--loading');
        
        // Simular proceso
        setTimeout(() => {
            button.textContent = 'Quiero cotizar';
            button.classList.remove('cta-button--loading');
        }, 2000);
    }
}

// Función para cambiar el variant del botón CTA
function changeCTAVariant(variant) {
    const ctaElement = document.getElementById('cta-button');
    if (ctaElement) {
        ctaElement.innerHTML = CTAButtonComponent('Quiero cotizar', variant);
    }
}
