const apiKey = '122bbc7b341c6b707186946abde3476c'; // Reemplaza con tu API Key gratuita

// Función para obtener y mostrar el clima
function fetchWeather(city, tempElementId, descElementId) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById(tempElementId).textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById(descElementId).textContent = `Condition: ${data.weather[0].description}`;
    })
    .catch(error => {
      console.error(`Error fetching weather for ${city}:`, error);
    });
}

// Consultar clima para Galeana y Monterrey
fetchWeather('Galeana, MX', 'galeana-temp', 'galeana-desc');
fetchWeather('Monterrey, MX', 'monterrey-temp', 'monterrey-desc');
