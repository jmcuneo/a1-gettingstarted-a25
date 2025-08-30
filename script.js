function fadeInSection() {
    var section = document.querySelector("section");
    section.style.opacity = 0;
    section.style.transition = "opacity 2s";
    setTimeout(function () { section.style.opacity = 1; }, 100);
} 

// when window finishes loading, the function will run
window.onload = fadeInSection;