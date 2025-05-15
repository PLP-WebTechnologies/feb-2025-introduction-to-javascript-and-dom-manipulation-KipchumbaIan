// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const mainTitle = document.getElementById('main-title');
const aboutText = document.getElementById('about-text');

changeTextBtn.addEventListener('click', function() {
  mainTitle.textContent = 'JavaScript & DOM Manipulation is Fun!';
  aboutText.textContent = 'You just changed this text using JavaScript!';
  // Modify CSS styles via JavaScript
  mainTitle.style.color = '#0074D9';
  aboutText.style.fontWeight = 'bold';
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const dynamicElement = document.getElementById('dynamic-element');

let isElementVisible = false;
toggleElementBtn.addEventListener('click', function() {
  isElementVisible = !isElementVisible;
  if (isElementVisible) {
    dynamicElement.style.display = 'block';
    toggleElementBtn.textContent = 'Remove Element';
  } else {
    dynamicElement.style.display = 'none';
    toggleElementBtn.textContent = 'Add Element';
  }
}); 