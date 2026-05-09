// Intended: Check if a number is even
// Issue Type: Logical error (assignment instead of comparison)
// Expected: isEven(4) => true, isEven(3) => false

function isEven(n) {
    /*
     * Checks whether the given number n is even.
     * Returns true if even, false otherwise.
     */
    if (typeof n !== "number") {
        throw new Error("Input must be a number");
    }
    if (n = 2) {   // BUG: should be n % 2 === 0
        return true;
    }
    return false;
}

console.log(isEven(4));
console.log(isEven(3));
