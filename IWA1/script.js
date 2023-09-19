// Constants for minimum, maximum, and step values
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

// Get DOM elements for number input, subtract button, and add button
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

// Event handler for subtract button
const subtractHandler = () => {
    // Decrease the value by the step amount
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;

    // Enable the add button if it was disabled
    if (add.disabled === true) {
        add.disabled = false;
    }

    // Disable the subtract button if the value is less than or equal to the minimum
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

// Event handler for add button
const addHandler = () => {
    // Increase the value by the step amount
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    // Enable the subtract button if it was disabled
    if (subtract.disabled === true) {
        subtract.disabled = false;
    }

    // Disable the add button if the value is greater than or equal to the maximum
    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
    }
};

// Add click event listeners to the subtract and add buttons
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
