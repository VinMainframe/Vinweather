function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const weatherInfo = document.getElementById('weather-info');

  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
  const city = cityInput.value;

  if (!city) {
    alert('Please enter a city.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather } = data;
      const temperature = main.temp;
      const description = weather[0].description;

      weatherInfo.innerHTML = `<h2>${name}</h2>
                               <p>${temperature}°C, ${description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = 'Error fetching weather data.';
    });
}
