// api key
const apiKey = '65d8e030432cbbc72ae4afd95f6be28d';
// html elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherIcon = document.getElementById("weatherIcon");
const loading = document.getElementById("loading");
const locationBtn = document.getElementById("locationBtn");

// function to fetch weather data
async function getWeather(city) {
    try {
        // APi url
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        // show loading
        loading.style.display = "block";

        // fetch data
        const response = await fetch(url);
        
        // hide loading
        loading.style.display = "none";
       
        // convert to json
        const data = await response.json();


        // if city is not found
        if (data.cod =='404') {
            alert('City not found. Please try again.');
            return;
        }
        
       updateWeatherUI(data);
        // add Dynamic Background
        // Dynamic Background Images based on weather conditions

        const backgrounds = {
    Clear: "clear.jpg",
    Clouds: "clouds.jpg",
    Rain: "rain.jpg",
    Snow: "snow.jpg",
    Haze: "haze.jpg"
};

const weatherMain = data.weather[0].main;

if(backgrounds[weatherMain]){
    document.body.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(images/${backgrounds[weatherMain]})`;
}
else{
    document.body.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(images/default.jpg)`;
}
        
    } catch (error) {
        console.log(error);
        cityName.innerText = "Error";
        temperature.innerText = "--";
        condition.innerText ="Unable to fetch weather";
    }
}

// button click event
searchBtn.addEventListener('click', () => {
    // get input value
    const city = cityInput.value;
    // if input is empty
    if (city === "") {
        alert('Please enter a city name.');
        return;
    }
    getWeather(city);
});

// location button event
locationBtn.addEventListener("click", ()=>{

    navigator.geolocation.getCurrentPosition(
        async(position)=>{

            const lat =
            position.coords.latitude;

            const lon =
            position.coords.longitude;

            const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            const response =
            await fetch(url);

            const data =
            await response.json();

           updateWeatherUI(data);
        }
    );
});
// enter key event
cityInput.addEventListener("keypress",(event)=>{

    if(event.key === "Enter"){

        searchBtn.click();
    }
});
function updateWeatherUI(data){

    // Weather Icon
    const iconCode = data.weather[0].icon;

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Text Data
    cityName.innerText = data.name;

    temperature.innerText =
    Math.round(data.main.temp) + "°C";

    condition.innerText =
    data.weather[0].main;

    humidity.innerText =
    data.main.humidity + "%";

    wind.innerText =
    data.wind.speed + " km/h";

    // Background Images
    const backgrounds = {
        Clear: "clear.jpg",
        Clouds: "clouds.jpg",
        Rain: "rain.jpg",
        Snow: "snow.jpg",
        Haze: "haze.jpg",
        Mist: "haze.jpg",
        Fog: "haze.jpg",
        Drizzle: "rain.jpg",
        Thunderstorm: "rain.jpg"
    };

    const weatherMain =
    data.weather[0].main;

    const bgImage =
    backgrounds[weatherMain] || "default.jpg";

    document.body.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.35),
    rgba(0,0,0,0.35)),
    url(images/${bgImage})`;
}