import "./Weather.css";
import { useState, useEffect } from "react";

const API_KEY = "dee6c11b0dc85f0c38be60e7ef8b696d";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("seoul");

  async function getWeather(city) {
    try {
      const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("오류 발생", error);
    }
  }

  return (
    <div className="screen">
      <div className="container">
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="도시를 입력하세요"
          />
          <button onClick={() => getWeather(city)}>검색</button>
        </div>

        {weather && (
          <>
            <div className="area">검색 지역: {weather.name}</div>
            <div className="description">전체적인 날씨: {weather.weather[0].description}</div>
            <div className="clouds">흐림 정도: {weather.clouds.all}%</div>
            <div className="wind">풍속: {weather.wind.speed}m/s</div>
            <div className="temp">현재 온도: {weather.main.temp}°C</div>
            <div className="feels_like">체감 온도: {weather.main.feels_like}°C</div>
            <div className="temp_min">최저 기온: {weather.main.temp_min}°C</div>
            <div className="temp_max">최고 기온: {weather.main.temp_max}°C</div>
            <div className="pressure">기압: {weather.main.pressure} hPa</div>
            <div className="humidity">습도: {weather.main.humidity}%</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
