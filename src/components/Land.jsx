import React, { useState, useReducer, useContext, useId } from "react";
import LandContext from "./contextMenu/LandContext";
import { CityContext } from "../context/cityContext";
// import { useId } from 'react-use-id';
const Land = (...props) => {

  const {getCities, addCity} = useContext(CityContext)
  const [showContext, setShowContext] = useState(false);
  const [cityX, setCityX] = useState(0)
  const [cityY, setCityY] = useState(0)
  const city = {
    id: useId(),
    name: "City 1",
    x: cityX,
    y: cityY,
    width: 100,
    height: 100,
    energy: 100,
    efficiency: 100,
    building: 20,
    cEnergyTax: 10,
    cEfficiencyRequirement: "100",
    buildingToLandscape: [],
    buildingToNft: [],
    Owner: "",
    avatarContractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    structureFactoryAddress: "",
    citizenship: "",
    citizens: [],
    avatarBlockList: [],
    population: "500",

    buildings: [],
  }
  // const landColumn = Math.floor((Number(props[0].id) * 100) % 15)


  const handleContext = (event) => {
    event.preventDefault();
    const containerRect = event.currentTarget.getBoundingClientRect();
    const xRelativeToContainer = event.clientX - containerRect.left;
    const yRelativeToContainer = event.clientY - containerRect.top;
    const landX = (((Number(props[0].id)) % 15) === 0 ? 15:((Number(props[0].id)) % 15) ) - 1
    const landY =  Math.ceil(((Number(props[0].id)) / 15)) - 1
    setCityX(landX * 100)
    setCityY(landY * 100)
    setShowContext(true);
  };

  return (
    <div
      className={`w-[100px] h-[100px] relative z-[1] scale-[1] bg-white hover:bg-[yellow] `}
      onClick={() => setShowContext(true)}
      onContextMenu={(event) => handleContext(event)}
      onMouseEnter={(event) => handleContext(event)}
      onMouseLeave={() => setShowContext(false)}
    >
      <LandContext showContext={showContext} city={city} />
    </div>
  );
};

export default Land;
