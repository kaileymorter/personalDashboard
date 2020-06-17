var userFormEl = document.querySelector("#userForm");
var nameInputEl = document.querySelector("#citySearch");
var searchedCityEl = document.querySelector("#city");
var todayTemp = document.querySelector('#currentTemp');
var todayWind = document.querySelector('#currentWind');
var todayHum = document.querySelector('#currentHum');
var todayUV = document.querySelector('#currentUV');

// fetch current day data from api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid=1a43c0eec6dcda3a7a81a3791424d2bd
var getCurrentDay = function (name) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=1a43c0eec6dcda3a7a81a3791424d2bd&units=imperial";
    fetch(apiURL)
        .then(function (response) {
            response.json().then(function (data) {
                displayCurrent(data);
            })

        });
}


// display searched city current conditions
var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = nameInputEl.value

    if (cityName) {
        getCurrentDay(cityName);

    } else {
        alert("Please enter a valid City")
    }
    // console.log(cityName)
}

var displayCurrent = function (data) {
    const m = moment();
    var currentCity = data.name;
    var currentTemp = data.main.temp;
    var currentHum = data.main.humidity;
    var currentWind = data.wind.speed;
    var currentIcon = data.weather[0].main
    var iconEl = $("#icon-info");
    var nowDate = m.format('L');
    // clear current content
    searchedCityEl.textContent = "";

    // display info
    searchedCityEl.textContent = currentCity + ' (' + nowDate + ')';
    todayTemp.textContent = "Temp: " + currentTemp + " \xB0 F";
    todayHum.textContent = "Humidity: " + currentHum + " %";
    todayWind.textContent = "Wind: " + currentWind + " MPH";
    
    
    if (currentIcon === "Clear") {
        iconEl.addClass("oi oi-sun")
    } else if (currentIcon === "Clouds") {
        iconEl.addClass("oi oi-cloud")
    } else if (currentIcon === "Rain") {
        iconEl.addClass("oi oi-rain")
    }
}

userFormEl.addEventListener("submit", formSubmitHandler);