import React, { useContext, useState } from "react";
import Warning from "../../../common/warning";
import NotFound from "../../../components/notFound";
import WeatherList from "../../weatherList";
import { WeatherContext } from "../../../common/Weather_context";
import "./favourite.css";


const Favourite = () => {
  const { favData, setFavData } = useContext(WeatherContext);
  const [isOpen, setIsOpen] = useState(false);
  const favourites = favData && favData.filter((data) => data.fav === true);

  const closeFunctional = () => {
    setFavData("");
  };

  return (
    <>
      {favourites.length === 0 ? (
        <NotFound Text={"No Favourites added"} />
      ) : (
        <>
          <div className="detail-header">
            <p className="header">{favourites.length} City added as favourite</p>
            <button className="button" onClick={() => setIsOpen(true)}>Remove All</button>
          </div>
          <WeatherList data={[...favourites]} />
          <Warning
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            text="Are you sure want to remove all the favourites?"
            clearFunction={closeFunctional}
          />
        </>
      )}
    </>
  );
};

export default Favourite;