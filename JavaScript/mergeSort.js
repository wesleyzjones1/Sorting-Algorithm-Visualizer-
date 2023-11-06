/* Merge sort is a divide-and-conquer algorithm that divides the input array into 
smaller subarrays, sorts them individually, and then merges them back into the 
original array in a sorted manner. */

async function merge(ele, low, mid, high){

    // Calculate the sizes of the two subarrays
    const n1 = mid - low + 1;
    const n2 = high - mid;

    // Initialize arrays to hold the elements of the subarrays
    let left = new Array(n1);
    let right = new Array(n2);

    // Store the elements from the original array into the left and right subarrays
    for(let i = 0; i < n1; i++){
        await waitfor(delay);
        ele[low + i].style.background = '#c93524'; // Color the left subarray elements
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitfor(delay);
        ele[mid + 1 + i].style.background = '#1b67e0'; // Color the right subarray elements
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitfor(delay);

    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitfor(delay);

        compareCount++;
        updatecompareCount(compareCount); 
        
        // Compare elements from the left and right subarrays and merge them back into the original array
        if(parseInt(left[i]) <= parseInt(right[j])){

            // If the element from the left subarray is smaller, place it back into the original array
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'limegreen'; // Color the sorted elements in the original array
            }
            else{
                ele[k].style.background = '#45eded'; // Color the intermediate elements during sorting
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{

            swapCount++;
            updateSwapCount(swapCount); // Update the swap count

            // If the element from the right subarray is smaller, place it back into the original array
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'limegreen'; // Color the sorted elements in the original array
            }
            else{
                ele[k].style.background = '#45eded'; // Color the intermediate elements during sorting
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    // Copy the remaining elements of the left subarray back into the original array
    while(i < n1){
        await waitfor(delay);

        if((n1 + n2) === ele.length){
            ele[k].style.background = 'limegreen'; // Color the sorted elements in the original array
        }
        else{
            ele[k].style.background = '#45eded'; // Color the intermediate elements during sorting
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    // Copy the remaining elements of the right subarray back into the original array
    while(j < n2){
        await waitfor(delay);

        if((n1 + n2) === ele.length){
            ele[k].style.background = 'limegreen'; // Color the sorted elements in the original array
        }
        else{
            ele[k].style.background = '#45eded'; // Color the intermediate elements during sorting
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

// Merge sort function to divide the array and call the merge function for sorting
async function mergeSort(ele, l, r){

    if(l >= r){
        return; // Base case: Return if the subarray has only one element
    }
    const m = l + Math.floor((r - l) / 2); // Calculate the mid point of the array

    // Recursively call mergeSort for the left and right subarrays
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);

    // Call the merge function to merge the sorted subarrays
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    compareCount = 0;
    swapCount = 0;
    resetArray()
    disableButtons();
    disableSlider();
    await mergeSort(ele, l, r);
    enableButtons();
    enableSlider();
});