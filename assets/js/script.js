var date = dayjs().format('M/DD/YYYY');
var dateTxtEl = document.querySelector('#date');

var day1Date = dayjs().add(1, 'day').format('M/DD/YYYY');
var day2Date = dayjs().add(2, 'day').format('M/DD/YYYY');
var day3Date = dayjs().add(3, 'day').format('M/DD/YYYY');
var day4Date = dayjs().add(4, 'day').format('M/DD/YYYY');
var day5Date = dayjs().add(5, 'day').format('M/DD/YYYY');

var day1DateEl = document.querySelector('#day-1-date');
var day2DateEl = document.querySelector('#day-2-date');
var day3DateEl = document.querySelector('#day-3-date');
var day4DateEl = document.querySelector('#day-4-date');
var day5DateEl = document.querySelector('#day-5-date');

dateTxtEl.textContent = date;
day1DateEl.textContent = day1Date;
day2DateEl.textContent = day2Date;
day3DateEl.textContent = day3Date;
day4DateEl.textContent = day4Date;
day5DateEl.textContent = day5Date;

var userInput = document.getElementById('user-input');
var searchBtn = document.getElementById('search-btn');
const apiKey = 'ee42dd465a18efa9a30567ac0861288a';
var geoUrl = '';
var fiveDayUrl = '';
var currentUrl = '';

var savedSearches = [];

var cityName = '';
var cityState = '';
var cityCountry = '';
var cityLat = '';
var cityLon = '';

var dayTemp1 = '';
var dayHumidity1 = '';
var dayWeatherDesc1 = '';
var dayweatherIcon1 = '';
var dayWindDeg1 = '';
var dayWindSpeed1 = '';

var dayTemp2 = '';
var dayHumidity2 = '';
var dayWeatherDesc2 = '';
var dayweatherIcon2 = '';
var dayWindDeg2 = '';
var dayWindSpeed2 = '';

var dayTemp3 = '';
var dayHumidity3 = '';
var dayWeatherDesc3 = '';
var dayweatherIcon3 = '';
var dayWindDeg3 = '';
var dayWindSpeed3 = '';

var dayTemp4 = '';
var dayHumidity4 = '';
var dayWeatherDesc4 = '';
var dayweatherIcon4 = '';
var dayWindDeg4 = '';
var dayWindSpeed4 = '';

var dayTemp5 = '';
var dayHumidity5 = '';
var dayWeatherDesc5 = '';
var dayweatherIcon5 = '';
var dayWindDeg5 = '';
var dayWindSpeed5 = '';

var currTempMax = '';
var currTempMin = '';
var currHumidity = '';
var currDescription = '';
var currIcon = '';
var currWindDeg = '';
var currWindSpeed = '';

function geoApi(geoUrl) {

  fetch(geoUrl)
    .then(function (response) {

      if (response.status !== 200) {
        console.log(response.status)
      }
      return response.json();
    })
    .then(function (data) {

      cityName = data[0].local_names.en;
      cityState = data[0].state;
      cityCountry = data[0].country;
      cityLat = data[0].lat;
      cityLon = data[0].lon;

      var savedCity = {
        city: cityName,
        state: cityState,
        country: cityCountry,
        lat: cityLat,
        lon: cityLon
      }

      savedSearches.unshift(savedCity);
      savedSearches.length = 8;
      localStorage.setItem('saved-cities', JSON.stringify(savedSearches));

      fiveDayApi(fiveDayUrl);
      currentWeather(currentUrl);
    });
}

function fiveDayApi(fiveDayUrl) {
  fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&units=imperial&appid=' + apiKey;
  fetch(fiveDayUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(response.status)
      }
      return response.json();
    })
    .then(function (data) {      
      dayTemp1 = data.list[4].main.temp;
      dayHumidity1 = data.list[4].main.humidity;
      dayWeatherDesc1 = data.list[4].weather[0].description;
      dayweatherIcon1 = data.list[4].weather[0].icon;
      dayWindDeg1 = data.list[4].wind.deg;
      dayWindSpeed1 = data.list[4].wind.speed
      
      dayTemp2 = data.list[12].main.temp;
      dayHumidity2 = data.list[12].main.humidity;
      dayWeatherDesc2 = data.list[12].weather[0].description;
      dayweatherIcon2 = data.list[12].weather[0].icon;
      dayWindDeg2 = data.list[12].wind.deg;
      dayWindSpeed2 = data.list[12].wind.speed

      dayTemp3 = data.list[20].main.temp;
      dayHumidity3 = data.list[20].main.humidity;
      dayWeatherDesc3 = data.list[20].weather[0].description;
      dayweatherIcon3 = data.list[20].weather[0].icon;
      dayWindDeg3 = data.list[20].wind.deg;
      dayWindSpeed3 = data.list[20].wind.speed

      dayTemp4 = data.list[28].main.temp;
      dayHumidity4 = data.list[28].main.humidity;
      dayWeatherDesc4 = data.list[28].weather[0].description;
      dayweatherIcon4 = data.list[28].weather[0].icon;
      dayWindDeg4 = data.list[28].wind.deg;
      dayWindSpeed4 = data.list[28].wind.speed

      dayTemp5 = data.list[36].main.temp;
      dayHumidity5 = data.list[36].main.humidity;
      dayWeatherDesc5 = data.list[36].weather[0].description;
      dayweatherIcon5 = data.list[36].weather[0].icon;
      dayWindDeg5 = data.list[36].wind.deg;
      dayWindSpeed5 = data.list[36].wind.speed

    });
}

function currentWeather(currentUrl) {
  currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + cityLat + '&lon=' + cityLon + '&units=imperial&appid=' + apiKey;
  fetch(currentUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(response.status)
      }
      return response.json();
    })
    .then(function (data) {
      currTempMax = data.main.temp_max;
      currTempMin = data.main.temp_min;
      currHumidity = data.main.humidity;
      currDescription = data.weather[0].description;
      currIcon = data.weather[0].icon;
      currWindDeg = data.wind.deg;
      currWindSpeed = data.wind.speed;
    });
}

function createButtons() {
  for (var i = 0; i < savedSearches.length; i++) {
    
  }
}

searchBtn.addEventListener("click", function (event) {
  
  var retreiveUserCity = JSON.parse(localStorage.getItem('user-city'));
  geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput.value.trim() + '&limit=1&units=imperial&appid=' + apiKey;

  geoApi(geoUrl);
  event.preventDefault();
});