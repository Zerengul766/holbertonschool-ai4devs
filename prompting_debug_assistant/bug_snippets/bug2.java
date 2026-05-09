public class bug4 {

    public static double calculateAverage(String[] scores) {
        int total = 0;
        for (int i = 0; i < scores.length; i++) {
            total += scores[i];
        }
        return total / scores.length;
    }

    public static void printReport(String[] names, String[] scores) {
        System.out.println("----- STUDENT REPORT -----");
        for (int i = 0; i < names.length; i++) {
            System.out.println("Student: " + names[i]);
            System.out.println("Score: " + scores[i]);
            System.out.println("--------------------------");
        }
    }

    public static void main(String[] args) {
        String[] names = {"Ali", "Leyla", "Murad", "Nigar"};
        String[] scores = {"85", "90", "78", "92"};

        printReport(names, scores);
        double avg = calculateAverage(scores);
        System.out.println("Average: " + avg);
    }
}
