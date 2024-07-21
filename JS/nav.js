document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.side-nav a');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // La section est considérée comme visible si 50% de son contenu est visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('visible');
                if (entry.target.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('visible');
                }
            });
        } else {
            const correspondingLink = document.querySelector(`.side-nav a[href="#${entry.target.getAttribute('id')}"]`);
            if (correspondingLink) {
                correspondingLink.classList.remove('visible');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});



