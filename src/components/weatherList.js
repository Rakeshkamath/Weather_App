import React from "react";
import { FaHeart } from "react-icons/fa";
import "../components/weatherList.css";
import { selectImage } from "../common/helper";

const WeatherList = ({data}) => {
  console.log(data)
  return (
    <>
      {data &&
        data.map((item) => (
          <div className="weatherlist-main-web" key={item.cityId}>
            <div className="weatherlist-child">
              <p className="city-name">{item.cityname}</p>
              <div className="weather-center-details">
                <img
                  src={`/assets/${selectImage(item.icon)}.png`}
                  alt="weather-icon"
                />
                <p className="weather-temp">
                  <span style={{ fontSize: "2rem" }}>{item.temp}</span> ⁰C
                </p>
                <p className="weather-type">{item.description}</p>
              </div>
              <div className="fav-icon">
                <FaHeart color={item.fav ? "#FAD05B" : "transaparent"} />
              </div>
            </div>
          </div>
        ))}
{data &&
  data.map((item) => (
          <div className="weatherlist-main-mob" key={item.cityId}>
          <div className="weatherlist-child">
            <p className="city-name">{item.cityname}</p>
            </div>
            <div className="weather-center-details">
              <img
                src={`/assets/${selectImage(item.icon)}.png`}
                alt="weather-icon"
              />
              <p className="weather-temp">
                <span style={{ fontSize: "2rem" }}>{item.temp}</span> ⁰C
              </p>
              <p className="weather-type">{item.description}</p>
            </div>
            <div className="fav-icon">
              <FaHeart color={item.fav ? "#FAD05B" : "transaparent"} />
            </div>
          </div>
        ))}
    </>
  );
};

export default WeatherList;