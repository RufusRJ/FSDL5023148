const API_KEY = "90cdd331e2d54e32ac790055251802"; // Replace this with your actual API key

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
            document.getElementById("weather-result").innerHTML = `
                <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
        } else {
            document.getElementById("weather-result").innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}
