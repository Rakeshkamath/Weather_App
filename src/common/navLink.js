import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navLink.css";
import {FaBars} from 'react-icons/fa';
import { useEffect } from "react";
import {useLocation} from 'react-router-dom'

const NavigationTabs = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const date = new Date();
  const currentDate = date.toUTCString().slice(0, -12);
  const currentTime = date.toLocaleTimeString([], { timeStyle: "short" });

  const location = useLocation();

  useEffect(() => {
    setIsNavbarOpen(false)
  }, [location])
  return (
    <div className="navigation-tab-main">

      <FaBars onClick={() => setIsNavbarOpen(!isNavbarOpen)} className="menu-icon"  color="#ffffff" />
      <div className={isNavbarOpen ? "navigation-tab active" : "navigation-tab"}>
        <NavLink
          exact
          className="navigation-item"
          activeClassName="active-page"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          exact
          className="navigation-item"
          activeClassName="active-page"
          to="/favourite"
        >
          FAVOURITE
        </NavLink>
        <NavLink
          exact
          className="navigation-item"
          activeClassName="active-page"
          to="/recent-search"
        >
          RECENT SEARCH
        </NavLink>
      </div>
      <div className="current-date-time">
        <p>
          {currentDate}
          <span className="time">{currentTime}</span>
        </p>
      </div>
    </div>
  );
};

export default NavigationTabs;