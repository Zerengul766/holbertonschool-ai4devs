## Bug 1 – bug1.py

Intended Behavior: Return a list with the last n elements.
Issue Type: Off-by-one error.
Notes: Loop uses len(items)+1, causing IndexError. Change to len(items).

## Bug 2 – bug2.py

Intended Behavior: Calculate factorial of n (factorial(0)=1).
Issue Type: Logical error + Off-by-one loop issue.
Notes: Starts at 0 (incorrect multiplication identity) and excludes n. Set result = 1 and use range(1, n+1).

## Bug 3 – bug3.js

Intended Behavior: Return mean of numbers rounded to 2 decimal places.
Issue Type: Runtime exception + Logical error.
Notes: reduce() used without initial value causes crash on empty arrays. Also invalid values (NaN/null) are not properly handled. Use Number.isFinite() and initial value 0.

## Bug 4 – bug4.js

Intended Behavior: Fetch JSON and return names in uppercase.
Issue Type: Async/Await misuse (runtime error).
Notes: Promises are not awaited. Missing await before fetch() and response.json(), causing .map() to run on unresolved Promise.

## Bug 5 – bug5.py

**Intended Behavior**: Compute CSV averages and write to new CSV.
**Issue Type**: Type mismatch.
**Notes**: CSV values are strings. Convert to float() and use with-blocks.
