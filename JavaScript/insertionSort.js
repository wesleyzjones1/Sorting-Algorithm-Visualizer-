/* Insertion sort iterates through the input elements and, for each element, 
finds the correct position to insert it into the already sorted part of the list. 
This process continues until the entire list is sorted. */

async function insertion() {
    let compareCount = 0; // Initialize comparison and swap
    let swapCount = 0; 
    const ele = document.querySelectorAll(".bar");

    for (let i = 1; i < ele.length; i++) {
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = '#c93524'; // Color the current element as red
        await waitfor(delay);

        while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
            ele[j].style.background = '#c93524'; // Color the element as red
            // Swap the elements
            swap(ele[j], ele[j + 1]);
            j--;

            compareCount++;
            updatecompareCount(compareCount); // Update the comparison count

            await waitfor(delay);
            for (let k = i; k >= 0; k--) {
                ele[k].style.background = '#85c2ff'; // Set the color back to the default blue
            }
        }

        ele[j + 1].style.height = key; // Set the current key in its place
        ele[i].style.background = '#85c2ff'; // Set the color back to the default blue for the current element

        swapCount++;
        updateSwapCount(swapCount); // Update the swap count
        
    }

    // Change the color to green in descending order once sorted
    for (let x = ele.length - 1; x >= 0; x--) {
        ele[x].style.background = 'limegreen';
        await waitfor(delay);
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    resetArray();
    disableButtons();
    disableSlider();
    await insertion();
    enableButtons();
    enableSlider();
})

