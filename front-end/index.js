// Detect scroll event
window.addEventListener('scroll', function() {
    fadeInAnimation();
});

function fadeInAnimation(){
    // Make texts slowly appear
    const fadeInElements = document.querySelectorAll('.fade-in-text');

    // Loop through each fade-in element
    fadeInElements.forEach(function(element) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    // Check if the element is within the viewport
    if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('fade-in'); // Add the fade-in class
    } else {
        element.classList.remove('fade-in'); // Remove the fade-in class
    }
    });
  }