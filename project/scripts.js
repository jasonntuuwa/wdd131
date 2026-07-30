const fitSlider = document.getElementById('fit-comfort');
const fitOutput = document.getElementById('fit-output');

if (fitSlider && fitOutput) {
    fitSlider.addEventListener('input', () => {
        fitOutput.textContent = fitSlider.value;
    });
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-open');
    });
}