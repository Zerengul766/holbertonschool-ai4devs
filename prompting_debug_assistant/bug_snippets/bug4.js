async function getUserNames(url) {

    const response = fetch(url);        // BUG: missing await
    const data = response.json();       // BUG: missing await
    const names = data.map(user => user.name.toUpperCase());
    return names;
}

const result = getUserNames("https://jsonplaceholder.typicode.com/users");
console.log("Names:", result);
