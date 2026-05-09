
## Bug 1 – bug1.py
**Intended Behavior**: Calculate average score and print student report.
**Issue Type**: Off-by-one error.
**Notes**: Loop uses range(len(scores)+1), causing IndexError. Change to len(scores).

## Bug 2 – bug2.js
Intended Behavior: Calculate total price with discount percentage applied and print receipt.
Issue Type: Logical error.
Notes: discountPercent is used as-is (e.g. 20), but should be divided by 100 before multiplying. Result is heavily incorrect.

## Bug 3 – bug3.js
**Intended Behavior**: Find the largest number in an array.
**Issue Type**: Runtime exception.
**Notes**: reduce() without initial value crashes on empty array. Add initial value or handle empty case.

## Bug 4 – bug4.js
**Intended Behavior**: Fetch product data and return titles in lowercase.
**Issue Type**: Async/Await misuse.
**Notes**: Missing await before fetch() and response.json(). Also getProductTitles() call missing await in printReport().

## Bug 5 – bug5.c
**Intended Behavior**: Calculate average score from a list of string values and print the result.
**Issue Type**: Misuse of data types.
**Notes**: scores array contains strings (char[]), but code adds them directly as numbers. Must use atof() to convert strings to double before arithmetic.
