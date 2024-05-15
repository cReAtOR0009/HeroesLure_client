import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {BuildingContext} from "./contextMenu/BuildingContext";
// import {BuildingStats} from "./contextMenu/BuildingStats";
import { citiesData } from "../../public/cities";

const Building = ({ cityProps, type, xlocation, ylocation, id, showInfoContext, setInfoContext,  }) => {
  // console.log("cityProps name:", cityProps.name);
  const buildingColor =
    type === "House"
      ? "red"
      : type === "Bakery"
      ? "yellow"
      : type === "Goldmine"
      ? "gold"
      : "black";
  let left = `left-[${xlocation}px]`;
  const top = `top-[${ylocation}px]`;
  const formatedColor = `bg-[${buildingColor}]`;

  const [showStats, setShowStats] = useState(false);
  const [showBuildingContext, setShowBuildingContext] = useState(false);
  const [buildingDetails, setBuildingDetails] = useState({
    city: cityProps.name,
    buildingName: type,
  });

  const buildingRef = useRef();
  const handleContextMenu = (event, cityName, buildingId) => {
    event.preventDefault();
    const displayFor = citiesData
      .filter((city) => city.name === cityName)
      [0].buildings.filter((building) => building.id === buildingId);
      setShowBuildingContext(true);
      setShowStats(false);

      // console.log("display for:", displayFor);
      // console.log("context leftclick");
  };

  const handleMouseLeave = (event) => {
    event.stopPropagation()
    setShowStats(false);
    setShowBuildingContext(false);
  };

  const handleMouseEnter = (event) => {
    console.log("hovered on building")
    // event.preventDefault()
    event.stopPropagation()
    setInfoContext(false)
    setShowStats(true);
    setShowBuildingContext(false);
    
  };

  return (
    <div
      ref={buildingRef}
      className={`absolute z-[3] ${formatedColor} ${left}  ${top} inline-block w-[10px] h-[10px] `}
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
      onClick={(event) => handleContextMenu(event, cityProps.name, id)}
    >
      {/* {<BuildingStats stats={buildingDetails} showStats={showStats} />} */}
      {
        <BuildingContext
          showContext={showBuildingContext}
          city={cityProps}
          type={type}
          id={id}
          xlocation={xlocation}
          ylocation={ylocation}
        />
      }
    </div>
  );
};

export default Building;
