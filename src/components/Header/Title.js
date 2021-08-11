import React, { useState, useContext, useEffect } from "react";
import logo from '../../assets/logo_web.png';
import "./Title.css";
import { newData } from "../../common/helper";
import axios from "axios";
import { WeatherContext } from "../../common/Weather_context";
import { AiOutlineSearch } from "react-icons/ai";
import {BASE_URL, API_KEY, UNIT} from "../../common/base";

   
 

function Title() {
  const [inputValue, setInputValue] = useState("");
  const {
    weatherData,
    setWeatherData,
    setFavIcon,
    storedData,
    setStoredData,
    favIcon,
  } = useContext(WeatherContext);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);


  useEffect(() => {
    if (weatherData) {
      console.log(weatherData);
      storedData && storedData.some((x) => x.cityId === weatherData.id)
        ? updateWeatherData(weatherData)
        : insertWeatherData(weatherData);
    }
  }, [weatherData, favIcon]);

  const updateWeatherData = (data) => {
    const index = storedData.findIndex((x) => x.cityId === data.id);
    storedData[index] = newData(data, favIcon);
    setStoredData(storedData);
  };

  const insertWeatherData = (data) => {
    setStoredData([...storedData, newData(data, favIcon)]);
  };
  const handleSearch = () => {
    inputApiSearch();
    setInputValue("");
  };
     
      const inputApiSearch = async () => {
        const response = await axios
          .get(BASE_URL + `q=${inputValue}&${UNIT}&APPID=` + API_KEY)
          .catch((err) => console.log(err));
        if (response) {
          setWeatherData(response.data);
          setFavIcon(false);
        }
      };
      
    return(
        <div className="title">
           
        <div className="logo">
            <img src={logo} alt='title_logo'> 
            </img>
        </div>
        {!isSearchBarVisible && (
           <AiOutlineSearch className="search-icon" fontSize="24px" onClick={() => setIsSearchBarVisible(true)} />
        )}
       
        <div className={isSearchBarVisible ? 'search_bar active' : 'search_bar'}>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  placeholder="Search city" className="search"/>
            <button className="button" onClick={()=>handleSearch()}><AiOutlineSearch className="icon" fontSize="24px"></AiOutlineSearch></button>
        </div>
        </div>
    )
}
export default Title;

