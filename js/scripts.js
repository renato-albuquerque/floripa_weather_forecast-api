/* 
    sources to valid api key:
    https://openweathermap.org/appid#example
    https://home.openweathermap.org/api_keys
*/

/*
    How can I switch between temperature units in API calls?
    Temperature is available in Fahrenheit, Celsius and Kelvin units. Kelvin is used by default, with no need to use the units parameter in API calls.
    For temperature in Celsius, use "units=metric". 
    Source: https://openweathermap.org/faq#:~:text=Temperature%20is%20available%20in%20Fahrenheit,units%20parameter%20in%20API%20calls.
*/

// variables

let date = document.querySelector(".date span")
let weather1 = document.querySelector(".weather-1")
let weather2 = document.querySelector(".weather-2")
let weather3 = document.querySelector(".weather-3")
let weather4 = document.querySelector(".weather-4") 
let button = document.querySelector(".button") 

let todayDate = new Date();
console.log(todayDate);
date.textContent = `${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getFullYear()}`;

const apiKey = "a0b6dbf50b04399ef8f5079a298d1e04"
const cityName = "florianopolis"

const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&q=${cityName}&units=metric`;


// events

button.addEventListener("click", weatherForecastOne)


// functions

async function weatherForecastOne() {

try {
	const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
	console.error(error);
}

weather1.textContent = "weather 01";
weather1.textContent = data;
weather2.textContent = "weather 02";
}


