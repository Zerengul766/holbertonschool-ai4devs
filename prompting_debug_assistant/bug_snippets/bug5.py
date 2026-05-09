# Intended: Print each item in a list
# Issue Type: Syntax error (missing colon)
# Expected: print_items(["apple", "banana"]) => prints each item

def print_items(lst)   # BUG: missing colon ':'
    """
    Iterates through a list and prints
    each element on a separate line.
    """
    if not isinstance(lst, list):
        raise TypeError("Expected a list")
    for item in lst:
        print(item)

print_items(["apple", "banana", "cherry"])
