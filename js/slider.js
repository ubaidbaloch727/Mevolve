document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.feature-card');
    const slides = document.querySelectorAll('.slide');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const id = tab.id.replace('feature-card', 'image');
            
            slides.forEach(slide => {
                if (slide.id === id) {
                    slide.classList.remove('inactive');
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                    slide.classList.add('inactive');
                }
            });
        });
    });
});