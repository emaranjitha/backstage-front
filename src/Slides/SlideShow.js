import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import "./SlideShow.css";

const SlideShow = ({ img }) => {
  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          background: "white",

          "@media (max-width: 900px)": {
            width: "400px",
            height: "250px",
            background: "white",
            marginBottom: " 30px",
            boxShadow: "3px 3px 3px 3px grey",
          },
          "@media (min-width: 900px)": {
            width: "1180px",
            height: "600px",
            marginBottom: " 30px",
            boxShadow: "3px 3px 3px 3px grey",
          },
        }}
      >
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
         
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
       
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
  
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
 
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
        
        </div>
      </Coverflow>
    </StyleRoot>
  );
};

export default SlideShow;
