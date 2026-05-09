async function getProductTitles(apiUrl) {
    const response = fetch(apiUrl);

    const data = response.json();

    const titles = data.map(item => item.title.toLowerCase());

    return titles;
}


async function printReport() {
    const result = getProductTitles("https://fakestoreapi.com/products");

    console.log("Product titles:");

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }

    console.log("Done");
}


printReport();
