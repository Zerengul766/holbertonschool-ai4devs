// Intended: Sum all elements in an array
// Issue Type: Loop logic error (off-by-one)
// Expected: sum([1,2,3]) => 6

function sum(arr) {
    /*
     * Iterates through the array and accumulates
     * the total sum of all numeric elements.
     */
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    let total;
    for (let i = 0; i <= arr.length; i++) { // BUG: should be i < arr.length
        total += arr[i];
    }
    return total;
}

console.log(sum([1, 2, 3]));
