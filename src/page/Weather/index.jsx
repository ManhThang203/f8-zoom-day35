import { useState } from "react";
import styles from "./Weather.module.scss";
function Weather() {
  const weatherData = {
    hanoi: {
      city: "Hà Nội",
      temp: 28,
      weather: "Nắng",
      humidity: 65,
      wind: 20,
      icon: "☀️",
    },
    hcm: {
      city: "TP.HCM",
      temp: 32,
      weather: "Có mây",
      humidity: 78,
      wind: 45,
      icon: "🌤️",
    },
    danang: {
      city: "Đà Nẵng",
      temp: 30,
      weather: "Mưa nhẹ",
      humidity: 82,
      wind: 67,
      icon: "🌧️",
    },
  };
  const [selectedKey, setSelected] = useState("hanoi");
  const [weather, setWeather] = useState(weatherData["hanoi"]);

  // hàm chọn icon theo nhiệt độ
  const getWeatherByTemp = (temp) => {
    if (temp >= 32) return { weather: "Nắng nóng", icon: "☀️" };
    else if (temp >= 25) return { weather: "Có mây", icon: "🌤️" };
    return { weather: "Mưa", icon: "🌧️" };
  };

  const handleChange = (e) => {
    const key = e.target.value;
    setSelected(key);
    setWeather(weatherData[key]);
  };

  // hàm sử lý random
  const handleRefresh = () => {
    // random từ -5 đến +5
    const randomOffdet = () => Math.floor(Math.random() * 11) - 5;
    const newTemp = Math.max(0, weather.temp + randomOffdet());
    const newHumidity = Math.min(
      100,
      Math.max(0, weather.humidity + randomOffdet())
    );
    const newWind = Math.min(100, Math.max(0, weather.wind + randomOffdet()));
    const { weather: newWeather, icon } = getWeatherByTemp(newTemp);

    setWeather({
      ...weather,
      temp: newTemp,
      humidity: newHumidity,
      weather: newWeather,
      wind: newWind,
      icon,
    });
  };

  return (
    <div className={styles.weather}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.selectIcon}>
            <select value={selectedKey} onChange={handleChange}>
              {Object.entries(weatherData).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.city}
                </option>
              ))}
            </select>
          </div>
          {weather && (
            <div className={styles.weatherInfo}>
              <div className={styles.content}>
                <span className={styles.icon}>{weather.icon}</span>
                <div className={styles.temperature}>
                  <span>{weather.temp}</span>
                  <span>°C</span>
                </div>

                <div className={styles.temperatureCondition}>
                  <div className={styles.status}>
                    <p>{weather.weather}</p>
                    <p>status</p>
                  </div>
                  <div className={styles.humidity}>
                    <p>{weather.humidity} %</p>
                    <p>humidity</p>
                  </div>
                  <div className={styles.wind}>
                    <p>{weather.wind} km/h</p>
                    <p>Wind</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.footer}>
            <button className={styles.btn} onClick={handleRefresh}>
              <i className="fa-solid fa-arrow-rotate-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
