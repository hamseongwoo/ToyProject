import "./Weather.css";

const API_KEY = "dee6c11b0dc85f0c38be60e7ef8b696d";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const temp_min = document.getElementById("temp_min");
const temp_max = document.getElementById("temp_max");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");

const clouds = document.querySelector(".clouds");
const wind = document.querySelector(".wind");
const description = document.querySelector(".description");
const area = document.querySelector(".area");

async function getWeather() {
  try {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
    const response = await fetch(url);
    const data = await response.json();

    area.innerText = `검색 지역: ${data.name}`;
    description.innerText = `전체적인 날씨: ${data.weather[0].description}`;
    clouds.innerText = `흐림 정도: ${data.clouds.all}%`;
    wind.innerText = `풍속: ${data.wind.speed}m/s`;

    temp.innerText = `현재 온도: ${data.main.temp}°C`;
    feels_like.innerText = `체감 온도: ${data.main.feels_like}°C`;
    temp_min.innerText = `최저 기온: ${data.main.temp_min}°C`;
    temp_max.innerText = `최고 기온: ${data.main.temp_max}°C`;
    pressure.innerText = `기압: ${data.main.pressure} hPa`;
    humidity.innerText = `습도: ${data.main.humidity}%`;

    
  } catch (error) {
    console.error("오류 발생", error);
  }
}

function Weather() {
  return (
    <>
      <div className="screen">
        <div className="container">
          <div className="search">
            <input
              type="text"
              className="city"
              placeholder="도시를 입력하세요"
            />
            <button className="button">검색</button>
          </div>
          <div className="area"></div>
          <div className="description"></div>
          <div className="clouds"></div>
          <div className="wind"></div>
          <div weatherData className="feels_like"></div>
          <div weatherData className="humidity"></div>
          <div weatherData className="pressure"></div>
          <div weatherData className="temp"></div>
          <div weatherData className="temp_max"></div>
          <div weatherData className="temp_min"></div>
        </div>
      </div>
    </>
  );
}

export default Weather;
