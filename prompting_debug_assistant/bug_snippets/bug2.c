#include <stdio.h>

void print_receipt(char items[][50], int prices[], int count) {
    printf("----- RECEIPT -----\n");
    for (int i = 0; i < count; i++) {
        printf("%s - %d AZN\n", items[i], prices[i]);
    }
    printf("-------------------\n");
}

double calculate_total(int prices[], int count, int discount_percent) {
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += prices[i];
    }
    double discount_amount = total * discount_percent;
    double final_price = total - discount_amount;
    return final_price;
}

int main() {
    char items[][50] = {"Keyboard", "Mouse", "Monitor", "USB Cable"};
    int prices[] = {45, 25, 300, 10};
    int count = 4;
    int discount = 20;

    print_receipt(items, prices, count);
    double result = calculate_total(prices, count, discount);
    printf("Final price: %.2f AZN\n", result);

    return 0;
}
