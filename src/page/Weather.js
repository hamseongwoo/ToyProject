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
          <div className="feels_like"></div>
          <div className="humidity"></div>
          <div className="pressure"></div>
          <div className="temp"></div>
          <div className="temp_max"></div>
          <div className="temp_min"></div>
        </div>
      </div>
    </>
  );
}

export default Weather;
