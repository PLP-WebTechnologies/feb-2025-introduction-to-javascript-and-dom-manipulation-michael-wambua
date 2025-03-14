# Introduction to JavaScript and DOM Manipulation

## Objectives

Write basic JavaScript functions.
Manipulate the DOM dynamically.
Respond to user interactions.

## Instructions

- Create a script.js file and link it to a HTML.
- Structure the document using DOCTYPE, html, head, and body.

>[!NOTE]
>  - Write JavaScript that:
>  - Changes text content dynamically.
>  - Modifies CSS styles via JavaScript.
>  - Adds or removes an element when a button is clicked.


# Tasks
- Create a well-structured HTML5 document.
- Use at least 5 different HTML elements.
- Ensure semantic correctness.

Happy Coding! 💻✨

INDEX.HTML

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript DOM Manipulation</title>
        <style>
            /* Basic styling for the page */
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
            }
        
        body {
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        
        header {
            background-color: #4361ee;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-bottom: 2rem;
        }
        
        main {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        section {
            background-color: white;
            border-radius: 8px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        h1, h2 {
            margin-bottom: 1rem;
        }
        
        p {
            margin-bottom: 1rem;
        }
        
        .btn {
            display: inline-block;
            background-color: #4361ee;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            margin: 0.5rem 0.5rem 0.5rem 0;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #3a56d4;
        }
        
        .text-container {
            margin-bottom: 1rem;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .color-box {
            width: 100%;
            height: 100px;
            background-color: #e0e0e0;
            margin: 1rem 0;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
        }
        
        .element-container {
            min-height: 150px;
            border: 1px dashed #ccc;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 4px;
        }
        
        .dynamic-element {
            background-color: #f8d7da;
            color: #721c24;
            padding: 1rem;
            margin: 0.5rem 0;
            border-radius: 4px;
            animation: fadeIn 0.5s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        footer {
            text-align: center;
            padding: 2rem 0;
            color: #666;
            background-color: #f0f0f0;
            margin-top: 2rem;
        }
        
        /* Counter styling */
        .counter-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem 0;
        }
        
        .counter-value {
            font-size: 2rem;
            margin: 0 1rem;
            min-width: 3rem;
            text-align: center;
        }
    </style>
    </head>
    <body>
        <header>
            <h1>JavaScript DOM Manipulation</h1>
            <p>Learn how to interact with the Document Object Model</p>
        </header>
        
    <main>
        <section>
            <h2>Text Manipulation</h2>
            <p>JavaScript can dynamically change text content on your webpage.</p>
            <div class="text-container" id="text-demo">
                This text will change when you click the button below.
            </div>
            <button class="btn" id="change-text-btn">Change Text</button>
        </section>
        
        <section>
            <h2>Style Manipulation</h2>
            <p>JavaScript can modify CSS styles dynamically.</p>
            <div class="color-box" id="style-demo">
                Click buttons to change my style
            </div>
            <button class="btn" id="change-color-btn">Change Color</button>
            <button class="btn" id="change-size-btn">Change Size</button>
            <button class="btn" id="reset-style-btn">Reset</button>
        </section>
        
        <section>
            <h2>Adding & Removing Elements</h2>
            <p>JavaScript can create, add, and remove elements from the DOM.</p>
            <div class="element-container" id="element-demo">
                <!-- Dynamic elements will be added here -->
            </div>
            <button class="btn" id="add-element-btn">Add Element</button>
            <button class="btn" id="remove-element-btn">Remove Last Element</button>
            <button class="btn" id="clear-elements-btn">Clear All</button>
        </section>
        
        <section>
            <h2>Interactive Counter</h2>
            <p>A simple counter that demonstrates event handling and state management.</p>
            <div class="counter-container">
                <button class="btn" id="decrement-btn">-</button>
                <div class="counter-value" id="counter">0</div>
                <button class="btn" id="increment-btn">+</button>
            </div>
            <button class="btn" id="reset-counter-btn">Reset Counter</button>
        </section>
        
        <section>
            <h2>Form Interaction</h2>
            <p>JavaScript can process form inputs and provide feedback.</p>
            <form id="demo-form">
                <div style="margin-bottom: 1rem;">
                    <label for="name-input">Name:</label>
                    <input type="text" id="name-input" style="width: 100%; padding: 0.5rem; margin-top: 0.5rem;">
                </div>
                <button type="submit" class="btn">Submit</button>
            </form>
            <div id="form-result" style="margin-top: 1rem;"></div>
        </section>
    </main>
    
    <footer>
        <p>Created as an introduction to JavaScript DOM manipulation</p>
    </footer>

    <!-- Linking the JavaScript file -->
    <script src="script.js"></script>
    </body>
    </html>

SCRIPT.JS 

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
