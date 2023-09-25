/* 
    sources to valid api key:
    https://openweathermap.org/appid#example
    https://home.openweathermap.org/api_keys
*/

const apiKey = "a0b6dbf50b04399ef8f5079a298d1e04"
const cityName = "florianopolis"

const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&q=${cityName}&units=standard`;

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
