const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31156faa15mshfcf269e5c269234p13d706jsnb19c0777c140',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city) =>{

   cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= '+ city , options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)

})

getweather("Mumbai")
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31156faa15mshfcf269e5c269234p13d706jsnb19c0777c140',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather1=(city) =>{

   cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=latur ' , options)
	.then(response => response.json())
	.then((response) => {
		
		console.log(response)
		temp.innerHTML = response.temp
		temp3.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		max_temp3.innerHTML = response.max_temp
		feels_like.innerHTML = response.feels_like
		feels_like3.innerHTML = response.feels_like
		cloud_pct3.innerHTML = response.cloud_pct
		min_temp.innerHTML = response.min_temp
		min_temp3.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunrise3.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		sunset3.innerHTML = response.sunset
		wind_degrees.innerHTML = response.wind_degrees
		wind_degrees3.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		wind_speed3.innerHTML = response.wind_speed
	})

}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)

})

getweather1("Mumbai")
const getweather4=(city) =>{

	cityName.innerHTML = city
	 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=America' , options)
	 .then(response => response.json())
	 .then((response) => {
		 
		 console.log(response)
		 temp.innerHTML = response.temp
		 temp4.innerHTML = response.temp
		 humidity.innerHTML = response.humidity
		 humidity4.innerHTML = response.humidity
		 max_temp.innerHTML = response.max_temp
		 max_temp4.innerHTML = response.max_temp
		 feels_like.innerHTML = response.feels_like
		 feels_like4.innerHTML = response.feels_like
		 cloud_pct4.innerHTML = response.cloud_pct
		 min_temp.innerHTML = response.min_temp
		 min_temp4.innerHTML = response.min_temp
		 sunrise.innerHTML = response.sunrise
		 sunrise4.innerHTML = response.sunrise
		 sunset.innerHTML = response.sunset
		 sunset4.innerHTML = response.sunset
		 wind_degrees.innerHTML = response.wind_degrees
		 wind_degrees4.innerHTML = response.wind_degrees
		 wind_speed.innerHTML = response.wind_speed
		 wind_speed4.innerHTML = response.wind_speed
	 })
	 .catch(err => console.error(err));
 
 }
 submit.addEventListener("click",(e)=>{
	 e.preventDefault()
	 getweather(city.value)
 
 })
 
 getweather4("Mumbai")

const getweather3=(city) =>{

	cityName.innerHTML = city
	 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi ' , options)
	 .then(response => response.json())
	 .then((response) => {
 
		 console.log(response)
		 temp.innerHTML = response.temp
		 temp5.innerHTML = response.temp
		 humidity.innerHTML = response.humidity
		 humidity5.innerHTML = response.humidity
		 max_temp.innerHTML = response.max_temp
		 max_temp5.innerHTML = response.max_temp
		 feels_like.innerHTML = response.feels_like
		 feels_like5.innerHTML = response.feels_like
		//  cloud_pct.innerHTML = response.cloud_pct
		 cloud_pct5.innerHTML = response.cloud_pct
		 min_temp.innerHTML = response.min_temp
		 min_temp5.innerHTML = response.min_temp
		 sunrise.innerHTML = response.sunrise
		 sunrise5.innerHTML = response.sunrise
		 sunset.innerHTML = response.sunset
		 sunset5.innerHTML = response.sunset
		 wind_degrees.innerHTML = response.wind_degrees
		 wind_degrees5.innerHTML = response.wind_degrees
		 wind_speed.innerHTML = response.wind_speed
		 wind_speed5.innerHTML = response.wind_speed
	 })
	 .catch(err => console.error(err));
 
 }
 submit.addEventListener("click",(e)=>{
	 e.preventDefault()
	 getweather(city.value)
 
 })
 
 getweather3("Mumbai")

 const getweather2=(city) =>{

	cityName.innerHTML = city
	 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata ' , options)
	 .then(response => response.json())
	 .then((response) => {
 
		 console.log(response)
		 humidity.innerHTML = response.humidity
		 humidity6.innerHTML = response.humidity
		 max_temp.innerHTML = response.max_temp
		 max_temp6.innerHTML = response.max_temp
		 feels_like.innerHTML = response.feels_like
		 feels_like6.innerHTML = response.feels_like
		//  cloud_pct.innerHTML = response.cloud_pct
		 cloud_pct6.innerHTML = response.cloud_pct
		 min_temp.innerHTML = response.min_temp
		 min_temp6.innerHTML = response.min_temp
		 sunrise.innerHTML = response.sunrise
		 sunrise6.innerHTML = response.sunrise
		 sunset.innerHTML = response.sunset
		 sunset6.innerHTML = response.sunset
		 temp.innerHTML = response.temp
		 temp6.innerHTML = response.temp
		 wind_degrees.innerHTML = response.wind_degrees
		 wind_degrees6.innerHTML = response.wind_degrees
		 wind_speed.innerHTML = response.wind_speed
		 wind_speed6.innerHTML = response.wind_speed
	 })
	 .catch(err => console.error(err));
 
 }
 submit.addEventListener("click",(e)=>{
	 e.preventDefault()
	 getweather(city.value)
 
 })
 
 getweather2("Mumbai")
