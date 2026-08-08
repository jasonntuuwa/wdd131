function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

function setFooterDate() {
    const lastModified = document.querySelector('#last-modified');

    if (lastModified) {
        lastModified.textContent = `${document.lastModified}`;
    }
}

function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('nav-links-open');
            navToggle.setAttribute('aria-expanded', `${isOpen}`);
        });
    }
}

function initFitSlider() {
    const fitSlider = document.querySelector('#fit-comfort');
    const fitOutput = document.querySelector('#fit-output');

    if (fitSlider && fitOutput) {
        fitSlider.addEventListener('input', () => {
            fitOutput.textContent = `${fitSlider.value}`;
        });
    }
}

setActiveNavLink();
setFooterDate();
initNavToggle();
initFitSlider();