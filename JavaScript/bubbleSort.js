/* Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list 
to be sorted, comparing each pair of adjacent items, and swapping them if they are in the wrong order. 
This process is repeated until the entire list is sorted. */

async function bubble() {
    let compareCount = 0; // Initialize comparison and swap
    let swapCount = 0;  

    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {

            // Color elements in red to indicate comparison
            ele[j].style.background = '#c93524';  //red
            ele[j + 1].style.background = '#c93524';

            // Compare adjacent elements and swap if necessary
            if (parseInt(ele[j+1].style.height) < parseInt(ele[j].style.height)) {
                await waitfor(delay);
                swap(ele[j], ele[j + 1]);

                //increment swap count
                swapCount++
                updateSwapCount(swapCount);
            }
            // Increment the compare count
            compareCount++;
            updatecompareCount(compareCount);
            

            // Color elements in cyan after comparison
            ele[j].style.background = '#85c2ff'; //cyan
            ele[j + 1].style.background = '#85c2ff';
        }
        
        // Color the sorted elements in green
        ele[ele.length - 1 - i].style.background = 'limegreen'; //green
    }
    ele[0].style.background = 'limegreen'; // Set the first element to green
}

const bubbleSortButton = document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener('click', async function () {
    resetArray();
    disableButtons();
    disableSlider();
    await bubble();
    enableButtons();
    enableSlider();
})