// Detect scroll event
window.addEventListener('scroll', function() {
    fadeInAnimation();
});
window.addEventListener('load', function(){LEDLettersAnimation();});
function LEDLettersAnimation(){
    const introElements = this.document.querySelectorAll('.intro');

    introElements.forEach(function(element){
        // Retrieve the viewport coordinates i.e (0,700)
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        // If in the viewport then perform animation
        if (elementTop < window.innerHeight && elementBottom > 0) {
            const paragraph = element.querySelector('p');
            //Split the texts into letters
            const letters = paragraph.textContent.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
            // Make span element for each letter
            paragraph.innerHTML = letters;
      
            const letterElements = paragraph.querySelectorAll('.letter');
            letterElements.forEach(function(letter, index) {
            // Add drop-letters animation for each letter to simulate dropping letters
              letter.style.animation = `drop-letters 1.7s infinite ease-in-out forwards ${index * 0.1}s`;
            });
            paragraph.classList.add('fade-in'); // Add the fade-in class
          }
    });
  }
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