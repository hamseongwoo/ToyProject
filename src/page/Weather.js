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
        </div>
      </div>
  );
}

export default Weather;
