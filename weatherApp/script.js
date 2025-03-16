"use strict"
let dayTitle = document.getElementById("dayTitle")
let dateTitle = document.getElementById("dateTitle")
let tempTitle = document.getElementById("tempTitle")
let weatherMode = document.getElementById("weatherMode")
let imgWeather = document.getElementById("imgWeather")
let locaText =                     document.getElementById("textLoc");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");

let city = 'delhi';

const fToDeg=(temp)=>{
    return (temp-273.15);

}
const dateNTime=()=>{const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    dayTitle.textContent=daysInWeek[date.getDay()];
    dateTitle.textContent=`${date.getDate()} ${mS[date.getMonth()]} ${date.getFullYear()}`

}

const fetchData = async (city)=>{

    const api_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1acb59a1b8bc4c007b037c89155919d1`;
    try{
        dateNTime();
        let data = await fetch(api_URL);
        let response = await data.json();
        tempTitle.innerText=`${Math.trunc(fToDeg(response.main.temp).toFixed(2))} °C`;
        weatherMode.textContent=`${response.weather[0].main}`;
        locaText.textContent=`${response.name}, ${response.sys.country}`;
        wind.textContent=`${response.wind.speed}m/s`;
        humidity.textContent=`${response.main.humidity}%`;
        maxTemp.textContent=`${Math.trunc(fToDeg(response.main.temp_max).toFixed(2))} °C`;
        minTemp.textContent=`${Math.trunc(fToDeg(response.main.temp_min).toFixed(2))} °C`;
        imgWeather.src=`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

    }catch(e){
        
    }
}
document.body.addEventListener('load',fetchData(city));

let inpVal = document.getElementById("citySearch")
console.log(inpVal.value);
let formInp =  document.getElementById('inpForm')
formInp.addEventListener('submit',(e)=>{
    city = (inpVal.value);
    fetchData(city);
    e.preventDefault();
    inpVal.value='';
})