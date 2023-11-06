// Selection sort works by repeatedly finding the minimum element from the 
//unsorted part of the array and placing it at the beginning
async function selection() {

    let compareCount = 0; 
    let swapCount = 0; 

    // Select all elements with class 'bar'
    const ele = document.querySelectorAll(".bar");

    // Iterate through the array elements
    for (let i = 0; i < ele.length; i++) {
        let min_index = i; // Set the current element as the minimum
        ele[i].style.background = '#1b67e0'; // Change the background color of the current element to blue

        // Iterate through the unsorted elements
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = '#c93524'; // Change the background color of the compared element to red

            compareCount++;
            updatecompareCount(compareCount); // Increment and update the comparison count


            await waitfor(delay);

            // Compare the heights of the elements
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                if (min_index !== i) {
                    ele[min_index].style.background = '#85c2ff'; // Change the color of the previous minimum element back to light blue
                }
                min_index = j; // Update the minimum index to the current smaller element
                
                
           
            } else {
                ele[j].style.background = '#85c2ff'; // If the current element is not smaller, change the background color back to light blue
            }
        }


        await waitfor(delay);

        // Swap the minimum element with the first unsorted element
        swap(ele[min_index], ele[i]);
        
        swapCount++;
        updateSwapCount(swapCount); 

        // Change the background color of the swapped elements
        ele[min_index].style.background = '#85c2ff';
        ele[i].style.background = 'limegreen';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    resetArray();
    disableButtons();
    disableSlider();
    await selection();
    enableButtons();
    enableSlider();
});