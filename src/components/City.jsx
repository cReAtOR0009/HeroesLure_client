import React, { useContext, useState, useId } from "react";
import "../styles/city.css";
import { CityContext } from "../context/cityContext";
import { generateColor } from "../utils";
import CityInfo from "./contextMenu/CityInfo";
import CityOverlay from "./CityOverlay";

const City = (props) => {
  const { x, y, id, avatarContractAddress,} = props
  const scaleX = 1;
  const width = `w-[${scaleX * 100}px]`;
  const height = `h-[${scaleX * 100}px]`;
  const left = `left-[${x}px]`;
  const top = `top-[${y}px]`;

  const { addBuilding } = useContext(CityContext);
  const [showInfo, setShowInfo] = useState(false)
  const [showCity, setShowCity] = useState(false)
  const [isBuilding, setIsBuilding] = useState(false);

  const HandleClick = () => {
    setShowInfo(false)
    setShowCity(true)
    console.log("show overlay.........")
  }

  const handleHover = () => {
    setShowInfo(true)
  }

  const handleMouseLeave = () => {
    setShowInfo(false)
  }


  return (
    <>
      <div
        className={`absolute z-[2] acitveCity ${width} ${height} ${left} ${top}  bg-black hover:bg-slate-600`}
        style={{backgroundColor:`${generateColor(avatarContractAddress)}`}}
        onMouseMove={() => handleHover()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() =>HandleClick() }
      >
        {showInfo&& <CityInfo  props={props}  />}
      
      </div>
    {showCity&& <CityOverlay props={props} showCity={showCity} setShowCity={setShowCity}  />}
    </>
  );
};

export default City;
