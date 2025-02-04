// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Experience Details
const expButtons = document.querySelectorAll('.exp-btn');
expButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the display of the corresponding experience details
        const details = button.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
        
        // Toggle the active class for button (Change background color)
        button.classList.toggle('active');
    });
});

// Contact Form Submission (Already in your code)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});
