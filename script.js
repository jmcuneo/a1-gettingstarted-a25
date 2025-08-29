const logo = document.getElementById('logo');

logo.addEventListener('mouseenter', () => {
    logo.style.transition = 'text-shadow 0.3s ease-in-out';
    logo.style.textShadow = '0 0 5px black, 0 0 10px black';
});

logo.addEventListener('mouseleave', () => {
    logo.style.textShadow = 'none';
});
