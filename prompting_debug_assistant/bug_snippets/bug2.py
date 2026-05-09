# Intended: Divide two numbers and return the result
# Issue Type: Runtime exception (ZeroDivisionError)
# Expected: divide(10, 2) => 5.0

def divide(a, b):
    """
    Divides a by b and returns the result.
    Should handle edge cases like zero division.
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be a number")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be a number")
    return a / b  # BUG: no check for b == 0

print(divide(10, 0))  # runtime error
