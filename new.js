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

// Handle form submission
const formElement = document.getElementById('forms');
formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(formElement);
    const formValues = Object.fromEntries(formData.entries());

    console.log('Form Submitted:', formValues);

    // Example: Display submitted data dynamically
    const resultElement = document.getElementById('formResult');
    resultElement.textContent = `Submitted Data: ${JSON.stringify(formValues)}`;
});
