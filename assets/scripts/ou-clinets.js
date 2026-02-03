// our-clients.js
document.addEventListener('DOMContentLoaded', function() {
    const marqueeTracks = document.querySelectorAll('.marquee-track');
    
    // Pause animation when hovering over the entire section
    const clientsSection = document.querySelector('.our-clients-section');
    
    clientsSection.addEventListener('mouseenter', function() {
        marqueeTracks.forEach(track => {
            track.style.animationPlayState = 'paused';
        });
    });
    
    clientsSection.addEventListener('mouseleave', function() {
        marqueeTracks.forEach(track => {
            track.style.animationPlayState = 'running';
        });
    });
    
    // Dynamically duplicate logos for seamless loop
    function duplicateLogosForMarquee() {
        const marqueeContents = document.querySelectorAll('.marquee-content');
        
        marqueeContents.forEach(content => {
            const logos = content.querySelectorAll('.client-logo');
            const logosArray = Array.from(logos);
            
            // Clone each logo and append
            logosArray.forEach(logo => {
                const clone = logo.cloneNode(true);
                content.appendChild(clone);
            });
        });
    }
    
    // Call this if you want JavaScript to handle duplication instead of hardcoding in HTML
    // duplicateLogosForMarquee();
});