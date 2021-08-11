import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import WeatherData from "../Footer/weatherData";
import { newData, convertTempUnit, selectImage } from "../../../common/helper";
import { WeatherContext } from "../../../common/Weather_context";
import "./home.css";
import {BASE_URL, API_KEY, UNIT} from "../../../common/base";


const Home = () => {
  const [unit, setUnit] = useState("metric");
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const {
    weatherData,
    setWeatherData,
    favData,
    setFavData,
    setFavIcon,
    favIcon,
  } = useContext(WeatherContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        getLocation: false,
      })
    );
  }, []);

  useEffect(() => {
    InitialApiCall(location);
  }, [location.getLocation]);

  useEffect(() => {
    if (weatherData && favIcon) {
      favData && favData.some((x) => x.cityId === weatherData.id)
        ? updateWeatherData(weatherData)
        : insertWeatherData(weatherData);
    }
  }, [favIcon]);

  const updateWeatherData = (data) => {
    const index = favData.findIndex((x) => x.cityId === data.id);
    favData[index] = newData(data, favIcon);
    setFavData(favData);
  };

  const insertWeatherData = (data) => {
    setFavData([...favData, newData(data, favIcon)]);
  };

  const InitialApiCall = async (location) => {
    const response = await axios
      .get(
        BASE_URL +
          `lat=${location.latitude}&lon=${location.longitude}&${UNIT}&APPID=` +
          API_KEY
      )
      .catch((err) => console.log(err));
    if (response) {
      setWeatherData(response.data);
    } else setLocation({ ...location, getLocation: true });
  };

  const buttonStyles = {
    backgroundColor: "#ffff",
    color: " #E32843",
  };
  console.log(weatherData && weatherData);
  return (
    <div className="main-div">
      {weatherData && (
        <>
          <h1>{`${weatherData.name}, ${weatherData.sys.country}`}</h1>
          <label>
            <div className="add-to-fav">
              <input
                type="checkbox"
                value={favIcon}
                onClick={(e) => setFavIcon(e.target.checked)}
              />
              <div className={!favIcon ? "not-a-fav" : "added-to-fav"}>
                <FaHeart className="heart-icon" fontSize="1.6rem" />
                <p>{favIcon ? "Added to favourite" : "Add to favourite"}</p>
              </div>
            </div>
          </label>
          <div className="display-info">
            <img 
              src={`/assets/${selectImage(weatherData.weather[0].id)}.png`}
              alt="current-weather"
            />
            <div className="temperature">
              <p style={{ fontSize: "4rem", marginRight: "0.5rem" }}>
                {convertTempUnit(weatherData.main.temp, unit)}
              </p>
              <button
                style={unit === "metric" ? buttonStyles : null}
                onClick={() => setUnit("metric")}
              >
                °C
              </button>
              <button
                style={unit === "imperial" ? buttonStyles : null}
                onClick={() => setUnit("imperial")}
              >
                °F
              </button>
            </div>
            <p style={{ fontSize: "1.25rem" }}>
              {weatherData.weather[0].description}
            </p>
          </div>
          <WeatherData climateDetails={weatherData} unit={unit} />
        </>
      )}
    </div>
  );
};

export default Home;