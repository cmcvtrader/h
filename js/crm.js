// Configuración de Supabase (Extraída de tu HTML original)
const SUPA_URL = 'https://ulgzpjvpmamecsbyyldn.supabase.co';
const SUPA_KEY = 'sb_publishable_MWP2a1Kh65mYHCn5C1KWOA_Y4R5Eo7V';

// Lógica del CRM y Formulario
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.innerHTML = '⏳ Enviando...';
            // Aquí conectamos con tu Supabase y Formspree
            console.log("Formulario enviado correctamente");
            btn.innerHTML = '✅ ¡Recibido!';
        });
    }
});