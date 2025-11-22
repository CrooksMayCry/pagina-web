// Protecciones básicas anti-bot
document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.getElementById('contactForm');
  const hp = document.getElementById('hp_website');
  const ts = document.getElementById('ts');
  const submitBtn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMsg');

  // Timestamp: minuto de creación
  ts.value = Date.now();

  form.addEventListener('submit', (e) => {
    // 1) Honeypot: campo invisible no debe rellenarse
    if (hp && hp.value.trim() !== '') {
      e.preventDefault();
      msg.textContent = 'Detenido: sospecha de automatización.';
      return;
    }

    // 2) Tiempo mínimo desde que se abrió la página (ej. 3s)
    const created = parseInt(ts.value, 10) || 0;
    if (Date.now() - created < 3000) {
      e.preventDefault();
      msg.textContent = 'Esperar unos segundos antes de enviar el formulario.';
      return;
    }

    // 3) Prevenir envíos múltiples rápidos
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    // opcional: si quieres mostrar mensaje tras X segundos si no responde el endpoint
    setTimeout(()=> {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Mensaje';
    }, 8000);
  });
});