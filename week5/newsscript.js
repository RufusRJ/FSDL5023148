const API_KEY = "7673f00d7b3b4bd5899b74659d93f32b"; // Replace with your actual API key

// Fetch the news based on the selected category
async function getNews() {
    const category = document.getElementById("category").value;
    const URL = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data); // Log the entire response to check if data is fetched correctly

        if (response.status === 200) {
            let newsHTML = '';
            data.articles.forEach(article => {
                newsHTML += `
                    <div class="news-item">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more...</a>
                    </div>
                `;
            });

            // Display news results
            document.getElementById("news-result").innerHTML = newsHTML;

            // Apply visual effects based on the category
            applyNewsEffects(category);
        } else {
            console.error("Error:", data.message);  // Log any error message from the API
            document.getElementById("news-result").innerHTML = `<p>No news found for this category.</p>`;
        }
    } catch (error) {
        console.log("Error fetching news data:", error);
        alert("There was an error fetching the news data. Please try again later.");
    }
}

// Apply visual effects based on the news category
function applyNewsEffects(category) {
    const effectsContainer = document.getElementById("news-effects");
    effectsContainer.innerHTML = ""; // Clear previous effects

    if (category === "general" || category === "business") {
        createParticles("📰", 10); // Newspaper icon for General and Business
    } else if (category === "sports") {
        createParticles("⚽", 20); // Soccer ball for Sports
    } else if (category === "technology") {
        createParticles("💻", 15); // Laptop for Technology
    } else if (category === "health") {
        createParticles("💪", 10); // Muscle for Health
    } else if (category === "science") {
        createParticles("🔬", 10); // Microscope for Science
    } else if (category === "entertainment") {
        createParticles("🎬", 15); // Clapperboard for Entertainment
    }
}

// Function to create floating particles representing the category
function createParticles(symbol, count) {
    const effectsContainer = document.getElementById("news-effects");

    for (let i = 0; i < count; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.innerHTML = symbol;
        particle.style.position = "absolute";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.fontSize = "30px";
        particle.style.opacity = Math.random();

        effectsContainer.appendChild(particle);

        animateParticle(particle);
    }
}

// Function to animate the particles
function animateParticle(particle) {
    let speed = Math.random() * 2 + 1;
    let angle = Math.random() * 360;
    let xVelocity = Math.cos(angle) * speed;
    let yVelocity = Math.sin(angle) * speed;

    function move() {
        let rect = particle.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.left > window.innerWidth) {
            particle.remove();
        } else {
            particle.style.top = rect.top + yVelocity + "px";
            particle.style.left = rect.left + xVelocity + "px";
            requestAnimationFrame(move);
        }
    }
    move();
}
