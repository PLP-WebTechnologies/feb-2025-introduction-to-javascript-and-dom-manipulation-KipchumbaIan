// script.js

// Change text content dynamically
const dynamicTextElement = document.getElementById('dynamicText');
dynamicTextElement.textContent = 'The text has been changed by JavaScript!';

// Modify CSS styles via JavaScript
const styleMeElement = document.getElementById('styleMe');
styleMeElement.style.backgroundColor = 'lightgreen';
styleMeElement.style.color = 'darkgreen';
styleMeElement.style.fontWeight = 'bold';

// Add or remove an element when a button is clicked
const toggleButton = document.getElementById('toggleButton');
const itemContainer = document.getElementById('itemContainer');
let newElementAdded = false;
let newListItem;

toggleButton.addEventListener('click', () => {
    if (!newElementAdded) {
        newListItem = document.createElement('li');
        newListItem.textContent = 'Dynamically Added Item';
        itemContainer.appendChild(newListItem);
        toggleButton.textContent = 'Remove Element';
        newElementAdded = true;
    } else {
        itemContainer.removeChild(newListItem);
        toggleButton.textContent = 'Add an Element';
        newElementAdded = false;
    }
});

// Change the background color of the body when a button is clicked
const colorButton = document.getElementById('colorButton');