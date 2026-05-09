cat > bug5.py << 'EOF'
# Intended: Print each item in a list
def print_items(lst)
    for item in lst:
        print(item)

print_items(["apple", "banana", "cherry"])
EOF
