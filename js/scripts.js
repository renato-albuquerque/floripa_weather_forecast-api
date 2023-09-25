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

const apiKey = "a0b6dbf50b04399ef8f5079a298d1e04"
const cityName = "florianopolis"

const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&q=${cityName}&units=metric`;

async function weatherForecast() {
try {
	const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
	console.error(error);
}
}

weatherForecast()

