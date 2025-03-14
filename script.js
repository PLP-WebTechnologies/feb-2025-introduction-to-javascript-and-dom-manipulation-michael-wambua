// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ============ TEXT MANIPULATION ============
    const textDemo = document.getElementById('text-demo');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    let textToggle = false;
    
    changeTextBtn.addEventListener('click', function() {
        if (!textToggle) {
            textDemo.textContent = "The text has been changed dynamically using JavaScript!";
            textDemo.style.color = "#4361ee";
            textDemo.style.fontWeight = "bold";
        } else {
            textDemo.textContent = "This text will change when you click the button below.";
            textDemo.style.color = "";
            textDemo.style.fontWeight = "";
        }
        textToggle = !textToggle;
    });
    
    // ============ STYLE MANIPULATION ============
    const styleDemo = document.getElementById('style-demo');
    const changeColorBtn = document.getElementById('change-color-btn');
    const changeSizeBtn = document.getElementById('change-size-btn');
    const resetStyleBtn = document.getElementById('reset-style-btn');
    
    // Array of colors to cycle through
    const colors = [
        '#ff6b6b', // Red
        '#f8c24a', // Yellow
        '#4ecca3', // Green
        '#4361ee', // Blue
        '#9b59b6'  // Purple
    ];
    
    let colorIndex = 0;
    let isSizeEnlarged = false;
    
    changeColorBtn.addEventListener('click', function() {
        styleDemo.style.backgroundColor = colors[colorIndex];
        styleDemo.style.color = "white";
        colorIndex = (colorIndex + 1) % colors.length;
    });
    
    changeSizeBtn.addEventListener('click', function() {
        if (!isSizeEnlarged) {
            styleDemo.style.height = "150px";
            styleDemo.style.fontSize = "1.5rem";
            styleDemo.style.fontWeight = "bold";
        } else {
            styleDemo.style.height = "100px";
            styleDemo.style.fontSize = "";
            styleDemo.style.fontWeight = "";
        }
        isSizeEnlarged = !isSizeEnlarged;
    });
    
    resetStyleBtn.addEventListener('click', function() {
        styleDemo.style.backgroundColor = "#e0e0e0";
        styleDemo.style.height = "100px";
        styleDemo.style.color = "";
        styleDemo.style.fontSize = "";
        styleDemo.style.fontWeight = "";
        isSizeEnlarged = false;
    });
    
    // ============ ADDING & REMOVING ELEMENTS ============
    const elementDemo = document.getElementById('element-demo');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const clearElementsBtn = document.getElementById('clear-elements-btn');
    
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        
        // Create a new element
        const newElement = document.createElement('div');
        newElement.className = 'dynamic-element';
        newElement.innerHTML = `<strong>Element ${elementCount}</strong>: I was created dynamically with JavaScript!`;
        
        // Add the new element to the container
        elementDemo.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const elements = elementDemo.getElementsByClassName('dynamic-element');
        if (elements.length > 0) {
            elementDemo.removeChild(elements[elements.length - 1]);
            elementCount--;
        }
    });
    
    clearElementsBtn.addEventListener('click', function() {
        elementDemo.innerHTML = '';
        elementCount = 0;
    });
    
    // ============ INTERACTIVE COUNTER ============
    const counterValue = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetCounterBtn = document.getElementById('reset-counter-btn');
    
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetCounterBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    function updateCounter() {
        counterValue.textContent = count;
        
        // Change color based on value
        if (count > 0) {
            counterValue.style.color = '#4ecca3'; // Green for positive
        } else if (count < 0) {
            counterValue.style.color = '#ff6b6b'; // Red for negative
        } else {
            counterValue.style.color = ''; // Default for zero
        }
    }
    
    // ============ FORM INTERACTION ============
    const demoForm = document.getElementById('demo-form');
    const nameInput = document.getElementById('name-input');
    const formResult = document.getElementById('form-result');
    
    demoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page
        
        const name = nameInput.value.trim();
        
        if (name === '') {
            formResult.innerHTML = '<div style="color: #721c24; background-color: #f8d7da; padding: 0.75rem; border-radius: 4px;">Please enter your name!</div>';
        } else {
            formResult.innerHTML = `<div style="color: #155724; background-color: #d4edda; padding: 0.75rem; border-radius: 4px;">Hello, <strong>${name}</strong>! Thanks for submitting the form.</div>`;
            nameInput.value = ''; // Clear the input
        }
    });
});
