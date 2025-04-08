// Make sure you're using Node.js v18+ for native fetch support

async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();

        console.log("👤 User Info:");
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`City: ${user.address.city}`);
    } catch (error) {
        console.error("❌ Failed to fetch user:", error.message);
    }
}

getUser(3); // change the ID to fetch different users
