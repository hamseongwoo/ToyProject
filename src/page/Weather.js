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
        </div>
      </div>
    </>
  );
}

export default Weather;
