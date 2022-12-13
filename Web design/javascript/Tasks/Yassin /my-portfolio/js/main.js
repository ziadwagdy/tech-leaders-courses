// Start Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});
// End Menu

// Start Contact Form
const requiredInputs = document.querySelectorAll(".contact-form .contact-input:required");
console.log(requiredInputs);
requiredInputs.forEach(item => {
    const span = document.createElement("span");
    span.innerText = "* Required"
    span.className = "required-span"
    item.before(span);
});
// End Contact Form