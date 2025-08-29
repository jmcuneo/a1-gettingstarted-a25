// Smooth floating animation for the decorative shape
document.addEventListener('DOMContentLoaded', function() {
    const floatingShape = document.getElementById('floatingShape');
    
    if (!floatingShape) return;
    
    let animFrame = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse position for subtle interaction
    document.addEventListener('mousemove', function(evt) {
        mouseX = evt.clientX / window.innerWidth;
        mouseY = evt.clientY / window.innerHeight;
    });
    
    function animateShape() {
        animFrame += 0.02;
        
        // Create floating motion with sine waves
        const baseY = 20 + Math.sin(animFrame) * 15;
        const baseX = 5 + Math.cos(animFrame * 0.7) * 3;
        
        // Add subtle mouse interaction
        const mouseInfluenceX = (mouseX - 0.5) * 10;
        const mouseInfluenceY = (mouseY - 0.5) * 10;
        
        // Combine base movement with mouse influence
        const finalX = baseX + mouseInfluenceX * 0.3;
        const finalY = baseY + mouseInfluenceY * 0.2;
        
        // Apply transform with rotation for extra visual interest
        const rotation = animFrame * 30;
        
        floatingShape.style.transform = `translate(${finalX}px, ${finalY}px) rotate(${rotation}deg)`;
        
        // Animate opacity for breathing effect
        const opacity = 0.5 + Math.sin(animFrame * 1.5) * 0.2;
        floatingShape.style.opacity = opacity;
        
        requestAnimationFrame(animateShape);
    }
    
    // Start the animation
    animateShape();
    
    // Add click interaction to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function(e) {
            // Avoid triggering on interactive elements
            if (e.target.tagName === 'SUMMARY' || e.target.tagName === 'A') return;
            
            // Add ripple effect
            const ripple = document.createElement('div');
            const rect = section.getBoundingClientRect();
            const size = 100;
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(86, 125, 141, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out forwards;
                pointer-events: none;
                z-index: 10;
            `;
            
            section.style.position = 'relative';
            section.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Smooth scroll behavior for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add subtle parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.page-header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});