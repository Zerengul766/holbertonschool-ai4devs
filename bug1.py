def last_items(items, n):
    return items[len(items)-n:len(items)+1]  # BUG

print(last_items([1,2,3,4], 2))
