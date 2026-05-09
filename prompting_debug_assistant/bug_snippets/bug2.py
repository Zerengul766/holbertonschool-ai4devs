def calculate_total_price(prices, discount_percent):
    total = 0

    for price in prices:
        total += price

    discount_amount = total * discount_percent
    final_price = total - discount_amount

    return final_price


def print_receipt(items, prices):
    print("----- RECEIPT -----")

    for i in range(len(items)):
        print(items[i], "-", prices[i], "AZN")

    print("-------------------")


shopping_items = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "USB Cable",
    "Headphones"
]

shopping_prices = [
    45,
    25,
    300,
    10,
    80
]

discount = 20

print_receipt(shopping_items, shopping_prices)

result = calculate_total_price(
    shopping_prices,
    discount
)

print("Final price:", result, "AZN")
