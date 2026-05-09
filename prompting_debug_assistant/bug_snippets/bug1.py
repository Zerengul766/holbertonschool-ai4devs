# Intended: Return the last n items of a list
# Issue Type: Off-by-one error
# Expected: last_items([1,2,3,4], 2) => [3, 4]

def last_items(items, n):
    """
    Returns the last n elements of a list.
    Uses slicing to extract elements from the end.
    """
    if not isinstance(items, list):
        raise TypeError("Expected a list")
    if n <= 0:
        return []
    return items[len(items)-n:len(items)+1]  # BUG: +1 is incorrect

result = last_items([1, 2, 3, 4], 2)
print("Result:", result)
