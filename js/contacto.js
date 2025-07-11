// Funcionalidad específica para la página de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

function handleContactSubmit(e) {
    e.preventDefault();
    
    const button = document.getElementById('btn-enviar');
    const formData = new FormData(e.target);
    
    // Datos del formulario
    const contactData = {
        nombre: formData.get('nombre'),
        correo: formData.get('correo'),
        telefono: formData.get('telefono'),
        mensaje: formData.get('mensaje')
    };
    
    // Cambiar estado del botón
    if (button) {
        button.textContent = 'Enviando...';
        button.disabled = true;
    }
    
    // Aquí conectarás con tu webhook
    // sendToWebhook(contactData);
    
    // Simular envío por ahora
    setTimeout(() => {
        console.log('Datos para webhook:', contactData);
        
        // Mostrar mensaje de éxito
        alert('¡Mensaje enviado correctamente! Nos contactaremos contigo pronto.');
        
        // Limpiar formulario
        e.target.reset();
        
        // Restaurar botón
        if (button) {
            button.textContent = 'Enviar';
            button.disabled = false;
        }
    }, 2000);
}

// Función para enviar al webhook (implementar cuando esté listo)
async function sendToWebhook(data) {
    try {
        const response = await fetch('TU_WEBHOOK_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Error en el webhook');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error enviando al webhook:', error);
        throw error;
    }
}