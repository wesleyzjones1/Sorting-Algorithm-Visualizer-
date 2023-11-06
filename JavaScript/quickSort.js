/* Quick sortworks by selecting a 'pivot' element from the array and partitioning the 
other elements into two sub-arrays, according to whether they are less than or greater 
than the pivot. The sub-arrays are then sorted recursively. */

// Initialize comparison and swap counts
let compareCount = 0; 
let swapCount = 0;  

// Function implementing the Lomuto partition scheme
async function partitionLomuto(ele, l, r){

    let i = l - 1;
    
    // Color the pivot element
    ele[r].style.background = '#c93524';
    for(let j = l; j <= r - 1; j++){

        // Color the current element
        ele[j].style.background = '#c93524';
        
        // Asynchronous delay
        await waitfor(delay);

        // If the current element is less than the pivot
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){

            // Increment the index and swap the elements
            i++;
            swap(ele[i], ele[j]);
            
            // Color the elements
            ele[i].style.background = '#1b67e0';
            if(i != j) ele[j].style.background = '#1b67e0';
            
            // Asynchronous delay
            await waitfor(delay);
       
            // Increment the swap count and update the UI
            swapCount++;
            updateSwapCount(swapCount); 
        }
        else{
            // Color the element if it is not less than the pivot
            ele[j].style.background = '#45eded';
        }

        // Increment the comparison count and update the UI
        compareCount++;
        updatecompareCount(compareCount); 
    }
    i++; 

    // Asynchronous delay
    await waitfor(delay);
    // Swap the pivot element into its place
    swap(ele[i], ele[r]); 

    // Color the elements accordingly
    ele[r].style.background = '#45eded';
    ele[i].style.background = 'limegreen';

    // Asynchronous delay
    await waitfor(delay);
    
    // Color the elements back to default except for the sorted elements
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'limegreen')
            ele[k].style.background = '#85c2ff';
    }

    // Return the index of the pivot element
    return i;
}

// Asynchronous function implementing the Quick Sort algorithm
async function quickSort(ele, l, r){

    // If the left index is less than the right index
    if(l < r){
        // Perform the Lomuto partition
        let pivot_index = await partitionLomuto(ele, l, r);
        // Recursively call quickSort for the two partitions
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        // Color the sorted elements as limegreen
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'limegreen';
            ele[l].style.background = 'limegreen';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    resetArray();
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    compareCount = 0;
    swapCount = 0;
    disableButtons();
    disableSlider();
    await quickSort(ele, l, r);
    enableButtons();
    enableSlider();
});