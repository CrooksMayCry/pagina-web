// js/videoModal.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoModal');
  const btn = document.getElementById('verVideoBtn');
  const closeBtn = document.querySelector('.close-btn');
  const video = document.getElementById('introVideo');

  if (!modal || !btn) return;

  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    video.currentTime = 0;
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    video.pause();
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      video.pause();
    }
  });
});
