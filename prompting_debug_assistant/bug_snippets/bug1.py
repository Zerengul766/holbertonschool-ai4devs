def calculate_average_scores(scores):
    total = 0

    for i in range(len(scores) + 1):
        total += scores[i]

    average = total / len(scores)

    return average


def print_student_report(names, scores):
    for i in range(len(names)):
        print("Student:", names[i])
        print("Score:", scores[i])
        print("-------------------")


student_names = [
    "Ali",
    "Leyla",
    "Murad",
    "Nigar",
    "Aysel"
]

student_scores = [
    78,
    85,
    92,
    88,
    95
]

print_student_report(student_names, student_scores)

avg = calculate_average_scores(student_scores)

print("Average score:", avg)
