function findLargestNumber(numbers) {
    const largest = numbers.reduce((max, current) => {
        if (current > max) {
            return current;
        }

        return max;
    });

    return largest;
}


function printNumbers(numbers) {
    console.log("Numbers in array:");

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    console.log("----------------");
}


const firstArray = [4, 8, 15, 16, 23, 42];
const secondArray = [100, 55, 78];
const thirdArray = [];

printNumbers(firstArray);
console.log(
    "Largest:",
    findLargestNumber(firstArray)
);

printNumbers(secondArray);
console.log(
    "Largest:",
    findLargestNumber(secondArray)
);

printNumbers(thirdArray);
console.log(
    "Largest:",
    findLargestNumber(thirdArray)
);
