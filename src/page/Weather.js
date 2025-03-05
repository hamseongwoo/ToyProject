import "./Weather.css";

const API_KEY = "";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

const stateName = [
  "현재 온도",
  "체감 온도",
  "최저 기온",
  "최고 기온",
  "기압",
  "습도",
];

async function getWeather(){
    await fetch().then();
}

const clouds = document.querySelector('.clouds');
const wind = document.querySelector('.wind');
const description = document.querySelector('.description');
const area = document.querySelector('.area  ');
const weatherData = document.querySelector('[weatherData]');

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
