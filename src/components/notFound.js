import { fontWeight } from "@material-ui/system";
import React from "react";
import nothing from "../assets/nothing.png"
import '../components/notFound.css';

const NotFound = ({Text}) => {
  return (
    <div className="parent-div">
      <div className='child-div'>
        <img src={nothing} alt="Not-found" />
        <p style={{fontWeight:550}}>{Text}</p>
      </div>
    </div>
  );
};

export default NotFound;