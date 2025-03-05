import "./Weather.css";

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
