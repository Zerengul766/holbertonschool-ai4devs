function sum(arr) {
    let total;
    for (let i = 0; i <= arr.length; i++) { // BUG
        total += arr[i];
    }
    return total;
}

console.log(sum([1,2,3]));
