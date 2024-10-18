const Container = document.querySelector('.card');
const search = document.querySelector('.search button');

const weather = document.querySelector('.weather');
const weatherData= document.querySelector('.details');

const searchBox = document.querySelector('.search input');
  const resultDiv = document.querySelector('.weather .city');

  searchBox.addEventListener('input', function() {
    const input = searchBox.value.toUpperCase();
    resultDiv.textContent = `${input}`;
  });

search.addEventListener('click', () => {
    const APIKey = 'b12cf716a8687424f749654e9e871469';
    const city = document.querySelector('.search input').value;
    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        const Image = document.querySelector('.weather img');
        const temperature = document.querySelector('.weather .temp');
        const City = document.querySelector('.weather .city');
        const description = document.querySelector('.weather .description');
        const humidity = document.querySelector('.weather .humidity');
        const wind = document.querySelector('.weather .wind');

        switch(json.weather[0].main) {
            case 'Clear':
                Image.src = 'images/clear.png';
                break;
            case 'Clouds':
                Image.src = 'images/clouds.png';
                break;
            case 'Rainy':
                Image.src = 'images/rain.png';
                break;
            case 'Humid':
                Image.src = 'images/humidity.png';
                break;
            case 'Snowy':
                Image.src = 'images/snow.png';
                break;
            case 'Mist':
                Image.src = 'images/mist.png';
                break;
            case 'Haze':
                Image.src = 'images/mist.png';
                break;
            default:
                image.src = 'images/clouds.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°c</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        Humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.temp)}`;
        
    });
});
