// defining containers
var weatherContainer = document.querySelector('.weather-info')
var asideContainer = document.getElementById('aside-container');
var mainContainer = document.getElementById('main-container');
// date from dayjs and element where it's diplayed
var date = dayjs().format('M/DD/YYYY');
var dateTxtEl = document.querySelector('#date');
// date for all 5 days
var day1Date = dayjs().add(1, 'day').format('M/DD/YYYY');
var day2Date = dayjs().add(2, 'day').format('M/DD/YYYY');
var day3Date = dayjs().add(3, 'day').format('M/DD/YYYY');
var day4Date = dayjs().add(4, 'day').format('M/DD/YYYY');
var day5Date = dayjs().add(5, 'day').format('M/DD/YYYY');
// element that will hold date text
var day1DateEl = document.querySelector('#day-1-date');
var day2DateEl = document.querySelector('#day-2-date');
var day3DateEl = document.querySelector('#day-3-date');
var day4DateEl = document.querySelector('#day-4-date');
var day5DateEl = document.querySelector('#day-5-date');
// variables for elements of the searched city
var cityNameTxt = document.getElementById('city-name');
var currIconEl = document.getElementById('current-icon');
var currDescEl = document.getElementById('current-description');
var currTempMaxEl = document.getElementById('current-temp-max');
var currTempMinEl = document.getElementById('current-temp-min');
var currWindSpeedEl = document.getElementById('current-wind');
var currHumidityEl = document.getElementById('current-humidity');
// variables for weather icons for 5-day-forecast
var dayweatherIcon1El = document.getElementById('icon-1');
var dayweatherIcon2El = document.getElementById('icon-2');
var dayweatherIcon3El = document.getElementById('icon-3');
var dayweatherIcon4El = document.getElementById('icon-4');
var dayweatherIcon5El = document.getElementById('icon-5');
// variables for weather descriptions for 5-day-forecast
var dayWeatherDesc1El = document.getElementById('day-1-desc');
var dayWeatherDesc2El = document.getElementById('day-2-desc');
var dayWeatherDesc3El = document.getElementById('day-3-desc');
var dayWeatherDesc4El = document.getElementById('day-4-desc');
var dayWeatherDesc5El = document.getElementById('day-5-desc');
// variables for temperatures for 5-day-forecast
var dayTemp1El = document.getElementById('day-1-temp');
var dayTemp2El = document.getElementById('day-2-temp');
var dayTemp3El = document.getElementById('day-3-temp');
var dayTemp4El = document.getElementById('day-4-temp');
var dayTemp5El = document.getElementById('day-5-temp');
// variables for wind for 5-day-forecast
var dayWindSpeed1El = document.getElementById('day-1-wind');
var dayWindSpeed2El = document.getElementById('day-2-wind');
var dayWindSpeed3El = document.getElementById('day-3-wind');
var dayWindSpeed4El = document.getElementById('day-4-wind');
var dayWindSpeed5El = document.getElementById('day-5-wind');
// variables for hudity for 5-day-forecast
var dayHumidity1El = document.getElementById('day-1-humidity');
var dayHumidity2El = document.getElementById('day-2-humidity');
var dayHumidity3El = document.getElementById('day-3-humidity');
var dayHumidity4El = document.getElementById('day-4-humidity');
var dayHumidity5El = document.getElementById('day-5-humidity');
// variables for form input and button
var userInput = document.getElementById('user-input');
var searchBtn = document.getElementById('search-btn');
// apikey for fetch
const apiKey = 'ee42dd465a18efa9a30567ac0861288a';
// blank variables for global scope use
var geoUrl = '';
var fiveDayUrl = '';
var currentUrl = '';
// variables for the container and buttons of the recent searches
var recentBtn = document.querySelector('.recent-btn');
var recentSearches = document.getElementById('recent-searches');
// empty array for saved searches for global scope use
var savedSearches = [];
// blank variables for current search city location for global scope
var cityName = '';
var cityState = '';
var cityCountry = '';
var cityLat = '';
var cityLon = '';
// blank variables day 1 forecast results for global scope
var dayTemp1 = '';
var dayHumidity1 = '';
var dayWeatherDesc1 = '';
var dayweatherIcon1 = '';
var iconUrl1 = '';
var dayWindDeg1 = '';
var dayWindSpeed1 = '';
// blank variables day 2 forecast results for global scope
var dayTemp2 = '';
var dayHumidity2 = '';
var dayWeatherDesc2 = '';
var dayweatherIcon2 = '';
var iconUrl2 = '';
var dayWindDeg2 = '';
var dayWindSpeed2 = '';
// blank variables day 3 forecast results for global scope
var dayTemp3 = '';
var dayHumidity3 = '';
var dayWeatherDesc3 = '';
var dayweatherIcon3 = '';
var iconUrl3 = '';
var dayWindDeg3 = '';
var dayWindSpeed3 = '';
// blank variables day 4 forecast results for global scope
var dayTemp4 = '';
var dayHumidity4 = '';
var dayWeatherDesc4 = '';
var dayweatherIcon4 = '';
var iconUrl4 = '';
var dayWindDeg4 = '';
var dayWindSpeed4 = '';
// blank variables day 5 forecast results for global scope
var dayTemp5 = '';
var dayHumidity5 = '';
var dayWeatherDesc5 = '';
var dayweatherIcon5 = '';
var iconUrl5 = '';
var dayWindDeg5 = '';
var dayWindSpeed5 = '';
// blank variables current city search values for global scope
var currTempMax = '';
var currTempMin = '';
var currHumidity = '';
var currDescription = '';
var currIcon = '';
var currIconUrl;
var currWindDeg = '';
var currWindSpeed = '';
// blank variable to store searched city location details
var savedCity = '';
// funciton to fetch location url and store data
function geoApi(geoUrl) {
// fetch function for location
  fetch(geoUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(response.status)
        return;
      }
      return response.json();
    })
    .then(function (data) {
      // the data is being searched for relevant information to store, and verifying data is usable
      if (data === undefined) {
        alert('Unable to locate weather data, please try again')
        return;
      } else if (data.length !== 0) {
        // checks to see if 1 of 2 name keys exist to store city name
        if (data[0].name !== undefined) {
          cityName = data[0].name;
        } else if (data[0].local_names !== undefined) {
          if (data[0].local_names.en !== undefined) {
            cityName = data[0].local_names.en;
          }
          return;
        }
        // assigns info to blank variables for city location data
        cityState = data[0].state;
        cityCountry = data[0].country;
        cityLat = data[0].lat;
        cityLon = data[0].lon;

        if (cityName === undefined) {
          return;
        }
        // stores city location data as an object
        savedCity = {
          city: cityName,
          state: cityState,
          country: cityCountry,
          lat: cityLat,
          lon: cityLon
        }
      } else {
        // if no data, clears input field and message alert
        userInput.value = '';
        alert('Unable to locate, please try again')
        return;
      }
      // sets the length of the recent searches array so there are the correct number of buttons
      if (savedCity.city !== undefined) {
        var undefIndex = savedSearches.findIndex(x => x === undefined)
        if (undefIndex > 0) {
          savedSearches.length = undefIndex
        } else if (undefIndex === 0) {
          savedSearches.length = 1
        }
        // checks to see if the new search isn't in recent searches, if so, adds to the front, then stores to local storage, otherwise just make buttons
        if (savedSearches.findIndex(x => x.city === savedCity.city) === -1) {
          savedSearches.unshift(savedCity);
          // only saves 10 most recent searches
          if (savedSearches.length >= 10) {
            savedSearches.length = 10;
          }
          localStorage.setItem('saved-cities', JSON.stringify(savedSearches));
          createButtons();
        } else {
          createButtons();
        }
      } else {
        // if undefined, input is erased and alert message pops up
        cityNameTxt.value = '';
        alert('Unable to locate weather data, please try again')
        return;
      }
      // searches for weather data
      fiveDayApi(fiveDayUrl);
      currentWeather(currentUrl);
      return;
    });
}
// api for 5-day-forecast, data taken from object of location data
function fiveDayApi(fiveDayUrl) {
  fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&units=imperial&appid=' + apiKey;
  fetch(fiveDayUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(response.status)
        return;
      }
      return response.json();
    })
    .then(function (data) {
      // stores all the data for the forecast
      if (data !== undefined) {
        dayTemp1 = data.list[4].main.temp;
        dayHumidity1 = data.list[4].main.humidity;
        dayWeatherDesc1 = data.list[4].weather[0].description;
        dayweatherIcon1 = data.list[4].weather[0].icon;
        iconUrl1 = 'https://openweathermap.org/img/wn/' + dayweatherIcon1 + '@2x.png';
        dayWindDeg1 = data.list[4].wind.deg;
        dayWindSpeed1 = data.list[4].wind.speed

        dayTemp2 = data.list[12].main.temp;
        dayHumidity2 = data.list[12].main.humidity;
        dayWeatherDesc2 = data.list[12].weather[0].description;
        dayweatherIcon2 = data.list[12].weather[0].icon;
        iconUrl2 = 'https://openweathermap.org/img/wn/' + dayweatherIcon2 + '@2x.png';
        dayWindDeg2 = data.list[12].wind.deg;
        dayWindSpeed2 = data.list[12].wind.speed

        dayTemp3 = data.list[20].main.temp;
        dayHumidity3 = data.list[20].main.humidity;
        dayWeatherDesc3 = data.list[20].weather[0].description;
        dayweatherIcon3 = data.list[20].weather[0].icon;
        iconUrl3 = 'https://openweathermap.org/img/wn/' + dayweatherIcon3 + '@2x.png';
        dayWindDeg3 = data.list[20].wind.deg;
        dayWindSpeed3 = data.list[20].wind.speed

        dayTemp4 = data.list[28].main.temp;
        dayHumidity4 = data.list[28].main.humidity;
        dayWeatherDesc4 = data.list[28].weather[0].description;
        dayweatherIcon4 = data.list[28].weather[0].icon;
        iconUrl4 = 'https://openweathermap.org/img/wn/' + dayweatherIcon4 + '@2x.png';
        dayWindDeg4 = data.list[28].wind.deg;
        dayWindSpeed4 = data.list[28].wind.speed

        dayTemp5 = data.list[36].main.temp;
        dayHumidity5 = data.list[36].main.humidity;
        dayWeatherDesc5 = data.list[36].weather[0].description;
        dayweatherIcon5 = data.list[36].weather[0].icon;
        iconUrl5 = 'https://openweathermap.org/img/wn/' + dayweatherIcon5 + '@2x.png';
        dayWindDeg5 = data.list[36].wind.deg;
        dayWindSpeed5 = data.list[36].wind.speed;

        day1DateEl.textContent = day1Date;
        dayweatherIcon1El.setAttribute('src', iconUrl1);
        dayWeatherDesc1El.textContent = dayWeatherDesc1;
        dayTemp1El.textContent = dayTemp1 + '° F';
        dayWindSpeed1El.textContent = dayWindSpeed1 + ' mph';
        dayHumidity1El.textContent = dayHumidity1 + ' %';

        day2DateEl.textContent = day2Date;
        dayweatherIcon2El.setAttribute('src', iconUrl2);
        dayWeatherDesc2El.textContent = dayWeatherDesc2;
        dayTemp2El.textContent = dayTemp2 + '° F';
        dayWindSpeed2El.textContent = dayWindSpeed2 + ' mph';
        dayHumidity2El.textContent = dayHumidity2 + ' %';

        day3DateEl.textContent = day3Date;
        dayweatherIcon3El.setAttribute('src', iconUrl3);
        dayWeatherDesc3El.textContent = dayWeatherDesc3;
        dayTemp3El.textContent = dayTemp3 + '° F';
        dayWindSpeed3El.textContent = dayWindSpeed3 + ' mph';
        dayHumidity3El.textContent = dayHumidity3 + ' %';

        day4DateEl.textContent = day4Date;
        dayweatherIcon4El.setAttribute('src', iconUrl4);
        dayWeatherDesc4El.textContent = dayWeatherDesc4;
        dayTemp4El.textContent = dayTemp4 + '° F';
        dayWindSpeed4El.textContent = dayWindSpeed4 + ' mph';
        dayHumidity4El.textContent = dayHumidity4 + ' %';

        day5DateEl.textContent = day5Date;
        dayweatherIcon5El.setAttribute('src', iconUrl5);
        dayWeatherDesc5El.textContent = dayWeatherDesc5;
        dayTemp5El.textContent = dayTemp5 + '° F';
        dayWindSpeed5El.textContent = dayWindSpeed5 + ' mph';
        dayHumidity5El.textContent = dayHumidity5 + ' %';

        return;
      }
    });
}
// searches for current weather data for searched city, data from city location data just saved
function currentWeather(currentUrl) {
  currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + cityLat + '&lon=' + cityLon + '&units=imperial&appid=' + apiKey;
  fetch(currentUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(response.status)
        userInput.value = '';
        alert('Unable to locate, please try again')
        return;
      }
      return response.json();
    })
    .then(function (data) {
      // stores all the current weather data for the search city
      if (data.main !== undefined) {
        currTempMax = data.main.temp_max;
        currTempMin = data.main.temp_min;
        currHumidity = data.main.humidity;
        currDescription = data.weather[0].description;
        currIcon = data.weather[0].icon;
        currIconUrl = 'https://openweathermap.org/img/wn/' + currIcon + '@2x.png';
        currWindDeg = data.wind.deg;
        currWindSpeed = data.wind.speed;
        // if state data is available, print it
        dateTxtEl.textContent = date;
        if (cityState !== undefined) {
          cityNameTxt.textContent = cityName + ', ' + cityState;
        } else {
          cityNameTxt.textContent = cityName;
        }
        // assigns value for all current search values to their elements
        currIconEl.setAttribute('src', currIconUrl);
        currDescEl.textContent = currDescription;
        currTempMaxEl.textContent = currTempMax;
        currTempMinEl.textContent = currTempMin;
        currWindSpeedEl.textContent = currWindSpeed;
        currHumidityEl.textContent = currHumidity;
        // removes the hidden and with class to populate the entire page
        weatherContainer.classList.remove('hidden');
        asideContainer.classList.remove('width40');
      }
    });
}
// create the search buttons from recent searches
function createButtons() {
  // clears previous data
  recentSearches.innerHTML = '';
  if (savedSearches !== null) {
    // iteration to create buttons for each recently searched city
    for (var i = 0; i < savedSearches.length; i++) {
      var newRecentBtn = document.createElement('button');
      if (savedSearches[i] !== null) {
        newRecentBtn.classList.add('recent-btn');
        newRecentBtn.setAttribute('id', 'btn-' + i);
        newRecentBtn.textContent = savedSearches[i].city;
        newRecentBtn.setAttribute('lat', savedSearches[i].lat);
        newRecentBtn.setAttribute('lon', savedSearches[i].lon);
        recentSearches.appendChild(newRecentBtn);
      }
    } return;
  }
}
// pulls recent searches from local storage
function retreiveSavedSearches() {
  if (JSON.parse(localStorage.getItem('saved-cities')) !== null) {
    savedSearches = JSON.parse(localStorage.getItem('saved-cities'));
  }
}
// runs at page startup
function init() {
  retreiveSavedSearches();
  createButtons();
  return;
}
// event listener for search button click which should also work as a form submission, sets api url, and then runs the location api, and prevents default behavior of refreshing the page
searchBtn.addEventListener('click', function (event) {
  geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + userInput.value.trim() + '&limit=1&units=imperial&appid=' + apiKey;

  geoApi(geoUrl);
  event.preventDefault();
  return;
});
// click event listener for the recent search container, looks for the that button's text, enters in the input box, and runs location api
recentSearches.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches('button')) {
    console.log(userInput.value)
    userInput.value = element.textContent;

    geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + userInput.value.trim() + '&limit=1&units=imperial&appid=' + apiKey;

    geoApi(geoUrl);
    event.preventDefault();
    return;
  }
  return;
});
// runs init function
init();
