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
const area = document.querySelector(".area  ");
const weatherData = document.querySelector("[weatherData]");

async function getWeather() {
  await fetch().then();
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
