# Bug Descriptions

## bug1.py — Off-by-one error
Intended behavior: Return the last n items of a list.
Bug: `len(items)+1` is incorrect in the slice, it goes out of bounds.

## bug2.py — Runtime exception
Intended behavior: Divide two numbers and return the result.
Bug: Division by zero causes a runtime error when b=0.

## bug3.js — Loop logic error
Intended behavior: Sum all elements in an array.
Bug: `i <= arr.length` goes one index too far, accessing undefined.

## bug4.js — Logical error
Intended behavior: Check if a number is even.
Bug: `n = 2` is assignment, not comparison. Should be `n % 2 === 0`.

## bug5.py — Syntax error
Intended behavior: Print each item in a list.
Bug: Missing colon `:` after function definition `def print_items(lst)`.
