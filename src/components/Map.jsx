import React, { useContext, useEffect } from "react";
import "../styles/map.css";
import { citiesData } from "../../public/cities";
import { CityContext } from "../context/cityContext.jsx";
import {lands} from "../../public/land.js";
import "../styles/map.css";
import City from "./City";
import Land from "./Land";
const Map = () => {
  const scale = 1;
  const {getCities} = useContext(CityContext)
  
  return (
    <>
      <div className="  mapContainer  overflow-scroll h-screen inline-block top-[100px]">
        <div className="map  relative  w-[1500px] mx-[300px] my-[50px] inline-block h-[1500px] flex ">
          {getCities().map((city, index) => {
            return <City key={index} {...city} />;
          })}
        </div>
          <div className="landContainer  bg-[white] absolute top-0  w-[1500px] mx-[300px] my-[50px]  h-[1500px]">
            {lands.map((land, index) => {
              return <Land key={index} {...land} />;
            })}
          </div>
      </div>
    </>
  );
};

export default Map;
