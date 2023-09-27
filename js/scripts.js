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
let average = document.querySelector(".average")
let button = document.querySelector(".button") 

let todayDate = new Date();
console.log(todayDate);
date.textContent = `${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getFullYear()}`;

const apiKey = "a0b6dbf50b04399ef8f5079a298d1e04"
const cityName = "florianopolis"

const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&q=${cityName}&units=metric`;


// events

button.addEventListener("click", weatherForecast)


// functions

async function weatherForecast() {

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        weather1.textContent = data.list[0].main.temp.toFixed(2);
        weather2.textContent = data.list[1].main.temp.toFixed(2);
        weather3.textContent = data.list[2].main.temp.toFixed(2);
        weather4.textContent = data.list[3].main.temp.toFixed(2);

        average.textContent = ((data.list[0].main.temp + data.list[1].main.temp + data.list[2].main.temp + data.list[3].main.temp)/4);

    } catch (error) {
	console.error(error);
    }
}


