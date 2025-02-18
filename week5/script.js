const API_KEY = "90cdd331e2d54e32ac790055251802"; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    
    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (response.status === 200) {
            const weatherCondition = data.current.condition.text.toLowerCase();
            document.getElementById("weather-result").innerHTML = `
                <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Weather: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;

            applyWeatherEffects(weatherCondition);
        } else {
            document.getElementById("weather-result").innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

// Function to Apply Weather Effects
function applyWeatherEffects(weatherCondition) {
    const effectsContainer = document.getElementById("weather-effects");
    effectsContainer.innerHTML = ""; // Clear previous effects

    if (weatherCondition.includes("rain")) {
        createParticles("💧", 50);
    } else if (weatherCondition.includes("sun")) {
        createParticles("☀️", 1);
    } else if (weatherCondition.includes("cloud")) {
        createParticles("☁️", 5);
    } else if (weatherCondition.includes("snow")) {
        createParticles("❄️", 50);
    } else if (weatherCondition.includes("storm") || weatherCondition.includes("thunder")) {
        createParticles("⚡", 3);
    }
}

// Function to Create Particles (Raindrops, Snowflakes, etc.)
function createParticles(symbol, count) {
    const effectsContainer = document.getElementById("weather-effects");

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

// Function to Animate Particles
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
