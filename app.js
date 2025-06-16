let api_key = "3ce25135d489f1d8e450843c48462c8c";
let showData = document.getElementById("showData");
let input = document.getElementById("inputBox");

let searchWeather = async () => {
  try {
    showData.innerHTML = `<div class="spinner-grow text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>`;
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`;
    let respnse = await fetch(api_url);
    let data = await respnse.json();
    showDataDiv(data);
  } catch (error) {
    console.log(error);
  }
};

let showDataDiv = (data) => {
    if(data.cod === "404") {
        showData.innerHTML = `<h2>${data.message}</h2>`;
    }
    else {
      showData.innerHTML = `
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="weather-card bg-light rounded p-3 shadow">
          <div class="d-flex align-items-center justify-content-center gap-2 mb-3">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather-icon">
            <div>
              <h2 class="mb-0">${data.name}</h2>
              <small class="text-muted">${data.sys.country}</small>
            </div>
          </div>
          <h3>${data.main.temp}°C</h3>
          <p>
            Feels like ${data.main.feels_like}°C<br>
            Humidity: ${data.main.humidity}%
          </p>
        </div>
      </div>
    </div>
  </div>
`;

    
    }
};
