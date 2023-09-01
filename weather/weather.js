const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "1617bb66f376bfa9d2d272b91df04252";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://31.media.tumblr.com/32c944d4aad5d061e8c6b54db0f078c6/tumblr_mjvtwn8FBK1ql98f7o1_500.gif";
            break;
        case 'Clear':
            weather_img.src = "https://68.media.tumblr.com/4f35ecd44ba9b0921c2b571909a47ae7/tumblr_onnkh4jZoK1viiyyio1_500.gif";
            break;
        case 'Rain':
            weather_img.src = "https://media.tenor.com/MWsV17cvpwMAAAAC/rain-raining.gif";
            break;
        case 'Mist':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6FvFEuss7OGEun3BmLXFomCCtNT-KQKu3A&usqp=CAU";
            break;
        case 'Snow':
            weather_img.src = "https://media.tenor.com/3RDSUDifYtQAAAAM/snowing.gif";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
