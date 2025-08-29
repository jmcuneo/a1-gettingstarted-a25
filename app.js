// loading animation for the whole page
window.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.body;
  mainContent.style.opacity = 0;
  mainContent.style.transition = 'none';
  void mainContent.offsetWidth;
  mainContent.style.transition = 'opacity 1.2s';
  setTimeout(() => {
    mainContent.style.opacity = 1;
  }, 50);

// add hover effect to images : this could be done way easier with css but i wanted to practice js
  const images = document.querySelectorAll('.images img');
  images.forEach(img => {
    img.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.15) rotate(-8deg)';
      setTimeout(() => {
        img.style.transform = 'scale(0.95) rotate(8deg)';
      }, 250);
      setTimeout(() => {
        img.style.transform = 'scale(1.05) rotate(-4deg)';
      }, 400);
      setTimeout(() => {
        img.style.transform = 'scale(1) rotate(0deg)';
      }, 500);
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});
