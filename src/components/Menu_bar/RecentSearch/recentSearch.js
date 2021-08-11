import React, { useContext, useState } from "react";
import NotFound from "../../../components/notFound";
import Warning from "../../../common/warning";
import WeatherList from "../../weatherList";
import { WeatherContext } from "../../../common/Weather_context";
import "./recentSearch.css";

const RecentSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { storedData, setStoredData } = useContext(WeatherContext);

  const closeFunctional = () => {
    setStoredData("");
  };

  return (
    <div>
      {storedData.length === 0 ? (
        <NotFound Text={"No Recent Search"} />
      ) : (
        <>
          <div className="detail-header">
            <p>You recently searched for</p>
            <button onClick={() => setIsOpen(true)}>Clear All</button>
          </div>
          <WeatherList data={[...storedData]} />
          <Warning
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            text="Are you sure want to clear recent Search?"
            clearFunction={closeFunctional}
          />
        </>
      )}
    </div>
  );
};

export default RecentSearch;