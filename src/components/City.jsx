import React, { useState } from "react";
import "../styles/city.css";
import { generateColor } from "../utils/index";
import Building from "./Building";
import {CityInfoContext} from "./contextMenu/CityContext";

const City = ({ x, y, avatarContractAddress, ...props }) => {
  let scaleX = 1
 const width = `w-[${scaleX*100}px]`
 const height = `h-[${scaleX*100}px]`
  // console.log("x", x)
  const { buildings } = props;
  // console.log("props:", props)
  const cityColor = generateColor(avatarContractAddress);
  const [showInfoContext, setInfoContext] = useState(false)
  const [showAction, setShowAction] = useState(false)

  const getCityPosition = (event) => {
    event.preventDefault()
    const containerRect = event.currentTarget.getBoundingClientRect();
    const xRelativeToContainer = event.clientX - containerRect.left;
    const yRelativeToContainer = event.clientY - containerRect.top;
    console.log('X Position relative to container:', xRelativeToContainer);
    console.log('Y Position relative to container:', yRelativeToContainer);
  }
const handleHover = (event) => {
  event.preventDefault()
  event.stopPropagation()
  // setInfoContext(true)
  // const show = showInfoContext ===true?false:true
  showInfoContext !== true? setInfoContext(true): setInfoContext(true)
}
  return (
    <div
      className={`relative z-[2] ${width} ${height} ml-${x}  mt-${y}  bg-[${cityColor}] scale-[1] hover:bg-slate-600`}
      onMouseEnter={(event) => handleHover(event)}
      onMouseLeave={() =>  setInfoContext(false)}
      onClick={(event) => getCityPosition(event)}
    >
      {buildings.map((building, index) => {
        return <Building {...building} cityProps={props} key={index} showInfoContext={showInfoContext} setInfoContext={setInfoContext} />;
      })}

      <CityInfoContext showInfoContext={showInfoContext} showAction={showAction} setShowAction={setShowAction} setInfoContext={setInfoContext} city={props} />
    </div>
  );
};

export default City;
