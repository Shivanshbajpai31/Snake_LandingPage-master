document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const modeButton = document.getElementById('modeBtn');

  if (modeButton) {
    modeButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      modeButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
    });
  }
});
