const apikey="eb658e30b13029d7ebad7a8e652d4a1a"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    }
    else {


        var data = await response.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "sunnyclouds2.png";
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "sunny.png";
        }
        else if (data.weather[0].main == "Broken clouds") {
             weatherIcon.src = "cloudy.png";
            }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "clouds1.png";
        }

        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snowclouds.png";
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "";
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})



