


const url = 'https://openweather43.p.rapidapi.com/forecast?appid=da0f9c8d90bde7e619c3ec47766a42f4&q=fortaleza&units=standard';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b562d0e6aemsh3399129b8d94f0bp196ddejsna5c04166f93a',
		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
	}
};

async function weather() {
try {
	const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
	console.error(error);
}
}

weather()


