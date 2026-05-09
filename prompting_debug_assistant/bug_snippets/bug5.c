void print_items(char items[][50], int count) {
    printf("Items in list:\n");
    for (int i = 0; i < count; i++) {
        printf("- %s\n", items[i]);
    }
    printf("-------------------\n");
}

double calculate_average(char scores[][10], int count) {
    double total = 0;
    for (int i = 0; i < count; i++) {
        total += scores[i];
    }
    return total / count;
}

int main() {
    char names[][50] = {"Ali", "Leyla", "Murad", "Nigar"};
    char scores[][10] = {"85", "90", "78", "92"};
    int count = 4;

    print_items(names, count);

    double avg = calculate_average(scores, count);
    printf("Average score: %.2f\n", avg);

    return 0;
}
