// swap elements
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Global variable to store the original array
let originalArray = [];

// Turn off buttons
function disableButtons() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".newArray").disabled = true;
}

// Turn on buttons
function enableButtons() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".newArray").disabled = false;
}

// Turn off slider
function disableSlider() {
    document.querySelector("#arr_size").disabled = true;
}

// Turn on slider
function enableSlider() {
    document.querySelector("#arr_size").disabled = false;
}

// Animate elements
function waitfor(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, milisec);
    })
}

// Selecting size slider
let arraySize = document.querySelector('#arr_size');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function () {
    createNewArray(parseInt(arraySize.value));
});

// declare delay
let delay = 300;

// Selecting speed slider
let delayElement = document.querySelector('#speed_input');

// Event listener to update the delay
delayElement.addEventListener('input', function () {
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

// To create new array input size of array
function createNewArray(arraySize = 60) {
    //  delete old bars
    deleteChild();

    // add numbers to the array
    array = [];
    originalArray = [];
    for (let i = 0; i < arraySize; i++) {
        let value = Math.floor(Math.random() * 300) + 5;
        array.push(value);
        originalArray.push(value);
    }

    // select the #bars element
    const bars = document.querySelector("#bars");

    // create multiple elements using a loop
    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Delete old bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting array button
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
    enableButtons();
    enableSlider();
    createNewArray(arraySize.value);
});

// Function to reset the array to its original state
function resetArray() {
    array = [...originalArray];
    updateBars("#85c2ff");
}

// Function to update the bars on the UI with the current array and color
function updateBars(color) {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = `${array[i] * 2}px`;
        bars[i].style.backgroundColor = color;
    }
}

//update the number of comparisons
async function updatecompareCount(count) {
    compareCount = count;
    const compareCountElement = document.getElementById("compareCount");
    compareCountElement.textContent = `Number of comparisons: ${compareCount}`;
}

//update the number of swaps
async function updateSwapCount(count) {
    swapCount = count;
    const swapCountElement = document.getElementById("swapCount");
    swapCountElement.textContent = `Number of swaps: ${swapCount}`;
}