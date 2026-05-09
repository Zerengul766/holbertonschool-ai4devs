// Intended: Fetch user data and return names in uppercase
// Issue Type: Async/Await error
// Expected: Returns array of uppercase names from API

async function getUserNames(url) {
    /*
     * Fetches JSON data from the given URL.
     * Maps over users and returns their names in uppercase.
     * Must properly await async operations.
     */
    const response = fetch(url);        // BUG: missing await
    const data = response.json();       // BUG: missing await
    const names = data.map(user => user.name.toUpperCase());
    return names;
}

const result = getUserNames("https://jsonplaceholder.typicode.com/users");
console.log("Names:", result);
