// --- glitch.js corregido y limpio ---
function glitchEffect() {
  for (let i = 0; i < 6; i++) {
    const line = document.createElement('div');
    line.className = 'glitch-line';
    line.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(line);
    setTimeout(() => line.remove(), 220);
  }
}

function glowEffect() {
  const glow = document.createElement('div');
  glow.className = 'glow';
  document.body.appendChild(glow);
  setTimeout(() => glow.remove(), 1600);
}

function runIntroSequence() {
  const overlay = document.getElementById('intro-overlay');
  const introLogo = document.getElementById('intro-logo');
  if (!overlay || !introLogo) return;

  glowEffect();
  glitchEffect();

  // Mostrar logo
  setTimeout(() => {
    introLogo.style.opacity = '1';
    introLogo.style.transform = 'scale(1)';
  }, 250);

  // Ocultar overlay y eliminarlo del DOM
  setTimeout(() => {
    overlay.classList.add('hidden');
    setTimeout(() => {
      if (overlay && overlay.parentNode) {
        overlay.remove(); // elimina la capa bloqueadora
      }
    }, 600);
  }, 1600);
}

// Ejecutar una sola vez por sesión
window.addEventListener('load', () => {
  try {
    const alreadyPlayed = sessionStorage.getItem('glitchPlayed');
    const overlay = document.getElementById('intro-overlay');

    if (!alreadyPlayed) {
      setTimeout(runIntroSequence, 300);
      sessionStorage.setItem('glitchPlayed', '1');
    } else if (overlay) {
      overlay.classList.add('hidden');
      setTimeout(() => overlay.remove(), 300);
    }
  } catch (e) {
    console.error('Error en glitch:', e);
  }
});
