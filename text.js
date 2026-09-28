// Smooth scroll for navigation buttons
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const buttonText = this.querySelector('button').textContent.trim();
        
        let targetId;
        if (buttonText === 'About') targetId = 'About';
        else if (buttonText === 'Skills') targetId = 'Skills';
        else if (buttonText === 'Achievement') targetId = 'Achievement';
        else if (buttonText === 'ContactMe') targetId = 'ContactMe';
        
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});