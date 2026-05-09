cat > bug_descriptions.md << 'EOF'
## Bug 1 – bug1.py
**Intended Behavior**: Return the last n items of a list.
**Issue Type**: Off-by-one error.
**Notes**: `len(items)+1` in the slice goes out of bounds.

## Bug 2 – bug2.py
**Intended Behavior**: Divide two numbers and return the result.
**Issue Type**: Runtime exception.
**Notes**: Division by zero causes a crash when b=0.

## Bug 3 – bug3.js
**Intended Behavior**: Sum all elements in an array.
**Issue Type**: Loop logic error.
**Notes**: `i <= arr.length` goes one index too far, accessing undefined.

## Bug 4 – bug4.js
**Intended Behavior**: Check if a number is even.
**Issue Type**: Logical error.
**Notes**: `n = 2` is assignment not comparison, should be `n % 2 === 0`.

## Bug 5 – bug5.py
**Intended Behavior**: Print each item in a list.
**Issue Type**: Syntax error.
**Notes**: Missing colon `:` after function definition `def print_items(lst)`.
EOF
