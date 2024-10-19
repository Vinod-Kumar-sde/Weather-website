const container = document.querySelector('.card');
const search = document.querySelector('.search button');

const weather = document.querySelector('.weather');
const weatherData = document.querySelector('.details');

const searchBox = document.querySelector('.search input');
const resultDiv = document.querySelector('.weather .city');

// Display input value (city) in the resultDiv
searchBox.addEventListener('input', function() {
    const input = searchBox.value.toUpperCase();
    resultDiv.textContent = `${input}`;
});

// Function to fetch and display weather data
const fetchWeather = () => {
    const APIKey = 'b12cf716a8687424f749654e9e871469';
    const city = searchBox.value;
    if (city == '') return;

    // Fetch weather data from the API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        // Get the necessary DOM elements
        const image = document.querySelector('.weather img');
        const temperature = document.querySelector('.weather .temp');
        const cityElement = document.querySelector('.weather .city');
        const description = document.querySelector('.weather .description');
        const humidityElement = document.querySelector('.weather .humidity');
        const windElement = document.querySelector('.weather .wind');

        // Set the weather icon based on conditions
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Clouds':
                image.src = 'images/clouds.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Humidity':
                image.src = 'images/humidity.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Mist':
            case 'Haze':
                image.src = 'images/mist.png';
                break;
            default:
                image.src = 'images/clouds.png';
        }

        // Display weather information
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°c</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidityElement.innerHTML = `${json.main.humidity}%`;
        // windElement.innerHTML = `${parseInt(json.wind.speed)} km/h`;
        windElement.innerHTML = `${parseInt(json.wind.speed * 3.6)} km/h`;

    });
};

// Trigger search on click
search.addEventListener('click', fetchWeather);

// Trigger search when pressing "Enter"
searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});
