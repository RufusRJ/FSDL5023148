// fetch-example.js
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log("User data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getUser();
