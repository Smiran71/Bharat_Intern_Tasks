const inputBox=document.querySelector('.inputbox');
const searchbtn=document.getElementById('searchbtn');
const weather_img=document.querySelector('.weather-img');
const temp=document.querySelector('.temp');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key="b0c676ce96371efc54766a396d3b8fd5";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data =await fetch(`${url}`).then(response => response.json());
     
    temp.innerHTML=`${Math.round(weather_data.main.temp -273.15) }°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/Hr`;

    switch(weather_data.weather[0].main){
        case 'clouds':
            weather_img.src="assests/clearcloud.png";
            break;
        case 'rain':
            weather_img.src="assests/rain.png";
            break
        case 'snow':
            weather_img.src="assests/snow.png";
            break;
    }

    console.log(weather_data);

}


searchbtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});