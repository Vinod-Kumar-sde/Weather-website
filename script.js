const url = 'https://open-weather13.p.rapidapi.com/city/bengaluru/EN';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '016e00501amsha3f929f49d764d9p1887aejsn0505d5143d48',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};

// Wrapping it inside an async function
async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the async function to execute it
fetchWeather();
