const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const joinForm = document.querySelector('#join-form');
const formMessage = document.querySelector('#form-message');

menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    });
});

joinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'You are on the list. See you at the next swap.';
    formMessage.classList.add('success');
    joinForm.reset();
});
