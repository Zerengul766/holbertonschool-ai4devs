function calculateTotalPrice(prices, discountPercent) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    let discountAmount = total * discountPercent;
    let finalPrice = total - discountAmount;
    return finalPrice;
}

function printReceipt(items, prices) {
    console.log("----- RECEIPT -----");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i] + " - " + prices[i] + " AZN");
    }
    console.log("-------------------");
}

const shoppingItems = ["Keyboard", "Mouse", "Monitor", "USB Cable"];
const shoppingPrices = [45, 25, 300, 10];
const discount = 20;

printReceipt(shoppingItems, shoppingPrices);
const result = calculateTotalPrice(shoppingPrices, discount);
console.log("Final price:", result, "AZN");
